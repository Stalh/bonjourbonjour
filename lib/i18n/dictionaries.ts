import type { Locale } from './config';

export type NavigationLink = {
  href: string;
  label: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    logo: {
      primary: string;
      secondary: string;
    };
    links: NavigationLink[];
    cta: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string[];
      emphasis: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    stats: {
      value: string;
      label: string;
    }[];
    values: {
      title: string;
      description: string;
    }[];
    trust: {
      title: string;
      description: string;
      button: string;
    };
  };
  methodology: {
    hero: {
      title: string[];
      description: string;
    };
    stepLabel: string;
    steps: {
      title: string;
      description: string;
      details: string[];
    }[];
    cta: {
      title: string[];
      description: string;
      button: string;
    };
  };
  expertise: {
    hero: {
      title: string[];
      description: string;
    };
    featuresLabel: string;
    areas: {
      title: string;
      description: string;
      features: string[];
    }[];
    stats: {
      value: string;
      label: string;
    }[];
    cta: {
      title: string[];
      description: string;
      button: string;
    };
  };
  team: {
    hero: {
      title: string[];
      description: string;
    };
    valuesHeading: string;
    founder: {
      name: string;
      role: string;
      biography: string[];
      highlights: string[];
    };
    achievements: {
      title: string;
      description: string;
    }[];
    values: {
      title: string;
      description: string;
    }[];
    cta: {
      title: string[];
      description: string;
      button: string;
    };
  };
  founder: {
    hero: {
      eyebrow: string;
      title: string[];
      summary: string;
      paragraphs: string[];
    };
    experience: {
      eyebrow: string;
      title: string[];
      entries: {
        period: string;
        title: string;
        company: string;
        description: string;
      }[];
    };
    philosophy: {
      eyebrow: string;
      title: string[];
      quotes: string[];
      certifications: {
        title: string;
        items: {
          name: string;
          detail: string;
        }[];
      };
      engagement: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string[];
      description: string;
      button: string;
    };
  };
  contact: {
    hero: {
      eyebrow: string;
      title: string[];
      description: string;
    };
    info: {
      duration: {
        title: string;
        description: string;
      };
      location: {
        title: string;
        description: string;
      };
      confidentiality: {
        title: string;
        description: string;
      };
      details: {
        phone: string;
        email: string;
        address: string;
      };
    };
    form: {
      heading: string;
      personalTitle: string;
      fields: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        wealthObjectives: string;
        objectivePlaceholder: string;
      };
      availabilityTitle: string;
      dateLabel: string;
      timeLabel: string;
      submit: string;
      confirmation: {
        title: string[];
        description: string;
        nextStepsTitle: string;
        steps: {
          title: string;
          description: string;
        }[];
        backHome: string;
      };
    };
  };
  footer: {
    title: string;
    description: string;
    address: string;
    city: string;
    phoneLabel: string;
    phoneAvailability: string;
    emailLabel: string;
    emailAvailability: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    copyright: string;
  };
};

