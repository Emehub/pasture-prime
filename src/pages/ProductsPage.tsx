import { Link } from 'react-router'
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'
import { PageHero, CTABanner } from '@/components/common'
import { ROUTES } from '@/constants/routes'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { POULTRY_CUTS, BYPRODUCTS } from '@/constants'

export const ProductsPage = () => {
  const { ref: cutsRef, inView: cutsIn } = useInView(0.08)
  const { ref: byproductsRef, inView: byproductsIn } = useInView(0.1)

  return (
    <div>
      <PageHero
        eyebrow="Fresh from Our Facility"
        title="Our Poultry Products"
        subtitle="Premium cuts and value-added by-products, processed to the highest hygiene and quality standards and available fresh or frozen."
        breadcrumb="Products"
        bgImage="/images/100%25%20Fresh%20or%20Frozen.webp"
      />

      {/* ── TICKER ───────────────────────────────────── */}
      <div className="bg-green-mid overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-ticker">
          {[0, 1].map((n) => (
            <span
              key={n}
              className="flex items-center gap-8 pr-8 text-white font-semibold text-[0.82rem] uppercase tracking-[0.18em]"
            >
              <span>Premium Poultry Cuts</span>
              <span className="text-white/40">·</span>
              <span>Value-Added By-Products</span>
              <span className="text-white/40">·</span>
              <span>Highest Hygiene Standards</span>
              <span className="text-white/40">·</span>
              <span>Available Fresh or Frozen</span>
              <span className="text-white/40">·</span>
              <span>Quality Certified Processing</span>
              <span className="text-white/40">·</span>
              <span>Zero Waste Circular Model</span>
              <span className="text-white/40">·</span>
              <span>Whole Chicken &amp; Custom Cuts</span>
              <span className="text-white/40">·</span>
              <span>Bulk &amp; Retail Supply</span>
              <span className="text-white/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── POULTRY CUTS ──────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <Eyebrow text="Poultry Cuts" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 mb-4">
              Hygienically Processed Poultry Cuts
            </h2>
            <p className="text-bgray-600 max-w-[580px] mx-auto text-[0.95rem] leading-relaxed">
              Every cut is processed to market preference at our facility to the highest hygiene and
              quality standards, available fresh or frozen.
            </p>
          </div>

          <div ref={cutsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POULTRY_CUTS.map((p, i) => (
              <div
                key={p.name}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                style={{
                  opacity: cutsIn ? 1 : 0,
                  transform: cutsIn ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.5s ease ${Math.min(i, 5) * 0.07}s, transform 0.5s ease ${Math.min(i, 5) * 0.07}s`,
                }}
              >
                {/* image with gradient overlay */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-dark/90 via-green-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-[1.2rem] font-bold text-white mb-1">
                      {p.name}
                    </h3>
                    <p className="text-white/80 text-[0.8rem] leading-snug line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* specs + CTA */}
                <div className="p-5 border-t border-bgray-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.specs.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 bg-green-pale text-green-mid rounded-md text-[0.73rem] font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={ROUTES.CONTACT}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-green-mid group-hover:gap-2.5 transition-all"
                  >
                    Enquire Now <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS DIVIDER ─────────────────────────────── */}
      <section className="bg-green-dark py-14">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { num: '9+', label: 'Poultry Cuts' },
            { num: '3', label: 'By-Product Lines' },
            { num: '0%', label: 'Processing Waste' },
            { num: '100%', label: 'Hygiene Certified' },
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

      {/* ── BY-PRODUCTS ───────────────────────────────── */}
      <section className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <Eyebrow text="Circular Processing" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 mb-4">
              Value-Added By-Products
            </h2>
            <p className="text-bgray-600 max-w-[580px] mx-auto text-[0.95rem] leading-relaxed">
              Nothing is wasted. Our circular model converts every processing by-product into
              marketable goods sold back to the farming community and beyond.
            </p>
          </div>

          <div ref={byproductsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BYPRODUCTS.map((p, i) => (
              <div
                key={p.name}
                className="group rounded-2xl overflow-hidden bg-white border border-bgray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{
                  opacity: byproductsIn ? 1 : 0,
                  transform: byproductsIn ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.55s ease ${i * 0.15}s, transform 0.55s ease ${i * 0.15}s`,
                }}
              >
                {/* image */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-dark/75 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-[1.15rem] font-bold text-white">{p.name}</h3>
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  <p className="text-bgray-600 text-[0.88rem] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-col gap-2 mb-4">
                    {p.specs.map((s) => (
                      <div key={s} className="flex items-start gap-2">
                        <FaCircleCheck
                          size={13}
                          color="#2d6a2d"
                          style={{ flexShrink: 0, marginTop: '0.2rem' }}
                        />
                        <span className="text-[0.83rem] text-bgray-600">{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-bgray-100 mb-4">
                    <p className="text-[0.72rem] font-semibold text-bgray-400 uppercase tracking-wider mb-1.5">
                      Ideal for
                    </p>
                    <p className="text-[0.82rem] text-bgray-600">{p.buyers}</p>
                  </div>
                  <Link
                    to={ROUTES.CONTACT}
                    className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-green-mid group-hover:gap-2.5 transition-all"
                  >
                    Enquire Now <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Order or Bulk Supply?"
        subtitle="Talk to our team about pricing, packaging specs, and supply agreements tailored to your needs."
        primaryLabel="Get a Quote"
        primaryTo={ROUTES.CONTACT}
        secondaryLabel="Our Services"
        secondaryTo={ROUTES.SERVICES}
      />
    </div>
  )
}
