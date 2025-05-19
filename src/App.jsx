import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const App = () => {
	const [whatsappOpen, setWhatsappOpen] = useState(false);

	const toggleChatBox = () => {
		setWhatsappOpen(!whatsappOpen);
	};

	return (
		<div className="app ">
			<Header />
			<main className="main">
				<Hero />
				<About />
				<Services />
				<Portfolio />
				<Faq />
				<Contact />
			</main>
			<Whatsapp
				SetIsOpen={setWhatsappOpen}
				isOpen={whatsappOpen}
				toggleChatBox={toggleChatBox}
			/>
			<Footer />
		</div>
	);
};

export default App;
