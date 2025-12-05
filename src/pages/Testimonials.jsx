import { Card, SectionTitle, Button } from '../components'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '👩‍💼',
    text: 'ApexDigital completely transformed our digital presence. Within 6 months, our qualified leads increased by 300% and our cost per acquisition dropped by 45%. They truly understand B2B marketing.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'GrowthCo',
    image: '👨‍💻',
    text: 'Working with ApexDigital was the best business decision we made last year. Their strategic approach and attention to detail is unmatched. Our ROI has exceeded expectations.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'CMO',
    company: 'RetailPlus',
    image: '👩‍🎨',
    text: 'The team at ApexDigital doesn\'t just execute campaigns—they become true partners in your growth. Their insights have been invaluable to our e-commerce success.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'Marketing Director',
    company: 'FinServe Solutions',
    image: '👨‍💼',
    text: 'Navigating financial services marketing regulations is complex, but ApexDigital handled it expertly. They delivered $2.5M in pipeline while maintaining 100% compliance.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Owner',
    company: 'HealthWise Clinic',
    image: '👩‍⚕️',
    text: 'As a local business, we needed someone who understood our market. ApexDigital helped us become the #1 ranked clinic in our area. Patient inquiries doubled in 3 months.',
    rating: 5,
  },
  {
    name: 'James Martinez',
    role: 'VP of Sales',
    company: 'CloudTech Solutions',
    image: '👨‍🔬',
    text: 'The lead quality from ApexDigital\'s campaigns is exceptional. Our sales team finally has qualified prospects to work with. Conversion rates have never been higher.',
    rating: 5,
  },
  {
    name: 'Amanda Roberts',
    role: 'Brand Manager',
    company: 'Luxe Fashion',
    image: '👩‍🎤',
    text: 'ApexDigital understands the nuances of luxury brand marketing. They helped us reach new audiences while maintaining our premium positioning. Engagement is up 400%.',
    rating: 5,
  },
  {
    name: 'Robert Kim',
    role: 'CEO',
    company: 'StartupX',
    image: '🧑‍💼',
    text: 'For a startup with limited budget, ApexDigital showed us how to maximize every dollar. We achieved product-market fit faster thanks to their data-driven approach.',
    rating: 5,
  },
]

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '500+', label: 'Happy Clients' },
  { value: '92%', label: 'Client Retention' },
]

export default function Testimonials() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-slate-400">
              Don't take our word for it—hear from the businesses we've helped grow.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Button to="/contact" variant="secondary" size="lg">Start Your Project</Button>
        </div>
      </section>
    </>
  )
}
