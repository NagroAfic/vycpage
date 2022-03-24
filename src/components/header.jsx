import Logo from '/src/images/logo_recusa_web.png'
function Header() {
    return(
        <header className="header">
            <div className="header-responsive">
                <img src={Logo} width="100%" alt=""/>
                <div className="header-hamburger"></div>
            </div>
        </header>
    )
}

export default Header;