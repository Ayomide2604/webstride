import { useEffect, useState } from "react";
import { BiMenu, BiX, BiSun, BiMoon } from "react-icons/bi";
import sun from "../assets/img/sun.svg";
import moon from "../assets/img/moon.svg";
import close from "../assets/img/close.svg";
import menu from "../assets/img/menu.svg";

const cursorPointer = {
	cursor: "pointer",
};

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("mobile-nav-active");
		} else {
			document.body.classList.remove("mobile-nav-active");
		}
		if (darkMode) {
			document.body.classList.add("dark-background");
		} else {
			document.body.classList.remove("dark-background");
		}
	}, [menuOpen, darkMode]);

	return (
		<header id="header" className="header d-flex align-items-center fixed-top">
			<div className="container position-relative d-flex align-items-center justify-content-between">
				<a
					href="index.html"
					className="logo d-flex align-items-center me-auto me-xl-0"
				>
					{/* Uncomment the line below if you also wish to use an image logo */}
					{/* <img src="assets/img/logo.webp" alt=""> */}
					<h1 className="sitename">WebStride</h1>
					<span>.</span>
				</a>
				<nav id="navmenu" className="navmenu">
					<ul>
						<li>
							<a href="#hero" className="active">
								Home
							</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>

				<div className="d-flex align-items-center justify-content-center">
					<a className="btn-getstarted d-md-block d-none mx-5" href="#about">
						Get Started
					</a>

					{!menuOpen && (
						<div>
							<img
								src={sun}
								height={15}
								alt="light-mode"
								onClick={() => setDarkMode(false)}
								className={darkMode ? "d-block mx-3" : "d-none"}
								style={cursorPointer}
							/>

							<img
								src={moon}
								height={15}
								alt="dark-mode"
								onClick={() => setDarkMode(true)}
								className={darkMode ? "d-none mx-3" : "d-block"}
								style={cursorPointer}
							/>
						</div>
					)}

					{menuOpen ? (
						<BiX
							className="mobile-nav-toggle d-xl-none pb-2 "
							onClick={() => setMenuOpen(false)}
							style={cursorPointer}
						/>
					) : (
						<img
							src={menu}
							alt=""
							height={20}
							className="mobile-nav-toggle d-xl-none mx-3"
							onClick={() => setMenuOpen(true)}
							style={cursorPointer}
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
