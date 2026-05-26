import { Link, useLocation } from 'react-router'
import { useEffect } from 'react'
import {
  FaTractor,
  FaIndustry,
  FaRecycle,
  FaGears,
  FaCircleCheck,
  FaArrowRight,
  FaStore,
} from 'react-icons/fa6'
import { PageHero, CTABanner } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import {
  AGGREGATION_FEATURES,
  PROCESSING_FEATURES,
  CIRCULAR_FEATURES,
  TAILORED_FEATURES,
} from '@/constants'

const FeatureList = ({ items, light = false }: { items: string[]; light?: boolean }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 my-7">
    {items.map((f) => (
      <div key={f} className="flex items-start gap-2.5">
        <FaCircleCheck
          size={14}
          color={light ? '#f0e0a0' : '#2d6a2d'}
          style={{ flexShrink: 0, marginTop: '0.2rem' }}
        />
        <span
          className={`text-[0.88rem] leading-snug ${light ? 'text-white/85' : 'text-bgray-600'}`}
        >
          {f}
        </span>
      </div>
    ))}
  </div>
)

const circularSteps = [
  {
    num: '01',
    icon: FaTractor,
    title: 'Live Bird Intake',
    desc: 'Aggregated from smallholder and midsized farms at fair farm-gate prices',
  },
  {
    num: '02',
    icon: FaIndustry,
    title: 'Hygienic Processing',
    desc: 'Slaughter, evisceration, cutting and portioning in a certified facility',
  },
  {
    num: '03',
    icon: FaStore,
    title: 'Premium Cuts → Market',
    desc: 'Fresh and frozen poultry cuts distributed to institutional, wholesale, and retail buyers',
  },
  {
    num: '04',
    icon: FaRecycle,
    title: 'By-Products → Farmers',
    desc: 'Bone meal, feather meal, organic manure returned to the agricultural value chain',
  },
]

