import type { Course, DemoCase, InsightArticle, Service, Testimonial } from '../types';

export const siteConfig = {
  email: 'hola@bluerock.pe',
  linkedin: '#',
  instagram: '#',
};

export const services: Service[] = [
  {
    slug: 'estrategia-de-crecimiento',
    title: 'Estrategia de crecimiento',
    description:
      'Convertimos objetivos comerciales en una hoja de ruta clara, medible y priorizada.',
    outcome: 'Dirección antes que volumen',
    intro: 'Definimos dónde jugar, qué decir y qué mover primero para que cada iniciativa de marketing responda a una prioridad comercial.',
    capabilities: ['Investigación de mercado', 'Arquitectura de oferta', 'Journey B2B', 'Plan de crecimiento'],
    process: [
      { title: 'Leer el contexto', description: 'Entendemos mercado, cliente, competencia y desempeño actual.' },
      { title: 'Encontrar la tensión', description: 'Detectamos qué frena la consideración y dónde existe una ventaja defendible.' },
      { title: 'Diseñar la ruta', description: 'Traducimos el diagnóstico en prioridades, responsables y señales de avance.' },
    ],
    deliverables: ['Diagnóstico ejecutivo', 'Mapa de oportunidades', 'Narrativa de crecimiento', 'Roadmap de 90 días'],
    icon: 'compass',
    className: 'md:col-span-7',
    image: 'https://picsum.photos/seed/bluerock-strategy/1400/900',
  },
  {
    slug: 'posicionamiento-y-contenido',
    title: 'Posicionamiento y contenido',
    description:
      'Construimos una voz experta que hace visible el valor de tu empresa en mercados complejos.',
    outcome: 'Relevancia que abre conversaciones',
    intro: 'Convertimos conocimiento complejo en una posición clara y una voz editorial que ayuda a los decisores a entender por qué elegirte.',
    capabilities: ['Posicionamiento', 'Mensajes comerciales', 'Estrategia editorial', 'Contenido experto'],
    process: [
      { title: 'Definir la posición', description: 'Aterrizamos la diferencia que la marca puede sostener y el mercado valorar.' },
      { title: 'Ordenar el mensaje', description: 'Creamos una arquitectura para sitio, ventas, campañas y vocerías.' },
      { title: 'Activar la voz', description: 'Convertimos la estrategia en un sistema editorial consistente y escalable.' },
    ],
    deliverables: ['Plataforma de posicionamiento', 'Matriz de mensajes', 'Sistema editorial', 'Plan de contenidos'],
    icon: 'layers',
    className: 'md:col-span-5',
  },
  {
    slug: 'performance-b2b',
    title: 'Performance',
    description:
      'Diseñamos campañas y páginas que conectan inversión, intención y oportunidades reales.',
    outcome: 'Demanda con trazabilidad',
    intro: 'Diseñamos adquisición alrededor de señales de intención y calidad comercial, no de métricas aisladas que solo se ven bien en un reporte.',
    capabilities: ['Paid media B2B', 'Landing pages', 'Experimentación', 'Analítica de demanda'],
    process: [
      { title: 'Construir la hipótesis', description: 'Alineamos audiencia, oferta, mensaje y conversión esperada.' },
      { title: 'Activar y aprender', description: 'Lanzamos experimentos controlados con instrumentación desde el inicio.' },
      { title: 'Escalar evidencia', description: 'Concentramos presupuesto en las combinaciones que producen señales comerciales.' },
    ],
    deliverables: ['Plan de medios', 'Sistema de campañas', 'Landing de conversión', 'Tablero de performance'],
    icon: 'chart',
    className: 'md:col-span-4',
  },
  {
    slug: 'automatizacion-comercial',
    title: 'Automatización comercial',
    description:
      'Alineamos marketing, datos y seguimiento para que ninguna oportunidad se pierda entre herramientas.',
    outcome: 'Un sistema que aprende y escala',
    intro: 'Conectamos captura, calificación y seguimiento para que marketing entregue contexto y ventas reciba oportunidades listas para avanzar.',
    capabilities: ['Diseño de funnel', 'Lead scoring', 'Nurturing', 'Integración CRM'],
    process: [
      { title: 'Mapear el flujo', description: 'Visualizamos cómo entra, madura y se pierde hoy una oportunidad.' },
      { title: 'Diseñar la lógica', description: 'Definimos criterios, automatizaciones y mensajes según comportamiento.' },
      { title: 'Conectar la operación', description: 'Integramos herramientas y dejamos un sistema medible para ambos equipos.' },
    ],
    deliverables: ['Mapa de automatización', 'Modelo de calificación', 'Secuencias de nurturing', 'Especificación CRM'],
    icon: 'workflow',
    className: 'md:col-span-8',
    image: 'https://picsum.photos/seed/bluerock-systems/1400/900',
  },
];

