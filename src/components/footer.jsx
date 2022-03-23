function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-4">
                        <img src="/src/images/logo_recusa_web.png" width="100%" alt="" className="footer-logo"/>
                    </div>
                    <div className="col-12 col-md-4 mb-4 ">
                        <div className="footer-info">
                            <p>Mapa del sitio</p>
                            <a href="">Inicio</a>
                            <a href="/nosotros">Nosotros</a>
                            <a href="">Servicios</a>
                            <a href="">Contáctenos</a>
                            <a href="">Clientes</a>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-4 mb-4">
                        <div className="footer-info">
                            <p>Contáctenos</p>
                            <ul>
                                <li>Sede Administrativa: Av. Mariscal Jose de la Mar 1263 Urb. Santa Cruz Ofic. 201 Miraflores</li>
                                <li>Sur: Mz. B Lote 10 – Urb. Las Casuarinas – Cañete</li>
                                <li>Sede Arequipa: Mz. E Lote 10 – Urb. La Melgariana, José Luis Bustamante y Rivero</li>
                                <li>ventas@vycresguardoycustodia.com</li>
                                <li>Centro de Control: (051) 201-1070 / Anexo: 157</li>
                                <li>Cel. 914624488 / 965404971</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dr">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center text-white">Todos los Derechos Reservados - RECUSA</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
