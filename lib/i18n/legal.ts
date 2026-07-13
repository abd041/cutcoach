import type { Locale } from "@/lib/i18n/types";

export interface LegalSection {
  /** Optional section heading */
  heading?: string;
  /** Optional body paragraph(s) */
  paragraphs?: string[];
  /** Optional bullet list */
  items?: string[];
}

export interface LegalDocumentCopy {
  title: string;
  /** Shown under the title when set (falls back to locale lastUpdated). */
  effectiveDate?: string;
  sections: LegalSection[];
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
      effectiveDate: "Effective Date: July 10, 2026",
      sections: [
        {
          paragraphs: [
            "{name} respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.",
          ],
        },
        {
          heading: "Information We Collect",
          paragraphs: ["When you create an account, we may collect:"],
          items: [
            "Name",
            "Email address",
            "Authentication information",
            "Profile photo (optional)",
          ],
        },
        {
          paragraphs: ["When you use the App, we may collect:"],
          items: [
            "Haircut preferences",
            "Client Passport information",
            "Haircut history",
            "Uploaded photos and videos",
            "AI conversations",
            "Device information",
            "App usage analytics",
            "Subscription and purchase information provided by Apple",
          ],
        },
        {
          heading: "How We Use Information",
          paragraphs: ["We use your information to:"],
          items: [
            "Provide and improve the App.",
            "Personalize your experience.",
            "Generate AI analyses and educational content.",
            "Maintain Client Passports.",
            "Process subscriptions and AI credit usage.",
            "Improve app performance and security.",
            "Respond to customer support requests.",
          ],
        },
        {
          heading: "AI Processing",
          paragraphs: [
            "Photos, videos, and messages submitted to AI features may be securely processed by third-party AI providers solely for the purpose of generating requested responses and analyses.",
          ],
        },
        {
          heading: "Sharing Information",
          paragraphs: [
            "We do not sell your personal information.",
            "We may share information with trusted service providers necessary to operate the App, including:",
          ],
          items: [
            "Apple",
            "Amazon Web Services (AWS)",
            "RevenueCat",
            "AI service providers",
            "Analytics providers",
          ],
        },
        {
          paragraphs: [
            "These providers process data only as necessary to perform services on our behalf.",
          ],
        },
        {
          heading: "Data Security",
          paragraphs: [
            "We use commercially reasonable administrative, technical, and physical safeguards to help protect your information. However, no method of electronic transmission or storage is completely secure.",
          ],
        },
        {
          heading: "Your Choices",
          paragraphs: ["You may:"],
          items: [
            "Update your profile information.",
            "Delete uploaded content where supported.",
            "Cancel subscriptions through your Apple ID settings.",
            "Request deletion of your account by contacting support.",
          ],
        },
        {
          heading: "Children’s Privacy",
          paragraphs: [
            "{name} is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy periodically. Continued use of the App after updates indicates acceptance of the revised policy.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about this Privacy Policy may be directed to:",
            "{name}",
            "Email: {email}",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      sections: [
        {
          paragraphs: [
            "By using {name}, you agree to use the app for lawful professional barbering purposes and to comply with applicable local regulations regarding client services.",
            "Subscriptions renew according to the plan you select. You may cancel through your App Store account settings. Features and pricing may change with notice where required.",
            "{name} is provided as coaching guidance and does not replace professional training, licensing, or judgment. You remain responsible for all services performed for clients.",
            "Contact {email} with questions about these terms.",
          ],
        },
      ],
    },
  },
  es: {
    backToHome: "← Volver al inicio",
    lastUpdated: "Última actualización: julio de 2026",
    questions: "¿Preguntas?",
    privacy: {
      title: "Política de privacidad",
      effectiveDate: "Fecha de vigencia: 10 de julio de 2026",
      sections: [
        {
          paragraphs: [
            "{name} respeta tu privacidad. Esta Política de privacidad explica cómo recopilamos, usamos y protegemos tu información.",
          ],
        },
        {
          heading: "Información que recopilamos",
          paragraphs: ["Cuando creas una cuenta, podemos recopilar:"],
          items: [
            "Nombre",
            "Dirección de correo electrónico",
            "Información de autenticación",
            "Foto de perfil (opcional)",
          ],
        },
        {
          paragraphs: ["Cuando usas la App, podemos recopilar:"],
          items: [
            "Preferencias de corte",
            "Información de Client Passport",
            "Historial de cortes",
            "Fotos y videos subidos",
            "Conversaciones con IA",
            "Información del dispositivo",
            "Analítica de uso de la app",
            "Información de suscripción y compras proporcionada por Apple",
          ],
        },
        {
          heading: "Cómo usamos la información",
          paragraphs: ["Usamos tu información para:"],
          items: [
            "Proporcionar y mejorar la App.",
            "Personalizar tu experiencia.",
            "Generar análisis de IA y contenido educativo.",
            "Mantener Client Passports.",
            "Procesar suscripciones y el uso de créditos de IA.",
            "Mejorar el rendimiento y la seguridad de la app.",
            "Responder a solicitudes de soporte al cliente.",
          ],
        },
        {
          heading: "Procesamiento con IA",
          paragraphs: [
            "Las fotos, videos y mensajes enviados a las funciones de IA pueden ser procesados de forma segura por proveedores de IA terceros únicamente para generar las respuestas y análisis solicitados.",
          ],
        },
        {
          heading: "Compartir información",
          paragraphs: [
            "No vendemos tu información personal.",
            "Podemos compartir información con proveedores de servicios de confianza necesarios para operar la App, incluidos:",
          ],
          items: [
            "Apple",
            "Amazon Web Services (AWS)",
            "RevenueCat",
            "Proveedores de servicios de IA",
            "Proveedores de analítica",
          ],
        },
        {
          paragraphs: [
            "Estos proveedores procesan los datos solo en la medida necesaria para prestar servicios en nuestro nombre.",
          ],
        },
        {
          heading: "Seguridad de los datos",
          paragraphs: [
            "Usamos salvaguardas administrativas, técnicas y físicas comercialmente razonables para ayudar a proteger tu información. Sin embargo, ningún método de transmisión o almacenamiento electrónico es completamente seguro.",
          ],
        },
        {
          heading: "Tus opciones",
          paragraphs: ["Puedes:"],
          items: [
            "Actualizar la información de tu perfil.",
            "Eliminar contenido subido cuando esté disponible.",
            "Cancelar suscripciones desde la configuración de tu Apple ID.",
            "Solicitar la eliminación de tu cuenta contactando a soporte.",
          ],
        },
        {
          heading: "Privacidad de los menores",
          paragraphs: [
            "{name} no está dirigido a menores de 13 años. No recopilamos a sabiendas información personal de menores de 13 años.",
          ],
        },
        {
          heading: "Cambios a esta política",
          paragraphs: [
            "Podemos actualizar esta Política de privacidad periódicamente. El uso continuado de la App después de las actualizaciones indica la aceptación de la política revisada.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [
            "Las preguntas sobre esta Política de privacidad pueden dirigirse a:",
            "{name}",
            "Correo: {email}",
          ],
        },
      ],
    },
    terms: {
      title: "Términos de servicio",
      sections: [
        {
          paragraphs: [
            "Al usar {name}, aceptas utilizar la app con fines profesionales legales de barbería y cumplir la normativa local aplicable sobre servicios a clientes.",
            "Las suscripciones se renuevan según el plan que elijas. Puedes cancelar desde la configuración de tu cuenta de App Store. Las funciones y los precios pueden cambiar con aviso cuando la ley lo requiera.",
            "{name} se ofrece como guía de coaching y no sustituye la formación profesional, las licencias ni el criterio profesional. Tú sigues siendo responsable de todos los servicios que prestes a tus clientes.",
            "Contacta a {email} si tienes preguntas sobre estos términos.",
          ],
        },
      ],
    },
  },
  fr: {
    backToHome: "← Retour à l’accueil",
    lastUpdated: "Dernière mise à jour : juillet 2026",
    questions: "Des questions ?",
    privacy: {
      title: "Politique de confidentialité",
      effectiveDate: "Date d’entrée en vigueur : 10 juillet 2026",
      sections: [
        {
          paragraphs: [
            "{name} respecte votre vie privée. La présente Politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.",
          ],
        },
        {
          heading: "Informations que nous collectons",
          paragraphs: [
            "Lorsque vous créez un compte, nous pouvons collecter :",
          ],
          items: [
            "Nom",
            "Adresse e-mail",
            "Informations d’authentification",
            "Photo de profil (facultative)",
          ],
        },
        {
          paragraphs: [
            "Lorsque vous utilisez l’App, nous pouvons collecter :",
          ],
          items: [
            "Préférences de coupe",
            "Informations Client Passport",
            "Historique des coupes",
            "Photos et vidéos téléversées",
            "Conversations avec l’IA",
            "Informations sur l’appareil",
            "Analytique d’utilisation de l’application",
            "Informations d’abonnement et d’achat fournies par Apple",
          ],
        },
        {
          heading: "Comment nous utilisons les informations",
          paragraphs: ["Nous utilisons vos informations pour :"],
          items: [
            "Fournir et améliorer l’App.",
            "Personnaliser votre expérience.",
            "Générer des analyses IA et du contenu éducatif.",
            "Maintenir les Client Passports.",
            "Traiter les abonnements et l’utilisation des crédits IA.",
            "Améliorer les performances et la sécurité de l’application.",
            "Répondre aux demandes d’assistance client.",
          ],
        },
        {
          heading: "Traitement par l’IA",
          paragraphs: [
            "Les photos, vidéos et messages soumis aux fonctionnalités d’IA peuvent être traités de manière sécurisée par des fournisseurs d’IA tiers uniquement dans le but de générer les réponses et analyses demandées.",
          ],
        },
        {
          heading: "Partage des informations",
          paragraphs: [
            "Nous ne vendons pas vos informations personnelles.",
            "Nous pouvons partager des informations avec des prestataires de services de confiance nécessaires au fonctionnement de l’App, notamment :",
          ],
          items: [
            "Apple",
            "Amazon Web Services (AWS)",
            "RevenueCat",
            "Fournisseurs de services d’IA",
            "Fournisseurs d’analytique",
          ],
        },
        {
          paragraphs: [
            "Ces prestataires traitent les données uniquement dans la mesure nécessaire pour fournir des services en notre nom.",
          ],
        },
        {
          heading: "Sécurité des données",
          paragraphs: [
            "Nous utilisons des mesures de protection administratives, techniques et physiques commercialement raisonnables pour aider à protéger vos informations. Toutefois, aucune méthode de transmission ou de stockage électronique n’est totalement sécurisée.",
          ],
        },
        {
          heading: "Vos choix",
          paragraphs: ["Vous pouvez :"],
          items: [
            "Mettre à jour les informations de votre profil.",
            "Supprimer le contenu téléversé lorsque cela est pris en charge.",
            "Annuler les abonnements via les réglages de votre identifiant Apple.",
            "Demander la suppression de votre compte en contactant le support.",
          ],
        },
        {
          heading: "Confidentialité des enfants",
          paragraphs: [
            "{name} n’est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants de moins de 13 ans.",
          ],
        },
        {
          heading: "Modifications de cette politique",
          paragraphs: [
            "Nous pouvons mettre à jour cette Politique de confidentialité périodiquement. L’utilisation continue de l’App après les mises à jour indique l’acceptation de la politique révisée.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Les questions concernant cette Politique de confidentialité peuvent être adressées à :",
            "{name}",
            "E-mail : {email}",
          ],
        },
      ],
    },
    terms: {
      title: "Conditions d’utilisation",
      sections: [
        {
          paragraphs: [
            "En utilisant {name}, vous acceptez d’utiliser l’application à des fins professionnelles légales de barbier et de respecter la réglementation locale applicable aux services clients.",
            "Les abonnements se renouvellent selon l’offre choisie. Vous pouvez résilier depuis les réglages de votre compte App Store. Les fonctionnalités et les tarifs peuvent évoluer avec préavis lorsque la loi l’exige.",
            "{name} est fourni à titre de guidance de coaching et ne remplace ni la formation professionnelle, ni les licences, ni le jugement professionnel. Vous restez responsable de tous les services rendus à vos clients.",
            "Contactez {email} pour toute question concernant ces conditions.",
          ],
        },
      ],
    },
  },
};
