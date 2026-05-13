import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {site.year} {site.author}. Built with React and Vite.
      </p>
    </footer>
  )
}
