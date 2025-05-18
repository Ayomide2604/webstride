import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import about1 from "../assets/img/about/about-portrait-1.webp";
import about from "../assets/img/about.jpg";
const About = () => {
	return (
		<section id="about" className="about section">
			<div className="container">
				<div className="row gy-4">
					<div
						className="col-lg-6 content"
						data-aos="fade-up"
						data-aos-delay={100}
					>
						<p className="who-we-are">Who We Are</p>
						<h3>Driving Success with Innovation</h3>
						<p className="fst-italic">
							Webstride crafts impactful digital solutions tailored to your
							business needs.
						</p>
						<ul>
							<li>
								<BiCheckCircle className="mr-2" size={20} />
								<span>Custom digital strategies aligned with your goals.</span>
							</li>
							<li>
								<BiCheckCircle className="mr-2" size={20} />
								<span>
									High-quality solutions delivered on time and within budget.
								</span>
							</li>
							<li>
								<BiCheckCircle className="mr-2" size={20} />
								<span>Customer-centric approach for outstanding results.</span>
							</li>
						</ul>
					</div>
					<div
						className="col-lg-6 about-images"
						data-aos="fade-up"
						data-aos-delay={200}
					>
						<div className="row gy-4">
							<div className="col-lg-12 mb-3">
								<img
									src={about}
									className="img-fluid"
									alt="Team Collaboration"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
