import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa6'
import { CTABanner } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import {
  HOME_PILLARS,
  HOME_PRODUCTS_PREVIEW,
  HOME_SERVICES,
  HOME_WHY_US,
  HOME_STATS,
} from '@/constants'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FarmerTeaser } from '@/components/ui/FarmerTeaser'

/* ─── page ──────────────────────────────────────────────────────── */
export const HomePage = () => {
  const { ref: pillarsRef, inView: pillarsIn } = useInView(0.1)
  const { ref: aboutImgRef, inView: aboutImgIn } = useInView(0.2)
  const { ref: aboutTextRef, inView: aboutTextIn } = useInView(0.2)
  const { ref: productsRef, inView: productsIn } = useInView(0.1)
  const { ref: servicesRef, inView: servicesIn } = useInView(0.1)
  const { ref: whyLeftRef, inView: whyLeftIn } = useInView(0.15)
  const { ref: whyGridRef, inView: whyGridIn } = useInView(0.1)

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Fallback / LCP hero image */}
          <img
            src="/images/Farmer Partnership and Smart Processing.png"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '177.78vh',
              minHeight: '56.25vw',
              width: '100%',
              height: '100%',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/nSEmtk5VwG0?autoplay=1&mute=1&loop=1&playlist=nSEmtk5VwG0&controls=0&rel=0&modestbranding=1&showinfo=0&disablekb=1&start=35&end=252"
              allow="autoplay; encrypted-media"
              title="Hero background video"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          {/* Covers YouTube title/info overlay at top of video */}
          <div
            className="absolute top-0 left-0 right-0 h-[18%] z-10"
            style={{ background: 'rgba(26,58,26,1)' }}
          />
        </div>
        <div className="absolute inset-0 bg-green-dark/72" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,58,26,0.65) 0%, transparent 68%)',
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-36 w-full">
          <div className="max-w-[680px]">
            <Eyebrow text="Farm to Table Excellence" light />
            <h1 className="font-display text-5xl sm:text-6xl md:text-[5.5rem] font-bold leading-[1.06] text-white mb-7">
              Premium Poultry, <span className="text-gold-light italic">Sustainably</span>
              <br />
              Raised
            </h1>
            <p className="text-[1.05rem] text-white/85 max-w-[540px] mb-10 leading-[1.78]">
              Pasture Prime connects Ghana's smallholder farmers to formal markets through
              structured aggregation, hygienic processing, and a zero-waste circular model.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to={ROUTES.PRODUCTS}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-green-dark rounded-lg font-bold text-[0.93rem] hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Explore Products <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/45 text-white rounded-lg font-semibold text-[0.93rem] hover:border-white hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────── */}
      <section id="pillars" className="bg-white shadow-2xl relative z-10">
        <div ref={pillarsRef} className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3">
          {HOME_PILLARS.map((p, i) => {
            const num = String(i + 1).padStart(2, '0')
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="relative px-10 py-12 border-b md:border-b-0 md:border-r border-bgray-100 last:border-0 group overflow-hidden"
                style={{
                  opacity: pillarsIn ? 1 : 0,
                  transform: pillarsIn ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="absolute top-3 right-5 font-display text-[5.5rem] font-bold text-bgray-100 select-none leading-none pointer-events-none">
                  {num}
                </span>
                <div className="relative">
                  <div className="w-16 h-16 bg-green-pale rounded-xl flex items-center justify-center text-[1.5rem] text-green-mid group-hover:bg-green-dark group-hover:text-gold transition-all duration-300 mb-5 shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="font-display text-[1.25rem] font-bold mb-3 text-bgray-800">
                    {p.title}
                  </h3>
                  <p className="text-bgray-600 text-[0.9rem] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────── */}
      <section className="bg-green-dark py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { num: '9+', label: 'Poultry Cuts' },
            { num: '3', label: 'Premium By-Products' },
            { num: '0%', label: 'Processing Waste' },
            { num: '100%', label: 'Farmer-First Pricing' },
          ].map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <span className="block font-display text-[3rem] md:text-[3.8rem] font-bold text-gold leading-none mb-2">
                {s.num}
              </span>
              <span className="text-white/55 text-[0.72rem] uppercase tracking-[0.18em] font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* images — slide from left */}
          <div
            ref={aboutImgRef}
            className="relative"
            style={{
              opacity: aboutImgIn ? 1 : 0,
              transform: aboutImgIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <img
              src="/images/Farmer Partnership and Smart Processing.png"
              alt="Farmer Partnerships"
              className="w-full h-[460px] object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 w-44 h-32 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
              <img
                src="/images/Farm Gate Aggregation_1.png"
                alt="Farm Gate"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* text — slide from right */}
          <div
            ref={aboutTextRef}
            style={{
              opacity: aboutTextIn ? 1 : 0,
              transform: aboutTextIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
            }}
          >
            <Eyebrow text="Who We Are" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-6">
              Built on Farmer Partnerships and Smart Processing
            </h2>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              Pasture Prime is anchored in a simple but powerful idea: connect smallholder and
              mid-sized farmers to formal markets they could not reach alone, and process every bird
              hygienically with zero waste.
            </p>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              We operate a centralized facility handling aggregation, processing, storage, and
              distribution. Our circular processing policy ensures nothing goes to waste, offal,
              bones, feathers, and other by-products become valuable feed ingredients and organic
              manure.
            </p>
            <div className="grid grid-cols-3 gap-4 my-8 p-6 bg-white rounded-xl border border-bgray-100 shadow-sm">
              {HOME_STATS.map(({ num, label }) => (
                <div key={label} className="text-center">
                  <span className="block font-display text-[2.1rem] font-bold text-green-mid">
                    {num}
                  </span>
                  <span className="block text-[0.68rem] text-bgray-500 mt-1 uppercase tracking-wider leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to={ROUTES.ABOUT}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-mid text-white rounded-lg font-semibold text-[0.93rem] hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-md"
            >
              Learn About Us <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Eyebrow text="What We Offer" />
              <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-tight">
                Hygienically Processed
                <br />
                Poultry Cuts
              </h2>
            </div>
            <Link
              to={ROUTES.PRODUCTS}
              className="self-start md:self-auto inline-flex items-center gap-2 text-[0.88rem] font-semibold text-green-mid border-b-2 border-green-mid pb-0.5 hover:gap-3 transition-all whitespace-nowrap"
            >
              View All Products <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_PRODUCTS_PREVIEW.map((p, i) => (
              <div
                key={p.name}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  opacity: productsIn ? 1 : 0,
                  transform: productsIn ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`,
                }}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-dark/95 via-green-dark/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-[1.3rem] font-bold text-white mb-1.5">
                      {p.name}
                    </h3>
                    <p className="text-white/80 text-[0.82rem] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="px-6 py-4 bg-white flex items-center justify-between border-t border-bgray-100">
                  <Link
                    to={ROUTES.PRODUCTS}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-green-mid group-hover:gap-2.5 transition-all"
                  >
                    Enquire Now <FaArrowRight className="text-xs" />
                  </Link>
                  <span className="text-[0.7rem] text-bgray-400 uppercase tracking-widest">
                    Fresh · Frozen
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800">
              End-to-End Poultry Solutions
            </h2>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HOME_SERVICES.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className={`group rounded-2xl p-9 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    s.green
                      ? 'bg-green-dark border-transparent'
                      : 'bg-white border-bgray-100 hover:border-green-light'
                  }`}
                  style={{
                    opacity: servicesIn ? 1 : 0,
                    transform: servicesIn ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-5 transition-all duration-300 ${
                      s.green
                        ? 'bg-white/10 text-gold'
                        : 'bg-green-pale text-green-mid group-hover:bg-green-mid group-hover:text-white'
                    }`}
                  >
                    <Icon />
                  </div>
                  <h3
                    className={`font-display text-[1.2rem] font-bold mb-3 ${s.green ? 'text-white' : 'text-bgray-800'}`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-[0.9rem] mb-5 leading-relaxed ${s.green ? 'text-white/85' : 'text-bgray-600'}`}
                  >
                    {s.desc}
                  </p>
                  <Link
                    to={s.href}
                    className={`inline-flex items-center gap-1.5 text-[0.84rem] font-semibold group-hover:gap-2.5 transition-all ${
                      s.green ? 'text-gold' : 'text-green-mid'
                    }`}
                  >
                    Learn More <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20 items-start">
          {/* sticky heading — slide from left */}
          <div
            ref={whyLeftRef}
            className="lg:sticky lg:top-28"
            style={{
              opacity: whyLeftIn ? 1 : 0,
              transform: whyLeftIn ? 'translateX(0)' : 'translateX(-28px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <Eyebrow text="Why Pasture Prime" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-5">
              What Sets Us Apart
            </h2>
            <div className="w-10 h-[3px] bg-gold mb-6" />
            <p className="text-bgray-600 mb-8 leading-relaxed text-[0.95rem]">
              From certified processing to cold chain delivery, every part of our operation is built
              for quality, reliability, and lasting impact, for farmers and consumers alike.
            </p>
            <Link
              to={ROUTES.ABOUT}
              className="inline-flex items-center gap-2 text-green-mid font-semibold text-[0.9rem] hover:gap-3 transition-all"
            >
              Our Story <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* card grid — stagger up */}
          <div ref={whyGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HOME_WHY_US.map((w, i) => {
              const Icon = w.icon
              return (
                <div
                  key={w.title}
                  className={`p-7 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    i === 0
                      ? 'sm:col-span-2 bg-green-dark border-transparent'
                      : 'bg-white border-bgray-100 hover:border-green-light'
                  }`}
                  style={{
                    opacity: whyGridIn ? 1 : 0,
                    transform: whyGridIn ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <Icon
                    className={`text-[1.8rem] mb-3 block ${i === 0 ? 'text-gold' : 'text-green-mid'}`}
                  />
                  <h4
                    className={`font-display text-[1rem] font-bold mb-2 ${i === 0 ? 'text-white' : 'text-bgray-800'}`}
                  >
                    {w.title}
                  </h4>
                  <p
                    className={`text-[0.88rem] leading-relaxed ${i === 0 ? 'text-white/80' : 'text-bgray-600'}`}
                  >
                    {w.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FARMER TEASER ────────────────────────────── */}
      <FarmerTeaser />

      <CTABanner
        title="Ready to Work With Pasture Prime?"
        subtitle="Whether you are a buyer looking for premium poultry supply, a smallholder or midsized farmer wanting to join our network, a large-scale producer needing processing services, an investor or potential partner interested in what we are building, we would love to hear from you."
        primaryLabel="Get in Touch"
        primaryTo={ROUTES.CONTACT}
        secondaryLabel="Join Our Farmer Network"
        secondaryTo={ROUTES.FARMERS}
      />
    </div>
  )
}
