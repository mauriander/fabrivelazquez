import { Feather } from 'lucide-react'
import Container from './Container'
import { navItems } from '../content/siteContent'

function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>

      <header className="site-header">
        <Container className="site-header-inner">
          <a className="brand" href="#inicio" aria-label="Fabri Velázquez - Inicio">
            <Feather size={16} strokeWidth={2} aria-hidden="true" />
            <span>Fabri Velázquez</span>
          </a>

          <nav className="primary-nav" aria-label="Secciones principales">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      <main id="main-content">{children}</main>
    </div>
  )
}

export default SiteShell
