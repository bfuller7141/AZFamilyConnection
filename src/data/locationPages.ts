export type LocationSlug = "phoenix" | "kingman" | "prescott" | "portland";

export interface LocationPageContent {
  slug: LocationSlug;
  city: string;
  subtitle: string;
  title: string;
  description: string;
  intro: string;
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export const locationPagesEn: LocationPageContent[] = [
  {
    slug: "phoenix",
    city: "Phoenix",
    subtitle: "Phoenix Services",
    title: "Supervised Visitation in Phoenix",
    description:
      "Arizona Family Connections supports families across Phoenix with safe, structured visitation and exchange services.",
    intro:
      "Our Phoenix location support focuses on child-centered, neutral supervision for families navigating court-ordered parenting time.",
    highlights: [
      {
        icon: "/images/home-icon.svg",
        title: "Supervised Visits",
        description:
          "Structured visitation support designed to protect child safety and meaningful parent-child connection.",
      },
      {
        icon: "/images/sheild-icon-blue.svg",
        title: "Safe Exchanges",
        description:
          "Neutral exchanges to reduce conflict and support smoother transitions between caregivers.",
      },
      {
        icon: "/images/pen-icon.svg",
        title: "Objective Reports",
        description:
          "Clear, factual records to support documentation needs for legal and case planning purposes.",
      },
    ],
  },
  {
    slug: "kingman",
    city: "Kingman",
    subtitle: "Kingman Services",
    title: "Supervised Visitation in Kingman",
    description:
      "Arizona Family Connections provides compassionate visitation support for families in and around Kingman.",
    intro:
      "Families in Kingman can access supervised visitation, exchange support, and professional documentation tailored to case needs.",
    highlights: [
      {
        icon: "/images/home-icon.svg",
        title: "Supervised Visits",
        description:
          "Safe, structured visits led by trained supervisors focused on child well-being.",
      },
      {
        icon: "/images/webcam-icon.svg",
        title: "Telephone / Video",
        description:
          "Remote options are available when in-person scheduling or distance presents barriers.",
      },
      {
        icon: "/images/az81-icon.svg",
        title: "Rule 81 Support",
        description:
          "Services aligned with Arizona Rule 81 expectations for supervised visitation cases.",
      },
    ],
  },
  {
    slug: "prescott",
    city: "Prescott",
    subtitle: "Prescott Services",
    title: "Supervised Visitation in Prescott",
    description:
      "Arizona Family Connections helps Prescott-area families with consistent, neutral supervised visitation services.",
    intro:
      "Our Prescott support emphasizes safety, clarity, and consistency so families can move forward with confidence.",
    highlights: [
      {
        icon: "/images/home-icon.svg",
        title: "Supervised Visits",
        description:
          "Monitored parenting time in a structured setting that prioritizes safety and emotional stability.",
      },
      {
        icon: "/images/sheild-icon-blue.svg",
        title: "Safe Exchanges",
        description:
          "Conflict-aware exchange processes that promote calm transitions for children.",
      },
      {
        icon: "/images/pen-icon.svg",
        title: "Reports",
        description:
          "Professional, neutral reporting to support legal teams and family court processes.",
      },
    ],
  },
];

export const locationPagesEs: LocationPageContent[] = [
  {
    slug: "phoenix",
    city: "Phoenix",
    subtitle: "Servicios en Phoenix",
    title: "Visitas supervisadas en Phoenix",
    description:
      "Arizona Family Connections apoya a familias en Phoenix con servicios de visita y entrega seguros y estructurados.",
    intro:
      "Nuestro apoyo en Phoenix se centra en la seguridad infantil, la neutralidad y la conexión significativa entre padres e hijos.",
    highlights: [
      {
        icon: "/images/home-icon.svg",
        title: "Visitas supervisadas",
        description:
          "Acompañamiento estructurado para proteger la seguridad del menor y apoyar una conexión positiva.",
      },
      {
        icon: "/images/sheild-icon-blue.svg",
        title: "Intercambio seguro",
        description:
          "Entregas en entorno neutral para reducir conflicto y mejorar transiciones.",
      },
      {
        icon: "/images/pen-icon.svg",
        title: "Informes objetivos",
        description:
          "Registros claros y objetivos para necesidades legales y seguimiento del caso.",
      },
    ],
  },
  {
    slug: "kingman",
    city: "Kingman",
    subtitle: "Servicios en Kingman",
    title: "Visitas supervisadas en Kingman",
    description:
      "Arizona Family Connections ofrece apoyo compasivo de visitas supervisadas para familias en Kingman y alrededores.",
    intro:
      "Las familias en Kingman pueden acceder a visitas supervisadas, intercambios seguros y documentación profesional.",
    highlights: [
      {
        icon: "/images/home-icon.svg",
        title: "Visitas supervisadas",
        description:
          "Visitas seguras y estructuradas guiadas por supervisores capacitados.",
      },
      {
        icon: "/images/webcam-icon.svg",
        title: "Telefono / Video",
        description:
          "Opciones remotas cuando la distancia o el horario dificultan visitas presenciales.",
      },
      {
        icon: "/images/az81-icon.svg",
        title: "Regla 81",
        description:
          "Servicios alineados con la Regla 81 de Arizona para casos de visitas supervisadas.",
      },
    ],
  },
  {
    slug: "prescott",
    city: "Prescott",
    subtitle: "Servicios en Prescott",
    title: "Visitas supervisadas en Prescott",
    description:
      "Arizona Family Connections ayuda a familias del area de Prescott con servicios de visitas supervisadas neutrales y consistentes.",
    intro:
      "Nuestro apoyo en Prescott prioriza seguridad, claridad y constancia para avanzar con mayor confianza.",
    highlights: [
      {
        icon: "/images/home-icon.svg",
        title: "Visitas supervisadas",
        description:
          "Tiempo de convivencia monitoreado en un entorno estructurado y seguro.",
      },
      {
        icon: "/images/sheild-icon-blue.svg",
        title: "Intercambio seguro",
        description:
          "Procesos de entrega pensados para reducir conflicto en transiciones.",
      },
      {
        icon: "/images/pen-icon.svg",
        title: "Informes",
        description:
          "Documentacion profesional y neutral para procesos legales y familiares.",
      },
    ],
  },
];
