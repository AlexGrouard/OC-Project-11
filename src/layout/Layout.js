import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import styles from './Layout.module.scss';
import { BrowserRouter, Router, Route} from "react-router-dom"
import Home from '../pages/Home/Home.js';
import Fiche from '../pages/fiches-logements/fiche.js';
import About from '../pages/About/About.js';

function Layout(){
    return (
        <BrowserRouter>
            <div className={styles.main}>
                <Header />
                <routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/fiche" element={<Fiche />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<Error/>}/>   
                </routes>
                
                <Footer />
            </div>
        </BrowserRouter>
    );
}
export default Layout;