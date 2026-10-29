import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import './App.css'


const services = [
  { icon: '⌘', style: 'icon-green', number: '01 / ARMADO', title: 'Armado de PC', description: 'Configuraciones pensadas para el uso que necesitás. Consultá por componentes y presupuesto.', detail: 'Te ayudamos a pensar una configuración según el uso que le vas a dar.', topic: 'Armado de PC' },
  { icon: '✳', style: 'icon-black', number: '02 / MANTENIMIENTO', title: 'Limpieza y cuidado', description: 'Limpieza de hardware y mantenimiento preventivo para cuidar el rendimiento del equipo.', detail: 'Un mantenimiento periódico puede ayudar a prevenir problemas y cuidar los componentes.', topic: 'Limpieza o mantenimiento' },
  { icon: '⌕', style: 'icon-soft', number: '03 / DIAGNÓSTICO', title: 'Revisión técnica', description: 'Identificamos posibles causas de fallas y te orientamos sobre los próximos pasos.', detail: 'Contanos qué observás; la revisión completa se realiza sobre el equipo.', topic: 'Diagnóstico de una falla' },
  { icon: '▤', style: 'icon-outline', number: '04 / SOFTWARE', title: 'Sistemas y software', description: 'Instalación de sistemas operativos y programas según las necesidades de tu PC.', detail: 'Consultanos qué sistema o programa necesitás instalar.', topic: 'Sistema o software' },
]

function Brand({ footer = false }) {
  return <a className={`brand-logo-link${footer ? ' footer-brand' : ''}`} href="#inicio" aria-label="SEICO, inicio"><span className="brand-logo-crop"><img src="/seico-logo.jpg" alt="SEICO | Servicio Integral de Computadoras" /></span></a>
}

function Header({ openChat }) {
  return <><div className="announcement"><span className="status-dot" /> Atención para computadoras </div><header className="site-header wrap"><a className="header-wordmark" href="#inicio" aria-label="SEICO, inicio"><span>SEICO</span><small>SERVICIO TÉCNICO</small></a><nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#como-trabajamos">Cómo trabajamos</a><a href="#contacto">Contacto</a><button className="nav-assistant" type="button" onClick={openChat}>Asistente virtual <span>↗</span></button></nav></header></>
}

function Hero({ openChat }) {
  const sceneRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ['start end', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 1], [18, -18])

  return <section className="hero wrap" id="inicio">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" /> Servicio técnico </div>
      <motion.h1 initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>Tu PC lista para<br /> <span>rendir al máximo.</span></motion.h1>
      <p className="hero-lede">Armado, mantenimiento y diagnóstico para computadoras de escritorio. Contanos qué necesitás y te orientamos.</p>
      <div className="hero-actions"><button className="button button-primary" onClick={() => openChat()}>Consultar al asistente virtual <span>↗</span></button><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div>
      <div className="trust-row"><div className="trust-icon">✳</div><p><strong>Asistente virtual</strong><br />Una primera guía para entender tu consulta.</p><span className="trust-divider" /><div className="trust-icon pin">⌖</div><p><strong>Servicio local</strong><br />Bahía Blanca · Río Gallegos.</p></div>
    </div>
    <motion.div ref={sceneRef} style={{ y: prefersReducedMotion ? 0 : sceneY }} className="hero-art computer-scene" role="img" aria-label="Ilustración animada de una computadora de escritorio SEICO">
      <div className="scene-label"><span>SEICO</span><i /> COMPUTACIÓN</div>
      <div className="scene-halo" /><span className="scene-particle particle-one" aria-hidden="true" /><span className="scene-particle particle-two" aria-hidden="true" /><span className="scene-particle particle-three" aria-hidden="true" />
      <div className="scene-orbit orbit-a" /><div className="scene-orbit orbit-b" />
      <div className="desktop-set" aria-hidden="true">
        <div className="desktop-monitor">
          <div className="monitor-frame">
            <div className="monitor-screen">
              <div className="screen-ui">
                <div className="screen-toolbar"><span className="screen-mark">S</span><span>SEICO <i>/</i> EQUIPO</span><b><i /></b></div>
                <div className="screen-content">
                  <div className="screen-caption">UNA MIRADA AL INTERIOR</div>
                  <div className="screen-headline">Tecnología<br /><span>en movimiento.</span></div>
                  <div className="screen-wave">
                    <svg viewBox="0 0 360 72" role="presentation" focusable="false"><path className="wave-back" d="M0 39 C24 39 26 26 46 26 S66 52 85 52 109 15 128 15 150 50 171 50 193 28 211 28 234 60 252 60 278 12 298 12 326 39 360 39" /><path className="wave-front" d="M0 39 C24 39 26 26 46 26 S66 52 85 52 109 15 128 15 150 50 171 50 193 28 211 28 234 60 252 60 278 12 298 12 326 39 360 39" /></svg>
                  </div>
                  <div className="screen-spectrum">{Array.from({ length: 24 }, (_, index) => <i key={index} className="screen-bar" style={{ "--bar-index": index }} />)}</div>
                </div>
                <div className="screen-bottom"><span>EQUIPO</span><span>PROGRAMAS</span><span>SEICO ©</span></div>
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
    </motion.div>
  </section>
}

