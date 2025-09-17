import whatsappIcon from "@/assets/whatsapp-icon.webp";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511970394816"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
      />
    </a>
  );
};

export default WhatsAppButton;