import { useEffect } from 'react'
import './App.css'


const instagramUrl = 'https://www.instagram.com/seico.computacion/'


const services = [
  { icon: '⌘', style: 'icon-green', number: '01 / ARMADO', title: 'Armado de PC', description: 'Configuraciones pensadas para el uso que necesitás. Consultá por componentes y presupuesto.', topic: 'Armado de PC' },
  { icon: '✳', style: 'icon-black', number: '02 / MANTENIMIENTO', title: 'Limpieza y cuidado', description: 'Limpieza de hardware y mantenimiento preventivo para cuidar el rendimiento del equipo.', topic: 'Limpieza o mantenimiento' },
  { icon: '⌕', style: 'icon-soft', number: '03 / DIAGNÓSTICO', title: 'Revisión técnica', description: 'Identificamos posibles causas de fallas y te orientamos sobre los próximos pasos.', topic: 'Diagnóstico de una falla' },
  { icon: '▤', style: 'icon-outline', number: '04 / SOFTWARE', title: 'Sistemas y software', description: 'Instalación de sistemas operativos y programas según las necesidades de tu PC.', topic: 'Sistema o software' },
]

function Brand({ footer = false }) {
  return <a className={`brand-logo-link${footer ? ' footer-brand' : ''}`} href="#inicio" aria-label="SEICO, inicio"><span className="brand-logo-crop"><img src="/seico-logo.jpg" alt="SEICO | Servicio Integral de Computadoras" /></span></a>
}

function Header() {
  return <><div className="announcement"><span className="status-dot" /> Atención para computadoras </div><header className="site-header wrap"><Brand /><nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#como-trabajamos">Cómo trabajamos</a><a href="#contacto">Contacto</a></nav></header></>
}

function Hero({ openChat }) {
  const specialties = [
    ['01', 'Armado de PC', 'Configuraciones según el uso que necesitás'],
    ['02', 'Mantenimiento', 'Limpieza y cuidado del equipo'],
    ['03', 'Diagnóstico', 'Revisión de fallas y próximos pasos'],
    ['04', 'Sistemas y software', 'Instalaciones para tu computadora'],
  ]

  return <section className="hero wrap" id="inicio">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" /> Servicio técnico · Bahía Blanca</div>
      <h1>Reparar, cuidar<br />y mejorar <span>tu PC.</span></h1>
      <p className="hero-lede">Armado, mantenimiento y diagnóstico para computadoras de escritorio. Contanos qué necesitás y te orientamos.</p>
      <div className="hero-actions"><button className="button button-primary" onClick={() => openChat()}>Consultar al asistente virtual <span>↗</span></button><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div>
      <div className="trust-row"><div className="trust-icon">✳</div><p><strong>Asistente virtual</strong><br />Una primera guía para entender tu consulta.</p><span className="trust-divider" /><div className="trust-icon pin">⌖</div><p><strong>Servicio local</strong><br />Bahía Blanca · Río Gallegos.</p></div>
    </div>
    <div className="hero-art" aria-label="Servicios de SEICO">
      <div className="board-header"><span>SEICO <i>/</i> SERVICIO INTEGRAL</span><span>BAHÍA BLANCA · ARGENTINA</span></div>
      <div className="board-watermark" aria-hidden="true">PC</div>
      <div className="board-content">
        <p className="board-kicker">EN QUÉ PODEMOS AYUDARTE</p>
        <div className="board-services">{specialties.map(([number, title, detail]) => <div className="board-service" key={number}><span className="board-number">{number}</span><div><strong>{title}</strong><small>{detail}</small></div><span className="board-arrow">↗</span></div>)}</div>
      </div>
      <div className="board-footer"><span>HARDWARE</span><i /><span>MANTENIMIENTO</span><i /><span>SOFTWARE</span></div>
    </div>
  </section>
}

function Services({ openChat }) {
  return <section className="services-section" id="servicios"><div className="wrap section-pad"><div className="section-heading reveal" data-reveal><div><div className="eyebrow"><span className="eyebrow-line" /> Qué podemos hacer</div><h2>Soluciones para que<br />tu equipo <span>funcione bien.</span></h2></div><p>Revisamos cada caso con atención y te explicamos las opciones antes de realizar cualquier trabajo.</p></div><div className="service-grid">{services.map((service) => <article className="service-card reveal" data-reveal key={service.number}><div className={`service-icon ${service.style}`}>{service.icon}</div><div className="card-number">{service.number}</div><h3>{service.title}</h3><p>{service.description}</p><button className="card-link" onClick={() => openChat()}>Consultar servicio <span>↗</span></button></article>)}</div></div></section>
}

function Process() {
  const steps = [['01', 'Nos contás', 'Describís lo que necesitás en una conversación simple.'], ['02', 'Te orientamos', 'La IA te ayuda con una primera guía, sin inventar precios ni disponibilidad.'], ['03', 'Seguimos por Instagram', 'Copiás la consulta y nos escribís para coordinar los próximos pasos.']]
  return <section className="process-section" id="como-trabajamos"><div className="wrap section-pad"><div className="center-heading reveal" data-reveal><div className="eyebrow"><span className="eyebrow-line" /> Simple y transparente</div><h2>Así es el <span>proceso.</span></h2></div><div className="steps">{steps.map(([number, title, description]) => <article className="reveal" data-reveal key={number}><div className="step-no">{number}</div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
}



function Contact() {
  const instagramUrl = "https://www.instagram.com/seico.computacion/"; // Tu URL de Instagram

  // 1. Definimos los textos limpios
  const asuntoEmail = "Consulta desde la Web - Seico";
  const mensajeEmail = "Hola equipo de Seico,\n\nMe pongo en contacto con ustedes para realizarles una consulta sobre...\n\nSaludos!";

  // 2. Creamos los parámetros de la URL de forma segura para evitar el bloqueo del navegador
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: 'net.seico@gmail.com',
    su: asuntoEmail,
    body: mensajeEmail
  });

  // 3. Unimos la base de Gmail con los parámetros limpios
  const gmailWebUrl = new URL('https://mail.google.com/mail/');
  gmailWebUrl.search = params.toString();

  return (
    <section className="contact-section" id="contacto">
      <div className="wrap contact-panel reveal" data-reveal>
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> ¿Lo vemos juntos?
          </div>
          <h2>Estamos para<br /><span>ayudarte.</span></h2>
          <p>Escribinos con tu consulta. Te respondemos para orientarte y coordinar.</p>
        </div>
        
        <div className="contact-actions">
          {/* Enlace a Instagram */}
          <a 
            className="button button-white" 
            href={instagramUrl} 
            target="_blank" 
            rel="noreferrer"
          >
            Instagram <span>↗</span>
          </a>
          
          {/* Enlace directo a Gmail Web optimizado */}
          <a 
            className="email-link" 
            href={gmailWebUrl.href}
            target="_blank"
            rel="noreferrer"
          >
            net.seico@gmail.com <span>↗</span>
          </a>
          
        </div>
        <div className="contact-decor">S</div>
      </div>
    </section>
  );
}



function Footer() {
  return <footer className="site-footer wrap"><Brand footer /><p>Soluciones rápidas y confiables para tu PC.</p><span className="copyright">© 2026 SEICO</span></footer>
}

function openBotpress() {
  if (window.seicoBotpressReady && window.botpress?.open) {
    window.botpress.open()
    return
  }

  window.addEventListener('seico-botpress-ready', () => window.botpress?.open(), { once: true })
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <><Header /><main><Hero openChat={openBotpress} /><Services openChat={openBotpress} /><Process /><Contact /></main><Footer /></>
}