import logo from '../../assets/UI/header-logo.svg'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="footer logo" width="122" height="40"></img>
            </div>
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>A propos</NavLink>
            </nav>
        </header>
    );
}
export default Header