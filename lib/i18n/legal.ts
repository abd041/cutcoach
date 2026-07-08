import type { Locale } from "@/lib/i18n/types";

export interface LegalDocumentCopy {
  title: string;
  paragraphs: string[];
}

export interface LegalCopy {
  backToHome: string;
  lastUpdated: string;
  questions: string;
  privacy: LegalDocumentCopy;
  terms: LegalDocumentCopy;
}

export const legalCopy: Record<Locale, LegalCopy> = {
  en: {
    backToHome: "← Back to home",
    lastUpdated: "Last updated: July 2026",
    questions: "Questions?",
    privacy: {
      title: "Privacy Policy",
      paragraphs: [
        "{name} respects your privacy. Session data, performance insights, and account information are stored securely and are not sold to third parties.",
        "We collect information you provide when creating an account, starting sessions, and using coaching features. This may include timing data, session history, and device information needed to deliver the service.",
        "We use industry-standard security practices to protect your data. You may request account deletion or data export by contacting our support team.",
        "For questions about this policy or your data, contact us at {email}.",
      ],
    },
    terms: {
      title: "Terms of Service",
      paragraphs: [
        "By using {name}, you agree to use the app for lawful professional barbering purposes and to comply with applicable local regulations regarding client services.",
        "Subscriptions renew according to the plan you select. You may cancel through your App Store account settings. Features and pricing may change with notice where required.",
        "{name} is provided as coaching guidance and does not replace professional training, licensing, or judgment. You remain responsible for all services performed for clients.",
        "Contact {email} with questions about these terms.",
      ],
    },
  },
  es: {
    backToHome: "← Volver al inicio",
    lastUpdated: "Última actualización: julio de 2026",
    questions: "¿Preguntas?",
    privacy: {
      title: "Política de privacidad",
      paragraphs: [
        "{name} respeta tu privacidad. Los datos de sesión, los insights de rendimiento y la información de la cuenta se almacenan de forma segura y no se venden a terceros.",
        "Recopilamos la información que proporcionas al crear una cuenta, iniciar sesiones y usar las funciones de coaching. Esto puede incluir datos de tiempos, historial de sesiones e información del dispositivo necesaria para prestar el servicio.",
        "Usamos prácticas de seguridad estándar de la industria para proteger tus datos. Puedes solicitar la eliminación de la cuenta o la exportación de datos contactando a nuestro equipo de soporte.",
        "Si tienes preguntas sobre esta política o tus datos, contáctanos en {email}.",
      ],
    },
    terms: {
      title: "Términos de servicio",
      paragraphs: [
        "Al usar {name}, aceptas utilizar la app con fines profesionales legales de barbería y cumplir la normativa local aplicable sobre servicios a clientes.",
        "Las suscripciones se renuevan según el plan que elijas. Puedes cancelar desde la configuración de tu cuenta de App Store. Las funciones y los precios pueden cambiar con aviso cuando la ley lo requiera.",
        "{name} se ofrece como guía de coaching y no sustituye la formación profesional, las licencias ni el criterio profesional. Tú sigues siendo responsable de todos los servicios que prestes a tus clientes.",
        "Contacta a {email} si tienes preguntas sobre estos términos.",
      ],
    },
  },
  fr: {
    backToHome: "← Retour à l’accueil",
    lastUpdated: "Dernière mise à jour : juillet 2026",
    questions: "Des questions ?",
    privacy: {
      title: "Politique de confidentialité",
      paragraphs: [
        "{name} respecte votre vie privée. Les données de séance, les informations de performance et les données de compte sont stockées de manière sécurisée et ne sont pas vendues à des tiers.",
        "Nous collectons les informations que vous fournissez lors de la création d’un compte, du démarrage de séances et de l’utilisation des fonctions de coaching. Cela peut inclure des données de timing, l’historique des séances et des informations sur l’appareil nécessaires pour fournir le service.",
        "Nous utilisons des pratiques de sécurité standard de l’industrie pour protéger vos données. Vous pouvez demander la suppression de votre compte ou l’exportation de vos données en contactant notre équipe d’assistance.",
        "Pour toute question concernant cette politique ou vos données, contactez-nous à l’adresse {email}.",
      ],
    },
    terms: {
      title: "Conditions d’utilisation",
      paragraphs: [
        "En utilisant {name}, vous acceptez d’utiliser l’application à des fins professionnelles légales de barbier et de respecter la réglementation locale applicable aux services clients.",
        "Les abonnements se renouvellent selon l’offre choisie. Vous pouvez résilier depuis les réglages de votre compte App Store. Les fonctionnalités et les tarifs peuvent évoluer avec préavis lorsque la loi l’exige.",
        "{name} est fourni à titre de guidance de coaching et ne remplace ni la formation professionnelle, ni les licences, ni le jugement professionnel. Vous restez responsable de tous les services rendus à vos clients.",
        "Contactez {email} pour toute question concernant ces conditions.",
      ],
    },
  },
};
