import Footer from "./components/Footer";
import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";

const App = () => {
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
			<Whatsapp />
			<Footer />
		</div>
	);
};

export default App;
