import { useState } from 'react'
import './App.css'

const instagramUrl = 'https://www.instagram.com/seico.computacion/'

const services = [
  { icon: '⌘', style: 'icon-green', number: '01 / ARMADO', title: 'Armado de PC', description: 'Configuraciones pensadas para el uso que necesitás. Consultá por componentes y presupuesto.', topic: 'Quiero armar una PC' },
  { icon: '✳', style: 'icon-black', number: '02 / MANTENIMIENTO', title: 'Limpieza y cuidado', description: 'Limpieza de hardware y mantenimiento preventivo para cuidar el rendimiento del equipo.', topic: 'Limpieza o mantenimiento' },
  { icon: '⌕', style: 'icon-soft', number: '03 / DIAGNÓSTICO', title: 'Revisión técnica', description: 'Identificamos posibles causas de fallas y te orientamos sobre los próximos pasos.', topic: 'Tengo una falla' },
  { icon: '▤', style: 'icon-outline', number: '04 / SOFTWARE', title: 'Sistemas y software', description: 'Instalación de sistemas operativos y programas según las necesidades de tu PC.', topic: 'Sistema o software' },
]

const chatFlow = [
  { key: 'service', question: '¡Hola! Soy el asesor virtual de SEICO. Te hago unas preguntas rápidas para orientarte. ¿En qué podemos ayudarte?', choices: ['Tengo una falla', 'Limpieza o mantenimiento', 'Quiero armar una PC', 'Sistema o software'] },
  { key: 'symptom', question: 'Entiendo. ¿Qué es lo que notás en la computadora?', choices: ['No enciende', 'Está lenta', 'Hace ruido o se calienta', 'Aparece un error', 'Quiero describir otra cosa'] },
  { key: 'start', question: '¿Cuándo empezó a pasar?', choices: ['Hoy', 'Hace unos días', 'Hace más tiempo', 'Después de un cambio o instalación'] },
  { key: 'powers', question: '¿La PC llega a iniciar y mostrar imagen?', choices: ['Sí, inicia', 'Enciende pero no da imagen', 'No enciende', 'No aplica / no estoy seguro'] },
  { key: 'details', question: '¿Querés agregar algún detalle? Elegí la opción que mejor te quede.', choices: ['Tengo un mensaje de error', 'Puedo describirlo al técnico', 'Prefiero coordinar una revisión'] },
]

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#inicio" aria-label="SEICO, inicio">
      <span className="brand-mark">S</span>
      <span>SEICO<small>Servicio Integral de Computadoras</small></span>
    </a>
  )
}

function Header() {
  return (
    <>
      <div className="announcement"><span className="status-dot" /> Atención para PC de escritorio · Bahía Blanca</div>
      <header className="site-header wrap">
        <Brand />
        <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#como-trabajamos">Cómo trabajamos</a><a href="#contacto">Contacto</a></nav>
        <a className="header-cta" href="#asesor">Consultar mi problema <span>↗</span></a>
      </header>
    </>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> Soporte técnico cercano en Bahía Blanca</div>
        <h1>Tu PC, lista para<br /><span>rendir al máximo.</span></h1>
        <p className="hero-lede">Armado, mantenimiento y diagnóstico para que vuelvas a usar tu computadora con tranquilidad.</p>
        <div className="hero-actions"><a className="button button-primary" href="#asesor">Contame qué le pasa <span>↗</span></a><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div>
        <div className="trust-row"><div className="trust-icon">⌁</div><p><strong>Atención personalizada</strong><br />Te orientamos antes de avanzar.</p><span className="trust-divider" /><div className="trust-icon pin">⌖</div><p><strong>Servicio local</strong><br />Bahía Blanca, Buenos Aires.</p></div>
      </div>
      <div className="hero-art" aria-label="Ilustración decorativa de una computadora">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="floating-tag tag-top"><span className="tag-check">✓</span> Diagnóstico claro</div>
        <div className="monitor"><div className="monitor-screen"><div className="screen-top"><i /><i /><i /><span>SEICO / SYSTEM CHECK</span></div><div className="screen-content"><div className="screen-badge">ESTADO DEL EQUIPO</div><div className="screen-title">Todo en<br /><span>orden.</span></div><div className="meter"><span /></div><div className="screen-caption">Rendimiento optimizado <b>●</b></div></div><div className="screen-glow" /></div><div className="monitor-neck" /><div className="monitor-foot" /></div>
        <div className="floating-tag tag-bottom"><span className="pulse" /> Acompañamiento de principio a fin</div>
        <div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✳</div>
      </div>
    </section>
  )
}

function Services({ onChooseService }) {
  return (
    <section className="services-section" id="servicios"><div className="wrap section-pad">
      <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Qué podemos hacer</div><h2>Soluciones para que<br />tu equipo <span>funcione bien.</span></h2></div><p>Revisamos cada caso con atención y te explicamos las opciones antes de realizar cualquier trabajo.</p></div>
      <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}>
        <div className={`service-icon ${service.style}`}>{service.icon}</div><div className="card-number">{service.number}</div><h3>{service.title}</h3><p>{service.description}</p>
        <a href="#asesor" className="card-link" onClick={() => onChooseService(service.topic)}>Consultar servicio <span>↗</span></a>
      </article>)}</div>
    </div></section>
  )
}

