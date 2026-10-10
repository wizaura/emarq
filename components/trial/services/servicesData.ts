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
      "We create engaging content that strengthens your brand presence and builds meaningful relationships with your audience.",
    capabilities: [
      "Social Media Strategy",
      "Content Planning",
      "Creative Design",
      "Photography & Videography",
      "Reel Production",
      "Community Management",
      "Performance Reports",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "02",
    title: "Performance Marketing",
    description:
      "Data-driven advertising strategies designed to maximize ROI and connect your brand with the right audience.",
    capabilities: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "LinkedIn Advertising",
      "YouTube Advertising",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "03",
    title: "Branding & Identity",
    description:
      "A strong brand is more than a logo. We create distinctive identities and consistent visual systems across every touchpoint.",
    capabilities: [
      "Brand Strategy",
      "Logo Design",
      "Brand Identity Systems",
      "Brand Guidelines",
      "Marketing Collateral",
      "Packaging Design",
      "Visual Communication",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "04",
    title: "Creative Activation",
    description:
      "Interactive brand experiences that bring people closer to your business through memorable campaigns and activations.",
    capabilities: [
      "Brand Activations",
      "Experiential Campaigns",
      "Events",
      "Interactive Displays",
      "Branded Installations",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "05",
    title: "Personalization",
    description:
      "Premium personalization experiences that transform products into meaningful, one-of-a-kind keepsakes.",
    capabilities: [
      "Hot Foil Embossing",
      "Monogramming",
      "Name Personalization",
      "Precision Engraving",
      "Embroidery",
      "Custom Packaging",
      "Premium Gifting",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "06",
    title: "Printing",
    description:
      "Premium printing solutions with sharp quality, vibrant colours and flawless finishing for every brand need.",
    capabilities: [
      "Digital Printing",
      "Offset Printing",
      "Packaging",
      "Branding Materials",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "07",
    title: "Fit-Out",
    description:
      "Modern fit-out solutions crafted to create functional, stylish and impactful spaces.",
    capabilities: [
      "Retail",
      "Office Interiors",
      "Signage",
      "Display Units",
    ],
    image: "/images/emarq-hero.jpg",
  },

  {
    number: "08",
    title: "Production",
    description:
      "End-to-end production solutions that bring your vision to life with creativity and precision.",
    capabilities: [
      "Commercial Photography",
      "Professional Videography",
      "Post Production",
      "Production Support",
      "Reels",
      "Commercial Videos",
      "Documentaries",
    ],
    image: "/images/emarq-hero.jpg",
  },
];