export const ServicesPage = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [hash])

  const { ref: aggTextRef, inView: aggTextIn } = useInView(0.2)
  const { ref: aggImgRef, inView: aggImgIn } = useInView(0.2)
  const { ref: procImgRef, inView: procImgIn } = useInView(0.2)
  const { ref: procTextRef, inView: procTextIn } = useInView(0.2)
  const { ref: circRef, inView: circIn } = useInView(0.15)
  const { ref: tailTextRef, inView: tailTextIn } = useInView(0.2)
  const { ref: tailImgRef, inView: tailImgIn } = useInView(0.2)

  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="End-to-end poultry solutions, from farm-gate aggregation and hygienic processing to circular by-product valorisation and tailored large-scale services."
        breadcrumb="Services"
        bgImage="/images/100%25%20Fresh%20or%20Frozen.png"
      />

      {/* ── STICKY SERVICE NAV ────────────────────────── */}
      <div className="bg-white border-b border-bgray-200 sticky top-[80px] md:top-[116px] z-30">
        <div className="max-w-[1200px] mx-auto px-6 flex gap-1 py-3 overflow-x-auto">
          {[
            { href: '#aggregation', Icon: FaTractor, label: 'Aggregation' },
            { href: '#processing', Icon: FaIndustry, label: 'Processing' },
            { href: '#circular', Icon: FaRecycle, label: 'Circular Model' },
            { href: '#tailored', Icon: FaGears, label: 'Tailored Service' },
          ].map(({ href, Icon, label }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-[0.87rem] font-medium text-bgray-600 whitespace-nowrap hover:bg-green-pale hover:text-green-mid transition-all"
            >
              <Icon className="text-xs flex-shrink-0" />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── AGGREGATION ───────────────────────────────── */}
      <section id="aggregation" className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* text — slide from left */}
          <div
            ref={aggTextRef}
            style={{
              opacity: aggTextIn ? 1 : 0,
              transform: aggTextIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <Eyebrow text="Service 01" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-5">
              Poultry Aggregation
            </h2>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              We source live poultry directly from smallholder and midsized farmers, solving the
              fragmentation problem that keeps individual farmers out of formal supply chains.
              Through reliable off-take agreements and fair farm-gate pricing, Pasture Prime gives
              farmers a guaranteed market they could not access on their own.
            </p>
            <p className="text-bgray-600 leading-relaxed">
              Our aggregation model builds supply reliability for our processing facility while
              giving farmers the volume confidence to scale their production. We collect from the
              farm gate, eliminating the logistical burden on the farmer.
            </p>
            <FeatureList items={AGGREGATION_FEATURES} />
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-mid text-white rounded-lg font-semibold text-[0.93rem] hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-md"
            >
              Become a Supplier <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* image — slide from right */}
          <div
            ref={aggImgRef}
            className="relative"
            style={{
              opacity: aggImgIn ? 1 : 0,
              transform: aggImgIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
            }}
          >
            <img
              src="/images/Poultry Aggregation.png"
              alt="Poultry Aggregation"
              className="w-full object-contain rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── PROCESSING ────────────────────────────────── */}
      <section id="processing" className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* image — slide from left */}
          <div
            ref={procImgRef}
            className="relative order-2 lg:order-1"
            style={{
              opacity: procImgIn ? 1 : 0,
              transform: procImgIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <img
              src="/images/Processing and Distribution 1.png"
              alt="Processing and Distribution"
              className="w-full object-contain rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-6 py-5 text-center shadow-xl border border-bgray-100">
              <span className="block font-display text-[1.6rem] font-bold text-green-mid">
                HACCP
              </span>
              <span className="block text-[0.68rem] text-bgray-500 mt-0.5 uppercase tracking-widest">
                Certified Facility
              </span>
            </div>
          </div>

          {/* text — slide from right */}
          <div
            ref={procTextRef}
            className="order-1 lg:order-2"
            style={{
              opacity: procTextIn ? 1 : 0,
              transform: procTextIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
            }}
          >
            <Eyebrow text="Service 02" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-5">
              Processing and Distribution
            </h2>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              Our central processing facility is where live birds become market-ready products. From
              slaughter and evisceration through cutting, portioning, and packaging, every step is
              carried out under strict hygiene and food safety protocols in our state-of-the-art
              facility.
            </p>
            <p className="text-bgray-600 leading-relaxed">
              Finished products are distributed to institutional buyers, wholesale clients, and
              retail clients who meet our MOQ. We maintain product quality from the processing floor
              to the point of sale.
            </p>
            <FeatureList items={PROCESSING_FEATURES} />
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-mid text-white rounded-lg font-semibold text-[0.93rem] hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-md"
            >
              Enquire as a Buyer <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CIRCULAR MODEL ────────────────────────────── */}
      <section id="circular" className="relative py-24 bg-green-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/Farmer%20Partnership%20and%20Smart%20Processing.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark/95 to-green-mid/80" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* left: text */}
          <div
            ref={circRef}
            style={{
              opacity: circIn ? 1 : 0,
              transform: circIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <Eyebrow text="Service 03 · Zero Waste Promise" light />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-white leading-[1.15] mb-5">
              Circular Processing Model
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              At Pasture Prime, we believe every part of the bird has value. Our circular processing
              policy converts what others treat as waste into products the market wants, offal,
              feathers, blood, and bones all become value-added outputs.
            </p>
            <p className="mb-7 leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Feed ingredients go back to farmers, organic manure enriches soils, and the business
              model becomes sustainable from the inside out. This closes the loop between processing
              and farming.
            </p>
            <FeatureList items={CIRCULAR_FEATURES} light />
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-green-dark rounded-lg font-bold text-[0.93rem] hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Buy By-Products <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* right: process flow cards */}
          <div className="flex flex-col gap-3 pt-2">
            {circularSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/15 hover:border-gold/40 transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    opacity: circIn ? 1 : 0,
                    transform: circIn ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.55s ease ${0.15 + i * 0.1}s, transform 0.55s ease ${0.15 + i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(200,168,80,0.15)',
                      border: '1px solid rgba(200,168,80,0.3)',
                    }}
                  >
                    <Icon size={16} color="#c8a850" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[0.62rem] font-bold tracking-widest"
                        style={{ color: '#c8a850' }}
                      >
                        {step.num}
                      </span>
                      <h4
                        style={{
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          fontFamily: 'Fraunces, Georgia, serif',
                        }}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.68)',
                        fontSize: '0.79rem',
                        lineHeight: '1.55',
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TAILORED SERVICE ──────────────────────────── */}
      <section id="tailored" className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* text — slide from left */}
          <div
            ref={tailTextRef}
            style={{
              opacity: tailTextIn ? 1 : 0,
              transform: tailTextIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <Eyebrow text="Service 04" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-5">
              Tailored Processing Service
            </h2>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              Large-scale farmers with their own flocks can access the Pasture Prime processing
              facility as a fee-based service. This monetises our spare processing capacity while
              providing commercial farmers with access to a state-of-the-art facility and a
              professional processing team.
            </p>
            <p className="text-bgray-600 leading-relaxed">
              We offer custom cut specifications, private-label packaging, and support for hygiene
              and food safety certifications, giving large producers the tools to reach premium
              markets without the capital cost of their own facility.
            </p>
            <FeatureList items={TAILORED_FEATURES} />
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-mid text-white rounded-lg font-semibold text-[0.93rem] hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-md"
            >
              Enquire About This Service <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* image — slide from right */}
          <div
            ref={tailImgRef}
            className="relative"
            style={{
              opacity: tailImgIn ? 1 : 0,
              transform: tailImgIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
            }}
          >
            <img
              src="/images/Tailored Services 1.png"
              alt="Tailored Processing Service"
              className="w-full object-contain rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service Fits?"
        subtitle="Talk to our team, we will match you to the right solution, whether you are a small, midsized, or large-scale commercial farmer."
        primaryLabel="Get in Touch"
        primaryTo={ROUTES.CONTACT}
        secondaryLabel="View Products"
        secondaryTo={ROUTES.PRODUCTS}
      />
    </div>
  )
}
