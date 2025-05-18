import React from "react";
import { BiBell, BiHeadphone, BiWindow } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
import heroImage from "../assets/img/illustration/illustration-16.webp";
import hero from "../assets/img/hero.png";

const Hero = () => {
	return (
		<section id="hero" className="hero section">
			<div className="container" data-aos="fade-up" data-aos-delay={100}>
				<div className="row align-items-center mb-5">
					<div className="col-lg-6 mb-4 mb-lg-0">
						<div className="badge-wrapper mb-3">
							<div className="d-inline-flex align-items-center rounded-pill border border-accent-light">
								<div className="icon-circle me-2 mr-2">
									<BiBell className="bi bi-bell" />
								</div>
								<span className="badge-text me-3">Innovative Solutions</span>
							</div>
						</div>
						<h1 className="hero-title mb-4">
							Empowering Your Digital Presence
						</h1>
						<p className="hero-description mb-4">
							Webstride offers cutting-edge web development solutions to drive
							your business growth. Based in Lagos, Nigeria, we specialize in
							creating tailored digital experiences.
						</p>
						<div className="cta-wrapper">
							<a href="#" className="btn btn-primary">
								Discover More
							</a>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="hero-image">
							<img
								src={hero}
								alt="Web Development"
								className="img-fluid"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
				<div className="row feature-boxes">
					<div
						className="col-lg-4 mb-4 mb-lg-0"
						data-aos="fade-up"
						data-aos-delay={200}
					>
						<div className="feature-box">
							<div className="feature-icon me-sm-4 mb-3 mb-sm-0 mr-2">
								<FaGear />
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Rapid Deployment</h3>
								<p className="feature-text">
									Swift and efficient deployment of your web projects, allowing
									you to focus on growing your business.
								</p>
							</div>
						</div>
					</div>
					<div
						className="col-lg-4 mb-4 mb-lg-0"
						data-aos="fade-up"
						data-aos-delay={300}
					>
						<div className="feature-box">
							<div className="feature-icon me-sm-4 mb-3 mb-sm-0 mr-2">
								<BiWindow />
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Advanced Security</h3>
								<p className="feature-text">
									State-of-the-art security measures to protect your digital
									assets and ensure your online presence is secure.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
						<div className="feature-box">
							<div className="feature-icon me-sm-4 mb-3 mb-sm-0 mr-2">
								<BiHeadphone />
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Dedicated Support</h3>
								<p className="feature-text">
									Our support team is here to assist you every step of the way,
									ensuring a seamless experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
