import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const clientContentFr: AudienceContentPack = {
  navLinks: [
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Vos bénéfices", href: "#features" },
    { label: "Client Passport", href: "#pricing" },
    { label: "Histoires clients", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Vos bénéfices", href: "#features" },
    { label: "Client Passport", href: "#pricing" },
    { label: "Histoires clients", href: "#testimonials" },
  ],
  hero: {
    headline: "N'expliquez plus jamais votre coupe",
    headlineAccent: "Depuis le début.",
    subtext:
      "Votre Client Passport enregistre vos préférences de coupe, photos, historique et notes du barber pour que chaque barber commence avec clarté.",
    cta: "Créez votre Client Passport gratuit",
    secondaryCta: "Voir comment ça marche",
    eyebrow: "Plus jamais de mauvaise coupe",
    eyebrowSecondary: "Gratuit pour toujours · Sans carte",
  },
  trustBar: {
    columnStart: "Commencer",
    columnMetrics: "Ce que vous obtenez",
    columnProof: "Pour qui",
    iosPill: "Gratuit sur iOS",
    downloadNote: "Entièrement gratuit · Sans abonnement",
    trustedLabel: "Prêt pour les clients",
    quote: "Enfin, je n'explique plus jamais ma coupe depuis le début.",
    mission:
      "Préférences, historique, profil QR, styles favoris, notes du barber et photos avant & après — pour que n'importe quel barber commence avec clarté.",
    earlyAccess: "Rejoignez les clients qui construisent leur Client Passport CutCoach.",
    avatars: ["AS", "MR", "JL", "DK"],
    avatarLabel: "Clients en accès anticipé",
  },
  stats: [
    { value: 0, suffix: "", label: "Coût pour toujours" },
    { value: 1, suffix: "", label: "Profil QR" },
    { value: 2, suffix: " min", label: "Pour configurer" },
  ],
  featureSection: {
    tag: "Pourquoi les clients l'adorent",
    heading: "Plus jamais de",
    headingAccent: "Mauvaise coupe",
    description:
      "Client Passport garde préférences, historique, photos et notes prêts — pour que la communication avec n'importe quel barber commence clairement.",
    pillars: ["Préférences", "Historique", "Clarté"],
  },
  features: [
    {
      title: "Préférences de coupe et styles favoris",
      description:
        "Enregistrez les coupes, fades et styles favoris qui définissent votre look — toujours prêts pour la prochaine chaise.",
      highlights: [
        "Préférences de coupe en un seul endroit",
        "Styles favoris que vous pouvez retrouver",
        "Résumés IA de vos préférences",
      ],
      image: images.liveAiSupport,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Préférences", value: "Enregistrées", live: true },
        { label: "Styles", value: "Prêts" },
      ],
    },
    {
      title: "Historique, photos et notes du barber",
      description:
        "Historique de coupe, photos avant & après et notes du barber pour que chaque visite s'appuie sur la précédente — pas sur une page blanche.",
      highlights: [
        "Un historique de coupe qui vous suit",
        "Photos avant & après",
        "Des notes du barber que vous conservez",
      ],
      image: images.liveCutGuidance,
      bgImage: images.featureBg2,
      callouts: [
        { label: "Historique", value: "Au dossier" },
        { label: "Photos", value: "Enregistrées", live: true },
      ],
    },
    {
      title: "Profil QR pour n'importe quel barber",
      description:
        "Partagez votre Client Passport avec un profil QR pour que n'importe quel barber ait de la clarté — meilleure communication, moins de approximations.",
      highlights: [
        "Profil QR à la chaise",
        "Meilleure communication avec n'importe quel barber",
        "Configuration gratuite — sans abonnement",
      ],
      image: images.guidedSession,
      bgImage: images.leftCard,
      callouts: [
        { label: "Profil QR", value: "Prêt", live: true },
        { label: "Coût", value: "Gratuit" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "Comment Client Passport fonctionne",
    heading: "Votre look,",
    headingAccent: "Toujours clair",
    description:
      "Trois étapes. Un seul passport. Préférences, photos et notes pour ne plus jamais expliquer depuis le début.",
    pillars: ["Créer", "Partager", "Affiner"],
  },
  steps: [
    {
      number: "Étape 01",
      phase: "Créez votre profil",
      title: "Construisez votre Client Passport",
      description:
        "Ajoutez préférences de coupe, styles favoris et photos en moins de deux minutes — gratuit pour toujours.",
      highlights: [
        "Préférences de coupe et styles favoris",
        "Photos avant & après",
        "Entièrement gratuit — sans abonnement",
      ],
      tags: ["Créer le Passport", "Ajouter des préférences"],
      icon: images.step1Icon,
      callouts: [
        { label: "Passport", value: "Prêt", live: true },
        { label: "Coût", value: "Gratuit" },
      ],
    },
    {
      number: "Étape 02",
      phase: "À la chaise",
      title: "Partagez votre profil QR",
      description:
        "Montrez votre profil QR pour que n'importe quel barber voie préférences, historique et notes avec clarté.",
      highlights: [
        "Partage du profil QR à la chaise",
        "Meilleure communication avec n'importe quel barber",
        "Moins de réexplications depuis le début",
      ],
      tags: ["Montrer le QR", "Confirmer le style"],
      icon: images.step2Icon,
      callouts: [
        { label: "QR", value: "En direct", live: true },
        { label: "Clarté", value: "Élevée" },
      ],
    },
    {
      number: "Étape 03",
      phase: "Après la coupe",
      title: "Gardez historique et notes à jour",
      description:
        "Mettez à jour notes du barber, photos et résumés IA des préférences pour que la prochaine visite commence encore plus clairement.",
      highlights: [
        "Historique de coupe et notes du barber",
        "Mises à jour des photos avant & après",
        "Résumés IA de vos préférences",
      ],
      tags: ["Mettre à jour les notes", "Voir l'historique"],
      icon: images.step3Icon,
      callouts: [
        { label: "Historique", value: "Enregistré", live: true },
        { label: "Prochaine visite", value: "Prête" },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Fonctionne avec vos visites",
    heading: "Partagez clairement,",
    headingAccent: "Gardez le contrôle",
    description:
      "Client Passport vit sur iOS avec un profil QR que vous contrôlez — préférences et photos voyagent avec vous, pas en captures éparpillées.",
    pillars: ["iOS", "Profil QR", "Privé", "Cloud"],
  },
  compatibilityPlatforms: [
    {
      label: "App iOS",
      description: "Créez et mettez à jour votre passport depuis votre iPhone.",
    },
    {
      label: "Profil QR",
      description: "Partagez vos préférences avec n'importe quel barber en un scan.",
    },
    {
      label: "Privé par défaut",
      description: "Les détails de votre coupe restent les vôtres — partagez uniquement quand vous le choisissez.",
    },
    {
      label: "Cloud sécurisé",
      description: "Stockage chiffré pour préférences, photos et notes.",
    },
  ],
  testimonialsSection: {
    tag: "Résultats clients",
    heading: "Les clients veulent",
    headingAccent: "Des coupes régulières",
    description:
      "N'expliquez plus jamais depuis le début — préférences, historique et une communication plus claire avec n'importe quel barber.",
    pillars: ["Clarté", "Régularité", "Contrôle"],
    storiesComingSoon: "Histoires clients complètes — Bientôt disponible",
    cta: "Créez votre Client Passport gratuit",
  },
  testimonialPreviewThemes: [
    {
      title: "Plus jamais depuis le début",
      description:
        "Préférences, styles favoris et historique prêts à la chaise — pour arrêter de répéter votre coupe à chaque visite.",
      metric: "Clarté",
      outcome: "Préférences prêtes pour n'importe quel barber",
    },
    {
      title: "Photos et notes qui restent",
      description:
        "Photos avant & après et notes du barber gardent votre look aligné visite après visite.",
      metric: "Régularité",
      outcome: "Un historique et des photos qui vous suivent",
    },
    {
      title: "Clarté QR, votre contrôle",
      description:
        "Partagez votre profil QR quand vous êtes prêt — meilleure communication avec n'importe quel barber, gratuit pour toujours.",
      metric: "Contrôle",
      outcome: "Partagez selon vos conditions",
    },
  ],
  pricing: {
    section: {
      tag: "Client Passport",
      heading: "Entièrement",
      headingAccent: "Gratuit",
      description:
        "Client Passport est gratuit pour toujours. Pas d'abonnement. Aucun tarif payant tant que de futures mises à jour n'arrivent.",
      pillars: ["Gratuit pour toujours", "Sans carte", "Sans abonnement"],
      footnote:
        "Des fonctionnalités clients payantes pourront arriver plus tard — le Passport reste gratuit pour l'instant.",
    },
    showBillingToggle: false,
    plans: [],
    freeProduct: {
      name: "Client Passport",
      badge: "Entièrement gratuit",
      description:
        "Préférences de coupe, photos, historique, notes du barber et un profil QR — sans abonnement.",
      features: [
        "Sans abonnement",
        "Préférences de coupe et styles favoris",
        "Historique de coupe et photos avant/après",
        "Profil QR + notes du barber",
        "Résumés IA de vos préférences",
      ],
      cta: "Créez votre Client Passport gratuit",
    },
  },
  faqSection: {
    tag: "Questions clients",
    heading: "Tout ce que les clients",
    headingAccent: "Veulent savoir",
    description:
      "Des réponses directes sur Client Passport, les profils QR et le fait de ne plus jamais expliquer depuis le début.",
    pillars: ["Premiers pas", "Confidentialité", "Tarifs"],
  },
  faqItems: [
    {
      question: "Qu'est-ce que Client Passport ?",
      answer:
        "Client Passport enregistre vos préférences de coupe, styles favoris, historique, photos avant & après et notes du barber — plus des résumés IA — pour que chaque barber commence avec clarté.",
    },
    {
      question: "Comment fonctionne le profil QR ?",
      answer:
        "Votre passport inclut un profil QR que vous pouvez montrer à la chaise. N'importe quel barber peut le scanner pour voir les préférences et le contexte que vous choisissez de partager.",
    },
    {
      question: "Client Passport est-il vraiment gratuit ?",
      answer:
        "Oui. Client Passport est entièrement gratuit, sans abonnement. Aucun tarif payant n'est affiché tant que de futures mises à jour n'arrivent.",
    },
    {
      question: "Dois-je partager mon profil avec chaque barber ?",
      answer:
        "Non. Vous contrôlez quand et si vous partagez. Votre passport reste privé jusqu'à ce que vous choisissiez d'afficher votre profil QR.",
    },
    {
      question: "Est-ce que cela m'aidera à éviter les mauvaises coupes ?",
      answer:
        "C'est l'objectif. Des préférences claires, des photos, un historique et des notes signifient une meilleure communication avec n'importe quel barber — pour ne plus expliquer votre coupe depuis le début à chaque fois.",
    },
  ],
  finalCta: {
    heading: "N'expliquez plus jamais",
    headingAccent: "Depuis le début",
    primaryCta: "Créez votre Client Passport gratuit",
    secondaryCta: "Voir comment ça marche",
  },
  footerDescription:
    "Client Passport garde préférences, photos, historique et notes du barber prêts — pour que chaque barber commence avec clarté.",
  mobileHighlights: [
    { title: "Client Passport", subtitle: "Gratuit pour toujours", live: true },
    { title: "Profil QR", subtitle: "N'importe quel barber" },
    { title: "Préférences", subtitle: "Photos + Notes" },
  ],
};
