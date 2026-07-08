import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const barberContentEs: AudienceContentPack = {
  navLinks: [
    { label: "Cómo funciona CutCoach", href: "#how-it-works" },
    { label: "Beneficios reales", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Opiniones de barberos", href: "#testimonials" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  footerLinks: [
    { label: "Cómo funciona CutCoach", href: "#how-it-works" },
    { label: "Beneficios reales", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Opiniones de barberos", href: "#testimonials" },
  ],
  hero: {
    headline: "Corta más rápido. Mantén la consistencia.",
    headlineAccent: "Gana confianza de verdad.",
    subtext:
      "Coaching de cortes con IA para barberos y estudiantes — guía en vivo, análisis de cortes, revisión por video y seguimiento de progreso, sin maniquíes ni adivinanzas.",
    cta: "Empieza a entrenar más inteligente",
    secondaryCta: "Mira cómo funciona",
    eyebrow: "Coaching de cortes con IA",
    eyebrowSecondary: "iOS + Lentes inteligentes",
  },
  trustBar: {
    columnStart: "Empieza",
    columnMetrics: "Lo que obtienes",
    columnProof: "Para quién es",
    iosPill: "Gratis en iOS",
    downloadNote: "Sin tarjeta · 25 créditos gratis al registrarte",
    trustedLabel: "De confianza para barberos",
    quote: "Por fin un entrenamiento al ritmo de la barbería.",
    mission:
      "Hecho para la presión del piso — coaching con IA, desarrollo de habilidades y resúmenes de Client Passport detrás de la silla.",
    earlyAccess: "Únete a barberos y estudiantes que entrenan más inteligente con CutCoach.",
    avatars: ["JM", "TD", "KR", "AL"],
    avatarLabel: "Barberos en acceso anticipado",
  },
  stats: [
    { value: 25, suffix: "+", label: "Créditos gratis" },
    { value: 150, suffix: "", label: "Créditos mensuales" },
    { value: 2, suffix: " min", label: "Para empezar a entrenar" },
  ],
  featureSection: {
    tag: "Por qué funciona CutCoach",
    heading: "Coaching con IA que eleva",
    headingAccent: "Cada corte",
    description:
      "Coaching de cortes con IA, análisis, revisión de video y seguimiento de progreso — para que cada sesión con un cliente real impulse tu habilidad.",
    pillars: ["Coaching", "Análisis", "Progreso"],
  },
  features: [
    {
      title: "Coaching de cortes con IA",
      description:
        "Coaching en vivo durante sesiones reales — estructura, ritmo y confianza sin detenerte a adivinar.",
      highlights: [
        "Guía en tiempo real detrás de la silla",
        "Señales de flujo con lentes inteligentes",
        "Aprendizaje para estudiantes en cada corte",
      ],
      image: images.liveAiSupport,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Puntuación", value: "87" },
        { label: "Coaching", value: "En vivo", live: true },
      ],
    },
    {
      title: "Flujo con lentes inteligentes",
      description:
        "Mantén el ritmo y el control en secciones complejas con señales sutiles y manos libres.",
      highlights: [
        "Ritmo manos libres con lentes inteligentes",
        "Recordatorios de estructura sección por sección",
        "Menos dudas, flujo más fluido",
      ],
      image: images.liveCutGuidance,
      bgImage: images.featureBg2,
      callouts: [
        { label: "Fade izq.", value: "4:12" },
        { label: "Señal", value: "Activa", live: true },
      ],
    },
    {
      title: "Análisis y seguimiento de progreso",
      description:
        "Análisis de cortes, revisión por video y resúmenes con IA de Client Passport para que tu habilidad crezca con el tiempo.",
      highlights: [
        "Análisis de corte después de cada sesión",
        "Análisis de video y seguimiento de progreso",
        "Resúmenes con IA de Client Passport",
      ],
      image: images.guidedSession,
      bgImage: images.leftCard,
      callouts: [
        { label: "Análisis", value: "Listo", live: true },
        { label: "Progreso", value: "Registrado" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "Cómo funciona CutCoach",
    heading: "Entrena más rápido con",
    headingAccent: "Clientes reales",
    description:
      "Tres fases. Un solo flujo. Coaching, análisis y desarrollo de habilidades desde el primer clip hasta la revisión final.",
    pillars: ["Antes", "Durante", "Después"],
  },
  steps: [
    {
      number: "Paso 01",
      phase: "Antes del corte",
      title: "Inicia una sesión guiada",
      description:
        "Activa el coaching de cortes con IA en menos de dos minutos — un plan claro antes del primer clip.",
      highlights: [
        "Activación con un toque en iOS",
        "Estructura de sesión lista para estudiantes",
        "Confianza antes de que se siente el cliente",
      ],
      tags: ["Iniciar sesión", "Ver plan de sesión"],
      icon: images.step1Icon,
      callouts: [
        { label: "Plan de sesión", value: "Listo", live: true },
        { label: "Configuración", value: "2 min" },
      ],
    },
    {
      number: "Paso 02",
      phase: "Durante el corte",
      title: "Corta con guía de IA en vivo",
      description:
        "Las señales de flujo con lentes inteligentes te mantienen al ritmo en cada sección del corte.",
      highlights: [
        "Ritmo en vivo con lentes inteligentes",
        "Recordatorios de flujo por sección",
        "Desarrollo de habilidades en tiempo real",
      ],
      tags: ["Mantén el ritmo", "Ver métricas en vivo"],
      icon: images.step2Icon,
      callouts: [
        { label: "Fade izq.", value: "4:12" },
        { label: "Señal", value: "Activa", live: true },
      ],
    },
    {
      number: "Paso 03",
      phase: "Después del corte",
      title: "Analiza, sube y sube de nivel",
      description:
        "Análisis de cortes, revisión por video, seguimiento de progreso y resúmenes con IA de Client Passport.",
      highlights: [
        "Análisis de corte y desglose de ritmo",
        "Análisis de video subido",
        "Seguimiento de progreso después de cada corte",
      ],
      tags: ["Ver análisis", "Seguir progreso"],
      icon: images.step3Icon,
      callouts: [
        { label: "Puntuación", value: "87" },
        { label: "Insights", value: "Listos", live: true },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Compatibilidad real con tus herramientas",
    heading: "Guía confiable",
    headingAccent: "En todas las plataformas",
    description:
      "CutCoach funciona con las herramientas que los barberos ya usan — iOS, lentes inteligentes, herramientas pro y nube segura.",
    pillars: ["iOS", "Lentes inteligentes", "Herramientas pro", "Nube"],
  },
  compatibilityPlatforms: [
    {
      label: "App iOS",
      description: "Inicia sesiones de coaching desde tu iPhone en menos de 2 minutos.",
    },
    {
      label: "Lentes inteligentes",
      description: "Señales de ritmo en vivo mientras cortas — manos en el cliente.",
    },
    {
      label: "Marcas de herramientas pro",
      description: "Hecho para las máquinas y setups que ya usan las barberías.",
    },
    {
      label: "Nube segura",
      description: "Sesiones privadas, análisis y resúmenes de Client Passport.",
    },
  ],
  testimonialsSection: {
    tag: "Opiniones reales de barberos",
    heading: "Los barberos ya están",
    headingAccent: "Entrenando más inteligente",
    description:
      "Barberos en acceso anticipado prueban coaching con IA, análisis y seguimiento de progreso en barberías reales.",
    pillars: ["Velocidad", "Consistencia", "Confianza"],
    storiesComingSoon: "Historias completas de barberos — Próximamente",
    cta: "Empieza a entrenar más inteligente",
  },
  testimonialPreviewThemes: [
    {
      title: "Sesiones más rápidas",
      description:
        "Barberos que siguen mejoras de ritmo en días con clientes uno tras otro — menos tiempo muerto entre secciones, flujo más fluido.",
      metric: "Velocidad",
      outcome: "Ritmo registrado por sección",
    },
    {
      title: "Estructura consistente",
      description:
        "Señales de flujo con lentes inteligentes que ayudan a mantener el horario en cada corte — mismo ritmo, cada cliente.",
      metric: "Consistencia",
      outcome: "Señales de flujo en cada corte",
    },
    {
      title: "Desarrollo de habilidades",
      description:
        "Análisis de cortes y seguimiento de progreso que construyen confianza detrás de la silla con clientes reales.",
      metric: "Confianza",
      outcome: "Progreso después de cada corte",
    },
  ],
  pricing: {
    section: {
      tag: "Membresía",
      heading: "Elige",
      headingAccent: "Tu plan CutCoach",
      description:
        "Empieza con coaching de cortes con IA, análisis y seguimiento de progreso pensados para sesiones con clientes reales.",
      pillars: ["Inicio gratis", "Plan Pro", "Packs de créditos"],
      footnote:
        "Todos los planes incluyen almacenamiento seguro de sesiones y acceso iOS. Los packs de créditos son compras únicas.",
    },
    showBillingToggle: true,
    plans: [
      {
        name: "Starter gratuito",
        description: "Para barberos y estudiantes nuevos que prueban CutCoach.",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        free: true,
        cta: "Empieza a entrenar más inteligente",
        features: [
          "25 créditos gratis al registrarte",
          "Acceso a la pestaña Aprender",
          "Chat del Coach con IA",
          "Guía básica de cortes",
        ],
      },
      {
        name: "CutCoach Pro",
        description: "Ideal para barberos y estudiantes que entrenan cada semana.",
        monthlyPrice: "$29.99",
        yearlyPrice: "$305.90",
        yearlyEquivalent: "Equivale a solo $25.49/mes",
        cta: "Empieza a entrenar más inteligente",
        highlighted: true,
        badge: "Más popular",
        features: [
          "150 créditos cada mes",
          "Chat del Coach con IA",
          "Análisis de cortes",
          "Análisis de video y seguimiento de progreso",
          "Resúmenes con IA de Client Passport",
        ],
      },
    ],
    creditPacksTitle: "Packs de créditos",
    creditPacksDescription:
      "Compras únicas. Para barberos que necesitan créditos de IA extra — sin suscripción.",
    creditPacks: [
      { credits: 50, price: "$9.99" },
      { credits: 150, price: "$24.99" },
      { credits: 500, price: "$69.99" },
    ],
  },
  faqSection: {
    tag: "Preguntas sobre CutCoach",
    heading: "Todo lo que los barberos",
    headingAccent: "Quieren saber",
    description:
      "Respuestas reales sobre coaching con IA, análisis, lentes inteligentes y desarrollo de habilidades.",
    pillars: ["Primeros pasos", "Privacidad", "Facturación"],
  },
  faqItems: [
    {
      question: "¿Cómo ayuda CutCoach realmente durante un corte?",
      answer:
        "CutCoach ofrece coaching de cortes con IA en tiempo real mientras cortas. Las señales de flujo con lentes inteligentes te ayudan a avanzar por secciones con estructura, mantener el horario y reducir las dudas. Después del corte, el análisis y el seguimiento de progreso muestran dónde ganaste o perdiste tiempo.",
    },
    {
      question: "¿CutCoach es para estudiantes y también para barberos en activo?",
      answer:
        "Sí. El aprendizaje para estudiantes y el desarrollo de habilidades van incluidos — sesiones guiadas, análisis y revisión por video te ayudan a crecer con clientes reales, no solo con maniquíes.",
    },
    {
      question: "¿Mis grabaciones de cortes y datos de rendimiento son privados?",
      answer:
        "Sí. Tus sesiones, videos subidos e insights de rendimiento son privados de tu cuenta. CutCoach usa almacenamiento seguro y no comparte el material de tus clientes ni tus datos de rendimiento.",
    },
    {
      question: "¿Qué tan rápido puedo empezar a entrenar con CutCoach?",
      answer:
        "La mayoría de los barberos pueden iniciar una sesión guiada en menos de 2 minutos. Elige el tipo de cabello, selecciona la estructura del corte, conecta tus lentes y empieza a cortar.",
    },
    {
      question: "¿Qué son los resúmenes con IA de Client Passport?",
      answer:
        "Después de las sesiones, CutCoach puede generar resúmenes con IA que te ayudan a comunicar preferencias y resultados del corte con más claridad — útiles para tu propio progreso y para la continuidad con el cliente.",
    },
  ],
  finalCta: {
    heading: "¿Listo para llevar",
    headingAccent: "Tus cortes al siguiente nivel?",
    primaryCta: "Empieza a entrenar más inteligente",
    secondaryCta: "Mira cómo funciona CutCoach",
  },
  footerDescription:
    "Coaching de cortes con IA para barberos y estudiantes — análisis, revisión de video, seguimiento de progreso y flujo con lentes inteligentes hechos para la presión real de la barbería.",
  mobileHighlights: [
    { title: "Coaching con IA", subtitle: "Sesiones en vivo", live: true },
    { title: "Análisis", subtitle: "Video + Progreso" },
    { title: "Lentes inteligentes", subtitle: "Señales manos libres" },
  ],
};
