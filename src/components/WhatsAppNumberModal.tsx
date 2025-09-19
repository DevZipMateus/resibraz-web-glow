import { X, Phone, Star } from "lucide-react";

interface WhatsAppNumberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppNumberModal = ({ isOpen, onClose }: WhatsAppNumberModalProps) => {
  if (!isOpen) return null;

  const numbers = [
    {
      number: "11 97039-4816",
      link: "https://wa.me/5511970394816",
      isPrimary: true,
      label: "Número Principal"
    },
    {
      number: "11 96173-6186", 
      link: "https://wa.me/5511961736186",
      isPrimary: false,
      label: "Número Alternativo"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-2xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Escolha um número para conversar
          </h3>
          <p className="text-muted-foreground text-sm">
            Selecione o número de WhatsApp para iniciar a conversa
          </p>
        </div>

        {/* Numbers */}
        <div className="space-y-3">
          {numbers.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                item.isPrimary 
                  ? 'border-green-500 bg-green-50 hover:bg-green-100' 
                  : 'border-border bg-muted/30 hover:bg-muted/50'
              }`}
              onClick={onClose}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.isPrimary ? 'bg-green-500' : 'bg-muted'
                  }`}>
                    <Phone className={`w-5 h-5 ${item.isPrimary ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold ${item.isPrimary ? 'text-green-700' : 'text-foreground'}`}>
                        {item.number}
                      </span>
                      {item.isPrimary && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <span className={`text-sm ${item.isPrimary ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className={`text-sm px-3 py-1 rounded-full ${
                  item.isPrimary 
                    ? 'bg-green-500 text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {item.isPrimary ? 'Principal' : 'Alternativo'}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground text-center mt-4 bg-muted/30 p-3 rounded-lg">
          <strong>Recomendamos usar o número principal</strong> para um atendimento mais rápido
        </p>
      </div>
    </div>
  );
};

export default WhatsAppNumberModal;