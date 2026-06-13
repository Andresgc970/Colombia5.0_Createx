// ── TRANSLATIONS ───────────────────────────────────────────────────────────
const i18n = {
  es: {
    "nav.event": "El evento", "nav.conf": "Conferencias", "nav.concepts": "Conceptos",
    "nav.media": "Multimedia", "nav.createx": "Createx",
    "media.eyebrow": "Multimedia", "media.title": "Galería completa del evento",
    "media.sub": "Todo el contenido visual de las conferencias de Colombia 5.0 reunido en un solo lugar.",
    "media.gocreatex": "Ver galería Createx →",
    "hero.dateline": "8 y 9 de mayo · Corferias · Bogotá D.C.",
    "hero.tagline": 'El encuentro de ecosistemas digitales más importante de <strong>Colombia y Latinoamérica</strong>, organizado por el MinTIC. Inteligencia artificial, soberanía digital, innovación y talento tecnológico en un mismo escenario.',
    "hero.date_label": "Fecha", "hero.date_val": "8 – 9 mayo, 2026",
    "hero.venue_label": "Sede", "hero.org_label": "Organiza", "hero.report_label": "Informe",
    "hero.btn_conf": "Ver conferencias →", "hero.btn_about": "Sobre el evento",
    "stats.attendees": "Asistentes presenciales", "stats.virtual": "Conexiones virtuales",
    "stats.sessions": "Sesiones día 1", "stats.speaker": "Ponente clave: Luis Caro",
    "about.eyebrow": "¿Qué es Colombia 5.0?",
    "about.title": "El laboratorio digital más grande del país",
    "about.p1": 'Colombia 5.0 es la <strong>evolución de Colombia 4.0</strong>, una iniciativa del MinTIC que lleva más de una década acercando la tecnología a ciudadanos, empresas y emprendedores. El nombre hace referencia a la <strong>"Sociedad 5.0"</strong>: la visión donde la tecnología resuelve retos sociales reales.',
    "about.p2": 'La edición Bogotá 2026 transformó Corferias en un espacio de conferencias, talleres, ruedas de empleo y demos inmersivas, con la participación de expertos de <strong>AWS, Google Cloud, Samsung, Ericsson y LinkedIn</strong>, además de líderes del ecosistema IA en Latinoamérica.',
    "about.p3": 'Para los aprendices del SENA en <strong>ADSO</strong>, este evento es una ventana directa a las tendencias que van a definir el mercado laboral: agentes de IA, automatización de procesos, soberanía de datos y nuevas arquitecturas de software.',
    "conf.eyebrow": "Día 1 · 8 de mayo de 2026", "conf.title": "Conferencias destacadas",
    "conf.sub": "Dos conferencias seleccionadas por su relevancia para programadores en formación ADSO.",
    "conf.tab1": "Agentic AI", "conf.tab2": "IA con Criterio",
    "c1.badge": "Inteligencia Artificial", "c1.location": "Auditorio 1 · Pabellón 3",
    "c1.p1": 'Esta fue una de las conferencias más esperadas del día 1. El Dr. Luis Caro, líder de IA en AWS para Latinoamérica, explicó el gran cambio que representa pasar de una IA que <strong>solo responde preguntas</strong> a una IA que puede <strong>planear y ejecutar tareas de forma autónoma</strong>.',
    "c1.p2": 'El mensaje central fue claro: los <span class="hl">Agentes de IA</span> son el siguiente nivel del desarrollo de software. Ya no se trata de chatbots con respuestas estáticas — son sistemas que reciben un objetivo, diseñan los pasos para lograrlo y los ejecutan solos, usando APIs, bases de datos y otros agentes.',
    "c1.p3": 'Para nosotros como aprendices de ADSO, esto cambia cómo vamos a diseñar sistemas en el futuro. Un ejemplo concreto del ponente: pedirle al sistema <em>"genera el reporte de ventas del mes"</em> y que el agente consulte la BD, detecte anomalías, genere la gráfica y entregue el archivo — sin intervención humana en cada paso.',
    "gallery.title": "Galería de la conferencia",
    "lc.cap2": "Slide de apertura", "lc.cap3": "Diagrama conceptual", "lc.cap5": "Demo en vivo · Código",
    "ph.add": "Foto 6 · por añadir", "ph.add7": "Foto 7 · por añadir", "ph.add8": "Foto 8 · por añadir",
    "ph.add9": "Foto 9 · por añadir", "ph.add10": "Foto 10 · por añadir", "ph.add6": "Foto 6 · por añadir",
    "learned.eyebrow": "Lo que aprendimos",
    "c1.pillars_title": "Los 4 pilares de un Agente de IA",
    "c1.pillars_sub": "Según la conferencia, todo agente bien construido tiene estos componentes. Como desarrolladores ADSO, estos son los módulos que tendríamos que programar.",
    "p1.t": "Perfil / System Prompt", "p1.d": "Es como las reglas de negocio del agente: le defines quién es, qué puede hacer y qué no. En ADSO equivale a definir los requerimientos funcionales y restricciones del sistema.", "p1.tag": "Análisis de requisitos",
    "p2.t": "Módulo de Memoria", "p2.d": "Corto plazo: variables de sesión. Largo plazo: bases de datos vectoriales con embeddings. Crucial para sistemas que necesitan recordar historial de usuarios o documentos.", "p2.tag": "Bases de datos",
    "p3.t": "Caja de Herramientas", "p3.d": "Son las APIs, conectores a BD e intérpretes de código que el agente invoca solo. Como programador, tu trabajo es construir y exponer estas herramientas de forma segura.",
    "p4.t": "Capacidad de Planificación", "p4.d": "Patrones como Chain-of-Thought o ReAct que permiten al agente descomponer un problema en micro-tareas. Ingeniería de software aplicada al razonamiento de la IA.", "p4.tag": "Patrones de diseño",
    "fw.eyebrow": "Frameworks mencionados por el ponente", "fw.title": "Herramientas que ya puedes aprender",
    "fw1.u": "Agentes basados en grafos", "fw1.d": "Ideal para flujos de trabajo donde el agente toma decisiones en árbol. Muy usado en proyectos Python con LLMs.",
    "fw2.u": "Arquitecturas multi-agente", "fw2.d": "Permite crear equipos de agentes especializados: uno valida datos, otro genera código, otro hace QA. Como dividir roles en un equipo de desarrollo.",
    "fw3.u": "Agentes colaborativos", "fw3.d": "Desarrollado por Microsoft. Facilita que múltiples agentes se comuniquen con protocolos definidos, ideal para automatizar procesos de negocio complejos.",
    "c2.badge": "Ecosistemas Digitales", "c2.conf_title": "Ecosistemas Digitales Integrados para el Territorio",
    "c2.speaker_role": "Experto en Transformación Digital", "c2.location": "Auditorio · Pabellón 3",
    "c2.p1": 'Rodrigo Reyes planteó un cambio de mentalidad fundamental para nosotros como futuros desarrolladores: el software no puede vivir aislado del contexto donde opera. El concepto central fue pasar de <strong>"islas de código"</strong> a <span class="hlg">Ecosistemas Digitales Integrados</span>.',
    "c2.p2": 'Para ADSO, esto redefine el análisis de requisitos: el software no solo debe ser <strong>funcionalmente correcto</strong>, sino también <strong>arquitectónicamente viable</strong> según el contexto real de despliegue — la conectividad disponible, la infraestructura cloud y el nivel de alfabetización digital de los usuarios.',
    "c2.p3": 'La conferencia cerró con un mensaje clave: el desarrollador moderno ya no es un programador aislado que recibe un documento de diseño. La Sociedad 5.0 exige analistas con <strong>visión de negocio y territorio</strong>, capaces de idear sistemas integrales que generen impacto real en la productividad del usuario.',
    "ig.cap2": "Diapositiva del tema", "ig.cap3": "Presentación en escenario", "ig.cap4": "Diapositiva clave", "ig.cap5": "Ponente · auditorio",
    "c2.pillars_title": "Los 3 pilares del Ecosistema Digital",
    "c2.pillars_sub": "Reyes desglosa la construcción de soluciones robustas en tres dimensiones que deben funcionar de forma sincronizada.",
    "eco.title": "Ecosistema Digital Integrado",
    "eco.col1t": "Infraestructura", "eco.col1d": "Red / Cloud — Sin canal de datos óptimo, los sistemas distribuidos pierden escalabilidad y disponibilidad.",
    "eco.col2t": "Arquitectura", "eco.col2d": "Software / APIs — Patrones modulares e interoperabilidad con APIs REST estándar para conectar sistemas locales preexistentes.",
    "eco.col3t": "Apropiación", "eco.col3d": "UX / UI — Un sistema que el usuario no comprende o rechaza es un fracaso técnico en el ciclo de vida del software.",
    "r1.t": "Diseño Offline-First", "r1.d": "Desarrollar apps optimizadas en consumo de recursos, capaces de trabajar con baja conectividad usando Service Workers para almacenar datos localmente y sincronizar cuando haya red.",
    "r2.t": "Interoperabilidad", "r2.d": "El backend debe estar listo para consumir y exponer servicios que conecten diferentes entidades, con esquemas de datos bien definidos que protejan la integridad de la información.",
    "r3.t": "Apropiación Social del Software", "r3.d": "La UX/UI debe enfocarse en reducir las brechas de alfabetización digital del usuario objetivo. Un sistema técnicamente brillante que nadie usa es un proyecto fallido.",
    "r4.t": "Visión de Territorio", "r4.d": "El analista moderno debe entender el contexto de despliegue real: conectividad, infraestructura disponible y sistemas preexistentes, antes de diseñar la arquitectura de software.", "r4.tag": "Análisis de contexto",
    "footer.credits": "Informe elaborado por Andres Felipe Guavita Cárdenas · Aprendiz ADSO · SENA Colombia",
    "footer.sub": "Conferencias del 8 de mayo · Corferias, Bogotá D.C."
  },
  en: {
    "nav.event": "The Event", "nav.conf": "Conferences", "nav.concepts": "Key Concepts",
    "nav.media": "Media", "nav.createx": "Createx",
    "media.eyebrow": "Media", "media.title": "Full event gallery",
    "media.sub": "All the visual content from the Colombia 5.0 conferences gathered in one place.",
    "media.gocreatex": "View Createx gallery →",
    "hero.dateline": "May 8 & 9 · Corferias · Bogotá D.C.",
    "hero.tagline": 'The most important digital ecosystem summit in <strong>Colombia and Latin America</strong>, organized by MinTIC. Artificial intelligence, digital sovereignty, innovation and tech talent on one stage.',
    "hero.date_label": "Date", "hero.date_val": "May 8 – 9, 2026",
    "hero.venue_label": "Venue", "hero.org_label": "Organized by", "hero.report_label": "Report",
    "hero.btn_conf": "See conferences →", "hero.btn_about": "About the event",
    "stats.attendees": "In-person attendees", "stats.virtual": "Virtual connections",
    "stats.sessions": "Sessions on day 1", "stats.speaker": "Key speaker: Luis Caro",
    "about.eyebrow": "What is Colombia 5.0?",
    "about.title": "The country's largest digital innovation lab",
    "about.p1": 'Colombia 5.0 is the <strong>evolution of Colombia 4.0</strong>, a MinTIC initiative that has been bringing technology closer to citizens, businesses and entrepreneurs for over a decade. The name references <strong>"Society 5.0"</strong>: the vision where technology solves real social challenges.',
    "about.p2": 'The Bogotá 2026 edition transformed Corferias into a hub of conferences, workshops, job fairs and immersive demos, with experts from <strong>AWS, Google Cloud, Samsung, Ericsson and LinkedIn</strong>, along with leaders from the IA ecosystem across Latin America.',
    "about.p3": 'For SENA students in the <strong>ADSO</strong> program, this event is a direct window into the trends that will shape the job market: AI agents, process automation, data sovereignty and new software architectures.',
    "conf.eyebrow": "Day 1 · May 8, 2026", "conf.title": "Featured Conferences",
    "conf.sub": "Two conferences selected for their direct relevance to software developers in training.",
    "conf.tab1": "Agentic AI", "conf.tab2": "AI with Criteria",
    "c1.badge": "Artificial Intelligence", "c1.location": "Auditorium 1 · Hall 3",
    "c1.p1": 'This was one of the most anticipated talks of day 1. Dr. Luis Caro, AWS\'s AI leader for Latin America, explained the fundamental shift from AI that <strong>only answers questions</strong> to AI that can <strong>plan and autonomously execute tasks</strong>.',
    "c1.p2": 'The core message was clear: <span class="hl">AI Agents</span> are the next level of software development. These are not static chatbots — they receive an objective, design the steps to achieve it, and execute them independently, using APIs, databases and other agents.',
    "c1.p3": 'For ADSO students, this changes how we\'ll design systems in the future. A concrete example from the speaker: ask the system to <em>"generate the monthly sales report"</em> and the agent queries the DB, detects anomalies, generates the chart and delivers the file — no human intervention at each step.',
    "gallery.title": "Conference Gallery",
    "lc.cap2": "Opening slide", "lc.cap3": "Agent diagram", "lc.cap5": "Live demo · Code",
    "ph.add": "Photo 6 · to be added", "ph.add7": "Photo 7 · to be added", "ph.add8": "Photo 8 · to be added",
    "ph.add9": "Photo 9 · to be added", "ph.add10": "Photo 10 · to be added", "ph.add6": "Photo 6 · to be added",
    "learned.eyebrow": "What we learned",
    "c1.pillars_title": "The 4 Pillars of an AI Agent",
    "c1.pillars_sub": "According to the conference, every well-built agent has these four components — the modules we as ADSO developers would need to code.",
    "p1.t": "Profile / System Prompt", "p1.d": "Think of this as the agent's business rules: you define who it is, what it can and can't do. In ADSO terms, this is like defining the functional requirements and constraints of a system.", "p1.tag": "Requirements analysis",
    "p2.t": "Memory Module", "p2.d": "Short-term: session variables. Long-term: vector databases with embeddings. Critical for systems that need to remember user history or institutional documents.", "p2.tag": "Databases",
    "p3.t": "Toolbox", "p3.d": "APIs, database connectors and code interpreters that the agent invokes on its own. As a programmer, your job is to build and expose these tools securely.",
    "p4.t": "Planning Capability", "p4.d": "Design patterns like Chain-of-Thought or ReAct that let the agent break a general problem into a structured plan of sequential micro-tasks.", "p4.tag": "Design patterns",
    "fw.eyebrow": "Frameworks mentioned by the speaker", "fw.title": "Tools you can start learning today",
    "fw1.u": "Graph-based agents", "fw1.d": "Ideal for workflows where the agent makes tree-structured decisions. Widely used in Python projects with LLMs.",
    "fw2.u": "Multi-agent architectures", "fw2.d": "Lets you create teams of specialized agents: one validates input, another generates code, another runs QA tests — just like dividing roles in a dev team.",
    "fw3.u": "Collaborative agents", "fw3.d": "Built by Microsoft. Enables multiple agents to communicate via defined protocols, ideal for automating complex business processes.",
    "c2.badge": "Digital Ecosystems", "c2.conf_title": "Integrated Digital Ecosystems for the Territory",
    "c2.speaker_role": "Digital Transformation Expert", "c2.location": "Auditorium · Hall 3",
    "c2.p1": 'Rodrigo Reyes presented a fundamental mindset shift for future developers: software cannot live isolated from the context where it operates. The central concept was moving from <strong>"code islands"</strong> to <span class="hlg">Integrated Digital Ecosystems</span>.',
    "c2.p2": 'For ADSO students, this redefines requirements analysis: software must not only be <strong>functionally correct</strong>, but also <strong>architecturally viable</strong> given the real deployment context — available connectivity, cloud infrastructure, and users\' digital literacy level.',
    "c2.p3": 'The conference closed with a key message: the modern developer is no longer an isolated programmer handed a design document. Society 5.0 demands analysts with <strong>business and territorial vision</strong>, capable of building integrated systems that generate real productivity impact.',
    "ig.cap2": "Theme slide", "ig.cap3": "Presenter on stage", "ig.cap4": "Key slide", "ig.cap5": "Speaker · auditorium",
    "c2.pillars_title": "The 3 Pillars of the Digital Ecosystem",
    "c2.pillars_sub": "Reyes breaks down the construction of robust digital solutions into three dimensions that must work in sync.",
    "eco.title": "Integrated Digital Ecosystem",
    "eco.col1t": "Infrastructure", "eco.col1d": "Network / Cloud — Without an optimal data channel, distributed systems lose scalability and availability.",
    "eco.col2t": "Architecture", "eco.col2d": "Software / APIs — Modular design patterns and interoperability with standard REST APIs to connect pre-existing local systems.",
    "eco.col3t": "Adoption", "eco.col3d": "UX / UI — A system that users don't understand or reject is a technical failure in the software lifecycle.",
    "r1.t": "Offline-First Design", "r1.d": "Building resource-efficient apps that can work under low-connectivity scenarios using Service Workers to store data locally and sync when the network is available.",
    "r2.t": "Interoperability", "r2.d": "The backend must be ready to consume and expose services connecting different entities, using well-defined data schemas that protect information integrity.",
    "r3.t": "Social Software Adoption", "r3.d": "UX/UI must focus on reducing the digital literacy gap for the target user. A technically brilliant system that nobody uses is a failed project.",
    "r4.t": "Territorial Vision", "r4.d": "The modern analyst must understand the real deployment context — connectivity, available infrastructure and pre-existing systems — before designing the software architecture.", "r4.tag": "Context analysis",
    "footer.credits": "Report by Andres Felipe Guavita Cárdenas · ADSO Student · SENA Colombia",
    "footer.sub": "Conferences of May 8 · Corferias, Bogotá D.C."
  }
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === lang.toUpperCase()));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
}

// ── TABS ───────────────────────────────────────────────────────────────────
function sw(id, btn) {
  document.querySelectorAll('.conf-pane').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
  document.getElementById('conferencias').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── LIGHTBOX ───────────────────────────────────────────────────────────────
function openLb(src, alt) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-img').alt = alt;
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lb').addEventListener('click', e => { if (e.target === document.getElementById('lb')) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) { setTimeout(() => e.target.classList.add('vis'), i * 70); obs.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));