function AdvisorChat({ presetService }) {
  const [messages, setMessages] = useState(() => presetService
    ? [{ type: 'bot', text: chatFlow[0].question }, { type: 'user', text: presetService.topic }, { type: 'bot', text: chatFlow[1].question }]
    : [{ type: 'bot', text: chatFlow[0].question }])
  const [answers, setAnswers] = useState(() => presetService ? { service: presetService.topic } : {})
  const [step, setStep] = useState(() => presetService ? 1 : 0)
  const [copied, setCopied] = useState(false)

  function resetChat() {
    setMessages([{ type: 'bot', text: chatFlow[0].question }])
    setAnswers({})
    setStep(0)
    setCopied(false)
  }

  function choose(choice) {
    const current = chatFlow[step]
    if (!current) return
    const nextAnswers = { ...answers, [current.key]: choice }
    const nextMessages = [...messages, { type: 'user', text: choice }]
    const nextStep = step + 1
    setAnswers(nextAnswers)
    setStep(nextStep)

    if (nextStep < chatFlow.length) {
      setMessages([...nextMessages, { type: 'bot', text: chatFlow[nextStep].question }])
      return
    }
    setMessages([
      ...nextMessages,
      { type: 'note', text: 'Gracias, con esto ya tenemos un buen punto de partida. Por seguridad, no hagas cambios ni abras el equipo si no estás seguro. El diagnóstico final requiere revisar la PC.' },
      { type: 'bot', text: 'Preparé un resumen para que puedas escribirnos por Instagram. Copialo y pegalo en tu mensaje.' },
      { type: 'summary', text: `Hola SEICO, necesito consultar por mi PC de escritorio.\n\nMotivo: ${nextAnswers.service}\nQué noto: ${nextAnswers.symptom}\nDesde cuándo: ${nextAnswers.start}\nInicio / imagen: ${nextAnswers.powers}\nDetalle: ${nextAnswers.details}\n\nEstoy en Bahía Blanca.` },
    ])
  }

  async function copySummary(text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const choices = step < chatFlow.length ? chatFlow[step].choices : []

  return (
    <div className="chat-card">
      <div className="chat-header"><div className="bot-avatar"><span>✳</span></div><div><strong>Asesor SEICO</strong><small><span className="online-dot" /> Disponible para orientarte</small></div><button className="restart-button" onClick={resetChat} aria-label="Reiniciar chat" title="Reiniciar conversación">↻</button></div>
      <div className="chat-messages" aria-live="polite">
        {messages.map((message, index) => message.type === 'summary'
          ? <div key={index} className="summary-block"><div className="summary-card">{message.text}</div><div className="summary-actions"><button type="button" className="option-button" onClick={() => copySummary(message.text)}>{copied ? '¡Copiado!' : 'Copiar resumen'}</button><a className="option-button primary-small" href={instagramUrl} target="_blank" rel="noreferrer">Abrir Instagram ↗</a></div></div>
          : <div key={index} className={`message${message.type === 'user' ? ' user' : ''}${message.type === 'note' ? ' note' : ''}`}>{message.text}</div>)}
      </div>
      <div className="chat-options">{choices.map((choice) => <button key={choice} type="button" className="option-button" onClick={() => choose(choice)}>{choice}</button>)}</div>
      <div className="chat-footnote">Orientación inicial · El diagnóstico definitivo requiere revisar el equipo</div>
    </div>
  )
}

function Advisor({ presetService }) {
  return (
    <section className="advisor-section" id="asesor"><div className="wrap advisor-layout">
      <div className="advisor-intro"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Empecemos por acá</div><h2>¿Qué le pasa<br />a tu <span>computadora?</span></h2><p>Contanos un poco y te damos una primera orientación. Si hace falta, preparás un resumen para continuar por Instagram.</p><div className="privacy-note"><span>✳</span> No compartas contraseñas ni datos privados en el chat.</div></div>
      <AdvisorChat key={presetService?.requestId ?? 0} presetService={presetService} />
    </div></section>
  )
}

function Process() {
  const steps = [
    ['01', 'Nos contás', 'Describís qué notás en tu PC con unas preguntas simples.'],
    ['02', 'Te orientamos', 'Recibís sugerencias iniciales y vemos si hace falta una revisión.'],
    ['03', 'Seguimos por Instagram', 'Copiás el resumen y nos escribís para coordinar los próximos pasos.'],
  ]
  return (
    <section className="process-section" id="como-trabajamos"><div className="wrap section-pad"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> Simple y transparente</div><h2>Así es el <span>proceso.</span></h2></div><div className="steps">{steps.map(([number, title, description]) => <article key={number}><div className="step-no">{number}</div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contacto"><div className="wrap contact-panel"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> ¿Lo vemos juntos?</div><h2>Estamos para<br /><span>ayudarte.</span></h2><p>Escribinos con tu consulta. Te respondemos para orientarte y coordinar.</p></div><div className="contact-actions"><a className="button button-white" href={instagramUrl} target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a className="email-link" href="mailto:net.seico@gmail.com">net.seico@gmail.com <span>↗</span></a><div className="location-label"><span>⌖</span> Bahía Blanca, Buenos Aires</div></div><div className="contact-decor">S</div></div></section>
  )
}

function Footer() {
  return <footer className="site-footer wrap"><Brand footer /><p>Soluciones rápidas y confiables para tu PC.</p><span className="copyright">© 2026 SEICO</span></footer>
}

export default function App() {
  const [presetService, setPresetService] = useState(null)
  function selectService(topic) {
    setPresetService((previous) => ({ topic, requestId: (previous?.requestId ?? 0) + 1 }))
  }
  return <><Header /><main><Hero /><Services onChooseService={selectService} /><Advisor presetService={presetService} /><Process /><Contact /></main><Footer /></>
}
