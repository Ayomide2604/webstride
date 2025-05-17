import React, { useState } from "react";
import { BiEnvelope, BiChat, BiPhone } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqItems = [
		{
			question: "What services does Webstride offer?",
			answer:
				"Webstride offers a range of services including web design, graphic design, backend support, and Software as a Service (SaaS) solutions.",
		},
		{
			question: "How can I get started with Webstride?",
			answer:
				"To get started, simply contact us through our website or give us a call. We'll discuss your needs and tailor a solution that fits your business.",
		},
		{
			question: "What makes Webstride different?",
			answer:
				"Webstride stands out with our commitment to innovation, customer-centric approach, and tailored solutions designed to meet your unique business needs.",
		},
		{
			question: "How can I contact Webstride for support?",
			answer:
				"You can contact Webstride for support through email, chat, or phone. Visit our contact page for more details.",
		},
	];

	return (
		<section id="faq" className="faq section">
			<div className="container" data-aos="fade-up" data-aos-delay={100}>
				<h2 className="mb-3">Frequently Asked Questions</h2>
				<div className="row gy-5">
					<div className="col-lg-6" data-aos="zoom-out" data-aos-delay={200}>
						<div className="faq-contact-card">
							<div className="card-icon">
								<i className="bi bi-question-circle" />
							</div>
							<div className="card-content">
								<h3>Still Have Questions?</h3>
								<p>
									If you have any questions or need further assistance, feel
									free to reach out to us. We're here to help!
								</p>
								<div className="contact-options">
									<a href="#" className="contact-option">
										<BiEnvelope size={20} className="mr-2" />
										<span>Email Support</span>
									</a>
									<a href="#" className="contact-option">
										<BiChat size={20} className="mr-2" />
										<span>Chat with Us</span>
									</a>
									<a href="#" className="contact-option">
										<BiPhone size={20} className="mr-2" />
										<span>Call Us</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
						<div className="faq-accordion">
							{faqItems.map((item, index) => (
								<div
									key={index}
									className={`faq-item ${
										activeIndex === index ? "faq-active" : ""
									}`}
								>
									<div className="faq-header" onClick={() => toggleFAQ(index)}>
										<h3>{item.question}</h3>
										<FaCaretDown
											className={` faq-toggle ${
												activeIndex === index ? "rotate" : ""
											}`}
										/>
									</div>
									<div
										className={`faq-content ${
											activeIndex === index ? "show" : ""
										}`}
									>
										<p>{item.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
