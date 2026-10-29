import { useEffect, useRef, useState } from 'react'
import './App.css'

const instagramUrl = 'https://www.instagram.com/seico.computacion/'

const services = [
  { icon: '⌘', style: 'icon-green', number: '01 / ARMADO', title: 'Armado de PC', description: 'Configuraciones pensadas para el uso que necesitás. Consultá por componentes y presupuesto.', topic: 'Armado de PC' },
  { icon: '✳', style: 'icon-black', number: '02 / MANTENIMIENTO', title: 'Limpieza y cuidado', description: 'Limpieza de hardware y mantenimiento preventivo para cuidar el rendimiento del equipo.', topic: 'Limpieza o mantenimiento' },
  { icon: '⌕', style: 'icon-soft', number: '03 / DIAGNÓSTICO', title: 'Revisión técnica', description: 'Identificamos posibles causas de fallas y te orientamos sobre los próximos pasos.', topic: 'Diagnóstico de una falla' },
  { icon: '▤', style: 'icon-outline', number: '04 / SOFTWARE', title: 'Sistemas y software', description: 'Instalación de sistemas operativos y programas según las necesidades de tu PC.', topic: 'Sistema o software' },
]

function Brand({ footer = false }) {
  return <a className={`brand${footer ? ' footer-brand' : ''}`} href="#inicio" aria-label="SEICO, inicio"><span className="brand-mark">S</span><span>SEICO<small>Servicio Integral de Computadoras</small></span></a>
}

function Header({ openChat }) {
  return <><div className="announcement"><span className="status-dot" /> Atención para PC de escritorio · Bahía Blanca</div><header className="site-header wrap"><Brand /><nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#como-trabajamos">Cómo trabajamos</a><a href="#contacto">Contacto</a></nav><button className="header-cta" onClick={() => openChat('Consulta general')}>Hablar con el asesor <span>↗</span></button></header></>
}

function Hero({ openChat }) {
  return <section className="hero wrap" id="inicio"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> Soporte técnico cercano en Bahía Blanca</div><h1>Tu PC, lista para<br /><span>rendir al máximo.</span></h1><p className="hero-lede">Armado, mantenimiento y diagnóstico para que vuelvas a usar tu computadora con tranquilidad.</p><div className="hero-actions"><button className="button button-primary" onClick={() => openChat('Consulta general')}>Contame qué necesitás <span>↗</span></button><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div><div className="trust-row"><div className="trust-icon">⌁</div><p><strong>Atención personalizada</strong><br />Te orientamos antes de avanzar.</p><span className="trust-divider" /><div className="trust-icon pin">⌖</div><p><strong>Servicio local</strong><br />Bahía Blanca, Buenos Aires.</p></div></div><div className="hero-art" aria-label="Ilustración decorativa de una computadora"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="floating-tag tag-top"><span className="tag-check">✓</span> Diagnóstico claro</div><div className="monitor"><div className="monitor-screen"><div className="screen-top"><i /><i /><i /><span>SEICO / SYSTEM CHECK</span></div><div className="screen-content"><div className="screen-badge">ESTADO DEL EQUIPO</div><div className="screen-title">Todo en<br /><span>orden.</span></div><div className="meter"><span /></div><div className="screen-caption">Rendimiento optimizado <b>●</b></div></div><div className="screen-glow" /></div><div className="monitor-neck" /><div className="monitor-foot" /></div><div className="floating-tag tag-bottom"><span className="pulse" /> Acompañamiento de principio a fin</div><div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✳</div></div></section>
}

function Services({ openChat }) {
  return <section className="services-section" id="servicios"><div className="wrap section-pad"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Qué podemos hacer</div><h2>Soluciones para que<br />tu equipo <span>funcione bien.</span></h2></div><p>Revisamos cada caso con atención y te explicamos las opciones antes de realizar cualquier trabajo.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className={`service-icon ${service.style}`}>{service.icon}</div><div className="card-number">{service.number}</div><h3>{service.title}</h3><p>{service.description}</p><button className="card-link" onClick={() => openChat(service.topic)}>Consultar servicio <span>↗</span></button></article>)}</div></div></section>
}

