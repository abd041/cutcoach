import { images } from "@/lib/images";
import type { AudienceContentPack } from "@/lib/data/audience/types";

export const barberContentFr: AudienceContentPack = {
  navLinks: [
    { label: "Comment CutCoach fonctionne", href: "#how-it-works" },
    { label: "Vrais bénéfices", href: "#features" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Avis des barbers", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  footerLinks: [
    { label: "Comment CutCoach fonctionne", href: "#how-it-works" },
    { label: "Vrais bénéfices", href: "#features" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Avis des barbers", href: "#testimonials" },
  ],
  hero: {
    headline: "Coupez plus vite. Restez réguliers.",
    headlineAccent: "Gagnez une vraie confiance.",
    subtext:
      "Coaching de coupe IA pour barbers et étudiants — guidage en direct, analyse de coupe, revue par upload vidéo et suivi de progression, sans têtes à perruque ni approximations.",
    cta: "Commencez à vous entraîner plus intelligemment",
    secondaryCta: "Voir comment ça marche",
    eyebrow: "Coaching de coupe IA",
    eyebrowSecondary: "iOS + Lunettes connectées",
    screens: [
      { src: images.guidedSession, alt: "Écran de séance guidée" },
      { src: images.liveCutGuidance, alt: "Guidage de coupe en direct" },
      { src: images.liveAiSupport, alt: "Support de coaching IA" },
    ],
    sideScreens: [
      { src: images.liveCutGuidance, alt: "Guidage de coupe en direct", side: "left" },
      { src: images.liveAiSupport, alt: "Support IA en direct", side: "right" },
    ],
  },
  trustBar: {
    columnStart: "Commencer",
    columnMetrics: "Ce que vous obtenez",
    columnProof: "Pour qui",
    iosPill: "Gratuit sur iOS",
    downloadNote: "Sans carte · 25 crédits gratuits à l'inscription",
    trustedLabel: "Approuvé par les barbers",
    quote: "Enfin un entraînement au rythme du salon.",
    mission:
      "Conçu pour la pression du salon — coaching IA, développement des compétences et résumés Client Passport derrière la chaise.",
    earlyAccess: "Rejoignez les barbers et étudiants qui s'entraînent plus intelligemment avec CutCoach.",
    avatars: ["JM", "TD", "KR", "AL"],
    avatarLabel: "Barbers en accès anticipé",
  },
  stats: [
    { value: 25, suffix: "+", label: "Crédits gratuits" },
    { value: 150, suffix: "", label: "Crédits mensuels" },
    { value: 2, suffix: " min", label: "Pour commencer l'entraînement" },
  ],
  featureSection: {
    tag: "Pourquoi CutCoach fonctionne",
    heading: "Un coaching IA qui élève",
    headingAccent: "Chaque coupe",
    description:
      "Coaching de coupe IA, analyse, revue vidéo et suivi de progression — pour que chaque séance client réelle développe vos compétences.",
    pillars: ["Coaching", "Analyse", "Progression"],
  },
  features: [
    {
      title: "Coaching de coupe IA",
      description:
        "Coaching en direct pendant les séances réelles — structure, rythme et confiance sans vous arrêter pour hésiter.",
      highlights: [
        "Guidage en temps réel derrière la chaise",
        "Repères de workflow via lunettes connectées",
        "Apprentissage étudiant intégré à chaque coupe",
      ],
      image: images.liveAiSupport,
      bgImage: images.featureBg1,
      callouts: [
        { label: "Score de séance", value: "87" },
        { label: "Coaching", value: "En direct", live: true },
      ],
    },
    {
      title: "Workflow lunettes connectées",
      description:
        "Restez dans les temps et maîtrisez les sections complexes grâce à des repères discrets, mains libres.",
      highlights: [
        "Rythme mains libres via lunettes connectées",
        "Rappels de structure section par section",
        "Moins d'hésitation, flux plus fluide",
      ],
      image: images.liveCutGuidance,
      bgImage: images.featureBg2,
      callouts: [
        { label: "Fade gauche", value: "4:12" },
        { label: "Repère", value: "Actif", live: true },
      ],
    },
    {
      title: "Analyse et suivi de progression",
      description:
        "Analyse de coupe, revue par upload vidéo et résumés IA Client Passport pour que le développement des compétences s'accumule dans le temps.",
      highlights: [
        "Analyse de coupe après chaque séance",
        "Analyse vidéo uploadée et suivi de progression",
        "Résumés IA Client Passport",
      ],
      image: images.guidedSession,
      bgImage: images.leftCard,
      callouts: [
        { label: "Analyse", value: "Prête", live: true },
        { label: "Progression", value: "Suivie" },
      ],
    },
  ],
  howItWorksSection: {
    tag: "Comment CutCoach fonctionne",
    heading: "Entraînez-vous plus vite sur",
    headingAccent: "De vrais clients",
    description:
      "Trois phases. Un seul workflow. Coaching, analyse et développement des compétences du premier clip à la revue finale.",
    pillars: ["Avant", "Pendant", "Après"],
  },
  steps: [
    {
      number: "Étape 01",
      phase: "Avant la coupe",
      title: "Lancez une séance guidée",
      description:
        "Démarrez le coaching de coupe IA en moins de deux minutes — un plan clair avant le premier clip.",
      highlights: [
        "Activation en un tap sur iOS",
        "Structure de séance adaptée aux étudiants",
        "Confiance avant que le client s'assoie",
      ],
      tags: ["Démarrer la séance", "Voir le plan de séance"],
      icon: images.step1Icon,
      callouts: [
        { label: "Plan de séance", value: "Prêt", live: true },
        { label: "Configuration", value: "2 min" },
      ],
    },
    {
      number: "Étape 02",
      phase: "Pendant la coupe",
      title: "Coupez avec un guidage IA en direct",
      description:
        "Les repères de workflow via lunettes connectées vous gardent dans le rythme à chaque section de la coupe.",
      highlights: [
        "Rythme en direct via lunettes connectées",
        "Rappels de workflow par section",
        "Développement des compétences en temps réel",
      ],
      tags: ["Garder le rythme", "Voir les métriques live"],
      icon: images.step2Icon,
      callouts: [
        { label: "Fade gauche", value: "4:12" },
        { label: "Repère", value: "Actif", live: true },
      ],
    },
    {
      number: "Étape 03",
      phase: "Après la coupe",
      title: "Analysez, uploadez et progressez",
      description:
        "Analyse de coupe, revue par upload vidéo, suivi de progression et résumés IA Client Passport.",
      highlights: [
        "Analyse de coupe et détail du rythme",
        "Analyse de la vidéo uploadée",
        "Suivi de progression après chaque coupe",
      ],
      tags: ["Voir l'analyse", "Suivre la progression"],
      icon: images.step3Icon,
      callouts: [
        { label: "Score de séance", value: "87" },
        { label: "Insights", value: "Prêts", live: true },
      ],
    },
  ],
  compatibilitySection: {
    tag: "Compatible avec n’importe quelle marque",
    heading: "Fonctionne avec les outils",
    headingAccent: "que vous utilisez déjà",
    description:
      "CutCoach est neutre vis-à-vis des marques et s’intègre naturellement au flux de travail de tout barber, quels que soient les outils qu’il préfère.",
    pillars: ["Tondeuses", "Ciseaux", "Lunettes", "IA"],
  },
  compatibilityPlatforms: [
    {
      label: "Outils du salon",
      description:
        "Tondeuses, finition, sabots, ciseaux et peignes — ce que vous utilisez déjà au quotidien.",
    },
    {
      label: "Lunettes connectées",
      description:
        "Repères de rythme en direct pendant que vous coupez — les mains restent sur le client.",
    },
    {
      label: "Application mobile",
      description:
        "Lancez des séances de coaching depuis votre iPhone en moins de 2 minutes.",
    },
    {
      label: "IA + cloud sécurisé",
      description:
        "Séances privées, analyses et résumés Client Passport — neutre par conception.",
    },
  ],
  testimonialsSection: {
    tag: "Vrais avis de barbers",
    heading: "Les barbers s'entraînent déjà",
    headingAccent: "Plus intelligemment",
    description:
      "Des barbers en accès anticipé testent le coaching IA, l'analyse et le suivi de progression dans de vrais salons.",
    pillars: ["Vitesse", "Régularité", "Confiance"],
    storiesComingSoon: "Histoires complètes de barbers — Bientôt disponible",
    cta: "Commencez à vous entraîner plus intelligemment",
  },
  testimonialPreviewThemes: [
    {
      title: "Séances plus rapides",
      description:
        "Des barbers qui suivent leurs gains de rythme sur des journées clients enchaînées — moins de temps mort entre les sections, un flux plus fluide.",
      metric: "Vitesse",
      outcome: "Rythme suivi par section",
    },
    {
      title: "Structure régulière",
      description:
        "Des repères de workflow via lunettes connectées qui aident à rester dans les temps à chaque coupe — le même rythme, pour chaque client.",
      metric: "Régularité",
      outcome: "Repères de workflow à chaque coupe",
    },
    {
      title: "Développement des compétences",
      description:
        "Analyse de coupe et suivi de progression qui bâtissent la confiance derrière la chaise avec de vrais clients.",
      metric: "Confiance",
      outcome: "Progression après chaque coupe",
    },
  ],
  pricing: {
    section: {
      tag: "Abonnement",
      heading: "Choisissez",
      headingAccent: "Votre offre CutCoach",
      description:
        "Démarrez le coaching de coupe IA, l'analyse et le suivi de progression conçus pour les séances clients réelles.",
      pillars: ["Démarrage gratuit", "Offre Pro", "Packs de crédits"],
      footnote:
        "Toutes les offres incluent un stockage sécurisé des séances et l'accès iOS. Les packs de crédits sont des achats uniques.",
    },
    showBillingToggle: true,
    plans: [
      {
        name: "Starter gratuit",
        description: "Pour les nouveaux barbers et étudiants qui testent CutCoach.",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        free: true,
        cta: "Commencez à vous entraîner plus intelligemment",
        features: [
          "25 crédits gratuits à l'inscription",
          "Accès à l'onglet Apprendre",
          "Chat Coach IA",
          "Guidage de coupe de base",
        ],
      },
      {
        name: "CutCoach Pro",
        description: "Idéal pour les barbers et étudiants qui s'entraînent chaque semaine.",
        monthlyPrice: "$29.99",
        yearlyPrice: "$305.90",
        yearlyEquivalent: "Équivaut à seulement 25,49 $/mois",
        cta: "Commencez à vous entraîner plus intelligemment",
        highlighted: true,
        badge: "Le plus populaire",
        features: [
          "150 crédits chaque mois",
          "Chat Coach IA",
          "Analyse de coupe",
          "Analyse vidéo uploadée et suivi de progression",
          "Résumés IA Client Passport",
        ],
      },
    ],
    creditPacksTitle: "Packs de crédits",
    creditPacksDescription:
      "Achats uniques. Pour les barbers qui ont besoin de crédits IA supplémentaires — sans abonnement.",
    creditPacks: [
      { credits: 50, price: "$9.99" },
      { credits: 150, price: "$24.99" },
      { credits: 500, price: "$69.99" },
    ],
  },
  faqSection: {
    tag: "Questions CutCoach",
    heading: "Tout ce que les barbers",
    headingAccent: "Veulent savoir",
    description:
      "Des réponses concrètes sur le coaching IA, l'analyse, les lunettes connectées et le développement des compétences.",
    pillars: ["Premiers pas", "Confidentialité", "Facturation"],
  },
  faqItems: [
    {
      question: "Comment CutCoach aide-t-il vraiment pendant une coupe ?",
      answer:
        "CutCoach offre un coaching de coupe IA en temps réel pendant que vous coupez. Les repères de workflow via lunettes connectées vous aident à avancer section par section avec structure, à rester dans les temps et à réduire l'hésitation. Après la coupe, l'analyse et le suivi de progression montrent où vous avez gagné ou perdu du temps.",
    },
    {
      question: "CutCoach est-il destiné aux étudiants comme aux barbers en activité ?",
      answer:
        "Oui. L'apprentissage étudiant et le développement des compétences sont intégrés — séances guidées, analyse et revue par upload vidéo vous aident à progresser sur de vrais clients, pas seulement sur des têtes à perruque.",
    },
    {
      question: "Mes enregistrements de coupe et données de performance sont-ils privés ?",
      answer:
        "Oui. Vos séances, uploads vidéo et insights de performance restent privés à votre compte. CutCoach utilise un stockage sécurisé et ne partage ni les images de vos clients ni vos données de performance.",
    },
    {
      question: "En combien de temps puis-je commencer à m'entraîner avec CutCoach ?",
      answer:
        "La plupart des barbers peuvent démarrer une séance guidée en moins de 2 minutes. Sélectionnez le type de cheveux, choisissez une structure de coupe, connectez vos lunettes et commencez à couper.",
    },
    {
      question: "Que sont les résumés IA Client Passport ?",
      answer:
        "Après les séances, CutCoach peut générer des résumés IA qui vous aident à communiquer plus clairement les préférences et résultats de coupe — utiles pour votre propre progression et pour la continuité client.",
    },
  ],
  finalCta: {
    heading: "Prêt à faire monter",
    headingAccent: "Le niveau de vos coupes ?",
    primaryCta: "Commencez à vous entraîner plus intelligemment",
    secondaryCta: "Voir comment CutCoach fonctionne",
  },
  footerDescription:
    "Coaching de coupe IA pour barbers et étudiants — analyse, revue vidéo, suivi de progression et workflow lunettes connectées conçus pour la vraie pression du salon.",
  mobileHighlights: [
    { title: "Coaching IA", subtitle: "Séances en direct", live: true },
    { title: "Analyse", subtitle: "Vidéo + Progression" },
    { title: "Lunettes connectées", subtitle: "Repères mains libres" },
  ],
};
