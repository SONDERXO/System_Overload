import { NavLink } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { site } from '../data/site'

const linkClass = ({ isActive }) =>
  `nav-link${isActive ? ' nav-link--active' : ''}`

export function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-brand" end>
        <BookOpen className="site-brand__icon" aria-hidden />
        <span className="site-brand__text">
          <span className="site-brand__name">{site.name}</span>
          <span className="site-brand__tagline">{site.tagline}</span>
        </span>
      </NavLink>
      <nav className="site-nav" aria-label="Primary">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </nav>
    </header>
  )
}
