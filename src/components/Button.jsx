import { Link } from 'react-router-dom'

export default function Button({ children, to, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300'
  
  const variants = {
    primary: 'bg-amber-500 hover:bg-amber-600 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    outline: 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
