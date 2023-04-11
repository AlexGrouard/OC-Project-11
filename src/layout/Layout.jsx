import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import styles from "./Layout.module.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "pages/Home/Home.jsx"
import Rental from "pages/Rental/Rental.jsx"
import About from "pages/About/About.jsx"
import Error from "pages/404/Error.jsx"

function Layout() {
	return (
		<Router>
			<Header />
			<div className={styles.main}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/rental/:id' element={<Rental />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}
export default Layout
