export type Service = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Social Media",
    description:
      "We build engaging and consistent social media presences that strengthen brand visibility and create meaningful relationships with audiences.",
    capabilities: [
      "Social media strategy",
      "Content planning & calendars",
      "Creative design",
      "Photography & videography",
      "Reels & short-form video",
      "Posting & account management",
      "Community management",
      "Monthly performance reporting",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "02",
    title: "Marketing",
    description:
      "We develop targeted, data-driven advertising campaigns designed to reach the right audiences and transform advertising spend into measurable growth, leads and conversions.",
    capabilities: [
      "Meta advertising",
      "Google Ads",
      "TikTok Ads",
      "LinkedIn advertising",
      "YouTube advertising",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "A strong brand is more than a logo — it is the complete experience a customer has with a business.",
    capabilities: [
      "Brand strategy",
      "Logo design",
      "Visual identity systems",
      "Brand guidelines",
      "Marketing collateral",
      "Packaging design",
      "Visual communication",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "04",
    title: "Activations",
    description:
      "We create interactive brand experiences that bring audiences closer to businesses and give them memorable reasons to engage, connect and share.",
    capabilities: [
      "Product launches",
      "Retail & in-store activations",
      "Pop-up experiences",
      "Influencer & media events",
      "Consumer engagement campaigns",
      "Live experience concepts",
      "Interactive displays",
      "Branded installations",
      "Personalised gifting stations",
      "Shareable brand moments",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "05",
    title: "Personalisation",
    description:
      "Our live personalisation stations combine craftsmanship, guest engagement and premium gifting to create memorable event experiences.",
    capabilities: [
      "Hot-foil embossing",
      "Monogramming & initials",
      "Name personalisation",
      "Precision engraving",
      "Embroidery",
      "Custom packaging",
      "Premium corporate & event gifting",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "06",
    title: "Production",
    description:
      "We provide end-to-end production solutions that bring ideas to life with creativity, technical expertise and precision.",
    capabilities: [
      "Product photography",
      "Portrait photography",
      "Event photography",
      "Social media reels",
      "Commercial videos",
      "Promotional films",
      "Documentaries",
      "Video editing",
      "Colour grading",
      "Motion graphics",
      "Studio setup",
      "Outdoor shoots",
      "Multi-camera productions",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "07",
    title: "Printing",
    description:
      "We provide premium printing solutions with sharp quality, vibrant colour reproduction and carefully finished results for brand and marketing requirements.",
    capabilities: [
      "Marketing collateral",
      "Event materials",
      "Branded stationery",
      "Packaging",
      "Signage",
      "Custom printed products",
    ],
    image: "/images/emarq-hero.jpg",
  },
  {
    number: "08",
    title: "Fit-Out",
    description:
      "We provide modern fit-out solutions for branded spaces, retail environments, events, exhibitions and temporary installations.",
    capabilities: [
      "Retail environments",
      "Branded spaces",
      "Exhibition spaces",
      "Event installations",
      "Temporary installations",
      "Custom brand environments",
    ],
    image: "/images/emarq-hero.jpg",
  },
];