const fr: Dictionary = {
  metadata: {
    title: 'Harrison & Associés',
    description:
      "Cabinet indépendant de gestion de patrimoine dédié aux familles et entrepreneurs exigeants."
  },
  navigation: {
    logo: {
      primary: 'HARRISON',
      secondary: '& ASSOCIÉS'
    },
    links: [
      { href: '/', label: 'Accueil' },
      { href: '/methodology', label: 'Méthodologie' },
      { href: '/expertise', label: "Expertise" },
      { href: '/team', label: 'Équipe' },
      { href: '/founder', label: 'Fondateur' },
      { href: '/contact', label: 'Contact' }
    ],
    cta: 'Prendre rendez-vous'
  },
  home: {
    hero: {
      eyebrow: 'Gestion de Patrimoine',
      title: ['Protéger, développer et transmettre', 'votre patrimoine.'],
      emphasis: 'Votre patrimoine mérite une stratégie sur-mesure.',
      description:
        "Une approche traditionnelle et éprouvée de la gestion de patrimoine, au service des familles et entrepreneurs exigeants.",
      primaryCta: 'Planifier une consultation',
      secondaryCta: 'Découvrir notre approche'
    },
    stats: [
      { value: '15+', label: "Années d'expérience" },
      { value: '12%', label: 'Croissance annuelle moyenne' },
      { value: '50+', label: 'Familles accompagnées' }
    ],
    values: [
      {
        title: 'Indépendance',
        description:
          "Nous fournissons des conseils impartiaux et transparents, libres de tout conflit d'intérêts."
      },
      {
        title: 'Performance',
        description:
          "Une gestion disciplinée et active pour optimiser le rendement ajusté au risque de vos actifs."
      },
      {
        title: 'Confidentialité',
        description:
          "Nos standards de discrétion garantissent la confidentialité absolue de vos informations."
      }
    ],
    trust: {
      title: ['Prêts à sécuriser votre avenir financier ?'],
      description:
        "Planifions une consultation confidentielle pour analyser vos objectifs patrimoniaux et définir les stratégies adaptées.",
      button: 'Planifier une consultation'
    }
  },
  methodology: {
    hero: {
      title: ['Notre méthodologie éprouvée'],
      description:
        "Un processus structuré et rigoureux pour comprendre votre situation, concevoir une stratégie personnalisée et l'ajuster dans la durée."
    },
    stepLabel: 'Étape',
    steps: [
      {
        title: 'Diagnostic complet',
        description:
          'Analyse approfondie de votre situation financière, de vos objectifs et de votre environnement familial.',
        details: [
          'Audit patrimonial complet et identification des objectifs',
          'Profil de risque et cartographie des enjeux familiaux',
          'Analyse de la structure patrimoniale existante',
          'Évaluation des stratégies financières en place'
        ]
      },
      {
        title: 'Planification stratégique',
        description:
          'Élaboration d’une stratégie sur-mesure alignée sur vos ambitions et votre horizon temporel.',
        details: [
          'Construction de la stratégie d’investissement personnalisée',
          'Optimisation fiscale et préparation successorale',
          'Gestion des risques et couverture assurantielle',
          'Organisation de la transmission intergénérationnelle'
        ]
      },
      {
        title: 'Suivi continu',
        description:
          'Pilotage et ajustements réguliers pour préserver la performance et la conformité de votre patrimoine.',
        details: [
          'Rebalancement et optimisation périodique des portefeuilles',
          'Revues de performance trimestrielles et reporting détaillé',
          'Ajustements proactifs en fonction des marchés',
          'Communication continue et transparente'
        ]
      }
    ],
    cta: {
      title: ['Expérimentez notre processus'],
      description:
        'Réservez une consultation personnalisée pour bénéficier d’un accompagnement structuré et discret.',
      button: 'Démarrer votre accompagnement'
    }
  },
  expertise: {
    hero: {
      title: ['Nos expertises'],
      description:
        "Des compétences spécialisées couvrant l'ensemble des problématiques patrimoniales des familles fortunées."
    },
    featuresLabel: 'Services clés',
    areas: [
      {
        title: 'Gestion financière',
        description:
          'Allocation d’actifs sophistiquée sur les marchés cotés et non cotés pour optimiser la performance.',
        features: [
          'Construction et optimisation des portefeuilles',
          'Accès à des fonds privés et alternatifs',
          'Stratégies d’investissement responsables et ESG',
          'Gestion du risque et protection du capital',
          'Optimisation du rendement ajusté au risque'
        ]
      },
      {
        title: 'Structuration immobilière',
        description:
          'Structuration et financement d’investissements immobiliers résidentiels et commerciaux internationaux.',
        features: [
          'Stratégies d’acquisition internationales',
          'Création de structures de détention adaptées',
          'Analyse d’opportunités et due diligence',
          'Développement immobilier commercial',
          'Accompagnement sur les actifs résidentiels de prestige'
        ]
      },
      {
        title: 'Fiscalité & transmission',
        description:
          'Anticipation et optimisation des enjeux fiscaux et successoraux pour préserver votre héritage.',
        features: [
          'Structuration juridique et fiscale internationale',
          'Mise en place de trusts et fondations',
          'Planification successorale multi-juridictionnelle',
          'Transmission des entreprises familiales',
          'Stratégies de philanthropie et de mécénat'
        ]
      },
      {
        title: 'Retraite & protection',
        description:
          'Préparation de la retraite et couverture des risques pour assurer la pérennité du patrimoine.',
        features: [
          'Plans de retraite pour dirigeants et cadres',
          'Audit des couvertures assurantielles',
          'Préparation à la dépendance et à la prévoyance',
          'Optimisation des pensions et indemnités',
          'Protection du patrimoine familial'
        ]
      }
    ],
    stats: [
      { value: '8,5%', label: 'Performance annuelle moyenne' },
      { value: '€5M+', label: 'Patrimoine client moyen' },
      { value: '3', label: "Pays d'intervention" },
      { value: '100%', label: 'Clients satisfaits' }
    ],
    cta: {
      title: ['Découvrez comment notre expertise peut vous accompagner'],
      description:
        'Planifions un entretien pour analyser vos besoins spécifiques et bâtir une feuille de route patrimoniale.',
      button: 'Échanger avec un expert'
    }
  },
  team: {
    hero: {
      title: ['Rencontrez votre conseiller'],
      description:
        'Une équipe expérimentée qui comprend les enjeux de la gestion de patrimoine transgénérationnelle.'
    },
    valuesHeading: 'Nos valeurs',
    founder: {
      name: 'Michael Harrison',
      role: 'Fondateur & Conseiller principal',
      biography: [
        "Fort de 15 années d'expérience en gestion de patrimoine et banque privée, Michael a fondé Harrison & Associés pour offrir des conseils véritablement indépendants.",
        "Il a exercé au sein d’institutions financières de premier plan où il a développé une expertise reconnue en structuration patrimoniale et gestion d’actifs sophistiqués.",
        'Diplômé d’une grande école de commerce et titulaire de la certification CFA, il incarne les plus hauts standards fiduciaires.'
      ],
      highlights: ['CFA Charter', 'MBA Wharton', '15+ ans de carrière', 'Standard fiduciaire']
    },
    achievements: [
      {
        title: '15+ années d’expérience',
        description:
          'Direction d’équipes de gestion de patrimoine au sein d’institutions internationales de premier plan.'
      },
      {
        title: 'Formation d’excellence',
        description:
          'Diplômes de grandes écoles de commerce, certification CFA et formation continue spécialisée.'
      },
      {
        title: 'Standard fiduciaire',
        description:
          'Engagement d’agir dans l’intérêt exclusif des clients avec transparence totale.'
      },
      {
        title: 'Vision internationale',
        description:
          'Expérience en Europe, en Amérique du Nord et sur les marchés émergents.'
      }
    ],
    values: [
      {
        title: 'Confidentialité',
        description:
          'La discrétion absolue et la sécurité des informations clients guident chacune de nos décisions.'
      },
      {
        title: 'Indépendance',
        description:
          'Une liberté totale dans le choix des solutions recommandées, sans contraintes commerciales.'
      },
      {
        title: 'Performance',
        description:
          'Une recherche constante de rendement ajusté au risque, avec une vision long terme.'
      }
    ],
    cta: {
      title: ['Prêts à travailler ensemble ?'],
      description:
        'Découvrez la différence d’un accompagnement indépendant et personnalisé pour votre patrimoine.',
      button: 'Planifier un entretien'
    }
  },
  founder: {
    hero: {
      eyebrow: 'Fondateur & Directeur',
      title: ['James Harrison'],
      summary:
        "Expert en gestion de patrimoine avec plus de 15 années d'expérience auprès des familles patrimoniales européennes.",
      paragraphs: [
        'Diplômé de HEC Paris et titulaire du CFA, James Harrison a évolué au sein de banques de premier plan avant de créer Harrison & Associés.',
        'Son ambition : proposer un accompagnement réellement indépendant et hautement confidentiel pour les familles et entrepreneurs fortunés.'
      ]
    },
    experience: {
      eyebrow: 'Parcours professionnel',
      title: ['Une expertise reconnue'],
      entries: [
        {
          period: '2020 - Présent',
          title: 'Fondateur & Directeur',
          company: 'Harrison & Associés',
          description:
            'Création et développement du cabinet indépendant. Accompagnement sur-mesure des familles patrimoniales.'
        },
        {
          period: '2015 - 2020',
          title: 'Directeur adjoint gestion privée',
          company: 'Rothschild & Co Wealth Management',
          description:
            'Management d’une équipe de 12 conseillers et accompagnement des clients UHNWI et family offices.'
        },
        {
          period: '2010 - 2015',
          title: 'Conseiller patrimonial senior',
          company: 'BNP Paribas Wealth Management',
          description:
            'Développement d’un portefeuille patrimonial et expertise en structuration fiscale internationale.'
        },
        {
          period: '2008 - 2010',
          title: 'Analyste financier',
          company: 'Crédit Suisse',
          description:
            'Sélection d’investissements pour la clientèle privée et formation aux métiers de la gestion de fortune.'
        }
      ]
    },
    philosophy: {
      eyebrow: 'Vision & philosophie',
      title: ["L'indépendance au service de l'excellence"],
      quotes: [
        '« La gestion de patrimoine commence par la compréhension des enjeux familiaux et personnels. Chaque situation mérite une approche sur-mesure. »',
        '« Notre indépendance nous permet de recommander les meilleures solutions du marché, dans l’intérêt exclusif de nos clients. »'
      ],
      certifications: {
        title: 'Certifications & formations',
        items: [
          { name: 'HEC Paris', detail: 'MBA Finance' },
          { name: 'CFA Institute', detail: 'Chartered Financial Analyst' },
          { name: 'CAIA Association', detail: 'Alternative Investment Analyst' },
          { name: 'AGEFI', detail: 'Expert fiscal certifié' }
        ]
      },
      engagement: {
        title: 'Engagement personnel',
        description:
          'Membre du conseil d’administration de la Fondation pour l’Enfance et mécène d’initiatives culturelles.'
      }
    },
    cta: {
      title: ['Échanger directement'],
      description:
        'Une conversation confidentielle pour comprendre vos enjeux patrimoniaux et bâtir un plan d’action.',
      button: 'Prendre rendez-vous'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Prise de rendez-vous',
      title: ['Planifions notre rencontre'],
      description:
        'Un premier entretien confidentiel pour comprendre vos objectifs patrimoniaux et envisager les meilleures stratégies.'
    },
    info: {
      duration: {
        title: 'Durée : 45 minutes',
        description: 'Le temps nécessaire pour une analyse approfondie et structurée.'
      },
      location: {
        title: 'Au bureau ou à distance',
        description: 'Rencontre à Paris 8 ou visioconférence selon vos préférences.'
      },
      confidentiality: {
        title: 'Confidentialité garantie',
        description: 'Respect absolu du secret professionnel et sécurité des échanges.'
      },
      details: {
        phone: '+33 1 42 00 00 00',
        email: 'contact@harrison-associes.com',
        address: '128 Avenue des Champs-Élysées, 75008 Paris'
      }
    },
    form: {
      heading: 'Votre demande',
      personalTitle: 'Vos informations',
      fields: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        wealthObjectives: 'Objectifs patrimoniaux (optionnel)',
        objectivePlaceholder: 'Partagez vos priorités ou préoccupations principales...'
      },
      availabilityTitle: 'Créneaux disponibles',
      dateLabel: 'Date souhaitée',
      timeLabel: 'Horaire préféré',
      submit: 'Confirmer le rendez-vous',
      confirmation: {
        title: ['Demande confirmée'],
        description:
          'Votre demande de rendez-vous a bien été transmise. Nous revenons vers vous sous 24 heures pour confirmer le créneau choisi.',
        nextStepsTitle: 'Prochaines étapes',
        steps: [
          {
            title: 'Confirmation sous 24h',
            description: 'Un membre de notre équipe valide avec vous la date et l’horaire.'
          },
          {
            title: 'Préparation personnalisée',
            description: 'Nous rassemblons la documentation adaptée à vos objectifs.'
          },
          {
            title: 'Entretien confidentiel',
            description: 'Analyse approfondie de votre situation patrimoniale.'
          }
        ],
        backHome: "Retour à l'accueil"
      }
    }
  },
  footer: {
    title: 'Entrons en contact',
    description:
      'Protégons, développons et transmettons votre patrimoine grâce à un accompagnement discret et indépendant.',
    address: '123 Financial District',
    city: 'New York, NY 10005',
    phoneLabel: '+1 (555) 123-4567',
    phoneAvailability: 'Du lundi au vendredi, 9h - 18h',
    emailLabel: 'contact@wealthadvisory.com',
    emailAvailability: 'Réponse sous 24 heures',
    formTitle: 'Demander une consultation',
    name: 'Nom complet',
    email: 'Adresse email',
    phone: 'Téléphone',
    message: 'Message',
    messagePlaceholder: 'Parlez-nous de vos objectifs patrimoniaux...',
    submit: 'Être recontacté',
    copyright:
      '© 2024 Harrison & Associés. Tous droits réservés. | Confidentiel et propriétaire.'
  }
};

