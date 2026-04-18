import Container from '../layout/Container'
import { footerContent, socialLinks } from '../content/siteContent'

function FooterSection() {
  return (
    <footer id="footer" className="site-footer" aria-label="Pie de página">
      <Container className="site-footer-inner">
        <p className="footer-note">{footerContent.note}</p>

        <nav aria-label="Enlaces de cierre">
          <ul className="footer-links">
            {footerContent.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}

export default FooterSection
