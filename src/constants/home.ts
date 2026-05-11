import {
  FaLeaf,
  FaRecycle,
  FaHandshake,
  FaTractor,
  FaIndustry,
  FaGears,
  FaAward,
  FaSnowflake,
  FaUsers,
  FaSeedling,
  FaTruck,
  FaSliders,
} from 'react-icons/fa6'

export const HOME_PILLARS = [
  {
    icon: FaLeaf,
    title: 'Quality',
    desc: 'Healthy and humanely raised poultry aggregated from our clustered smallholder and midsized farmers across our operational zone.',
  },
  {
    icon: FaRecycle,
    title: 'Circular',
    desc: 'Our zero-waste circular processing policy guides our journey to convert every by-product into a value-added product, such as feed ingredients, organic manure, and more.',
  },
  {
    icon: FaHandshake,
    title: 'Service',
    desc: 'Our services are farmer-centered, ensuring a reliable and consistent market for farmers at fair farm-gate prices for farmers within our clusters.',
  },
] as const

export const HOME_PRODUCTS_PREVIEW = [
  {
    img: '/images/Drumstick 3D 3 views 1 (2).png',
    name: 'Drumsticks',
    desc: 'Meaty, fresh chicken drumsticks sourced from sustainably sourced and healthy birds.',
  },
  {
    img: '/images/Chicken Breast 3d (2).png',
    name: 'Chicken Breast',
    desc: 'Lean, premium boneless and bone-in chicken breast cuts. Packed in standardized sizes and weight ranges.',
  },
  {
    img: '/images/Animal Feed Ingredients_1.png',
    name: 'By-Products',
    desc: 'Animal feed ingredients and organic manure from our circular processing model.',
  },
]

export const HOME_SERVICES = [
  {
    icon: FaTractor,
    title: 'Poultry Aggregation',
    desc: 'We source live poultry directly from smallholder and midsized farmers, providing them with reliable market access and fair pricing.',
    href: '/services#aggregation',
    green: false,
  },
  {
    icon: FaRecycle,
    title: 'Circular Processing',
    desc: 'Nothing goes to waste. Our circular processing policy converts all by-products into marketable feed ingredients and organic manure.',
    href: '/services#circular',
    green: true,
  },
  {
    icon: FaIndustry,
    title: 'Processing and Distribution',
    desc: 'Central processing, cutting, packaging and cold chain distribution to institutional buyers, wholesale, and retail clients.',
    href: '/services#processing',
    green: false,
  },
  {
    icon: FaGears,
    title: 'Tailored Processing',
    desc: 'Large-scale farmers can access our facility as a fee-based service with custom cuts, private-label packaging, and certifications.',
    href: '/services#tailored',
    green: false,
  },
]

export const HOME_WHY_US = [
  {
    icon: FaAward,
    title: 'Quality Assurance',
    desc: 'Every bird processed in our certified facility under strict hygiene and food safety protocols.',
  },
  {
    icon: FaSnowflake,
    title: 'Cold Chain Integrity',
    desc: 'Maintained cold chain from processing to delivery, ensuring freshness at every point.',
  },
  {
    icon: FaUsers,
    title: 'Farmer-First Model',
    desc: 'We exist to give smallholders and mid-sized farmers access to formal markets. Their success is our supply chain.',
  },
  {
    icon: FaSeedling,
    title: 'Sustainable Practices',
    desc: 'Our circular model means we operate with near-zero processing waste and environmental impact.',
  },
  {
    icon: FaTruck,
    title: 'Reliable Distribution',
    desc: 'Consistent supply to retail, wholesale, and institutional clients backed by planned production.',
  },
  {
    icon: FaSliders,
    title: 'Custom Processing',
    desc: 'Tailored cut specs, private-label packaging, and certification support for large-scale clients.',
  },
]

export const HOME_STATS = [
  { num: '3', label: 'Interdependent Pillars' },
  { num: '0%', label: 'Processing Waste' },
  { num: '100%', label: 'Farmer Focused' },
]