export const demoCases: DemoCase[] = [
  {
    slug: 'servicios-profesionales',
    sector: 'Servicios profesionales',
    title: 'De oferta dispersa a una propuesta que abre mercado.',
    description:
      'Arquitectura de mensajes, landing de conversión y un sistema de demanda para decisores B2B.',
    metric: '+31% pipeline proyectado',
    image: 'https://picsum.photos/seed/bluerock-consulting/1400/1000',
    challenge: 'La firma explicaba muchas capacidades, pero no lograba convertirlas en una razón clara para iniciar una conversación.',
    moves: ['Reordenar la oferta alrededor del problema del comprador', 'Construir una narrativa para decisores', 'Conectar landing, contenidos y captura de demanda'],
    conclusion: 'Una experiencia comercial más clara, diseñada para reducir fricción y elevar la calidad de cada conversación.',
  },
  {
    slug: 'tecnologia-industrial',
    sector: 'Tecnología industrial',
    title: 'Una categoría compleja explicada con absoluta claridad.',
    description:
      'Reposicionamiento, narrativa comercial y contenido experto conectado con performance.',
    metric: '2.4× intención proyectada',
    image: 'https://picsum.photos/seed/bluerock-industry/1400/1000',
    challenge: 'La complejidad técnica ocultaba el impacto operativo y hacía que la propuesta fuera difícil de comparar.',
    moves: ['Traducir especificaciones en ventajas de negocio', 'Diseñar una arquitectura de mensajes por audiencia', 'Activar contenido experto con performance'],
    conclusion: 'Una categoría compleja convertida en una historia comprensible, relevante y preparada para generar intención.',
  },
  {
    slug: 'saas-b2b',
    sector: 'SaaS B2B',
    title: 'Menos fricción entre el interés y la conversación comercial.',
    description:
      'Embudo, automatización y activos de venta diseñados alrededor del ciclo real del cliente.',
    metric: '-22% CPL proyectado',
    image: 'https://picsum.photos/seed/bluerock-saas/1400/1000',
    challenge: 'La adquisición generaba registros, pero existía poca continuidad entre el interés inicial y el proceso de ventas.',
    moves: ['Rediseñar el journey de captación', 'Definir señales de intención y scoring', 'Automatizar educación y seguimiento'],
    conclusion: 'Menos fricción entre campañas y ventas, con un sistema que prioriza las oportunidades con mayor potencial.',
  },
];