function AdvisorChat({ topic, onClose }) {
  const welcome = topic === 'Armado de PC'
    ? '¡Hola! Soy el asesor virtual de SEICO. Te ayudo a pensar una PC compatible con lo que necesitás. ¿Para qué la vas a usar principalmente?'
    : `¡Hola! Soy el asesor virtual de SEICO. Puedo orientarte sobre ${topic.toLowerCase()} y ayudarte a preparar la consulta para el técnico. ¿Qué te gustaría saber?`
  const [messages, setMessages] = useState([{ role: 'assistant', content: welcome }])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const endRef = useRef(null)

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, busy])

  async function sendMessage(text = input) {
    const content = text.trim()
    if (!content || busy) return
    const nextMessages = [...messages, { role: 'user', content }]
    setMessages(nextMessages)
    setInput('')
    setBusy(true)
    setError('')
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, messages: nextMessages.map(({ role, content: message }) => ({ role, content: message })) }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'No pude responder ahora.')
      setMessages([...nextMessages, { role: 'assistant', content: data.text }])
    } catch {
      setError('No pude conectar con el asesor en este momento. Probá de nuevo o escribinos por Instagram.')
    } finally {
      setBusy(false)
    }
  }

  async function copySummary() {
    const transcript = messages.map((message) => `${message.role === 'user' ? 'Vos' : 'SEICO'}: ${message.content}`).join('\n\n')
    try { await navigator.clipboard.writeText(`Consulta: ${topic}\n\n${transcript}`) } catch { setError('No pude copiar el chat. Podés seleccionar y copiar el texto manualmente.') }
  }

  return <section className="chat-window" aria-label="Chat con el asesor SEICO" role="dialog" aria-modal="false"><div className="chat-header"><div className="bot-avatar"><span>✳</span></div><div className="chat-identity"><strong>Asesor SEICO</strong><small><span className="online-dot" /> Orientación con inteligencia artificial</small></div><button className="restart-button" type="button" onClick={onClose} aria-label="Cerrar chat" title="Cerrar chat">×</button></div><div className="chat-messages" aria-live="polite">{messages.map((message, index) => <div key={`${index}-${message.role}`} className={`message${message.role === 'user' ? ' user' : ''}`}>{message.content}</div>)}{busy && <div className="message typing-indicator">SEICO está escribiendo<span>…</span></div>}<div ref={endRef} /></div>{error && <p className="chat-error" role="alert">{error}</p>}<div className="chat-actions"><button type="button" className="copy-chat" onClick={copySummary}>Copiar consulta</button><a href={instagramUrl} target="_blank" rel="noreferrer">Seguir por Instagram ↗</a></div><form className="chat-composer" onSubmit={(event) => { event.preventDefault(); sendMessage() }}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribí tu consulta…" aria-label="Escribí tu consulta" maxLength={1200} disabled={busy} /><button type="submit" aria-label="Enviar mensaje" disabled={busy || !input.trim()}>↑</button></form><div className="chat-footnote">No compartas contraseñas ni datos privados. La orientación no reemplaza la revisión técnica.</div></section>
}

function Process() {
  const steps = [['01', 'Nos contás', 'Describís lo que necesitás en una conversación simple.'], ['02', 'Te orientamos', 'La IA te ayuda con una primera guía, sin inventar precios ni disponibilidad.'], ['03', 'Seguimos por Instagram', 'Copiás la consulta y nos escribís para coordinar los próximos pasos.']]
  return <section className="process-section" id="como-trabajamos"><div className="wrap section-pad"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> Simple y transparente</div><h2>Así es el <span>proceso.</span></h2></div><div className="steps">{steps.map(([number, title, description]) => <article key={number}><div className="step-no">{number}</div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
}

function Contact() {
  return <section className="contact-section" id="contacto"><div className="wrap contact-panel"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> ¿Lo vemos juntos?</div><h2>Estamos para<br /><span>ayudarte.</span></h2><p>Escribinos con tu consulta. Te respondemos para orientarte y coordinar.</p></div><div className="contact-actions"><a className="button button-white" href={instagramUrl} target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a className="email-link" href="mailto:net.seico@gmail.com">net.seico@gmail.com <span>↗</span></a><div className="location-label"><span>⌖</span> Bahía Blanca, Buenos Aires</div></div><div className="contact-decor">S</div></div></section>
}

function Footer() {
  return <footer className="site-footer wrap"><Brand footer /><p>Soluciones rápidas y confiables para tu PC.</p><span className="copyright">© 2026 SEICO</span></footer>
}

export default function App() {
  const [chatRequest, setChatRequest] = useState(null)
  function openChat(topic = 'Consulta general') { setChatRequest({ topic, requestId: (chatRequest?.requestId ?? 0) + 1 }) }
  return <><Header openChat={openChat} /><main><Hero openChat={openChat} /><Services openChat={openChat} /><Process /><Contact /></main><Footer /><div className="chat-widget-root">{chatRequest && <AdvisorChat key={chatRequest.requestId} topic={chatRequest.topic} onClose={() => setChatRequest(null)} />}<button className={`chat-launcher${chatRequest ? ' is-open' : ''}`} type="button" onClick={() => chatRequest ? setChatRequest(null) : openChat()} aria-label={chatRequest ? 'Cerrar asesor SEICO' : 'Abrir asesor SEICO'} aria-expanded={Boolean(chatRequest)}><span>{chatRequest ? '×' : '✳'}</span>{!chatRequest && <span className="launcher-label">¿Te ayudamos?</span>}</button></div></>
}
