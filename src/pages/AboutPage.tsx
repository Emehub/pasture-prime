import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa6'
import { PageHero, CTABanner } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import { VALUES, BUSINESS_PILLARS, ABOUT_STATS } from '@/constants'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'

export const AboutPage = () => {
  const { ref: whoImgRef, inView: whoImgIn } = useInView(0.2)
  const { ref: whoTextRef, inView: whoTextIn } = useInView(0.2)
  const { ref: missionRef, inView: missionIn } = useInView(0.2)
  const { ref: visionRef, inView: visionIn } = useInView(0.2)
  const { ref: valuesRef, inView: valuesIn } = useInView(0.1)
  const { ref: pillarsRef, inView: pillarsIn } = useInView(0.1)

  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About Pasture Prime Ltd"
        subtitle="A start-up built on farmer partnerships, hygienic processing, quality assurance, and a commitment to zero waste."
        breadcrumb="About Us"
        bgImage="/images/Aggregation%201.png"
      />

      {/* ── TICKER ───────────────────────────────────── */}
      <div className="bg-green-mid overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-ticker">
          {[0, 1].map((n) => (
            <span
              key={n}
              className="flex items-center gap-8 pr-8 text-white font-semibold text-[0.82rem] uppercase tracking-[0.18em]"
            >
              <span>Farm-Gate Collection</span>
              <span className="text-white/40">·</span>
              <span>Zero Waste Processing</span>
              <span className="text-white/40">·</span>
              <span>Hygienically Certified Products</span>
              <span className="text-white/40">·</span>
              <span>Farmer-First Pricing</span>
              <span className="text-white/40">·</span>
              <span>Premium Fresh &amp; Frozen Cuts</span>
              <span className="text-white/40">·</span>
              <span>Ghana's Trusted Poultry Processor</span>
              <span className="text-white/40">·</span>
              <span>Supporting Smallholder Farmers</span>
              <span className="text-white/40">·</span>
              <span>Cold Chain Distribution</span>
              <span className="text-white/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* images — slide from left */}
          <div
            ref={whoImgRef}
            className="relative"
            style={{
              opacity: whoImgIn ? 1 : 0,
              transform: whoImgIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <img
              src="/images/Farmer Partnership and Smart Processing.webp"
              alt="Farmer Partnerships"
              className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 w-44 h-32 rounded-xl overflow-hidden border-4 border-white shadow-xl hidden lg:block">
              <img
                src="/images/Farm Gate Aggregation_1.webp"
                alt="Farm Gate"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* text — slide from right */}
          <div
            ref={whoTextRef}
            style={{
              opacity: whoTextIn ? 1 : 0,
              transform: whoTextIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
            }}
          >
            <Eyebrow text="Who We Are" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-6">
              Built on Farmer Partnerships and Smart Processing
            </h2>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              Pasture Prime Ltd was incorporated in November 2024. We are a start-up anchored on a
              simple but powerful idea: connect smallholder and midsized poultry farmers to formal
              markets they could not reach alone, and process every bird hygienically with zero
              waste.
            </p>
            <p className="text-bgray-600 mb-4 leading-relaxed">
              We operate a central processing facility that handles aggregation, processing,
              storage, and distribution. Our circular processing policy ensures nothing goes to
              waste, offal, bones, feathers, and other by-products become value-added feed
              ingredients and organic manure.
            </p>
            <p className="text-bgray-600 mb-8 leading-relaxed">
              Our approach provides farmers with a growth path. We stay with the farmers when they
              are smallholders, when they become mid-sized farms, and even more so when they expand
              into large-scale commercial farms.
            </p>
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl border border-bgray-100 shadow-sm">
              {ABOUT_STATS.map(({ num, label }) => (
                <div key={label} className="text-center">
                  <span className="block font-display text-[2.2rem] font-bold text-green-mid">
                    {num}
                  </span>
                  <span className="block text-[0.68rem] text-bgray-500 mt-1 uppercase tracking-wider leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ─────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800">
              Mission and Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission — slide from left */}
            <div
              ref={missionRef}
              className="bg-off-white rounded-2xl p-10 border border-bgray-100 hover:shadow-lg transition-shadow"
              style={{
                opacity: missionIn ? 1 : 0,
                transform: missionIn ? 'translateX(0)' : 'translateX(-28px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              <div className="w-14 h-14 bg-green-pale rounded-xl flex items-center justify-center text-[1.35rem] text-gold mb-6">
                <FaBullseye />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">
                  Our Mission
                </span>
              </div>
              <h3 className="font-display text-[1.4rem] font-bold text-bgray-800 mb-4">
                Empowering Farmers, Feeding Ghana
              </h3>
              <p className="text-bgray-600 leading-relaxed text-[0.95rem]">
                To empower Ghana's poultry industry by serving as a dependable market that ensures
                fair farm-gate pricing for smallholder and mid-sized farmers. We are committed to
                providing consumers with premium, hygienically prepared meat products that meet the
                highest quality standards.
              </p>
            </div>

            {/* Vision — slide from right */}
            <div
              ref={visionRef}
              className="bg-green-dark rounded-2xl p-10 border border-transparent hover:shadow-xl transition-shadow"
              style={{
                opacity: visionIn ? 1 : 0,
                transform: visionIn ? 'translateX(0)' : 'translateX(28px)',
                transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              }}
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-[1.35rem] text-gold mb-6">
                <FaEye />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">
                  Our Vision
                </span>
              </div>
              <h3 className="font-display text-[1.4rem] font-bold text-white mb-4">
                Ghana's Leading Meat Processor
              </h3>
              <p
                className="leading-relaxed text-[0.95rem]"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                To be Ghana's leading meat-processing company, recognized for ethical sourcing,
                dedicated support for agricultural growth, and a passion for delivering safe,
                delicious, and trusted protein solutions to consumers nationwide and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ───────────────────────────────── */}
      <section className="relative py-24 bg-green-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/Farmer%20Partnership%20and%20Smart%20Processing.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark/95 to-green-mid/80" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-white mb-2">
              Our Core Values
            </h2>
            <div className="flex items-center justify-center mt-4">
              <FaHeart className="text-gold text-base" />
            </div>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="rounded-xl p-6 border border-white/15 hover:border-white/30 transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    opacity: valuesIn ? 1 : 0,
                    transform: valuesIn ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <Icon
                    size={20}
                    color="#c8a850"
                    style={{ display: 'block', marginBottom: '0.75rem' }}
                  />
                  <h4
                    style={{
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      marginBottom: '0.4rem',
                      lineHeight: '1.3',
                      fontFamily: 'Fraunces, Georgia, serif',
                    }}
                  >
                    {v.title}
                  </h4>
                  <p style={{ color: '#d4e8d4', fontSize: '0.78rem', lineHeight: '1.65' }}>
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 mb-4">
              Our Three Interdependent Pillars
            </h2>
            <p className="text-bgray-600 max-w-[580px] mx-auto text-[0.95rem] leading-relaxed">
              A resilient business model built on three interlocking pillars that support each
              other.
            </p>
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className={`relative rounded-2xl p-10 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${
                    p.highlight
                      ? 'bg-green-dark border border-transparent'
                      : 'bg-white border border-bgray-100'
                  }`}
                  style={{
                    opacity: pillarsIn ? 1 : 0,
                    transform: pillarsIn ? 'translateY(0)' : 'translateY(28px)',
                    transition: `opacity 0.55s ease ${i * 0.15}s, transform 0.55s ease ${i * 0.15}s`,
                  }}
                >
                  <span
                    className="absolute top-4 right-6 font-display text-[6rem] font-bold leading-none select-none pointer-events-none"
                    style={{
                      color: p.highlight ? 'rgba(200,168,80,0.12)' : 'rgba(232,232,228,0.8)',
                    }}
                  >
                    {p.num}
                  </span>
                  <div className="relative">
                    <Icon
                      size={26}
                      color={p.highlight ? '#c8a850' : '#2d6a2d'}
                      style={{ display: 'block', marginBottom: '1rem' }}
                    />
                    <h3
                      className={`font-display text-[1.2rem] font-bold mb-3 ${
                        p.highlight ? 'text-white' : 'text-bgray-800'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`text-[0.88rem] leading-relaxed ${p.highlight ? '' : 'text-bgray-600'}`}
                      style={p.highlight ? { color: 'rgba(255,255,255,0.82)' } : undefined}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 mb-6">
            Our Team
          </h2>
          <p className="text-bgray-500 text-[1rem] italic">It is being updated</p>
        </div>
      </section>

      <CTABanner
        title="Ready to Partner With Us?"
        subtitle="Whether you are a farmer, investor, potential partner, or buyer, get on board and let's have this exciting journey together."
        primaryLabel="Contact Us"
        primaryTo={ROUTES.CONTACT}
        secondaryLabel="Our Farmer Network"
        secondaryTo={ROUTES.FARMERS}
      />
    </div>
  )
}
