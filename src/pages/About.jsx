import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import about1 from "../assets/img/about/about-portrait-1.webp";
import about2 from "../assets/img/about/about-8.webp";
import about3 from "../assets/img/about/about-12.webp";

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
								<BiCheckCircle />
								<span>Custom digital strategies aligned with your goals.</span>
							</li>
							<li>
								<BiCheckCircle />
								<span>
									High-quality solutions delivered on time and within budget.
								</span>
							</li>
							<li>
								<BiCheckCircle />
								<span>Customer-centric approach for outstanding results.</span>
							</li>
						</ul>
						{/* <a href="#" className="read-more mb-3">
							<span>Read More</span>
						</a> */}
					</div>
					<div
						className="col-lg-6 about-images"
						data-aos="fade-up"
						data-aos-delay={200}
					>
						<div className="row gy-4">
							<div className="col-lg-6 mb-3">
								<img
									src={about1}
									className="img-fluid"
									alt="Team Collaboration"
								/>
							</div>
							<div className="col-lg-6">
								<div className="row gy-4">
									<div className="col-lg-12 mb-3">
										<img
											src={about2}
											className="img-fluid"
											alt="Project Planning"
										/>
									</div>
									<div className="col-lg-12 mb-3">
										<img
											src={about3}
											className="img-fluid"
											alt="Creative Design"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
