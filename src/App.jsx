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
  return <section className="hero wrap" id="inicio"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> Soporte técnico</div><h1>Tu PC, lista para<br /><span>rendir al máximo.</span></h1><p className="hero-lede">Armado, mantenimiento y diagnóstico para que vuelvas a usar tu computadora con tranquilidad.</p><div className="hero-actions"><button className="button button-primary" onClick={() => openChat()}>Contame qué necesitás <span>↗</span></button><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div><div className="trust-row"><div className="trust-icon">⌁</div><p><strong>Atención personalizada</strong><br />Te orientamos antes de avanzar.</p><span className="trust-divider" /><div className="trust-icon pin">⌖</div><p><strong>Servicio local</strong><br />Bahía Blanca, Buenos Aires.  <br /> Rio Gallegos, Santa Cruz.</p></div></div><div className="hero-art" aria-label="Escena animada de diagnóstico de una computadora"><div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" /><div className="floating-tag tag-top"><span className="tag-check">✓</span> Diagnóstico claro</div><div className="monitor"><div className="monitor-screen"><div className="screen-top"><i /><i /><i /><span>SEICO / SYSTEM CHECK</span><b>EN LÍNEA</b></div><div className="screen-content"><div className="screen-badge">ESTADO DEL EQUIPO <span>ANÁLISIS COMPLETO</span></div><div className="screen-title">Todo en<br /><span>orden.</span></div><div className="meter"><span /></div><div className="screen-caption">Rendimiento optimizado <b>●</b></div><div className="screen-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div><div className="screen-glow" /><div className="screen-scanline" /></div><div className="monitor-neck" /><div className="monitor-foot" /></div><div className="floating-tag tag-bottom"><span className="pulse" /> Acompañamiento de principio a fin</div><div className="floating-spec spec-left"><span>01</span><strong>Hardware</strong><small>Revisión integral</small></div><div className="floating-spec spec-right"><span>02</span><strong>Rendimiento</strong><small>Optimización</small></div><div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✳</div><span className="art-coordinates">SEICO · SERVICIO TÉCNICO</span></div></section>
}

function Services({ openChat }) {
  return <section className="services-section" id="servicios"><div className="wrap section-pad"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> Qué podemos hacer</div><h2>Soluciones para que<br />tu equipo <span>funcione bien.</span></h2></div><p>Revisamos cada caso con atención y te explicamos las opciones antes de realizar cualquier trabajo.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className={`service-icon ${service.style}`}>{service.icon}</div><div className="card-number">{service.number}</div><h3>{service.title}</h3><p>{service.description}</p><button className="card-link" onClick={() => openChat()}>Consultar servicio <span>↗</span></button></article>)}</div></div></section>
}

function Process() {
  const steps = [['01', 'Nos contás', 'Describís lo que necesitás en una conversación simple.'], ['02', 'Te orientamos', 'La IA te ayuda con una primera guía, sin inventar precios ni disponibilidad.'], ['03', 'Seguimos por Instagram', 'Copiás la consulta y nos escribís para coordinar los próximos pasos.']]
  return <section className="process-section" id="como-trabajamos"><div className="wrap section-pad"><div className="center-heading"><div className="eyebrow"><span className="eyebrow-line" /> Simple y transparente</div><h2>Así es el <span>proceso.</span></h2></div><div className="steps">{steps.map(([number, title, description]) => <article key={number}><div className="step-no">{number}</div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
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
      <div className="wrap contact-panel">
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
  return <><Header /><main><Hero openChat={openBotpress} /><Services openChat={openBotpress} /><Process /><Contact /></main><Footer /></>
}