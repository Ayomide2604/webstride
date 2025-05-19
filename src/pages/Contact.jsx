import React from "react";
import { BiMap, BiPhone, BiAlarm, BiEnvelope } from "react-icons/bi";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<section id="contact" className="py-5">
			<div className="container mb-4 text-center">
				<h2>Contact WebStride</h2>
				<p>
					Have an idea, project, or just want to say hello?
					<br />
					Reach out and let’s build something amazing together.
				</p>
			</div>

			<div className="container">
				<div className="row gy-4 mb-5">
					<div className="col-lg-4 mb-3">
						<div className="p-4 border rounded h-100 shadow-sm">
							<div className="mb-3">
								<BiMap size={24} color="#7570F5" />
							</div>
							<h4>Our Address</h4>
							<p>43 Ojileru Street, Oworoshoki, Lagos, Nigeria</p>
						</div>
					</div>
					<div className="col-lg-4 mb-3">
						<div className="p-4 border rounded h-100 shadow-sm">
							<div className="mb-3">
								<BiPhone size={24} color="#7570F5" />
							</div>
							<h4>Phone</h4>
							<p>Mobile: +234 (812) 666-0484</p>
						</div>
					</div>
					<div className="col-lg-4 mb-3">
						<div className="p-4 border rounded h-100 shadow-sm">
							<div className="mb-3">
								<BiEnvelope size={24} color="#7570F5" />
							</div>
							<h4>Email</h4>
							<p>
								Email: webstridestudios@gmail.com
								<br />
							</p>
						</div>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-8">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
