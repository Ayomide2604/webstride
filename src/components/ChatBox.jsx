import React from "react";
import { BiX } from "react-icons/bi";
const ChatBox = ({ onClose }) => {
	return (
		<div className="chat-container">
			<div className="chat-header d-flex justify-content-between">
				<h5 className="text-white">Send us a message</h5>
				<button className="btn btn-close" onClick={() => onClose(false)}>
					<BiX size={30} />
				</button>
			</div>
			<div className="chat-messages">
				<div className="message received">
					<div className="message-content px-3">Hello! How can I help you?</div>
				</div>
			</div>
			<div className="chat-input">
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Type a message..."
					/>
					<button className="btn btn-primary btn-sm" type="button">
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
