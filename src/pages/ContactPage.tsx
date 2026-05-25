import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { FaPaperPlane, FaPlus, FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'
import { PageHero } from '@/components/common'
import {
  APP,
  CONTACT_CARDS,
  ENQUIRY_TYPES,
  FAQS,
  CONTACT_DETAILS,
  INTEREST_OPTIONS,
} from '@/constants'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'

const CONTACT_ENDPOINT = '/contact.php'

const inputCls =
  'w-full px-4 py-3 border border-bgray-200 rounded-lg text-[0.9rem] text-brand-text outline-none focus:border-green-mid focus:ring-2 focus:ring-green-mid/10 transition-all bg-white placeholder:text-bgray-400'

export const ContactPage = () => {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.replace('#', ''))
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }, [hash])

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    interest: '',
    subject: '',
    message: '',
  })

  const { ref: cardsRef, inView: cardsIn } = useInView(0.1)
  const { ref: infoRef, inView: infoIn } = useInView(0.2)
  const { ref: formRef, inView: formIn } = useInView(0.2)
  const { ref: faqRef, inView: faqIn } = useInView(0.1)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          interest: '',
          subject: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="We Would Love to Hear From You"
        title="Contact Pasture Prime"
        subtitle="Farmers, investors, partners, and buyers, reach out and let's start a conversation."
        breadcrumb="Contact Us"
        bgImage="/images/Farm%20call.jpeg"
      />

      {/* ── CONTACT CARDS ─────────────────────────────── */}
      <section className="bg-white shadow-xl relative z-10">
        <div
          ref={cardsRef}
          className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CONTACT_CARDS.map((c, i) => {
            const Icon = c.icon
            const inner = (
              <>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-13 h-13 bg-green-pale rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-dark transition-colors duration-300">
                  <Icon size={20} color="#2d6a2d" className="group-hover:hidden" />
                  <Icon size={20} color="#c8a850" className="hidden group-hover:block" />
                </div>
                <h4 className="font-display font-bold text-bgray-800 mb-1.5">{c.title}</h4>
                <p className="font-semibold text-bgray-800 text-[0.92rem] mb-0.5">{c.main}</p>
                <span className="text-[0.8rem] text-bgray-400">{c.sub}</span>
              </>
            )
            const cls =
              'relative px-8 py-10 text-center border-b sm:border-r border-bgray-100 last:border-0 group overflow-hidden'
            const style = {
              opacity: cardsIn ? 1 : 0,
              transform: cardsIn ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }
            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
                style={style}
              >
                {inner}
              </a>
            ) : (
              <div key={c.title} className={cls} style={style}>
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────── */}
      <section id="message" className="bg-off-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: info — slide from left */}
          <div
            ref={infoRef}
            style={{
              opacity: infoIn ? 1 : 0,
              transform: infoIn ? 'translateX(0)' : 'translateX(-36px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            <Eyebrow text="Get In Touch" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800 leading-[1.15] mb-5">
              Let Us Talk Business
            </h2>
            <p className="text-bgray-600 mb-8 leading-relaxed">
              Whether you are a buyer looking for premium poultry supply, a smallholder or midsized
              farmer wanting to join our network, a large-scale producer needing processing
              services, an investor or potential partner interested in what we are building, we
              would love to hear from you.
            </p>

            <p className="text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-bgray-400 mb-4">
              I am enquiring as a...
            </p>
            <div className="flex flex-col gap-2.5 mb-10">
              {ENQUIRY_TYPES.map((e) => {
                const Icon = e.icon
                return (
                  <div
                    key={e.title}
                    className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-bgray-100 hover:border-green-light hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 bg-green-pale rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-mid transition-colors">
                      <Icon size={14} color="#2d6a2d" className="group-hover:hidden" />
                      <Icon size={14} color="#ffffff" className="hidden group-hover:block" />
                    </div>
                    <div>
                      <strong className="block text-bgray-800 text-[0.88rem] font-semibold mb-0.5">
                        {e.title}
                      </strong>
                      <p className="text-bgray-500 text-[0.8rem] leading-snug">{e.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-bgray-100">
              {CONTACT_DETAILS.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-pale rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={15} color="#2d6a2d" />
                    </div>
                    <div>
                      <strong className="block text-bgray-800 text-[0.88rem] font-semibold mb-0.5">
                        {item.title}
                      </strong>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bgray-600 text-[0.88rem] hover:text-green-mid transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-bgray-600 text-[0.88rem]">{item.value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: form — slide from right */}
          <div
            ref={formRef}
            style={{
              opacity: formIn ? 1 : 0,
              transform: formIn ? 'translateX(0)' : 'translateX(36px)',
              transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
            }}
          >
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-bgray-100">
              <h3 className="font-display text-[1.5rem] font-bold text-bgray-800 mb-1">
                Send Us a Message
              </h3>
              <p className="text-bgray-500 text-[0.88rem] mb-7">
                We typically reply within 1 business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value={form.fname}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      value={form.lname}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+233 000 000 000"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                    I am a...
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select your category</option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-[0.82rem] font-semibold text-bgray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us more about your enquiry..."
                    className={`${inputCls} resize-y`}
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-green-pale border border-green-light rounded-xl">
                    <FaCircleCheck size={18} color="#2d6a2d" className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-dark text-[0.9rem]">Message sent!</p>
                      <p className="text-bgray-600 text-[0.83rem] mt-0.5">
                        We will get back to you within 1 business day.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <FaCircleXmark size={18} color="#dc2626" className="shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-700 text-[0.9rem]">
                        Something went wrong
                      </p>
                      <p className="text-bgray-600 text-[0.83rem] mt-0.5">
                        Please try again or email us directly.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-green-mid text-white rounded-lg font-semibold text-[0.93rem] hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  {status !== 'submitting' && <FaPaperPlane size={14} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────── */}
      <div className="border-y-4 border-green-mid/20">
        <iframe
          src="https://maps.google.com/maps?q=Mampong-Akuapem,+Eastern+Region,+Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="360"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pasture Prime Ltd — Mampong-Akuapem, Ghana"
        />
      </div>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div
            ref={faqRef}
            className="text-center mb-14"
            style={{
              opacity: faqIn ? 1 : 0,
              transform: faqIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <Eyebrow text="FAQs" />
            <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-bgray-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border border-bgray-100 rounded-xl overflow-hidden shadow-sm"
                style={{
                  opacity: faqIn ? 1 : 0,
                  transform: faqIn ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.45s ease ${0.1 + i * 0.07}s, transform 0.45s ease ${0.1 + i * 0.07}s`,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left text-[0.93rem] font-semibold text-bgray-800 transition-colors ${
                    openFaq === i ? 'bg-green-pale' : 'bg-white hover:bg-green-pale/60'
                  }`}
                >
                  <span>{faq.q}</span>
                  <FaPlus
                    size={13}
                    color="#2d6a2d"
                    className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? '300px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <div className="px-6 py-5 bg-green-pale/50 border-t border-bgray-100">
                    <p className="text-bgray-600 text-[0.91rem] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-bgray-400 text-[0.85rem] mt-10">
            Still have questions?{' '}
            <a
              href={`mailto:${APP.EMAIL}`}
              className="text-green-mid font-semibold hover:underline"
            >
              Email us directly
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
