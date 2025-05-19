import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_d1jb09a",
				"template_d1pc929",
				form.current,
				"rVThJft0mEh2z1jPH"
			)
			.then(
				() => {
					alert("Message sent!");
					form.current.reset();
				},
				(error) => {
					alert("Failed to send message");
					console.error(error);
				}
			);
	};
	return (
		<div className="p-4 border rounded">
			<h4 className="mb-3">Get in Touch</h4>

			<form ref={form} onSubmit={sendEmail}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="message" className="form-label">
						Message
					</label>
					<textarea
						className="form-control"
						id="message"
						name="message"
						rows="4"
						required
					></textarea>
				</div>

				<button
					type="submit"
					className="btn"
					style={{ backgroundColor: "#7570F5", color: "#ffff" }}
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
