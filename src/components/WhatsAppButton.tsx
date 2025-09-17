import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511970394816"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppButton;