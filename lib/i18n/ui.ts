import type { Locale } from "@/lib/i18n/types";

/** Chrome / UI strings shared across audience modes. */
export interface UiCopy {
  language: string;
  experience: string;
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
}

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    language: "Language",
    experience: "Experience",
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
  },
  es: {
    language: "Idioma",
    experience: "Experiencia",
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
  },
  fr: {
    language: "Langue",
    experience: "Expérience",
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
