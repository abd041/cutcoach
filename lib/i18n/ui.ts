import type { Locale } from "@/lib/i18n/types";

/** Chrome / UI strings shared across audience modes. */
export interface UiCopy {
  language: string;
  experience: string;
  platformTag: string;
  platformHeadline: string;
  platformBarberTitle: string;
  platformBarberLine: string;
  platformClientTitle: string;
  platformClientLine: string;
  platformConnected: string;
  ecosystemTag: string;
  ecosystemHeading: string;
  ecosystemHeadingAccent: string;
  ecosystemBarberTitle: string;
  ecosystemBarberLine: string;
  ecosystemBridgeTitle: string;
  ecosystemBridgeLine: string;
  ecosystemClientTitle: string;
  ecosystemClientLine: string;
  trustPillarIos: string;
  trustPillarNeutral: string;
  trustPillarSecure: string;
  trustPillarFree: string;
  illustrativePositioning: string;
  earlyAccessDisclaimer: string;
  scrollToExplore: string;
  tryFree: string;
  getPassport: string;
  skipToContent: string;
  billedMonthly: string;
  billedYearly: string;
  save15: string;
  save15VsMonthly: string;
  whatsIncluded: string;
  oneTimePurchases: string;
  oneTime: string;
  credits: string;
  forever: string;
  perMonth: string;
  perYear: string;
  swipeForStats: string;
  earlyAccessOutcome: string;
  viewOnAppStore: string;
  stepOf: string; // "Step {current} of {total}"
  navigation: string;
  legal: string;
  socialMedia: string;
  availableOn: string;
  iosAppStore: string;
  freeOnIos: string;
  startInTwoMinutes: string;
  barber: string;
  client: string;
  closeMenu: string;
  openMenu: string;
  privacyPolicy: string;
  termsOfService: string;
  contact: string;
  footerTagline: string;
  toggleYearlyBilling: string;
  liveSync: string;
  toolClippers: string;
  toolTrimmers: string;
  toolGuards: string;
  toolShears: string;
  toolComb: string;
  toolGlasses: string;
  toolMobile: string;
  toolAi: string;
  toolCloud: string;
  toolPassport: string;
  toolQr: string;
}

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    language: "Language",
    experience: "Experience",
    platformTag: "One AI-Powered Platform",
    platformHeadline: "Two connected audiences. One CutCoach.",
    platformBarberTitle: "Barbers",
    platformBarberLine: "Designed to help you improve your craft faster.",
    platformClientTitle: "Clients",
    platformClientLine:
      "Designed to support more consistent haircuts with a free Client Passport.",
    platformConnected: "Connected through every cut.",
    ecosystemTag: "The CutCoach Platform",
    ecosystemHeading: "One ecosystem.",
    ecosystemHeadingAccent: "Two connected audiences.",
    ecosystemBarberTitle: "Barber coaching",
    ecosystemBarberLine:
      "AI guidance, analysis, and progress designed to help barbers improve their craft faster.",
    ecosystemBridgeTitle: "Client Passport",
    ecosystemBridgeLine:
      "Session context and preferences can flow between barber and client — when you choose to share.",
    ecosystemClientTitle: "Client Passport",
    ecosystemClientLine:
      "A free profile designed to help clients communicate preferences for more consistent haircuts.",
    trustPillarIos: "Available on iOS",
    trustPillarNeutral: "Brand-neutral tools",
    trustPillarSecure: "Private by default",
    trustPillarFree: "Free to start",
    illustrativePositioning: "Product positioning",
    earlyAccessDisclaimer:
      "Early access preview — themes reflect product direction, not verified customer reviews.",
    scrollToExplore: "Scroll to explore",
    tryFree: "Try Free",
    getPassport: "Get Passport",
    skipToContent: "Skip to content",
    billedMonthly: "Billed Monthly",
    billedYearly: "Billed Yearly",
    save15: "(save 15%)",
    save15VsMonthly: "Save 15% vs monthly",
    whatsIncluded: "What's included",
    oneTimePurchases: "One-time purchases",
    oneTime: "One-time",
    credits: "Credits",
    forever: "forever",
    perMonth: "/ month",
    perYear: "/ year",
    swipeForStats: "Swipe for stats →",
    earlyAccessOutcome: "Early access outcome",
    viewOnAppStore: "View on App Store",
    stepOf: "Step {current} of {total}",
    navigation: "Navigation",
    legal: "Legal",
    socialMedia: "Social Media",
    availableOn: "Available on",
    iosAppStore: "iOS App Store",
    freeOnIos: "Free on iOS. Start in under 2 minutes.",
    startInTwoMinutes: "Start in under 2 minutes.",
    barber: "Barber",
    client: "Client",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contact: "Contact",
    footerTagline:
      "One AI-powered platform for barbers and clients — coaching designed to help barbers improve faster, and a free Client Passport designed to help clients get more consistent haircuts.",
    toggleYearlyBilling: "Toggle yearly billing",
    liveSync: "Live Sync",
    toolClippers: "Clippers",
    toolTrimmers: "Trimmers",
    toolGuards: "Guards",
    toolShears: "Shears",
    toolComb: "Comb",
    toolGlasses: "Smart Glasses",
    toolMobile: "Mobile App",
    toolAi: "AI",
    toolCloud: "Secure Cloud",
    toolPassport: "Passport",
    toolQr: "QR Profile",
  },
  es: {
    language: "Idioma",
    experience: "Experiencia",
    platformTag: "Una plataforma con IA",
    platformHeadline: "Dos audiencias conectadas. Un solo CutCoach.",
    platformBarberTitle: "Barberos",
    platformBarberLine: "Diseñado para ayudarte a mejorar tu oficio más rápido.",
    platformClientTitle: "Clientes",
    platformClientLine:
      "Diseñado para apoyar cortes más consistentes con un Client Passport gratis.",
    platformConnected: "Conectados en cada corte.",
    ecosystemTag: "La plataforma CutCoach",
    ecosystemHeading: "Un ecosistema.",
    ecosystemHeadingAccent: "Dos audiencias conectadas.",
    ecosystemBarberTitle: "Coaching para barberos",
    ecosystemBarberLine:
      "Guía, análisis y progreso con IA diseñados para ayudar a barberos a mejorar su oficio más rápido.",
    ecosystemBridgeTitle: "Client Passport",
    ecosystemBridgeLine:
      "El contexto de sesión y las preferencias pueden fluir entre barbero y cliente — cuando eliges compartir.",
    ecosystemClientTitle: "Client Passport",
    ecosystemClientLine:
      "Un perfil gratis diseñado para ayudar a los clientes a comunicar preferencias y lograr cortes más consistentes.",
    trustPillarIos: "Disponible en iOS",
    trustPillarNeutral: "Herramientas neutrales en marcas",
    trustPillarSecure: "Privado por defecto",
    trustPillarFree: "Gratis para empezar",
    illustrativePositioning: "Posicionamiento del producto",
    earlyAccessDisclaimer:
      "Vista previa de acceso anticipado — los temas reflejan la dirección del producto, no reseñas verificadas.",
    scrollToExplore: "Desliza para explorar",
    tryFree: "Probar gratis",
    getPassport: "Obtener Passport",
    skipToContent: "Saltar al contenido",
    billedMonthly: "Facturación mensual",
    billedYearly: "Facturación anual",
    save15: "(ahorra 15%)",
    save15VsMonthly: "Ahorra un 15% frente al plan mensual",
    whatsIncluded: "Qué incluye",
    oneTimePurchases: "Compras únicas",
    oneTime: "Pago único",
    credits: "Créditos",
    forever: "para siempre",
    perMonth: "/ mes",
    perYear: "/ año",
    swipeForStats: "Desliza para ver →",
    earlyAccessOutcome: "Resultado de acceso anticipado",
    viewOnAppStore: "Ver en App Store",
    stepOf: "Paso {current} de {total}",
    navigation: "Navegación",
    legal: "Legal",
    socialMedia: "Redes sociales",
    availableOn: "Disponible en",
    iosAppStore: "App Store de iOS",
    freeOnIos: "Gratis en iOS. Empieza en menos de 2 minutos.",
    startInTwoMinutes: "Empieza en menos de 2 minutos.",
    barber: "Barbero",
    client: "Cliente",
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos de servicio",
    contact: "Contacto",
    footerTagline:
      "Una plataforma con IA para barberos y clientes — coaching diseñado para ayudar a barberos a mejorar más rápido, y un Client Passport gratis diseñado para apoyar cortes más consistentes.",
    toggleYearlyBilling: "Alternar facturación anual",
    liveSync: "Sincronización en vivo",
    toolClippers: "Máquinas",
    toolTrimmers: "Perfiladoras",
    toolGuards: "Peines guía",
    toolShears: "Tijeras",
    toolComb: "Peine",
    toolGlasses: "Lentes inteligentes",
    toolMobile: "App móvil",
    toolAi: "IA",
    toolCloud: "Nube segura",
    toolPassport: "Passport",
    toolQr: "Perfil QR",
  },
  fr: {
    language: "Langue",
    experience: "Expérience",
    platformTag: "Une plateforme IA",
    platformHeadline: "Deux audiences connectées. Un seul CutCoach.",
    platformBarberTitle: "Barbers",
    platformBarberLine:
      "Conçu pour vous aider à progresser plus vite dans votre métier.",
    platformClientTitle: "Clients",
    platformClientLine:
      "Conçu pour soutenir des coupes plus régulières avec un Client Passport gratuit.",
    platformConnected: "Connectés à chaque coupe.",
    ecosystemTag: "La plateforme CutCoach",
    ecosystemHeading: "Un écosystème.",
    ecosystemHeadingAccent: "Deux audiences connectées.",
    ecosystemBarberTitle: "Coaching barber",
    ecosystemBarberLine:
      "Guidage, analyse et progression IA conçus pour aider les barbers à progresser plus vite.",
    ecosystemBridgeTitle: "Client Passport",
    ecosystemBridgeLine:
      "Le contexte de séance et les préférences peuvent circuler entre barber et client — quand vous choisissez de partager.",
    ecosystemClientTitle: "Client Passport",
    ecosystemClientLine:
      "Un profil gratuit conçu pour aider les clients à communiquer leurs préférences pour des coupes plus régulières.",
    trustPillarIos: "Disponible sur iOS",
    trustPillarNeutral: "Outils neutres en marques",
    trustPillarSecure: "Privé par défaut",
    trustPillarFree: "Gratuit pour démarrer",
    illustrativePositioning: "Positionnement produit",
    earlyAccessDisclaimer:
      "Aperçu en accès anticipé — les thèmes reflètent la direction produit, pas des avis clients vérifiés.",
    scrollToExplore: "Faites défiler pour explorer",
    tryFree: "Essayer gratuitement",
    getPassport: "Obtenir Passport",
    skipToContent: "Aller au contenu",
    billedMonthly: "Facturation mensuelle",
    billedYearly: "Facturation annuelle",
    save15: "(économisez 15 %)",
    save15VsMonthly: "Économisez 15 % par rapport au mensuel",
    whatsIncluded: "Ce qui est inclus",
    oneTimePurchases: "Achats uniques",
    oneTime: "Paiement unique",
    credits: "Crédits",
    forever: "pour toujours",
    perMonth: "/ mois",
    perYear: "/ an",
    swipeForStats: "Faites glisser →",
    earlyAccessOutcome: "Résultat de l’accès anticipé",
    viewOnAppStore: "Voir sur l’App Store",
    stepOf: "Étape {current} sur {total}",
    navigation: "Navigation",
    legal: "Mentions légales",
    socialMedia: "Réseaux sociaux",
    availableOn: "Disponible sur",
    iosAppStore: "App Store iOS",
    freeOnIos: "Gratuit sur iOS. Démarrez en moins de 2 minutes.",
    startInTwoMinutes: "Démarrez en moins de 2 minutes.",
    barber: "Barbier",
    client: "Client",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d’utilisation",
    contact: "Contact",
    footerTagline:
      "Une plateforme IA pour barbers et clients — coaching conçu pour aider les barbers à progresser plus vite, et un Client Passport gratuit conçu pour soutenir des coupes plus régulières.",
    toggleYearlyBilling: "Basculer la facturation annuelle",
    liveSync: "Sync en direct",
    toolClippers: "Tondeuses",
    toolTrimmers: "Tondeuses de finition",
    toolGuards: "Sabots",
    toolShears: "Ciseaux",
    toolComb: "Peigne",
    toolGlasses: "Lunettes connectées",
    toolMobile: "Application mobile",
    toolAi: "IA",
    toolCloud: "Cloud sécurisé",
    toolPassport: "Passport",
    toolQr: "Profil QR",
  },
};

export function formatUi(
  template: string,
  vars: Record<string, string | number>
) {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, String(value)),
    template
  );
}
