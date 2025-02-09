import React from "react";
import { FaWhatsapp, FaPhone, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from "react-icons/fa";
import "./floatingbuttons.css";

const icons = {
  whatsapp: FaWhatsapp,
  phone: FaPhone,
  instagram: FaInstagram,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  email: FaEnvelope,
};

const FloatingButtons = ({ whatsapp, phone, instagram, facebook, tiktok, email }) => {
  const buttons = Object.entries({ whatsapp, phone, instagram, facebook, tiktok, email })
    .filter(([key, value]) => value && icons[key])
    .map(([key, value]) => ({ link: key === "email" ? `mailto:${value}` : key === "phone" ? `tel:${value}` : value, Icon: icons[key] }));

  return (
    <div className="floating-buttons-container">
      {buttons.map(({ link, Icon }, index) => (
        <a key={index} href={link} className="floating-button" target="_blank" rel="noopener noreferrer">
          <Icon size={38} />
        </a>
      ))}
    </div>
  );
};

export default FloatingButtons;
