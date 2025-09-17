import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo-resibraz.jpg" 
                alt="RESIBRAZ Logo" 
                className="h-12 w-auto object-contain bg-white rounded p-1"
              />
              <span className="text-xl font-bold">RESIBRAZ</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Empresa brasileira especializada em aquecimento elétrico industrial desde 2006. 
              Qualidade e durabilidade em soluções para diversos segmentos industriais.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/60">
                CNPJ: 50.805.376/0001-41
              </p>
              <p className="text-sm text-primary-foreground/60">
                RESIBRAZ COMÉRCIO DE MATERIAIS ELÉTRICOS LTDA
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm">(11) 97039-4816</p>
                  <p className="text-sm">(11) 96173-6186</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <p className="text-sm">vendas@resibraz.com.br</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm">Rua Buique, 34</p>
                  <p className="text-sm">Pq Casa de Pedra</p>
                  <p className="text-sm">CEP 02322-220</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm">Segunda a Sexta</p>
                  <p className="text-sm">07:30 às 17:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <div className="space-y-2">
              {[
                "Resistências coleira",
                "Resistências tubulares", 
                "Resistências cartucho",
                "Resistências em quartzo",
                "Termopares",
                "Cabos de alta temperatura"
              ].map((service) => (
                <p key={service} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} RESIBRAZ. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="https://wa.me/5511970394816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a
                href="mailto:vendas@resibraz.com.br"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                E-mail
              </a>
              <a
                href="https://instagram.com/resibraz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/resibraz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;