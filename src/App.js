import Header from "./components/Header"
import "../src/App.css"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init({ duration: 800 })

function App() {
	const [toggle, setToggle] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)

	const handleToggleButton = () => {
		setToggle(!toggle)
	}

	useEffect(() => {
		const changeWidth = () => {
			setWidth(window.innerWidth)
			if (window.innerWidth > 768) {
				setToggle(false)
			}
		}
		window.addEventListener("resize", changeWidth)
		return () => {
			window.removeEventListener("resize", changeWidth)
		}
	}, [])
	return (
		<section style={{ backgroundColor: "#0a192f" }}>
			<div className="fixed z-30 w-full backdrop-filter backdrop-blur-lg">
				<Header
					handleToggleButton={handleToggleButton}
					width={width}
					toggle={toggle}
				/>
			</div>
			<div className={toggle ? "filter blur-sm" : ""}>
				<div className="flex items-center justify-center ">
					<Main toggle={toggle} />
				</div>
				<Footer />
			</div>
		</section>
	)
}

export default App