const en: Dictionary = {
  metadata: {
    title: 'Harrison & Associates',
    description:
      'Independent wealth management for families and entrepreneurs seeking bespoke strategies.'
  },
  navigation: {
    logo: {
      primary: 'HARRISON',
      secondary: '& ASSOCIATES'
    },
    links: [
      { href: '/', label: 'Home' },
      { href: '/methodology', label: 'Methodology' },
      { href: '/expertise', label: 'Expertise' },
      { href: '/team', label: 'Team' },
      { href: '/founder', label: 'Founder' },
      { href: '/contact', label: 'Contact' }
    ],
    cta: 'Book a consultation'
  },
  home: {
    hero: {
      eyebrow: 'Wealth Management',
      title: ['Protecting, growing and passing on', 'your wealth.'],
      emphasis: 'Your wealth deserves a bespoke strategy.',
      description:
        'A traditional and proven approach to wealth management for discerning families and entrepreneurs.',
      primaryCta: 'Book a consultation',
      secondaryCta: 'Learn more'
    },
    stats: [
      { value: '15+', label: 'Years of experience' },
      { value: '12%', label: 'Average portfolio growth' },
      { value: '50+', label: 'Family offices served' }
    ],
    values: [
      {
        title: 'Independence',
        description:
          'Advice free from conflicts of interest or product sales pressures, focused on your priorities.'
      },
      {
        title: 'Performance',
        description:
          'Disciplined, active management designed to maximize risk-adjusted returns across cycles.'
      },
      {
        title: 'Confidentiality',
        description:
          'Absolute discretion and secure processes to protect your personal and financial information.'
      }
    ],
    trust: {
      title: ['Ready to secure your financial future?'],
      description:
        'Schedule a confidential consultation to assess your objectives and craft the right strategies.',
      button: 'Schedule consultation'
    }
  },
  methodology: {
    hero: {
      title: ['Our proven methodology'],
      description:
        'A disciplined three-step process to understand, design and continuously refine your wealth strategy.'
    },
    stepLabel: 'Step',
    steps: [
      {
        title: 'Comprehensive diagnosis',
        description:
          'We start with a detailed review of your financial situation, objectives and family dynamics.',
        details: [
          'Full wealth audit and goal identification',
          'Risk profiling and family governance review',
          'Assessment of your current structures',
          'Evaluation of existing financial strategies'
        ]
      },
      {
        title: 'Strategic planning',
        description:
          'We craft a bespoke strategy aligned with your ambitions, timelines and constraints.',
        details: [
          'Tailored investment strategy design',
          'Tax optimization and estate planning',
          'Risk management and insurance review',
          'Multi-generational succession planning'
        ]
      },
      {
        title: 'Ongoing monitoring',
        description:
          'We actively monitor, report and adjust to preserve performance and relevance over time.',
        details: [
          'Regular portfolio rebalancing and optimization',
          'Quarterly reporting and review meetings',
          'Proactive adjustments in line with markets',
          'Continuous, transparent communication'
        ]
      }
    ],
    cta: {
      title: ['Experience our process'],
      description:
        'Book a personalized consultation and discover how our methodology delivers lasting results.',
      button: 'Start your journey'
    }
  },
  expertise: {
    hero: {
      title: ['Our expertise'],
      description:
        'Specialized capabilities covering every dimension of complex multi-jurisdictional wealth.'
    },
    featuresLabel: 'Key services',
    areas: [
      {
        title: 'Financial management',
        description:
          'Sophisticated asset allocation across public and private markets to optimize performance.',
        features: [
          'Portfolio construction and optimization',
          'Private equity and alternative access',
          'ESG and impact investing strategies',
          'Risk mitigation and capital protection',
          'Maximizing risk-adjusted returns'
        ]
      },
      {
        title: 'Real estate structuring',
        description:
          'Strategic structuring and financing for global residential and commercial investments.',
        features: [
          'International acquisition strategies',
          'Tailored holding structures',
          'Opportunity analysis and due diligence',
          'Commercial development advisory',
          'Support with prime residential assets'
        ]
      },
      {
        title: 'Tax & succession planning',
        description:
          'Anticipating and optimizing tax and inheritance considerations to protect your legacy.',
        features: [
          'International tax and legal structuring',
          'Trust and foundation establishment',
          'Cross-border succession planning',
          'Family business transition strategies',
          'Philanthropy and charitable planning'
        ]
      },
      {
        title: 'Retirement & protection',
        description:
          'Preparing for retirement and safeguarding against risks to preserve long-term wealth.',
        features: [
          'Executive retirement planning',
          'Insurance and risk coverage audits',
          'Long-term care and contingency planning',
          'Pension optimization',
          'Family wealth protection'
        ]
      }
    ],
    stats: [
      { value: '8.5%', label: 'Average annual performance' },
      { value: '$5M+', label: 'Average client assets' },
      { value: '3', label: 'Countries served' },
      { value: '100%', label: 'Client satisfaction' }
    ],
    cta: {
      title: ['Discover how our expertise benefits you'],
      description:
        'Schedule a consultation to discuss your needs and build a roadmap tailored to your objectives.',
      button: 'Discuss your needs'
    }
  },
  team: {
    hero: {
      title: ['Meet your advisor'],
      description:
        'Seasoned professionals who understand the complexity of stewarding multi-generational wealth.'
    },
    valuesHeading: 'Our values',
    founder: {
      name: 'Michael Harrison',
      role: 'Founder & Principal Advisor',
      biography: [
        'With 15 years of private banking and wealth management experience, Michael founded Harrison & Associates to provide truly independent advice.',
        'He previously held leadership roles within leading financial institutions, developing deep expertise in structuring sophisticated wealth strategies.',
        'An alumnus of a top business school and CFA charterholder, he upholds the highest fiduciary standards.'
      ],
      highlights: ['CFA Charter', 'Wharton MBA', '15+ years', 'Fiduciary standard']
    },
    achievements: [
      {
        title: '15+ years of experience',
        description:
          'Led wealth management teams within global institutions serving complex family needs.'
      },
      {
        title: 'Academic excellence',
        description:
          'Top business school graduate, CFA charterholder and lifelong learner in advanced finance.'
      },
      {
        title: 'Fiduciary standard',
        description:
          'Committed to acting solely in clients’ best interests with complete transparency.'
      },
      {
        title: 'International vision',
        description:
          'Experience across Europe, North America and emerging markets.'
      }
    ],
    values: [
      {
        title: 'Confidentiality',
        description:
          'Your privacy is paramount and protected by institutional-grade security and protocols.'
      },
      {
        title: 'Independence',
        description:
          'Advice guided only by your objectives, not by product or distribution constraints.'
      },
      {
        title: 'Performance',
        description:
          'A relentless focus on risk-adjusted returns with a long-term mindset.'
      }
    ],
    cta: {
      title: ['Ready to work together?'],
      description:
        'Experience the difference of independent, bespoke wealth management aligned with your values.',
      button: 'Schedule a meeting'
    }
  },
  founder: {
    hero: {
      eyebrow: 'Founder & Managing Partner',
      title: ['James Harrison'],
      summary:
        'Wealth management expert with over 15 years advising European entrepreneurial families.',
      paragraphs: [
        'Graduate of HEC Paris and CFA charterholder, James built his career in leading banks before founding Harrison & Associates.',
        'His mission is to deliver truly independent and discreet support for families and entrepreneurs with significant wealth.'
      ]
    },
    experience: {
      eyebrow: 'Professional journey',
      title: ['Recognised expertise'],
      entries: [
        {
          period: '2020 - Present',
          title: 'Founder & Managing Partner',
          company: 'Harrison & Associates',
          description:
            'Established and scaled an independent wealth advisory serving complex family needs.'
        },
        {
          period: '2015 - 2020',
          title: 'Deputy Head of Private Banking',
          company: 'Rothschild & Co Wealth Management',
          description:
            'Led a team of 12 advisors focused on UHNWI and family office clients across Europe.'
        },
        {
          period: '2010 - 2015',
          title: 'Senior Wealth Advisor',
          company: 'BNP Paribas Wealth Management',
          description:
            'Developed high-net-worth client relationships and cross-border tax strategies.'
        },
        {
          period: '2008 - 2010',
          title: 'Financial Analyst',
          company: 'Credit Suisse',
          description:
            'Conducted investment selection and research for private banking clients.'
        }
      ]
    },
    philosophy: {
      eyebrow: 'Vision & philosophy',
      title: ['Independence in the pursuit of excellence'],
      quotes: [
        '“Wealth management begins with a deep understanding of family and personal priorities. Every situation requires a tailored approach.”',
        '“Independence empowers us to recommend the best solutions in the market exclusively in our clients’ interests.”'
      ],
      certifications: {
        title: 'Certifications & education',
        items: [
          { name: 'HEC Paris', detail: 'MBA Finance' },
          { name: 'CFA Institute', detail: 'Chartered Financial Analyst' },
          { name: 'CAIA Association', detail: 'Chartered Alternative Investment Analyst' },
          { name: 'AGEFI', detail: 'Certified tax expert' }
        ]
      },
      engagement: {
        title: 'Personal commitments',
        description:
          'Board member of the Foundation for Children and patron of cultural initiatives.'
      }
    },
    cta: {
      title: ['Connect directly'],
      description:
        'Schedule a confidential conversation to explore your priorities and craft an actionable plan.',
      button: 'Book a meeting'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Appointment request',
      title: ['Let’s plan our meeting'],
      description:
        'A confidential first conversation to understand your wealth objectives and explore strategic options.'
    },
    info: {
      duration: {
        title: 'Duration: 45 minutes',
        description: 'Sufficient time for a thorough, structured discussion.'
      },
      location: {
        title: 'In-office or remote',
        description: 'Meet in Paris 8 or via secure video conferencing.'
      },
      confidentiality: {
        title: 'Confidentiality guaranteed',
        description: 'Absolute professional secrecy and secure information handling.'
      },
      details: {
        phone: '+33 1 42 00 00 00',
        email: 'contact@harrison-associes.com',
        address: '128 Avenue des Champs-Élysées, 75008 Paris'
      }
    },
    form: {
      heading: 'Your request',
      personalTitle: 'Your information',
      fields: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        phone: 'Phone',
        wealthObjectives: 'Wealth objectives (optional)',
        objectivePlaceholder: 'Share your main priorities or concerns...'
      },
      availabilityTitle: 'Available slots',
      dateLabel: 'Preferred date',
      timeLabel: 'Preferred time',
      submit: 'Confirm appointment',
      confirmation: {
        title: ['Request confirmed'],
        description:
          'Your appointment request has been received. Our team will confirm the proposed slot within 24 hours.',
        nextStepsTitle: 'Next steps',
        steps: [
          {
            title: 'Confirmation within 24h',
            description: 'We will reach out to validate the date and time with you.'
          },
          {
            title: 'Tailored preparation',
            description: 'We prepare documentation aligned with your objectives.'
          },
          {
            title: 'Confidential meeting',
            description: 'An in-depth review of your wealth priorities.'
          }
        ],
        backHome: 'Return home'
      }
    }
  },
  footer: {
    title: 'Get in touch',
    description:
      'Protect, grow and transfer your wealth with independent, discreet advice tailored to your family.',
    address: '123 Financial District',
    city: 'New York, NY 10005',
    phoneLabel: '+1 (555) 123-4567',
    phoneAvailability: 'Monday - Friday, 9AM - 6PM',
    emailLabel: 'contact@wealthadvisory.com',
    emailAvailability: 'Response within 24 hours',
    formTitle: 'Request a consultation',
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    message: 'Message',
    messagePlaceholder: 'Tell us about your wealth objectives...',
    submit: 'Request a call back',
    copyright:
      '© 2024 Harrison & Associates. All rights reserved. | Confidential and proprietary.'
  }
};

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en
};

export const getDictionarySync = (locale: Locale): Dictionary => dictionaries[locale];
