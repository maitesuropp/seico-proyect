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
  return <section className="hero wrap" id="inicio">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" /> Servicio técnico · Bahía Blanca</div>
      <h1>Reparar, cuidar<br />y mejorar <span>tu PC.</span></h1>
      <p className="hero-lede">Armado, mantenimiento y diagnóstico para computadoras de escritorio. Contanos qué necesitás y te orientamos.</p>
      <div className="hero-actions"><button className="button button-primary" onClick={() => openChat()}>Consultar al asistente virtual <span>↗</span></button><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div>
      <div className="trust-row"><div className="trust-icon">✳</div><p><strong>Asistente virtual</strong><br />Una primera guía para entender tu consulta.</p><span className="trust-divider" /><div className="trust-icon pin">⌖</div><p><strong>Servicio local</strong><br />Bahía Blanca · Río Gallegos.</p></div>
    </div>
    <div className="hero-art computer-scene" role="img" aria-label="Computadora de escritorio SEICO con gráficos animados en la pantalla">
      <div className="scene-label"><span>SEICO</span><i /> COMPUTACIÓN</div>
      <div className="scene-halo" />
      <div className="scene-orbit orbit-a" /><div className="scene-orbit orbit-b" />
      <div className="desktop-set" aria-hidden="true">
        <div className="desktop-monitor">
          <div className="monitor-frame">
            <div className="monitor-screen">
              <div className="screen-ui">
                <div className="screen-toolbar"><span className="screen-mark">S</span><span>SEICO <i>/</i> VISUAL</span><b><i /></b></div>
                <div className="screen-content">
                  <div className="screen-caption">UNA MIRADA AL INTERIOR</div>
                  <div className="screen-headline">Tecnología<br /><span>en movimiento.</span></div>
                  <div className="screen-wave">
                    <svg viewBox="0 0 360 72" role="presentation" focusable="false"><path className="wave-back" d="M0 39 C24 39 26 26 46 26 S66 52 85 52 109 15 128 15 150 50 171 50 193 28 211 28 234 60 252 60 278 12 298 12 326 39 360 39" /><path className="wave-front" d="M0 39 C24 39 26 26 46 26 S66 52 85 52 109 15 128 15 150 50 171 50 193 28 211 28 234 60 252 60 278 12 298 12 326 39 360 39" /></svg>
                  </div>
                  <div className="screen-spectrum">{Array.from({ length: 24 }, (_, index) => <i key={index} className="screen-bar" style={{ "--bar-index": index }} />)}</div>
                </div>
                <div className="screen-bottom"><span>HARDWARE</span><span>SOFTWARE</span><span>SEICO ©</span></div>
              </div>
            </div>
            <div className="monitor-chin"><span /><i /></div>
          </div>
          <div className="monitor-neck" /><div className="monitor-foot" />
        </div>
        <div className="desktop-tower">
          <div className="tower-top"><i /><i /><i /></div>
          <div className="tower-front"><div className="tower-light" /><div className="tower-fan"><i /><i /><i /><i /><b /></div><div className="tower-vents"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="tower-port" /></div>
        </div>
      </div>
      <span className="scene-cross cross-one">+</span><span className="scene-cross cross-two">+</span>
      <div className="scene-footer"><span>SEICO · SERVICIO INTEGRAL</span></div>
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