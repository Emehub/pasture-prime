import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaStore,
  FaTractor,
  FaIndustry,
  FaChartBar,
  FaHandshake,
  FaWhatsapp,
} from 'react-icons/fa6'
import { APP } from './app'

export const CONTACT_CARDS = [
  {
    icon: FaPhone,
    title: 'Call Us',
    main: APP.PHONE,
    sub: APP.HOURS,
    href: `tel:${APP.PHONE.replace(/\s/g, '')}`,
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    main: APP.PHONE,
    sub: 'Chat with us on WhatsApp',
    href: APP.WHATSAPP,
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    main: APP.EMAIL,
    sub: 'We reply within 24 hours',
    href: `mailto:${APP.EMAIL}`,
  },
  {
    icon: FaLocationDot,
    title: 'Visit Us',
    main: 'Mampong-Akuapem, ER',
    sub: 'Ghana',
    href: undefined,
  },
]

export const ENQUIRY_TYPES = [
  {
    icon: FaTractor,
    title: 'Poultry Farmer (Small or Mid-Sized)',
    desc: 'Want guaranteed off-take and fair pricing for my poultry flock.',
  },
  {
    icon: FaIndustry,
    title: 'Large-Scale Poultry Farmer',
    desc: 'Need access to a certified processing facility for fee-based processing.',
  },
  {
    icon: FaStore,
    title: 'Buyer',
    desc: 'Looking for a reliable fresh poultry supplier for retail, food service, or wholesale.',
  },
  {
    icon: FaChartBar,
    title: 'Investor',
    desc: 'Interested in what Pasture Prime is building and want potential investment opportunities.',
  },
  {
    icon: FaHandshake,
    title: 'Partner',
    desc: 'Interested in what Pasture Prime is building and want potential partnership opportunities.',
  },
]

export const FAQS = [
  {
    q: 'How do I become a supplier farmer?',
    a: 'Fill in our contact form selecting "Poultry Farmer (Small or Mid-Sized)" and our aggregation team will reach out to arrange a farm visit and discuss off-take terms with you.',
  },
  {
    q: 'What poultry products do you supply?',
    a: 'We supply drumsticks, chicken breast, feet, backs, wings, whole birds, leg quarters, chicken sausages, and gizzards. We also supply by-products including animal feed ingredients, organic manure, and processed chicken fat.',
  },
  {
    q: 'Can you do custom cut specifications?',
    a: 'Yes. We offer custom cut specs, packaging formats, and portion weights for retail, food service, and wholesale clients. Contact us to discuss your specific requirements.',
  },
  {
    q: 'Do you offer tailored processing for large producers?',
    a: 'Yes. Large-scale farmers can access our state-of-the-art processing facility as a fee-based service, with custom cut specs, private-label packaging, and certification support.',
  },
  {
    q: 'What are your delivery/distribution areas?',
    a: 'Contact us directly to discuss our current distribution coverage and whether we can reach your location. We are expanding our cold chain distribution network.',
  },
  {
    q: 'Are your products fresh or frozen?',
    a: 'We supply both fresh and frozen products. All products are processed and dispatched to maintain quality through our cold chain.',
  },
]

export const CONTACT_DETAILS = [
  {
    icon: FaLocationDot,
    title: 'Address',
    value: `Pasture Prime Ltd, ${APP.ADDRESS}`,
    href: undefined,
  },
  { icon: FaPhone, title: 'Phone', value: APP.PHONE, href: `tel:${APP.PHONE.replace(/\s/g, '')}` },
  { icon: FaWhatsapp, title: 'WhatsApp', value: APP.PHONE, href: APP.WHATSAPP },
  { icon: FaEnvelope, title: 'Email', value: APP.EMAIL, href: `mailto:${APP.EMAIL}` },
]

export const INTEREST_OPTIONS = [
  { value: 'farmer-small', label: 'Poultry Farmer (Small or Mid-Sized)' },
  { value: 'farmer-large', label: 'Large-Scale Poultry Farmer' },
  { value: 'buyer', label: 'Buyer / Retailer / Food Service' },
  { value: 'wholesale', label: 'Wholesale Distributor' },
  { value: 'investor', label: 'Investor' },
  { value: 'partner', label: 'Partner' },
  { value: 'other', label: 'Other' },
]
