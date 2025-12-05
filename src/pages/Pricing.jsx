import { Button, Card, SectionTitle } from '../components'

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses starting their digital journey.',
    features: [
      'Social Media Management (2 platforms)',
      'Basic SEO Optimization',
      'Monthly Performance Report',
      'Email Support',
      '1 Blog Post per Month',
    ],
    notIncluded: [
      'Paid Ads Management',
      'Advanced Analytics',
      'Dedicated Account Manager',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$5,000',
    period: '/month',
    description: 'Ideal for growing businesses ready to scale their marketing.',
    features: [
      'Social Media Management (4 platforms)',
      'Advanced SEO & Content Strategy',
      'Paid Ads Management (up to $5K spend)',
      'Weekly Performance Reports',
      'Dedicated Account Manager',
      '4 Blog Posts per Month',
      'Email Marketing Campaigns',
      'A/B Testing & Optimization',
    ],
    notIncluded: [
      'Video Production',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-service solution for established businesses.',
    features: [
      'Unlimited Social Platforms',
      'Enterprise SEO Strategy',
      'Unlimited Paid Ads Management',
      'Real-time Analytics Dashboard',
      'Senior Strategy Team',
      'Unlimited Content Creation',
      'Video Production',
      'Brand Strategy & Design',
      'Priority Support',
      'Quarterly Strategy Reviews',
    ],
    notIncluded: [],
    cta: 'Contact Us',
    popular: false,
  },
]

const faqs = [
  { q: 'What\'s included in the monthly fee?', a: 'Each plan includes strategy development, execution, optimization, and reporting. Paid ad spend is separate from management fees.' },
  { q: 'How long until I see results?', a: 'Most clients see initial improvements within 30-60 days, with significant results typically appearing within 3-6 months depending on the strategy.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can change your plan at any time. Changes take effect at the start of the next billing cycle.' },
  { q: 'Do you offer custom packages?', a: 'Absolutely! Our Enterprise plan is fully customizable. Contact us to discuss your specific needs.' },
]

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Transparent Pricing for Every Stage
            </h1>
            <p className="text-xl text-slate-400">
              No hidden fees. No long-term contracts. Just results-driven marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? 'border-amber-500 bg-slate-800' : ''}`}
                hover={false}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-slate-400 text-sm">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  to="/contact"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.q} hover={false}>
                <h4 className="text-lg font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-slate-400">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Let's build a package that perfectly fits your business needs and budget.
          </p>
          <Button to="/contact" variant="secondary" size="lg">Book a Free Consultation</Button>
        </div>
      </section>
    </>
  )
}
