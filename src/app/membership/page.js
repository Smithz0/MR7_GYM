'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';
import Button from '../components/Button';

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Full Gym Floor Access',
      'Standard Equipment Usage',
      'Locker Room & Showers',
      'Free WiFi',
      'Basic Fitness Assessment',
    ],
    popular: false,
    ctaText: 'Get Started',
  },
  {
    name: 'Pro',
    price: 59,
    features: [
      'Everything in Basic',
      'Unlimited Group Classes',
      'Sauna & Steam Room',
      'Nutrition Guidance',
      'Progress Tracking App',
      'Guest Pass (1/month)',
    ],
    popular: true,
    ctaText: 'Choose Pro',
  },
  {
    name: 'Elite',
    price: 99,
    features: [
      'Everything in Pro',
      'Personal Trainer (4 sessions/mo)',
      'VIP Lounge Access',
      'Custom Meal Planning',
      'Priority Class Booking',
      '24/7 Gym Access',
      'Unlimited Guest Passes',
    ],
    popular: false,
    ctaText: 'Go Elite',
  },
];

const comparisonFeatures = [
  { feature: 'Gym Floor Access', basic: true, pro: true, elite: true },
  { feature: 'Locker Room & Showers', basic: true, pro: true, elite: true },
  { feature: 'Free WiFi', basic: true, pro: true, elite: true },
  { feature: 'Group Classes', basic: false, pro: true, elite: true },
  { feature: 'Sauna & Steam', basic: false, pro: true, elite: true },
  { feature: 'Nutrition Guide', basic: false, pro: true, elite: true },
  { feature: 'Progress Tracking', basic: false, pro: true, elite: true },
  { feature: 'Personal Trainer', basic: false, pro: false, elite: true },
  { feature: 'VIP Lounge', basic: false, pro: false, elite: true },
  { feature: 'Custom Meal Plan', basic: false, pro: false, elite: true },
  { feature: '24/7 Access', basic: false, pro: false, elite: true },
  { feature: 'Unlimited Guests', basic: false, pro: false, elite: true },
];

const faqs = [
  {
    question: 'Can I switch my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a contract or commitment?',
    answer: 'No long-term contracts required. All our plans are month-to-month with the freedom to cancel anytime with 30 days notice.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a complimentary 3-day trial pass so you can experience MR7 Fitness before committing. Just visit us or contact our team.',
  },
  {
    question: 'What are the gym hours?',
    answer: 'Standard hours are Monday-Friday 5AM-11PM and Saturday-Sunday 7AM-9PM. Elite members have 24/7 access with their keycard.',
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 3 months per year at no additional cost. Simply notify us at least 7 days in advance.',
  },
  {
    question: 'What happens during my first visit?',
    answer: 'New members receive a complimentary fitness assessment and facility tour. A staff member will introduce you to the equipment and answer all your questions.',
  },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-black-deep" style={{ paddingTop: '200px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Membership
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Find Your Perfect Plan
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Choose the membership tier that
            matches your fitness ambitions.
          </p>
        </div>
      </section>

      {/* ═══════════ PRICING CARDS ═══════════ */}
      <section className="py-24 bg-black-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 150}>
                <PricingCard {...plan} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-24 bg-black-elevated">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Compare Plans"
              subtitle="See exactly what's included in each membership tier."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 text-white font-bold text-sm uppercase tracking-wider">
                      Basic
                    </th>
                    <th className="text-center py-4 px-4 text-gold font-bold text-sm uppercase tracking-wider">
                      Pro ★
                    </th>
                    <th className="text-center py-4 px-4 text-white font-bold text-sm uppercase tracking-wider">
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-gray-800 ${
                        index % 2 === 0 ? 'bg-black-card/50' : ''
                      }`}
                    >
                      <td className="py-4 px-4 text-gray-300 text-sm">{row.feature}</td>
                      {['basic', 'pro', 'elite'].map((tier) => (
                        <td key={tier} className="text-center py-4 px-4">
                          {row[tier] ? (
                            <svg className="w-5 h-5 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-gray-700">
                    <td className="py-6 px-4 text-gray-400 font-semibold text-sm">Monthly Price</td>
                    <td className="text-center py-6 px-4 text-white font-bold text-lg">$29</td>
                    <td className="text-center py-6 px-4 text-gold font-bold text-lg">$59</td>
                    <td className="text-center py-6 px-4 text-white font-bold text-lg">$99</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 bg-black-deep">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our membership plans."
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-black-card/50 transition-colors duration-300"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 bg-black-elevated">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Our team is here to help you find the perfect membership plan.
            </p>
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
