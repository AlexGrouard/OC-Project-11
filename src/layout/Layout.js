import Header from "./Header/Header.js"
import Footer from "./Footer/Footer.js"
import styles from "./Layout.module.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "pages/Home/Home.js"
import Rental from "pages/Rental/Rental.js"
import About from "pages/About/About.js"
import Error from "pages/404/Error.js"

function Layout() {
	return (
		<Router>
			<Header />
			<div className={styles.main}>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/rental/:id'
						element={<Rental />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='*'
						element={<Error />}
					/>
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}
export default Layout
