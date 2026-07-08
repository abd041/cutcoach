import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const clientContentEs: AudienceContentPack = {
  navLinks: [
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Barbero", href: "#features", audience: "barber" },
    { label: "Client Passport", href: "#features", audience: "client" },
    { label: "Precios", href: "#pricing" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  footerLinks: [
    { label: "Cómo funciona", href: "#how-it-works" },
    { label: "Barbero", href: "#features", audience: "barber" },
    { label: "Client Passport", href: "#features", audience: "client" },
    { label: "Precios", href: "#pricing" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  hero: {
    headline: "Cortes más consistentes",
    headlineAccent: "Con Client Passport.",
    subtext:
      "Un Client Passport gratis te ayuda a guardar preferencias, fotos e historial — diseñado para facilitar la comunicación con cualquier barbero.",
    cta: "Crea tu Client Passport gratis",
    secondaryCta: "Mira cómo funciona",
    eyebrow: "Client Passport",
    eyebrowSecondary: "Gratis para siempre · Sin tarjeta",
    screens: [
      { src: images.clientPassportMyQr, alt: "Perfil QR de Client Passport" },
      { src: images.clientPassportPreferences, alt: "Preferencias e historial de corte" },
      { src: images.clientPassportWelcome, alt: "Crea tu Client Passport" },
    ],
    sideScreens: [
      {
        src: images.clientPassportPreferences,
        alt: "Preferencias e historial guardados",
        side: "left",
      },
      {
        src: images.clientPassportMyQr,
        alt: "Perfil QR para cualquier barbero",
        side: "right",
      },
    ],
  },
  trustBar: {
    columnStart: "Empieza",
    columnMetrics: "Lo que obtienes",
    columnProof: "Para quién es",
    iosPill: "Gratis en iOS",
    downloadNote: "Totalmente gratis · Sin suscripción",
    trustedLabel: "Hecho para clientes",
    quote: "Por fin, una forma de no explicar mi corte desde cero.",
    mission:
      "Preferencias, historial, perfil QR, estilos favoritos, notas del barbero y fotos de antes y después — diseñado para ayudar a que cualquier barbero empiece con más claridad.",
    earlyAccess: "Únete a clientes que construyen su Client Passport de CutCoach.",
    avatars: ["AS", "MR", "JL", "DK"],
    avatarLabel: "Clientes en acceso anticipado",
  },
  stats: [
    { value: 0, suffix: "", label: "Costo para siempre", display: "GRATIS" },
    { value: 1, suffix: "", label: "Perfil QR" },
    { value: 2, suffix: " min", label: "Para configurarlo" },
  ],
  featureSection: {
    tag: "Cómo ayuda Client Passport",
    heading: "Diseñado para ayudarte",
    headingAccent: "A comunicar con claridad",
    description:
      "Client Passport mantiene preferencias, historial, fotos y notas listas — diseñado para facilitar la comunicación con cualquier barbero desde el inicio.",
    pillars: ["Preferencias", "Historial", "Claridad"],
  },
  features: [
    {
      title: "Preferencias de corte y estilos favoritos",
      description:
        "Guarda los cortes, fades y estilos favoritos que definen tu look — listos para tu próxima visita.",
      highlights: [
        "Preferencias de corte en un solo lugar",
        "Estilos favoritos a los que puedes volver",
        "Resúmenes con IA de tus preferencias",
      ],
      image: images.clientPassportPreferences,
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
      image: images.clientPassportPreferences,
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
      image: images.clientPassportMyQr,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Perfil QR", value: "Listo", live: true },
        { label: "Costo", value: "Gratis" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "Cómo funciona Client Passport",
    heading: "Tu look,",
    headingAccent: "Más fácil de compartir",
    description:
      "Tres pasos. Un solo passport. Preferencias, fotos y notas diseñadas para facilitar compartir lo que importa.",
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
      screen: images.clientPassportWelcome,
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
      screen: images.clientPassportMyQr,
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
      screen: images.clientPassportPreferences,
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
    tag: "Lo que exploran los clientes",
    heading: "Diseñado para ayudar a clientes",
    headingAccent: "A compartir preferencias con claridad",
    description:
      "Diseñado para facilitar compartir preferencias, historial y contexto con cualquier barbero — sin empezar desde cero en cada visita.",
    pillars: ["Claridad", "Consistencia", "Control"],
    storiesComingSoon: "Historias completas de clientes — Próximamente",
    cta: "Crea tu Client Passport gratis",
  },
  testimonialPreviewThemes: [
    {
      title: "Explica menos desde cero",
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
        "Comparte tu perfil QR cuando estés listo — diseñado para apoyar una comunicación más clara con cualquier barbero, gratis para usar.",
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
      priceLabel: "GRATIS",
      description:
        "Preferencias de corte, fotos, historial, notas del barbero y un perfil QR — sin suscripción.",
      features: [
        "Guarda preferencias de corte",
        "Perfil QR",
        "Historial de cortes",
        "Fotos de inspiración",
        "Notas del barbero",
        "Resúmenes con IA",
        "Funciona con cualquier barbero",
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
        "Ese es el objetivo — no una garantía. Preferencias claras, fotos, historial y notas están diseñadas para apoyar una mejor comunicación con cualquier barbero, para que sea menos probable que expliques tu corte desde cero cada vez.",
    },
    {
      question: "¿Puedo usarlo con cualquier barbero?",
      answer:
        "Sí. El objetivo es hacer que tus preferencias de corte sean portátiles y fáciles de compartir.",
    },
    {
      question: "¿CutCoach reserva citas?",
      answer:
        "No. Se centra en la memoria del corte, la comunicación y el coaching con IA en lugar de la programación de citas.",
    },
  ],
  finalCta: {
    heading: "¿Listo para compartir",
    headingAccent: "Tus preferencias?",
    primaryCta: "Crea tu Client Passport gratis",
    secondaryCta: "Mira cómo funciona",
  },
  footerDescription:
    "Client Passport recuerda preferencias, historial, fotos de inspiración y notas — para que cada barbero empiece con claridad.",
  mobileHighlights: [
    { title: "Preferencias", subtitle: "Listas cuando las necesites", live: true },
    { title: "Historial", subtitle: "Fotos de inspiración" },
    { title: "Notas", subtitle: "Cada visita" },
  ],
};
