import React, { useState } from "react";
import ChatBox from "./ChatBox";
import { BiLogoWhatsapp } from "react-icons/bi";

const Whatsapp = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleChatBox = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="floating-icon" onClick={toggleChatBox}>
				<BiLogoWhatsapp size={50} />
			</div>
			{isOpen && <ChatBox onClose={setIsOpen} />}
		</>
	);
};

export default Whatsapp;
