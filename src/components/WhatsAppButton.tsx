import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";
import WhatsAppNumberModal from "./WhatsAppNumberModal";

const WhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn-whatsapp group"
        aria-label="Entrar em contato via WhatsApp"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
        />
      </button>
      
      <WhatsAppNumberModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default WhatsAppButton;