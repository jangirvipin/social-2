import { Link, useParams } from 'react-router-dom'
import { Button, Card, SectionTitle } from '../components'

const blogPosts = [
  {
    slug: 'digital-marketing-trends-2024',
    title: '10 Digital Marketing Trends That Will Dominate 2024',
    excerpt: 'Discover the key trends shaping digital marketing this year, from AI-powered personalization to the rise of short-form video content.',
    category: 'Industry Trends',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    image: '📈',
    content: `
      <p>The digital marketing landscape is evolving faster than ever. As we move through 2024, several key trends are reshaping how businesses connect with their audiences.</p>
      
      <h2>1. AI-Powered Personalization</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming the backbone of effective marketing strategies. From personalized product recommendations to dynamic content optimization, AI is enabling brands to deliver hyper-relevant experiences at scale.</p>
      
      <h2>2. Short-Form Video Dominance</h2>
      <p>TikTok, Instagram Reels, and YouTube Shorts continue to capture audience attention. Brands that master the art of short-form storytelling are seeing unprecedented engagement rates.</p>
      
      <h2>3. First-Party Data Strategies</h2>
      <p>With third-party cookies on their way out, smart marketers are building robust first-party data strategies. This means focusing on email lists, loyalty programs, and direct customer relationships.</p>
      
      <h2>4. Voice Search Optimization</h2>
      <p>As smart speakers and voice assistants become ubiquitous, optimizing for voice search is no longer optional. This requires a shift toward conversational keywords and question-based content.</p>
      
      <h2>5. Sustainability Marketing</h2>
      <p>Consumers increasingly expect brands to demonstrate environmental and social responsibility. Authentic sustainability messaging is becoming a key differentiator.</p>
    `,
  },
  {
    slug: 'roi-social-media-marketing',
    title: 'How to Measure ROI on Social Media Marketing',
    excerpt: 'Learn the essential metrics and frameworks for calculating the true return on investment from your social media efforts.',
    category: 'Social Media',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    image: '📊',
    content: `
      <p>Measuring social media ROI has long been considered one of marketing's greatest challenges. But with the right framework, you can clearly demonstrate the value of your social efforts.</p>
      
      <h2>Define Your Goals First</h2>
      <p>Before measuring anything, clarify what success looks like. Are you focused on brand awareness, lead generation, or direct sales? Each goal requires different metrics.</p>
      
      <h2>Track the Right Metrics</h2>
      <p>Move beyond vanity metrics like follower counts. Focus on engagement rate, click-through rate, conversion rate, and customer acquisition cost.</p>
      
      <h2>Implement Proper Attribution</h2>
      <p>Use UTM parameters and conversion tracking to connect social media activity to business outcomes. Multi-touch attribution models provide the clearest picture.</p>
      
      <h2>Calculate Your True Costs</h2>
      <p>Include all costs: ad spend, tools, agency fees, and internal time. Only then can you calculate accurate ROI.</p>
    `,
  },
  {
    slug: 'seo-best-practices',
    title: 'SEO Best Practices for 2024: A Complete Guide',
    excerpt: 'Stay ahead of algorithm updates with these proven SEO strategies that drive sustainable organic growth.',
    category: 'SEO',
    date: 'Nov 25, 2024',
    readTime: '10 min read',
    image: '🔍',
    content: `
      <p>Search engine optimization continues to evolve, but the fundamentals remain constant: create valuable content, build authority, and provide excellent user experiences.</p>
      
      <h2>Content Quality Over Quantity</h2>
      <p>Google's helpful content update has made it clear: thin, AI-generated content won't cut it. Focus on creating comprehensive, expert-driven content that truly helps your audience.</p>
      
      <h2>Core Web Vitals Matter</h2>
      <p>Page experience signals are now a ranking factor. Ensure your site loads quickly, is mobile-friendly, and provides a stable visual experience.</p>
      
      <h2>E-E-A-T Is Essential</h2>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are critical for ranking, especially in YMYL (Your Money, Your Life) topics.</p>
      
      <h2>Build Quality Backlinks</h2>
      <p>Link building remains important, but focus on quality over quantity. Earn links through great content, PR, and genuine relationships.</p>
    `,
  },
  {
    slug: 'email-marketing-automation',
    title: 'Email Marketing Automation: The Ultimate Guide',
    excerpt: 'Discover how to set up email automation workflows that nurture leads and drive conversions on autopilot.',
    category: 'Email Marketing',
    date: 'Nov 20, 2024',
    readTime: '7 min read',
    image: '📧',
    content: `
      <p>Email marketing automation allows you to deliver the right message to the right person at the right time—without manual effort.</p>
      
      <h2>Essential Automation Workflows</h2>
      <p>Start with these core sequences: welcome series, abandoned cart recovery, post-purchase follow-up, and re-engagement campaigns.</p>
      
      <h2>Segmentation Is Key</h2>
      <p>The power of automation lies in personalization. Segment your list based on behavior, preferences, and customer lifecycle stage.</p>
      
      <h2>Test and Optimize</h2>
      <p>Continuously A/B test subject lines, send times, and content. Small improvements compound over time.</p>
    `,
  },
]

function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl text-white">Post not found</h1>
        <Button to="/blog" className="mt-4">Back to Blog</Button>
      </div>
    )
  }

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-amber-500 hover:text-amber-400 text-sm mb-6 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="text-6xl mb-6">{post.image}</div>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="text-amber-500">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 p-8 bg-slate-800 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Want to learn more?</h3>
            <p className="text-slate-400 mb-6">Get expert marketing insights delivered to your inbox.</p>
            <Button to="/contact">Subscribe to Our Newsletter</Button>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogList() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-slate-400">
              Expert tips, strategies, and industry insights to help you grow your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full group">
                  <div className="text-5xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="text-amber-500">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400">{post.excerpt}</p>
                  <div className="mt-4 text-amber-500 text-sm font-medium">
                    Read more →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function Blog() {
  const { slug } = useParams()
  return slug ? <BlogDetail /> : <BlogList />
}