function Services({ openChat }) {
  const prefersReducedMotion = useReducedMotion()
  return <section className="services-section" id="servicios"><div className="wrap section-pad"><motion.div className="section-heading" initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}><div><div className="eyebrow"><span className="eyebrow-line" /> Qué podemos hacer</div><h2>Soluciones para que<br />tu equipo <span>funcione bien.</span></h2></div><p>Revisamos cada caso con atención y te explicamos las opciones antes de realizar cualquier trabajo.</p></motion.div><div className="service-grid">{services.map((service, index) => <motion.article className="service-card" key={service.number} initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.09 }} whileHover={prefersReducedMotion ? undefined : { y: -7, scale: 1.015 }} whileTap={{ scale: 0.99 }}><motion.div className={`service-icon ${service.style}`} whileHover={prefersReducedMotion ? undefined : { rotate: -8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 320, damping: 16 }}>{service.icon}</motion.div><div className="card-number">{service.number}</div><h3>{service.title}</h3><p>{service.description}</p><p className="service-detail">{service.detail}</p><button className="card-link" onClick={() => openChat()} aria-label={`Consultar por ${service.title}`}>Consultar servicio <span>↗</span></button></motion.article>)}</div></div></section>
}

function Process() {
  const prefersReducedMotion = useReducedMotion()
  const steps = [['01', 'Nos contás qué necesitás', 'Describís el problema o el servicio que estás buscando.'], ['02', 'Analizamos tu consulta', 'El asistente virtual te brinda una primera orientación con inteligencia artificial.'], ['03', 'Coordinamos los próximos pasos', 'Si hace falta una revisión, seguimos la conversación por Instagram.']]
  return <section className="process-section" id="como-trabajamos"><div className="wrap section-pad"><motion.div className="center-heading" initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}><div className="eyebrow"><span className="eyebrow-line" /> Simple y transparente</div><h2>Así es el <span>proceso.</span></h2></motion.div><div className="steps"><motion.span className="steps-progress" aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.75 }} transition={{ duration: prefersReducedMotion ? 0 : 1.1, ease: 'easeOut' }} />{steps.map(([number, title, description], index) => <motion.article key={number} initial={prefersReducedMotion ? false : { opacity: 0, x: index % 2 ? 22 : -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : index * 0.12 }}><div className="step-no">{number}</div><div><h3>{title}</h3><p>{description}</p></div></motion.article>)}</div></div></section>
}


function Contact() {
  const prefersReducedMotion = useReducedMotion()
  const instagramUrl = "https://www.instagram.com/seico.computacion/"; // Tu URL de Instagram

  // 1. Definimos los textos limpios
  const asuntoEmail = "Consulta desde la web - SEICO";
  const mensajeEmail = "Hola SEICO,\n\nQuisiera consultarles sobre...\n\nMi consulta: ";

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
      <motion.div className="wrap contact-panel" initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
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
            Escribir por Instagram <span>↗</span>
          </a>
          
          {/* Enlace directo a Gmail Web optimizado */}
          <a 
            className="email-link" 
            href={gmailWebUrl.href}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por correo <span>↗</span>
          </a>
          
        </div>
        <motion.div className="contact-decor" aria-hidden="true" animate={prefersReducedMotion ? undefined : { rotate: [0, 4, -3, 0], scale: [1, 1.04, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>S</motion.div>
      </motion.div>
    </section>
  );
}



function Footer() {
  return <footer className="site-footer wrap"><Brand footer /><p>Soluciones rápidas y confiables para tu PC.</p><span className="copyright">© 2026 SEICO · SERVICIO INTEGRAL DE COMPUTADORA</span></footer>
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

  return <><Header openChat={openBotpress} /><main><Hero openChat={openBotpress} /><Services openChat={openBotpress} /><Process /><Contact /></main><Footer /></>
}


