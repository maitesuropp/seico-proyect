import { generateText } from 'ai'

const requestsByIp = new Map()
const windowMs = 10 * 60 * 1000
const requestLimit = 12
const maxMessages = 16
const maxMessageLength = 1200

const systemPrompt = `Sos el asesor virtual de SEICO, un servicio técnico de computadoras de escritorio en Bahía Blanca, Argentina. Respondé en español rioplatense claro y amable, breve y práctico.

El motivo seleccionado para esta charla es: {{topic}}.

Tu tarea es orientar, entender la necesidad y ayudar a preparar una consulta para la persona técnica de SEICO. Si el tema es ARMADO DE PC, preguntá de manera conversacional para qué la va a usar (juegos y títulos, trabajo/estudio, edición, etc.), presupuesto aproximado y moneda, si ya tiene componentes para reutilizar, y preferencias importantes como tamaño o monitor. Hacé una o dos preguntas por vez; no repitas datos que ya dio. Explicá compatibilidad a nivel general y separá lo confirmado de lo que falta verificar. No inventes modelos disponibles, precios actuales, stock, garantías ni plazos; pedí que SEICO confirme cotizaciones y compatibilidad exacta antes de comprar. Si ya hay información suficiente, proponé una orientación preliminar razonada y enumerá qué habría que confirmar.

Para fallas, mantenimiento o software, podés hacer preguntas de contexto y dar pasos iniciales seguros. No indiques abrir la fuente de alimentación, manipular componentes energizados, puentear conexiones, ni borrar datos/reinstalar sistemas sin respaldo. Ante humo, olor a quemado, líquido o chispas, indicá apagar y desconectar el equipo si es seguro y contactar a SEICO.

No solicites contraseñas, datos de pago ni información personal sensible. No afirmes que realizaste una revisión física ni que sos una persona. La orientación no sustituye un diagnóstico técnico. Si no sabés algo, decilo con claridad y ofrecé continuar por Instagram @seico.computacion.`

function rateLimit(ip) {
  const now = Date.now()
  const recent = (requestsByIp.get(ip) ?? []).filter((time) => now - time < windowMs)
  if (recent.length >= requestLimit) return false
  recent.push(now)
  requestsByIp.set(ip, recent)
  if (requestsByIp.size > 1000) {
    for (const [key, times] of requestsByIp) {
      if (!times.some((time) => now - time < windowMs)) requestsByIp.delete(key)
    }
  }
  return true
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  response.setHeader('X-Content-Type-Options', 'nosniff')

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Método no permitido.' })
  }

  const ip = request.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown'
  if (!rateLimit(ip)) return response.status(429).json({ error: 'Llegaron muchas consultas seguidas. Esperá unos minutos y volvé a intentar.' })

  const { topic, messages } = request.body ?? {}
  if (typeof topic !== 'string' || topic.length > 80 || !Array.isArray(messages) || messages.length < 1 || messages.length > maxMessages) {
    return response.status(400).json({ error: 'La consulta no tiene un formato válido.' })
  }

  const validMessages = messages.every((message) =>
    message && ['user', 'assistant'].includes(message.role) && typeof message.content === 'string' && message.content.trim().length > 0 && message.content.length <= maxMessageLength,
  )
  if (!validMessages || messages.at(-1).role !== 'user') return response.status(400).json({ error: 'Revisá el último mensaje e intentá de nuevo.' })

  try {
    const result = await generateText({
      model: 'anthropic/claude-sonnet-5',
      system: systemPrompt.replace('{{topic}}', topic),
      messages: messages.map(({ role, content }) => ({ role, content })),
      maxOutputTokens: 500,
      abortSignal: AbortSignal.timeout(25_000),
    })
    return response.status(200).json({ text: result.text })
  } catch (error) {
    console.error('SEICO AI request failed:', error instanceof Error ? error.message : 'unknown error')
    return response.status(503).json({ error: 'El asesor no está disponible por el momento.' })
  }
}
