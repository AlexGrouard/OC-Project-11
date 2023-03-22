import logo from '../../assets/UI/header-logo.svg'
function Header () {
    return(
        <header className="header">
            <div className="logo">
            <img src={logo} alt="footer logo" width="122" height="40"></img>
            </div>
            <nav className="header-nav">
                <a href="#">Accueil</a>
                <a href="#">A propos</a>
            </nav>
        </header>
    );
}
export default Header