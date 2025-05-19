import React, { useState } from "react";
import { BiX } from "react-icons/bi";
const ChatBox = ({ onClose }) => {
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const phoneNumber = "+2348126660484";
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappUrl, "_blank");
		setMessage("");
		onClose(false);
	};

	return (
		<div className="chat-container">
			<div className="chat-header d-flex justify-content-between align-items-center">
				<h5 className="text-white d-flex align-items-center">
					Send us a message
				</h5>
				<BiX
					color="white"
					size={30}
					style={{ cursor: "pointer" }}
					onClick={() => onClose(false)}
				/>
			</div>
			<div className="chat-messages">
				<div className="message received">
					<div className="message-content px-3">Hello! How can I help you?</div>
				</div>
			</div>
			<div className="chat-input ">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<input
							type="text"
							placeholder="Type a message..."
							value={message}
							onChange={handleChange}
						/>
						<button
							className={`btn btn-success btn-sm ${
								message.trim() === "" && "disabled"
							}`}
							type="submit"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChatBox;
