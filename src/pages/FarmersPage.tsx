import { Link } from 'react-router'
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'
import { PageHero, CTABanner } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FARMER_BENEFITS, WHO_CAN_JOIN, JOIN_STEPS } from '@/constants'

export const FarmersPage = () => {
  useInView(0.2)
  useInView(0.2)
  const { ref: benefitsRef, inView: benefitsIn } = useInView(0.08)
  const { ref: whoImgRef, inView: whoImgIn } = useInView(0.2)
  const { ref: whoTextRef, inView: whoTextIn } = useInView(0.2)
  const { ref: stepsRef, inView: stepsIn } = useInView(0.1)

  return (
    <div>
      <PageHero
        eyebrow="The Backbone of Pasture Prime"
        title="Our Farmer Network"
        subtitle="Empowering smallholder and midsized poultry farmers with reliable market access, fair pricing, and the infrastructure to grow."
        breadcrumb="Our Farmers"
        bgImage="/images/Our%20Farmer%20Network.png"
      />

      {/* ── FARMER STORY ──────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <img
            src="/images/The solutions.jpeg"
            alt="Solving the Fragmentation Problem"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────── */}
      <section className="bg-green-dark py-14">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { num: '100%', label: 'Guaranteed Off-Take' },
            { num: 'Fair', label: 'Farm-Gate Pricing' },
            { num: 'Free', label: 'Farm-Gate Collection' },
            { num: '4', label: 'Simple Steps to Join' },
          ].map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <span className="block font-display text-[2.8rem] md:text-[3.4rem] font-bold text-gold leading-none mb-1">
                {s.num}
              </span>
              <span className="text-white/55 text-[0.72rem] uppercase tracking-[0.18em] font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <Eyebrow text="Farmer Benefits" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 mb-4">
              What You Get as a Pasture Prime Supplier
            </h2>
            <p className="text-bgray-600 max-w-[580px] mx-auto text-[0.95rem] leading-relaxed">
              We have designed our aggregation model to create real, lasting value for every farmer
              in our network.
            </p>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FARMER_BENEFITS.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="relative bg-white rounded-xl p-8 border border-bgray-100 hover:shadow-lg hover:-translate-y-1 transition-all group overflow-hidden"
                  style={{
                    opacity: benefitsIn ? 1 : 0,
                    transform: benefitsIn ? 'translateY(0)' : 'translateY(28px)',
                    transition: `opacity 0.5s ease ${Math.min(i, 4) * 0.1}s, transform 0.5s ease ${Math.min(i, 4) * 0.1}s`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <Icon
                    size={24}
                    color="#c8a850"
                    style={{ display: 'block', marginBottom: '1rem' }}
                  />
                  <h4 className="font-display text-[1.05rem] font-bold text-bgray-800 mb-2">
                    {b.title}
                  </h4>
                  <p className="text-bgray-600 text-[0.88rem] leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ──────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-14 text-center">
            Smallholder and Midsized Farmers Welcome
          </h2>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* image — slide from left */}
          <div
            ref={whoImgRef}
            className="flex items-center justify-center order-2 lg:order-1"
            style={{
              opacity: whoImgIn ? 1 : 0,
              transform: whoImgIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <img
              src="/images/Our Farmer Network.png"
              alt="Smallholder and Midsized Farmers"
              className="w-full max-h-[520px] object-contain rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>

          {/* text — slide from right */}
          <div
            ref={whoTextRef}
            className="order-1 lg:order-2"
            style={{
              opacity: whoTextIn ? 1 : 0,
              transform: whoTextIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
            }}
          >
            <p className="text-bgray-600 mb-4 leading-relaxed">
              Our network is open to smallholder and mid-sized poultry farmers who want a reliable
              and formal off-taker for their birds. Whether you are raising broilers in small
              batches, managing a larger operation, or are interested in venturing into poultry
              farming, Pasture Prime can work with your scale.
            </p>
            <p className="text-bgray-600 mb-7 leading-relaxed">
              We assess each farmer on bird quality, farming practices, and biosecurity standards,
              and provide support to help you meet our quality requirements if you are not there
              yet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {WHO_CAN_JOIN.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-3.5 bg-white rounded-lg border border-bgray-100 hover:border-green-light hover:bg-green-pale transition-all"
                >
                  <FaCircleCheck size={14} color="#2d6a2d" style={{ flexShrink: 0 }} />
                  <span className="text-[0.87rem] font-medium text-bgray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-mid text-white rounded-lg font-semibold text-[0.93rem] hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-md"
            >
              Apply to Join <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <Eyebrow text="The Process" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800">
              How Joining Us Works
            </h2>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {JOIN_STEPS.map((s, i) => {
              const Icon = s.icon
              const isLast = i === JOIN_STEPS.length - 1
              return (
                <div
                  key={s.title}
                  className={`relative rounded-2xl p-8 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${
                    isLast
                      ? 'bg-green-dark border border-transparent'
                      : 'bg-white border border-bgray-100'
                  }`}
                  style={{
                    opacity: stepsIn ? 1 : 0,
                    transform: stepsIn ? 'translateY(0)' : 'translateY(28px)',
                    transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`,
                  }}
                >
                  <span
                    className="absolute top-4 right-5 font-display text-[5rem] font-bold leading-none select-none pointer-events-none"
                    style={{ color: isLast ? 'rgba(200,168,80,0.12)' : 'rgba(232,232,228,0.8)' }}
                  >
                    {s.num}
                  </span>
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                        isLast ? 'bg-white/10' : 'bg-green-pale'
                      }`}
                    >
                      <Icon size={20} color={isLast ? '#c8a850' : '#2d6a2d'} />
                    </div>
                    <h3
                      className={`font-display text-[1.15rem] font-bold mb-3 ${
                        isLast ? 'text-white' : 'text-bgray-800'
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`text-[0.88rem] leading-relaxed ${isLast ? '' : 'text-bgray-600'}`}
                      style={isLast ? { color: 'rgba(255,255,255,0.8)' } : undefined}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Join the Pasture Prime Farmer Network?"
        subtitle="Get guaranteed off-take, fair pricing, and the market access your farm deserves."
        primaryLabel="Apply Now"
        primaryTo={ROUTES.CONTACT}
        secondaryLabel="Learn About Aggregation"
        secondaryTo="/services#aggregation"
      />
    </div>
  )
}
