import logo from '../../assets/UI/footer-logo.svg'
import styles from './Footer.module.scss'

function Footer () {
    return(
        <footer className={styles.footer}>
            <img src={logo} alt="footer logo" width="122" height="40"></img>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}
export default Footer