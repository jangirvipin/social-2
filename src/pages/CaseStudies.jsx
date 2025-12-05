import { Link, useParams } from 'react-router-dom'
import { Button, Card, SectionTitle } from '../components'

const caseStudies = [
  {
    id: 'techstart-growth',
    title: 'TechStart B2B Lead Generation',
    client: 'TechStart Inc.',
    industry: 'SaaS / Technology',
    image: '🚀',
    summary: '300% increase in qualified leads through integrated digital campaigns.',
    challenge: 'TechStart was struggling to generate quality B2B leads for their enterprise SaaS platform. Their existing marketing efforts were producing high volume but low-quality leads that rarely converted.',
    strategy: 'We developed a comprehensive ABM (Account-Based Marketing) strategy combined with content marketing and targeted LinkedIn campaigns to reach decision-makers at enterprise companies.',
    execution: 'Implemented a multi-channel approach including personalized landing pages, thought leadership content, webinar series, and highly targeted paid campaigns on LinkedIn and Google.',
    results: [
      { metric: '300%', label: 'Increase in MQLs' },
      { metric: '45%', label: 'Reduction in CAC' },
      { metric: '4.2x', label: 'ROAS' },
      { metric: '89%', label: 'Lead Quality Score' },
    ],
  },
  {
    id: 'retailplus-ecommerce',
    title: 'RetailPlus E-commerce Transformation',
    client: 'RetailPlus',
    industry: 'E-commerce / Retail',
    image: '🛒',
    summary: '250% revenue growth through omnichannel marketing strategy.',
    challenge: 'RetailPlus faced declining online sales and increasing competition from larger e-commerce players. They needed a complete digital transformation to stay competitive.',
    strategy: 'Created an omnichannel marketing strategy focusing on personalization, retargeting, and customer lifecycle marketing to maximize customer lifetime value.',
    execution: 'Redesigned the entire customer journey with personalized email sequences, dynamic retargeting ads, social commerce integration, and influencer partnerships.',
    results: [
      { metric: '250%', label: 'Revenue Growth' },
      { metric: '180%', label: 'Increase in AOV' },
      { metric: '65%', label: 'Return Customer Rate' },
      { metric: '3.8x', label: 'Email ROI' },
    ],
  },
  {
    id: 'healthwise-awareness',
    title: 'HealthWise Brand Awareness Campaign',
    client: 'HealthWise Clinic',
    industry: 'Healthcare',
    image: '🏥',
    summary: '500% increase in brand visibility and 200% more patient inquiries.',
    challenge: 'HealthWise was a new healthcare clinic struggling to establish brand recognition in a competitive market dominated by established players.',
    strategy: 'Developed a local-focused digital marketing strategy combining SEO, content marketing, social media, and community engagement to build trust and visibility.',
    execution: 'Created educational health content, optimized local SEO, launched targeted Facebook and Instagram campaigns, and established community partnerships.',
    results: [
      { metric: '500%', label: 'Brand Visibility' },
      { metric: '200%', label: 'Patient Inquiries' },
      { metric: '#1', label: 'Local SEO Ranking' },
      { metric: '45K', label: 'Social Followers' },
    ],
  },
  {
    id: 'finserve-leads',
    title: 'FinServe Financial Services Lead Gen',
    client: 'FinServe Solutions',
    industry: 'Financial Services',
    image: '💰',
    summary: 'Generated $2.5M in pipeline through targeted campaigns.',
    challenge: 'FinServe needed to generate high-value leads for their wealth management services while maintaining compliance with financial advertising regulations.',
    strategy: 'Created a compliant yet compelling content marketing and paid advertising strategy targeting high-net-worth individuals and business owners.',
    execution: 'Developed thought leadership content, hosted exclusive webinars, implemented LinkedIn lead gen campaigns, and created personalized nurture sequences.',
    results: [
      { metric: '$2.5M', label: 'Pipeline Generated' },
      { metric: '150+', label: 'Qualified Leads' },
      { metric: '35%', label: 'Conversion Rate' },
      { metric: '100%', label: 'Compliance' },
    ],
  },
]

function CaseStudyDetail() {
  const { id } = useParams()
  const study = caseStudies.find(s => s.id === id)

  if (!study) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl text-white">Case study not found</h1>
        <Button to="/case-studies" className="mt-4">Back to Case Studies</Button>
      </div>
    )
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="text-amber-500 hover:text-amber-400 text-sm mb-6 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          <div className="text-6xl mb-6">{study.image}</div>
          <span className="text-amber-500 font-medium">{study.industry}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">{study.title}</h1>
          <p className="text-xl text-slate-400">{study.summary}</p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-4 gap-6 mb-16">
            {study.results.map((result) => (
              <Card key={result.label} hover={false} className="text-center">
                <div className="text-3xl font-bold text-amber-400">{result.metric}</div>
                <div className="text-sm text-slate-500 mt-1">{result.label}</div>
              </Card>
            ))}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-slate-400">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Strategy</h2>
              <p className="text-slate-400">{study.strategy}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Execution</h2>
              <p className="text-slate-400">{study.execution}</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button to="/contact" size="lg">Get Similar Results</Button>
          </div>
        </div>
      </section>
    </>
  )
}

function CaseStudyList() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Real Results for Real Businesses
            </h1>
            <p className="text-xl text-slate-400">
              Explore how we've helped companies across industries achieve exceptional growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.id} to={`/case-studies/${study.id}`}>
                <Card className="h-full group">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{study.image}</div>
                    <div className="flex-1">
                      <span className="text-amber-500 text-sm font-medium">{study.industry}</span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-slate-400 mt-2">{study.summary}</p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {study.results.slice(0, 2).map((result) => (
                          <div key={result.label}>
                            <div className="text-lg font-bold text-amber-400">{result.metric}</div>
                            <div className="text-xs text-slate-500">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Button to="/contact" variant="secondary" size="lg">Start Your Project</Button>
        </div>
      </section>
    </>
  )
}

export default function CaseStudies() {
  const { id } = useParams()
  return id ? <CaseStudyDetail /> : <CaseStudyList />
}
