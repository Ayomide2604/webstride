import React from "react";
import { BiCode, BiPalette, BiServer, BiCloud } from "react-icons/bi";

const Services = () => {
	return (
		<section id="services" className="services section">
			<div className="container section-title" data-aos="fade-up">
				<h2>Services</h2>
				<p>
					At Webstride, we offer a comprehensive range of services to elevate
					your digital presence.
				</p>
			</div>
			<div className="container" data-aos="fade-up" data-aos-delay={100}>
				<div className="row justify-content-center g-5">
					<div className="col-md-6" data-aos="fade-right" data-aos-delay={100}>
						<div className="service-item">
							<div className="service-icon">
								<BiCode size={30} />
							</div>
							<div className="service-content">
								<h3>Web Design</h3>
								<p>
									Tailored web design solutions to create visually appealing and
									user-friendly websites that enhance your online presence.
								</p>
							</div>
						</div>
					</div>
					{/* End Service Item */}
					<div className="col-md-6" data-aos="fade-left" data-aos-delay={100}>
						<div className="service-item">
							<div className="service-icon">
								<BiPalette size={30} />
							</div>
							<div className="service-content">
								<h3>Graphic Design</h3>
								<p>
									Eye-catching graphic design services to enhance your brand
									identity and marketing materials.
								</p>
							</div>
						</div>
					</div>
					{/* End Service Item */}
					<div className="col-md-6" data-aos="fade-right" data-aos-delay={200}>
						<div className="service-item">
							<div className="service-icon">
								<BiServer size={30} />
							</div>
							<div className="service-content">
								<h3>Backend Support</h3>
								<p>
									Reliable backend support to ensure seamless functionality and
									performance of your digital platforms.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6" data-aos="fade-left" data-aos-delay={200}>
						<div className="service-item">
							<div className="service-icon">
								<BiCloud size={30} />
							</div>
							<div className="service-content">
								<h3>Software as a Service</h3>
								<p>
									Scalable and flexible SaaS solutions tailored to your business
									requirements, driving efficiency and growth.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
