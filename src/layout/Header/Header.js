import logo from '../../assets/UI/header-logo.svg'
import styles from './Header.module.scss'
import { NavLink, Link } from 'react-router-dom'

function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to= '/'>
                    <img src={logo} alt="footer logo"></img>
                </Link>
            </div>
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>A propos</NavLink>
            </nav>
        </header>
    );
}
export default Header