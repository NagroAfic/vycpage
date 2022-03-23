function App() {
  return (
    <main className="App">
      <section className="top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="top-titulo text-uppercase">Soluciones Integrales de <strong>seguridad</strong> en Lima-Perú</p>
              <p className="top-info">Resguardo y Custodia es una empresa que cuenta con la mejor experiencia en los diferentes sistemas de seguridad; gracias a nuestro manejo 
              administrativo y operativo consolidándonos como la mejor empresa en servicio de seguridad particular. Nuestra tecnología y personal aseguran la protección necesaria 
              tanto de sus bienes como colaboradores.</p>
              <a href="/nosotros" className="top-button btn">Leer más</a>
            </div>
            <div className="col-12 col-md-6">
              <div className="top-image">
                <img src="/src/images/inicio/9910.jpg" width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="conocenos">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="conocemos-container">
                <p className="conocenos-titulo text-center text-uppercase">Soluciones de <strong>seguridad</strong></p>
                <p className="conocenos-info text-center"><i>Dado que cuentan con tecnología inalámbrica, se reducen drásticamente las posibilidades de interrupciones <br /> indeseadas en el monitoreo constante de tu propiedad.</i></p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-lg-center">
              <div className="conocenos-card">
                <img src="/src/images/inicio/icono-1.png" alt="" />
                <p className="conocenos-card-title">Nuestros servicios</p>
                <p className="conocenos-card-info">Son realizados por personal altamente calificado que asegura el desempeño esperado y con los resultados propuestos. 
                  Todo nuestro personal tiene conocimiento en manejo de armas y las diferentes artes de defensa personal. Capacitados de 
                  forma periódica para mantener su optimo desempeño.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-lg-center">
              <div className="conocenos-card">
                <img src="/src/images/inicio/icono-2.png" alt="" />
                <p className="conocenos-card-title">Nuestras Consultorías</p>
                <p className="conocenos-card-info">Contamos con especialistas en los diferentes niveles de seguridad que podrán capacitar a su personal de seguridad in 
                  house. Para esto ofrecemos: charlas, talleres, capacitaciones continuas, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default App
