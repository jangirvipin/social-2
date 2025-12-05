import { Button, Card, SectionTitle } from '../components'

const services = [
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Build brand awareness and engage your audience across all major social platforms.',
    features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Social Analytics'],
  },
  {
    icon: '🔍',
    title: 'SEO & Organic Growth',
    desc: 'Dominate search rankings and drive sustainable organic traffic to your website.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
  },
  {
    icon: '📊',
    title: 'Paid Ads Management',
    desc: 'Maximize your ROI with targeted advertising across Google, Meta, LinkedIn, and more.',
    features: ['Google Ads', 'Meta Advertising', 'LinkedIn Ads', 'Retargeting Campaigns'],
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    desc: 'Compelling content that tells your brand story and converts visitors into customers.',
    features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Copywriting'],
  },
  {
    icon: '🎨',
    title: 'Branding & Creative',
    desc: 'Stand out with distinctive brand identity and creative assets that leave lasting impressions.',
    features: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Beautiful, fast, and conversion-optimized websites built with modern technology.',
    features: ['Custom Websites', 'E-commerce', 'Landing Pages', 'Performance Optimization'],
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We dive deep into your business, goals, and target audience.' },
  { step: '02', title: 'Strategy', desc: 'We craft a customized marketing plan tailored to your objectives.' },
  { step: '03', title: 'Execution', desc: 'Our team brings the strategy to life with precision and creativity.' },
  { step: '04', title: 'Optimization', desc: 'We continuously analyze and improve for maximum results.' },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Full-Stack Digital Marketing Solutions
            </h1>
            <p className="text-xl text-slate-400">
              From strategy to execution, we provide comprehensive services that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-500 text-sm">
                      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures consistent success for every project."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
                )}
                <div className="text-6xl font-bold text-amber-500/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Let's discuss which services are right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg">Schedule a Consultation</Button>
            <Button to="/pricing" variant="ghost" size="lg" className="text-white hover:bg-white/10">View Pricing →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
