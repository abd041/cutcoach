import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const clientContentFr: AudienceContentPack = {
  navLinks: [
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Barber", href: "#features", audience: "barber" },
    { label: "Client Passport", href: "#features", audience: "client" },
    { label: "Tarifs", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Barber", href: "#features", audience: "barber" },
    { label: "Client Passport", href: "#features", audience: "client" },
    { label: "Tarifs", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    headline: "Des coupes plus régulières",
    headlineAccent: "Avec Client Passport.",
    subtext:
      "Un Client Passport gratuit vous aide à conserver préférences, photos et historique — conçu pour faciliter la communication avec n'importe quel barber.",
    cta: "Créez votre Client Passport gratuit",
    secondaryCta: "Voir comment ça marche",
    eyebrow: "Client Passport",
    eyebrowSecondary: "Gratuit pour toujours · Sans carte",
    screens: [
      { src: images.clientPassportMyQr, alt: "Profil QR Client Passport" },
      { src: images.clientPassportPreferences, alt: "Préférences et historique de coupe" },
      { src: images.clientPassportWelcome, alt: "Créez votre Client Passport" },
    ],
    sideScreens: [
      {
        src: images.clientPassportPreferences,
        alt: "Préférences et historique enregistrés",
        side: "left",
      },
      {
        src: images.clientPassportMyQr,
        alt: "Profil QR pour n'importe quel barber",
        side: "right",
      },
    ],
  },
  trustBar: {
    columnStart: "Commencer",
    columnMetrics: "Ce que vous obtenez",
    columnProof: "Pour qui",
    iosPill: "Gratuit sur iOS",
    downloadNote: "Entièrement gratuit · Sans abonnement",
    trustedLabel: "Conçu pour les clients",
    quote: "Enfin, un moyen d'éviter d'expliquer ma coupe depuis le début.",
    mission:
      "Préférences, historique, profil QR, styles favoris, notes du barber et photos avant & après — conçu pour aider n'importe quel barber à commencer avec plus de clarté.",
    earlyAccess: "Rejoignez les clients qui construisent leur Client Passport CutCoach.",
    avatars: ["AS", "MR", "JL", "DK"],
    avatarLabel: "Clients en accès anticipé",
  },
  stats: [
    { value: 0, suffix: "", label: "Coût pour toujours", display: "GRATUIT" },
    { value: 1, suffix: "", label: "Profil QR" },
    { value: 2, suffix: " min", label: "Pour configurer" },
  ],
  featureSection: {
    tag: "Comment Client Passport aide",
    heading: "Conçu pour vous aider",
    headingAccent: "À communiquer clairement",
    description:
      "Client Passport garde préférences, historique, photos et notes prêts — conçu pour faciliter la communication avec n'importe quel barber dès le départ.",
    pillars: ["Préférences", "Historique", "Clarté"],
  },
  features: [
    {
      title: "Préférences de coupe et styles favoris",
      description:
        "Enregistrez les coupes, fades et styles favoris qui définissent votre look — prêts pour votre prochaine visite.",
      highlights: [
        "Préférences de coupe en un seul endroit",
        "Styles favoris que vous pouvez retrouver",
        "Résumés IA de vos préférences",
      ],
      image: images.clientPassportPreferences,
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
      image: images.clientPassportWelcome,
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
      image: images.clientPassportMyQr,
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
    headingAccent: "Plus facile à partager",
    description:
      "Trois étapes. Un seul passport. Préférences, photos et notes conçus pour faciliter le partage de l'essentiel.",
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
      screen: images.clientPassportWelcome,
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
      screen: images.clientPassportMyQr,
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
      screen: images.clientPassportPreferences,
      callouts: [
        { label: "Historique", value: "Enregistré", live: true },
        { label: "Prochaine visite", value: "Prête" },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Conçu pour de vraies visites",
    heading: "Fonctionne avec les outils",
    headingAccent: "que vous utilisez déjà",
    description:
      "CutCoach est neutre vis-à-vis des marques et s’intègre naturellement au flux de travail de tout barber, quels que soient les outils qu’il préfère.",
    pillars: ["Passport", "QR", "Photos", "Cloud"],
  },
  compatibilityPlatforms: [
    {
      label: "Application mobile",
      description: "Créez et mettez à jour votre Client Passport depuis votre iPhone.",
    },
    {
      label: "Profil QR",
      description: "Partagez vos préférences avec n’importe quel barber en un scan.",
    },
    {
      label: "Résumés IA",
      description:
        "Des résumés de préférences clairs pour une communication plus fluide à chaque visite.",
    },
    {
      label: "Cloud sécurisé",
      description:
        "Stockage chiffré pour préférences, photos et notes — sans dépendance à une marque de tondeuse.",
    },
  ],
  testimonialsSection: {
    tag: "Ce que explorent les clients",
    heading: "Conçu pour aider les clients",
    headingAccent: "À partager leurs préférences clairement",
    description:
      "Conçu pour faciliter le partage des préférences, de l'historique et du contexte avec n'importe quel barber — sans repartir de zéro à chaque visite.",
    pillars: ["Clarté", "Régularité", "Contrôle"],
    storiesComingSoon: "Histoires clients complètes — Bientôt disponible",
    cta: "Créez votre Client Passport gratuit",
  },
  testimonialPreviewThemes: [
    {
      title: "Moins d'explications depuis le début",
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
        "Partagez votre profil QR quand vous êtes prêt — conçu pour soutenir une communication plus claire avec n'importe quel barber, gratuit à utiliser.",
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
      priceLabel: "GRATUIT",
      description:
        "Préférences de coupe, photos, historique, notes du barber et un profil QR — sans abonnement.",
      features: [
        "Enregistrez vos préférences de coupe",
        "Profil QR",
        "Historique de coupe",
        "Photos d'inspiration",
        "Notes du barber",
        "Résumés IA",
        "Fonctionne avec n'importe quel barber",
      ],
      cta: "Créez votre Client Passport gratuit",
    },
  },
  faqSection: {
    tag: "Questions clients",
    heading: "Tout ce que les clients",
    headingAccent: "Veulent savoir",
    description:
      "Des réponses directes sur Client Passport, les profils QR et le partage plus facile de vos préférences.",
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
        "C'est l'objectif — pas une garantie. Des préférences claires, des photos, un historique et des notes sont conçus pour soutenir une meilleure communication avec n'importe quel barber, afin que vous ayez moins souvent à expliquer votre coupe depuis le début.",
    },
    {
      question: "Puis-je l'utiliser avec n'importe quel barber ?",
      answer:
        "Oui. L'objectif est de rendre vos préférences de coupe portables et faciles à partager.",
    },
    {
      question: "CutCoach prend-il des rendez-vous ?",
      answer:
        "Non. Il se concentre sur la mémoire de coupe, la communication et le coaching IA plutôt que sur la prise de rendez-vous.",
    },
  ],
  finalCta: {
    heading: "Prêt à partager",
    headingAccent: "Vos préférences ?",
    primaryCta: "Créez votre Client Passport gratuit",
    secondaryCta: "Voir comment ça marche",
  },
  footerDescription:
    "Client Passport mémorise préférences, historique, photos d’inspiration et notes — pour que chaque barber commence avec clarté.",
  mobileHighlights: [
    { title: "Préférences", subtitle: "Prêtes quand vous en avez besoin", live: true },
    { title: "Historique", subtitle: "Photos d’inspiration" },
    { title: "Notes", subtitle: "Chaque visite" },
  ],
};
