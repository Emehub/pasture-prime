import {
  FaHandshake,
  FaCoins,
  FaTruckPickup,
  FaSeedling,
  FaGraduationCap,
  FaChartLine,
  FaFileLines,
  FaMagnifyingGlass,
  FaFileSignature,
} from 'react-icons/fa6'

export const FARMER_BENEFITS = [
  {
    icon: FaHandshake,
    title: 'Reliable Market Access',
    desc: 'Guaranteed off-take agreements so you can plan your production cycles with confidence and avoid surplus risk.',
  },
  {
    icon: FaCoins,
    title: 'Fair and Transparent Pricing',
    desc: 'Competitive farm-gate prices with clear, consistent payment terms, no hidden deductions or delays.',
  },
  {
    icon: FaTruckPickup,
    title: 'Farm-Gate Collection',
    desc: 'We come to you. Our collection logistics eliminate the transport burden from your operation.',
  },
  {
    icon: FaSeedling,
    title: 'Input Access',
    desc: 'We lead centralized negotiation and bulk purchase of inputs for our clustered farmers for better price and quality assurance.',
  },
  {
    icon: FaGraduationCap,
    title: 'Technical Support',
    desc: 'Guidance on biosecurity, flock management, and best practices to improve your productivity and bird welfare.',
  },
  {
    icon: FaChartLine,
    title: 'Growth Opportunity',
    desc: 'Reliable off-take gives you the confidence to expand your flock size and grow your income over time.',
  },
]

export const WHO_CAN_JOIN = [
  'Existing Smallholder farmers',
  'Youth Interested in Poultry Farming',
  'Existing Midsized farmers',
  'Women Interested in Poultry Farming',
]

export const JOIN_STEPS = [
  {
    num: '01',
    icon: FaFileLines,
    title: 'Apply',
    desc: 'Fill in our farmer enquiry form with your details, location, flock size, and farming setup.',
  },
  {
    num: '02',
    icon: FaMagnifyingGlass,
    title: 'Assessment',
    desc: 'Our team visits your farm to assess bird quality, biosecurity, and welfare standards.',
  },
  {
    num: '03',
    icon: FaFileSignature,
    title: 'Agreement',
    desc: 'We agree on off-take volumes, pricing, collection schedule, and payment terms.',
  },
  {
    num: '04',
    icon: FaHandshake,
    title: 'Start Supplying',
    desc: 'We begin collecting from your farm. You focus on production, we handle the rest.',
  },
]
