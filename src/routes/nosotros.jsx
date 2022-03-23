
import Nosotros from '../images/nosotros/nosotros.png'
export default function nosotros() {
    return (
      <main className="App">
        <section className="top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="top-image">
                  <img src={Nosotros} width="100%" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <p className="top-titulo text-uppercase"><strong>SEGURIDAD</strong> PERSONAL Y PRIVADA  </p>
                <p className="top-info">Somos una empresa de seguridad con experiencia en los diferentes sectores administrativos y operativos, 
                siendo la mejor opción de seguridad gracias a nuestra tecnología, sistema, personal y políticas. Brindamos un servicio confiable tanto para empresa o de modo particular. 
                Nuestro personal cuenta con la documentación adecuada para el uso de armas y a su vez han sido capacitados para desenvolverse en diferentes situaciones de peligro; estamos 
                preparados para brindar nuestra seguridad privada a nivel nacional, dando soluciones 
                a la medida y en base a las necesidades del cliente, Nuestro personal cuenta con experiencia gracias a su servicio realizado en las fuerzas armadas y policiales.</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    );
}