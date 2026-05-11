import { Link } from 'react-router'

interface CTABannerProps {
  title: string
  subtitle: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel: string
  secondaryTo: string
}

export const CTABanner = ({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTABannerProps) => (
  <section className="relative bg-green-dark py-16 overflow-hidden">
    {/* Left gold accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/[0.06] pointer-events-none" />
    <div className="absolute -bottom-24 right-36 w-96 h-96 rounded-full bg-green-mid/20 pointer-events-none" />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-10">
      <div className="max-w-[560px]">
        <div className="h-px w-12 bg-gold mb-5" />
        <h2 className="font-display text-[1.9rem] md:text-[2.25rem] font-bold text-white mb-3 leading-[1.18]">
          {title}
        </h2>
        <p className="text-white/72 text-[0.95rem] leading-relaxed">{subtitle}</p>
      </div>
      <div className="flex gap-4 flex-wrap flex-shrink-0">
        <Link
          to={primaryTo}
          className="px-8 py-3.5 bg-gold text-green-dark rounded-lg font-bold text-[0.95rem] hover:bg-gold-light transition-all hover:-translate-y-px shadow-lg"
        >
          {primaryLabel}
        </Link>
        <Link
          to={secondaryTo}
          className="px-8 py-3.5 bg-transparent text-white border-2 border-white/50 rounded-lg font-semibold text-[0.95rem] hover:bg-white/10 hover:border-white transition-all"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  </section>
)
