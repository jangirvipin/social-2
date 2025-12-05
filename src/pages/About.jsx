import { Button, Card, SectionTitle } from '../components'

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', image: '👨‍💼' },
  { name: 'Sarah Kim', role: 'Head of Strategy', image: '👩‍💻' },
  { name: 'Marcus Johnson', role: 'Creative Director', image: '👨‍🎨' },
  { name: 'Emily Chen', role: 'Head of Performance', image: '👩‍📊' },
]

const timeline = [
  { year: '2018', title: 'Founded', desc: 'Started with a vision to transform digital marketing' },
  { year: '2019', title: 'First 50 Clients', desc: 'Expanded team and services based on client demand' },
  { year: '2021', title: 'Global Expansion', desc: 'Opened offices in 3 new countries' },
  { year: '2023', title: '500+ Projects', desc: 'Reached milestone of 500 successful campaigns' },
  { year: '2024', title: 'Industry Leader', desc: 'Recognized as top digital marketing agency' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              We're on a Mission to Transform Digital Marketing
            </h1>
            <p className="text-xl text-slate-400">
              ApexDigital was founded with a simple belief: every business deserves access to world-class marketing expertise that drives real, measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="From Startup to Industry Leader"
                center={false}
              />
              <div className="space-y-4 text-slate-400">
                <p>
                  In 2018, our founders saw a gap in the market. Too many businesses were being underserved by agencies that prioritized quantity over quality, vanity metrics over real results.
                </p>
                <p>
                  We set out to build something different — an agency that combines data-driven strategy with creative excellence, transparency with expertise, and genuine partnership with our clients.
                </p>
                <p>
                  Today, we've helped over 500 businesses across 20+ industries achieve their growth goals. But we're just getting started. Our mission remains the same: to be the catalyst for our clients' success.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact">Work With Us</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-amber-400">7+</div>
                  <div className="text-slate-500 text-sm mt-1">Years of Experience</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-amber-100 text-sm mt-1">Team Members</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-orange-400">500+</div>
                  <div className="text-slate-500 text-sm mt-1">Projects Completed</div>
                </div>
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-rose-400">98%</div>
                  <div className="text-slate-500 text-sm mt-1">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400">
                To empower businesses of all sizes with innovative digital marketing strategies that deliver measurable results and sustainable growth. We believe in transparency, data-driven decisions, and building lasting partnerships.
              </p>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500/10 to-rose-500/10 border-orange-500/20">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400">
                To be the most trusted digital marketing partner for growth-focused businesses worldwide. We envision a future where every company, regardless of size, can access world-class marketing expertise and technology.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Experts Behind Your Success"
            description="Our diverse team of specialists brings together decades of combined experience in digital marketing, creative design, and technology."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                  {member.image}
                </div>
                <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Journey"
            title="The Road to Excellence"
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card hover={false}>
                      <span className="text-amber-500 font-bold">{item.year}</span>
                      <h4 className="text-xl font-semibold text-white mt-1">{item.title}</h4>
                      <p className="text-slate-400 mt-2">{item.desc}</p>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-amber-500 rounded-full flex-shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Join hundreds of businesses that have transformed their growth with ApexDigital.
          </p>
          <Button to="/contact" variant="secondary" size="lg">Let's Talk</Button>
        </div>
      </section>
    </>
  )
}
