import { Service } from '../types';

export const services: Service[] = [
  {
    name: "Dental Implants",
    description: "State-of-the-art dental implants with lifetime warranty, restoring your natural smile and functionality.",
    duration: "2-3 hours per implant",
    recovery: "3-6 months",
    priceRange: "€500-1500",
    benefits: [
      "Natural look and feel",
      "Lifetime durability",
      "Preserves jaw bone health"
    ],
    category: "dental"
  },
  {
    name: "Hair Transplantation",
    description: "Advanced FUE technique for natural-looking hair restoration with minimal recovery time.",
    duration: "6-8 hours",
    recovery: "7-10 days",
    priceRange: "€2000-3500",
    benefits: [
      "Permanent results",
      "Natural hairline design",
      "Minimal scarring"
    ],
    category: "aesthetic"
  }
];