import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container py-5">
        <div className="row d-flex justify-content-between">
          <div className="col-6 col-md">
            <img src="/glowhub.svg" height="25" alt="logo" />
            <p className="m-0"><small>&copy;2021 All rights reserved.</small></p>
          </div>
          <div className="col-6 col-md">
            <h5>Navegación</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="/voluntariados">Voluntariados</a></li>
              <li><a className="link-secondary" href="/proyectos">Proyectos</a></li>
              <li><a className="link-secondary" href="/organizaciones">Organizaciones</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Información</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="/privacidad">Política de privacidad</a></li>
              <li><a className="link-secondary" href="/condiciones">Condiciones del servicio</a></li>
              <li><a className="link-secondary" href="/cookies">Uso de cookies</a></li>
            </ul>
          </div>
          <div className="col-6 col-md  justify-content-end">
            <h5 className="mb-2">Redes sociales</h5>
            <a href="#" className="link-secondary"><i className="fab fa-facebook-square me-1"></i> Facebook</a><br />
            <a href="#" className="link-secondary"><i className="fab fa-instagram me-1"></i> Instagram</a><br />
            <a href="#" className="link-secondary"><i className="fab fa-twitter-square me-1"></i> Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
