import Container from '../layout/Container'

function FooterSection() {
  return (
    <footer id="footer" className="site-footer" aria-label="Pie de página">
      <Container className="site-footer-inner">
        <p>Fabri Velázquez · Plataforma editorial personal</p>
        <a href="#inicio">Volver al inicio</a>
      </Container>
    </footer>
  )
}

export default FooterSection
