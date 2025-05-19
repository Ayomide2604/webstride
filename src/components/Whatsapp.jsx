import React, { useState } from "react";
import ChatBox from "./ChatBox";
import { BiLogoWhatsapp } from "react-icons/bi";

const Whatsapp = ({ isOpen, toggleChatBox }) => {
	return (
		<>
			<div className="floating-icon" onClick={toggleChatBox}>
				<BiLogoWhatsapp size={50} />
			</div>
			{isOpen && <ChatBox onClose={toggleChatBox} />}
		</>
	);
};

export default Whatsapp;
