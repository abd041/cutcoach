import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const clientContentEs: AudienceContentPack = {
  navLinks: [
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Tus beneficios", href: "#features" },
    { label: "Client Passport", href: "#pricing" },
    { label: "Historias de clientes", href: "#testimonials" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  footerLinks: [
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Tus beneficios", href: "#features" },
    { label: "Client Passport", href: "#pricing" },
    { label: "Historias de clientes", href: "#testimonials" },
  ],
  hero: {
    headline: "Consigue el corte que pediste.",
    headlineAccent: "Cada vez.",
    subtext:
      "Tu Client Passport recuerda todo lo que tu barbero debería saber: preferencias, historial de cortes, fotos de inspiración, notas y más.",
    cta: "Crea tu Client Passport gratis",
    secondaryCta: "Mira cómo funciona",
    eyebrow: "Client Passport",
    eyebrowSecondary: "Gratis para siempre · Sin tarjeta",
    screens: [
      { src: images.liveAiSupport, alt: "Preferencias de Client Passport" },
      { src: images.performanceAwareness, alt: "Historial y notas del corte" },
      { src: images.guidedSession, alt: "Fotos de inspiración guardadas" },
    ],
    sideScreens: [
      {
        src: images.performanceAwareness,
        alt: "Historial de cortes",
        side: "left",
      },
      { src: images.guidedSession, alt: "Inspiración guardada", side: "right" },
    ],
  },
  trustBar: {
    columnStart: "Empieza",
    columnMetrics: "Lo que obtienes",
    columnProof: "Para quién es",
    iosPill: "Gratis en iOS",
    downloadNote: "Totalmente gratis · Sin suscripción",
    trustedLabel: "Listo para clientes",
    quote: "Por fin, nunca más explico mi corte desde cero.",
    mission:
      "Preferencias, historial, perfil QR, estilos favoritos, notas del barbero y fotos de antes y después — para que cualquier barbero empiece con claridad.",
    earlyAccess: "Únete a clientes que construyen su Client Passport de CutCoach.",
    avatars: ["AS", "MR", "JL", "DK"],
    avatarLabel: "Clientes en acceso anticipado",
  },
  stats: [
    { value: 0, suffix: "", label: "Costo para siempre" },
    { value: 1, suffix: "", label: "Perfil QR" },
    { value: 2, suffix: " min", label: "Para configurarlo" },
  ],
  featureSection: {
    tag: "Por qué les encanta a los clientes",
    heading: "Nunca más un",
    headingAccent: "Mal corte",
    description:
      "Client Passport mantiene preferencias, historial, fotos y notas listas — para que la comunicación con cualquier barbero empiece clara.",
    pillars: ["Preferencias", "Historial", "Claridad"],
  },
  features: [
    {
      title: "Preferencias de corte y estilos favoritos",
      description:
        "Guarda los cortes, fades y estilos favoritos que definen tu look — siempre listos para la siguiente silla.",
      highlights: [
        "Preferencias de corte en un solo lugar",
        "Estilos favoritos a los que puedes volver",
        "Resúmenes con IA de tus preferencias",
      ],
      image: images.liveAiSupport,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Preferencias", value: "Guardadas", live: true },
        { label: "Estilos", value: "Listos" },
      ],
    },
    {
      title: "Historial, fotos y notas del barbero",
      description:
        "Historial de cortes, fotos de antes y después y notas del barbero para que cada visita construya sobre la anterior — no sobre una hoja en blanco.",
      highlights: [
        "Historial de cortes que te acompaña",
        "Fotos de antes y después",
        "Notas del barbero que puedes conservar",
      ],
      image: images.liveCutGuidance,
      bgImage: images.featureBg2,
      callouts: [
        { label: "Historial", value: "En archivo" },
        { label: "Fotos", value: "Guardadas", live: true },
      ],
    },
    {
      title: "Perfil QR para cualquier barbero",
      description:
        "Comparte tu Client Passport con un perfil QR para que cualquier barbero tenga claridad — mejor comunicación, menos adivinanzas.",
      highlights: [
        "Perfil QR en la silla",
        "Mejor comunicación con cualquier barbero",
        "Configuración gratis — sin suscripción",
      ],
      image: images.guidedSession,
      bgImage: images.leftCard,
      callouts: [
        { label: "Perfil QR", value: "Listo", live: true },
        { label: "Costo", value: "Gratis" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "Cómo funciona Client Passport",
    heading: "Tu look,",
    headingAccent: "Siempre claro",
    description:
      "Tres pasos. Un solo passport. Preferencias, fotos y notas para que nunca más expliques desde cero.",
    pillars: ["Crea", "Comparte", "Refina"],
  },
  steps: [
    {
      number: "Paso 01",
      phase: "Crea tu perfil",
      title: "Arma tu Client Passport",
      description:
        "Agrega preferencias de corte, estilos favoritos y fotos en menos de dos minutos — gratis para siempre.",
      highlights: [
        "Preferencias de corte y estilos favoritos",
        "Fotos de antes y después",
        "Totalmente gratis — sin suscripción",
      ],
      tags: ["Crear Passport", "Agregar preferencias"],
      icon: images.step1Icon,
      callouts: [
        { label: "Passport", value: "Listo", live: true },
        { label: "Costo", value: "Gratis" },
      ],
    },
    {
      number: "Paso 02",
      phase: "En la silla",
      title: "Comparte tu perfil QR",
      description:
        "Muestra tu perfil QR para que cualquier barbero vea preferencias, historial y notas con claridad.",
      highlights: [
        "Comparte el perfil QR en la silla",
        "Mejor comunicación con cualquier barbero",
        "Menos volver a explicar desde cero",
      ],
      tags: ["Mostrar QR", "Confirmar estilo"],
      icon: images.step2Icon,
      callouts: [
        { label: "QR", value: "En vivo", live: true },
        { label: "Claridad", value: "Alta" },
      ],
    },
    {
      number: "Paso 03",
      phase: "Después del corte",
      title: "Mantén historial y notas al día",
      description:
        "Actualiza notas del barbero, fotos y resúmenes de preferencias con IA para que la próxima visita empiece aún más clara.",
      highlights: [
        "Historial de cortes y notas del barbero",
        "Actualizaciones de fotos de antes y después",
        "Resúmenes con IA de tus preferencias",
      ],
      tags: ["Actualizar notas", "Ver historial"],
      icon: images.step3Icon,
      callouts: [
        { label: "Historial", value: "Guardado", live: true },
        { label: "Próxima visita", value: "Lista" },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Hecho para visitas reales",
    heading: "Funciona con las herramientas",
    headingAccent: "que ya usas",
    description:
      "CutCoach es neutro en marcas y está diseñado para integrarse de forma natural en el flujo de cualquier barbero, sin importar las herramientas que prefiera.",
    pillars: ["Passport", "QR", "Fotos", "Nube"],
  },
  compatibilityPlatforms: [
    {
      label: "App móvil",
      description: "Crea y actualiza tu Client Passport desde tu iPhone.",
    },
    {
      label: "Perfil QR",
      description: "Comparte preferencias con cualquier barbero en un escaneo.",
    },
    {
      label: "Resúmenes con IA",
      description:
        "Resúmenes claros de preferencias para que la comunicación empiece mejor en cada visita.",
    },
    {
      label: "Nube segura",
      description:
        "Almacenamiento cifrado para preferencias, fotos y notas — sin depender de marcas de máquinas.",
    },
  ],
  testimonialsSection: {
    tag: "Resultados para clientes",
    heading: "Los clientes quieren",
    headingAccent: "Cortes consistentes",
    description:
      "Nunca más explicar desde cero — preferencias, historial y una comunicación más clara con cualquier barbero.",
    pillars: ["Claridad", "Consistencia", "Control"],
    storiesComingSoon: "Historias completas de clientes — Próximamente",
    cta: "Crea tu Client Passport gratis",
  },
  testimonialPreviewThemes: [
    {
      title: "Nunca explicar desde cero",
      description:
        "Preferencias, estilos favoritos e historial listos en la silla — para dejar de repetir tu corte en cada visita.",
      metric: "Claridad",
      outcome: "Preferencias listas para cualquier barbero",
    },
    {
      title: "Fotos y notas que se quedan",
      description:
        "Fotos de antes y después y notas del barbero mantienen tu look alineado visita tras visita.",
      metric: "Consistencia",
      outcome: "Historial y fotos que te acompañan",
    },
    {
      title: "Claridad QR, tu control",
      description:
        "Comparte tu perfil QR cuando estés listo — mejor comunicación con cualquier barbero, gratis para siempre.",
      metric: "Control",
      outcome: "Comparte en tus términos",
    },
  ],
  pricing: {
    section: {
      tag: "Client Passport",
      heading: "Totalmente",
      headingAccent: "Gratis",
      description:
        "Client Passport es gratis para siempre. Sin suscripción. Sin precios de pago hasta futuras actualizaciones.",
      pillars: ["Gratis para siempre", "Sin tarjeta", "Sin suscripción"],
      footnote:
        "Pueden llegar funciones de pago para clientes más adelante — Passport sigue gratis por ahora.",
    },
    showBillingToggle: false,
    plans: [],
    freeProduct: {
      name: "Client Passport",
      badge: "Totalmente gratis",
      description:
        "Preferencias de corte, fotos, historial, notas del barbero y un perfil QR — sin suscripción.",
      features: [
        "Sin suscripción",
        "Preferencias de corte y estilos favoritos",
        "Historial de cortes y fotos de antes/después",
        "Perfil QR + notas del barbero",
        "Resúmenes con IA de tus preferencias",
      ],
      cta: "Crea tu Client Passport gratis",
    },
  },
  faqSection: {
    tag: "Preguntas de clientes",
    heading: "Todo lo que los clientes",
    headingAccent: "Quieren saber",
    description:
      "Respuestas directas sobre Client Passport, perfiles QR y no volver a explicar desde cero.",
    pillars: ["Primeros pasos", "Privacidad", "Precios"],
  },
  faqItems: [
    {
      question: "¿Qué es Client Passport?",
      answer:
        "Client Passport guarda tus preferencias de corte, estilos favoritos, historial, fotos de antes y después y notas del barbero — más resúmenes con IA — para que cada barbero empiece con claridad.",
    },
    {
      question: "¿Cómo funciona el perfil QR?",
      answer:
        "Tu passport incluye un perfil QR que puedes mostrar en la silla. Cualquier barbero puede escanearlo para ver las preferencias y el contexto que eliges compartir.",
    },
    {
      question: "¿Client Passport es realmente gratis?",
      answer:
        "Sí. Client Passport es totalmente gratis y no requiere suscripción. No se muestran precios de pago hasta futuras actualizaciones.",
    },
    {
      question: "¿Tengo que compartir mi perfil con cada barbero?",
      answer:
        "No. Tú controlas cuándo y si compartes. Tu passport permanece privado hasta que elijas mostrar tu perfil QR.",
    },
    {
      question: "¿Esto me ayudará a evitar malos cortes?",
      answer:
        "Ese es el objetivo. Preferencias claras, fotos, historial y notas significan mejor comunicación con cualquier barbero — para que no expliques tu corte desde cero cada vez.",
    },
  ],
  finalCta: {
    heading: "Consigue el corte",
    headingAccent: "que pediste",
    primaryCta: "Crea tu Client Passport gratis",
    secondaryCta: "Mira cómo funciona",
  },
  footerDescription:
    "Client Passport recuerda preferencias, historial, fotos de inspiración y notas — para que cada barbero empiece con claridad.",
  mobileHighlights: [
    { title: "Preferencias", subtitle: "Siempre recordadas", live: true },
    { title: "Historial", subtitle: "Fotos de inspiración" },
    { title: "Notas", subtitle: "Cada visita" },
  ],
};
