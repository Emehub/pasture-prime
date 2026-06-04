import {
  FaComments,
  FaRotate,
  FaScaleBalanced,
  FaShield,
  FaLightbulb,
  FaHeart,
  FaUsers,
  FaBoxesStacked,
  FaRecycle,
  FaGears,
} from 'react-icons/fa6'

export const ABOUT_STATS = [
  { num: '3', label: 'Interdependent Pillars' },
  { num: '0%', label: 'Processing Waste' },
  { num: '100%', label: 'Farmer Focused' },
]

export const VALUES = [
  {
    icon: FaComments,
    title: 'Open Communication',
    desc: 'Transparent and effective communication across all levels, ensuring clarity, trust, and alignment in decision-making.',
  },
  {
    icon: FaRotate,
    title: 'Feedback Culture',
    desc: 'Continuous improvement through actively listening, offering thoughtful feedback, and implementing strategic refinements.',
  },
  {
    icon: FaScaleBalanced,
    title: 'Objectivity',
    desc: 'Fair, impartial decisions guided by facts, ensuring balanced solutions that serve farmers, investors, and consumers equally.',
  },
  {
    icon: FaShield,
    title: 'Integrity',
    desc: 'Honesty, accountability, and strong moral principles in everything we do, fostering trust and credibility in all partnerships.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation with Purpose',
    desc: 'Creative thinking and hard work to develop forward-looking solutions that ensure continuous improvement and adaptability.',
  },
  {
    icon: FaHeart,
    title: 'Ethical Conduct',
    desc: 'The highest ethical standards ensuring responsibility, fairness, and transparency from farmer relationships to market distribution.',
  },
  {
    icon: FaUsers,
    title: 'Respect for All',
    desc: 'Treating all stakeholders, farmers, employees, investors, partners, and consumers, with dignity, fostering lasting relationships.',
  },
]

export const BUSINESS_PILLARS = [
  {
    num: '01',
    icon: FaBoxesStacked,
    title: 'Structured Aggregation',
    desc: 'We build organized supply networks that aggregate smallholder and mid-sized farmers into efficient clusters. Farmers benefit from fair farm-gate prices, guaranteed purchase agreements that stabilize incomes, and structured demand that encourages reinvestment and growth.',
    highlight: false,
  },
  {
    num: '02',
    icon: FaRecycle,
    title: 'Centralized Processing',
    desc: 'We operate modern processing facilities that transform live birds into safe, high-quality products. This ensures competitive products that meet consumer and regulatory standards, adherence to hygiene and certification protocols, and branded products that appeal to diverse buyers.',
    highlight: true,
  },
  {
    num: '03',
    icon: FaGears,
    title: 'Efficient Distribution',
    desc: 'We deploy structured cold chain and logistics systems to connect us with our target markets year-round. Distribution guarantees consistent access to supermarkets, restaurants, and institutional buyers, predictable sales cycles, and penetration into both domestic and regional markets.',
    highlight: false,
  },
]
