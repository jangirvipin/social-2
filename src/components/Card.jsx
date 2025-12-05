export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 ${
        hover ? 'hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
