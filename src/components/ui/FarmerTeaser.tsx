import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa6'
import { ROUTES } from '@/constants/routes'
import { FARMER_BENEFITS } from '@/constants'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from './Eyebrow'
export const FarmerTeaser = () => {
  const { ref: leftRef, inView: leftIn } = useInView(0.2)
  const { ref: gridRef, inView: gridIn } = useInView(0.15)

  return (
    <section className="relative py-24 bg-green-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'url(/images/Our%20Farmer%20Network.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-dark/90 to-green-mid/75" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left: text — slides in from left */}
        <div
          ref={leftRef}
          style={{
            opacity: leftIn ? 1 : 0,
            transform: leftIn ? 'translateX(0)' : 'translateX(-36px)',
            transition: 'opacity 0.75s ease, transform 0.75s ease',
          }}
        >
          <Eyebrow text="The Backbone of Pasture Prime" light />
          <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-white leading-[1.15] mb-5">
            Empowering Smallholder Farmers Across Ghana
          </h2>
          <p
            className="mb-8 text-[1rem] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.88)' }}
          >
            We work directly with smallholder and midsized poultry farmers, giving them guaranteed
            off-take, fair farm-gate prices, and the market access they deserve.
          </p>
          <Link
            to={ROUTES.FARMERS}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-green-dark rounded-lg font-bold text-[0.93rem] hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Join Our Farmer Network <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* right: benefit cards — stagger fade-up */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FARMER_BENEFITS.slice(0, 4).map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                style={{
                  opacity: gridIn ? 1 : 0,
                  transform: gridIn ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`,
                }}
              >
                <Icon
                  size={22}
                  color="#c8a850"
                  style={{ display: 'block', marginBottom: '0.6rem' }}
                />
                <p
                  style={{
                    color: '#1a3a1a',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    marginBottom: '0.35rem',
                    lineHeight: '1.35',
                    fontFamily: 'Fraunces, Georgia, serif',
                  }}
                >
                  {b.title}
                </p>
                <p style={{ color: '#6b6b65', fontSize: '0.8rem', lineHeight: '1.65' }}>{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
