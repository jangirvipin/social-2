export default function SectionTitle({ subtitle, title, description, center = true, light = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${light ? 'text-slate-900' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? 'text-slate-600' : 'text-slate-400'}`}>{description}</p>
      )}
    </div>
  )
}
