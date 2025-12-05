import { Link } from 'react-router-dom'
import { Button, Card, SectionTitle } from '../components'

const services = [
  { icon: '📱', title: 'Social Media Marketing', desc: 'Build your brand presence across all social platforms with engaging content and targeted campaigns.' },
  { icon: '🔍', title: 'SEO & Organic Growth', desc: 'Dominate search rankings with our proven SEO strategies that drive sustainable organic traffic.' },
  { icon: '📊', title: 'Paid Ads Management', desc: 'Maximize your ROI with data-driven paid advertising across Google, Meta, and more.' },
  { icon: '✍️', title: 'Content Creation', desc: 'Compelling content that tells your story and converts your audience into loyal customers.' },
  { icon: '🎨', title: 'Branding & Creative', desc: 'Stand out with distinctive brand identity and creative assets that leave lasting impressions.' },
  { icon: '💻', title: 'Web Development', desc: 'Beautiful, fast, and conversion-optimized websites built with modern technology.' },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150M+', label: 'Revenue Generated' },
  { value: '50+', label: 'Team Experts' },
]

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'ApexDigital transformed our online presence. Our leads increased by 300% in just 6 months.' },
  { name: 'Michael Chen', role: 'Founder, GrowthCo', text: 'The team is incredibly professional and results-driven. Best marketing investment we ever made.' },
  { name: 'Emily Davis', role: 'CMO, RetailPlus', text: 'Their strategic approach to our campaigns delivered beyond our expectations. Highly recommend!' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
            🚀 #1 Digital Marketing Agency
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Grow Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Data-Driven Marketing
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            We help ambitious brands scale with proven digital marketing strategies, creative excellence, and measurable results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg">Start Your Project</Button>
            <Button to="/case-studies" variant="secondary" size="lg">View Our Work</Button>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Services"
            title="Everything You Need to Dominate Digital"
            description="From strategy to execution, we provide comprehensive digital marketing services that drive real business growth."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/services" variant="outline">Explore All Services</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Why Choose Us"
                title="Results That Speak for Themselves"
                description="We're not just another agency. We're your growth partners committed to delivering exceptional results."
                center={false}
              />
              <div className="space-y-6">
                {[
                  { title: 'Data-Driven Strategies', desc: 'Every decision backed by analytics and insights' },
                  { title: 'Transparent Reporting', desc: 'Real-time dashboards and regular performance updates' },
                  { title: 'Dedicated Team', desc: 'Expert specialists assigned to your account' },
                  { title: 'Proven Track Record', desc: '500+ successful projects across industries' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl opacity-20 absolute inset-0 blur-3xl" />
              <div className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700">
                <div className="text-6xl font-bold text-white mb-4">300%</div>
                <div className="text-slate-400 mb-6">Average increase in qualified leads for our clients</div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-slate-700/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-amber-400">4.2x</div>
                    <div className="text-xs text-slate-500">Avg. ROAS</div>
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400">-45%</div>
                    <div className="text-xs text-slate-500">Cost per Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from businesses we've helped grow."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/testimonials" variant="outline">Read More Reviews</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Let's discuss how we can help you achieve your business goals with proven digital marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg">Schedule a Free Consultation</Button>
            <Button to="/pricing" variant="ghost" size="lg" className="text-white hover:bg-white/10">View Pricing →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