export const insights: InsightArticle[] = [
  {
    slug: 'marketing-b2b-no-es-generar-mas-leads',
    category: 'Estrategia',
    title: 'El problema del marketing B2B no siempre es generar más leads.',
    excerpt: 'Antes de aumentar inversión, conviene entender dónde se rompe realmente la conversación comercial.',
    image: 'https://picsum.photos/seed/bluerock-insight-demand/1400/900',
    readingTime: '6 min de lectura',
    publishedAt: '4 de septiembre de 2026',
    introduction: 'Cuando el pipeline se desacelera, la respuesta automática suele ser pedir más campañas. Pero el volumen rara vez corrige una propuesta confusa, una mala calificación o una transición débil hacia ventas.',
    sections: [
      { title: 'El volumen amplifica lo que ya existe', paragraphs: ['Si la oferta no es clara, atraer más tráfico multiplica la confusión. La primera tarea es observar qué entiende el mercado y en qué momento pierde interés.', 'La señal correcta no es solo cuántas personas completan un formulario, sino cuántas conversaciones avanzan con contexto y una necesidad reconocible.'] },
      { title: 'La calidad se diseña antes de la campaña', paragraphs: ['Audiencia, mensaje, oferta y mecanismo de conversión deben funcionar como un sistema. Cuando una pieza se define de forma aislada, la optimización se vuelve cosmética.', 'Marketing y ventas necesitan acordar qué comportamiento indica intención y qué información permite continuar la conversación.'] },
    ],
    takeaway: 'Más demanda solo crea crecimiento cuando la empresa sabe reconocerla, explicarla y convertirla.',
  },
  {
    slug: 'posicionamiento-que-ayuda-a-vender',
    category: 'Posicionamiento',
    title: 'Un posicionamiento útil no solo suena bien: ayuda a vender.',
    excerpt: 'La claridad de marca se vuelve valiosa cuando reduce el esfuerzo que necesita un comprador para entenderte.',
    image: 'https://picsum.photos/seed/bluerock-insight-positioning/1400/900',
    readingTime: '5 min de lectura',
    publishedAt: '28 de agosto de 2026',
    introduction: 'En mercados B2B, una frase atractiva no es suficiente. El posicionamiento debe organizar decisiones: qué problemas priorizar, qué evidencia mostrar y qué oportunidades dejar pasar.',
    sections: [
      { title: 'La diferencia debe ser comprensible', paragraphs: ['Una posición fuerte conecta una tensión del comprador con una capacidad que la empresa puede demostrar. Si necesita demasiada explicación, aún no está terminada.', 'La consistencia importa más que la novedad constante. Repetir una idea relevante construye memoria y facilita que ventas la convierta en conversación.'] },
      { title: 'El mensaje es una herramienta operativa', paragraphs: ['El posicionamiento debe vivir en la web, las propuestas, las campañas y la forma en que el equipo presenta el negocio.', 'Cuando todos usan una arquitectura común, la marca deja de depender de interpretaciones individuales.'] },
    ],
    takeaway: 'La mejor posición es la que el mercado entiende y el equipo puede usar sin traducirla cada vez.',
  },
  {
    slug: 'senales-para-escalar-performance',
    category: 'Performance',
    title: 'Tres señales que conviene mirar antes de escalar una campaña.',
    excerpt: 'El costo por lead es solo una parte de la historia; la intención y el avance comercial completan el cuadro.',
    image: 'https://picsum.photos/seed/bluerock-insight-performance/1400/900',
    readingTime: '7 min de lectura',
    publishedAt: '19 de agosto de 2026',
    introduction: 'Escalar porque una plataforma reporta conversiones baratas puede deteriorar el pipeline. La inversión debería crecer cuando existen señales conectadas con el comportamiento comercial.',
    sections: [
      { title: 'Primero, intención observable', paragraphs: ['Revisar profundidad de navegación, retorno, interacción con activos de decisión y respuestas cualitativas ayuda a distinguir curiosidad de necesidad.', 'Una conversión sin contexto vale menos que una señal que revela por qué la empresa está evaluando una solución.'] },
      { title: 'Después, continuidad comercial', paragraphs: ['La campaña debe evaluarse más allá del formulario: contacto efectivo, reunión, oportunidad y aprendizaje de ventas.', 'Cuando esas señales mejoran juntas, existe evidencia suficiente para ampliar presupuesto sin perder dirección.'] },
    ],
    takeaway: 'Escalar no es invertir más en una métrica; es aumentar exposición a una hipótesis que ya demuestra calidad.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'BlueRock convirtió una conversación abstracta sobre crecimiento en prioridades que todo el equipo podía ejecutar.',
    role: 'Dirección comercial',
    company: 'Empresa B2B ficticia',
    image: 'https://picsum.photos/seed/bluerock-leader-one/400/400',
  },
  {
    quote:
      'Por primera vez, marca, campañas y ventas comenzaron a mirar el mismo tablero y hablar el mismo idioma.',
    role: 'Gerencia de marketing',
    company: 'Compañía tecnológica ficticia',
    image: 'https://picsum.photos/seed/bluerock-leader-two/400/400',
  },
  {
    quote:
      'La diferencia no fue hacer más acciones; fue entender cuáles movían realmente la oportunidad comercial.',
    role: 'Gerencia general',
    company: 'Firma de servicios ficticia',
    image: 'https://picsum.photos/seed/bluerock-leader-three/400/400',
  },
];

export const courses: Course[] = [
  {
    slug: 'estrategia-marketing-b2b',
    title: 'Estrategia de marketing B2B',
    description: 'Aprende a convertir objetivos comerciales en prioridades, mensajes y un plan de crecimiento que tu equipo pueda ejecutar.',
    audience: 'Líderes de marketing y negocio',
    duration: '6 módulos',
    level: 'Intermedio',
    image: 'https://picsum.photos/seed/bluerock-course-strategy/1200/900',
    outcomes: ['Diagnosticar el contexto comercial', 'Priorizar palancas de crecimiento', 'Construir un roadmap medible'],
    project: 'Una hoja de ruta de 90 días conectada con un objetivo real de negocio.',
  },
  {
    slug: 'posicionamiento-que-vende',
    title: 'Posicionamiento que ayuda a vender',
    description: 'Construye una posición clara y una arquitectura de mensajes útil para la web, campañas y conversaciones comerciales.',
    audience: 'Marketing, founders y ventas',
    duration: '5 módulos',
    level: 'Todos los niveles',
    image: 'https://picsum.photos/seed/bluerock-course-positioning/1200/900',
    outcomes: ['Definir una posición defendible', 'Ordenar mensajes por audiencia', 'Traducir estrategia en activos comerciales'],
    project: 'Una arquitectura de mensajes lista para web, campañas y conversaciones de venta.',
  },
  {
    slug: 'performance-automatizacion-b2b',
    title: 'Performance y automatización B2B',
    description: 'Conecta adquisición, señales de intención y seguimiento para diseñar una operación de demanda medible y escalable.',
    audience: 'Equipos de growth y demanda',
    duration: '8 módulos',
    level: 'Avanzado',
    image: 'https://picsum.photos/seed/bluerock-course-systems/1200/900',
    outcomes: ['Diseñar señales de intención', 'Conectar adquisición y seguimiento', 'Medir avance más allá del lead'],
    project: 'Un sistema de demanda con criterios de calificación, nurturing y medición comercial.',
  },
];
