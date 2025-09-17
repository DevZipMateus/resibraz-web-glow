import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: ["(11) 97039-4816", "(11) 96173-6186"],
      action: "tel:+5511970394816"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["vendas@resibraz.com.br"],
      action: "mailto:vendas@resibraz.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua Buique, 34", "Pq Casa de Pedra", "CEP 02322-220"],
      action: "https://maps.google.com/?q=Rua+Buique,+34+Pq+Casa+de+Pedra+CEP+02322-220"
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta", "07:30 às 17:30"],
      action: null
    }
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/resibraz", icon: "📷" },
    { name: "Facebook", url: "https://facebook.com/resibraz", icon: "📘" }
  ];

  return (
    <section id="contato" className="py-16 sm:py-20 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Entre em contato
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Estamos prontos para atender suas necessidades em aquecimento elétrico industrial. 
              Entre em contato conosco e solicite seu orçamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
                  Informações de contato
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="card-elegant p-4 sm:p-6 group">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-xs sm:text-sm text-muted-foreground break-words">
                              {detail}
                            </p>
                          ))}
                          {info.action && (
                            <a
                              href={info.action}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-accent hover:text-accent/80 text-xs sm:text-sm font-medium transition-colors duration-300"
                            >
                              {info.icon === Phone && "Ligar agora"}
                              {info.icon === Mail && "Enviar e-mail"}
                              {info.icon === MapPin && "Ver no mapa"}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-primary mb-4">Redes sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
                    >
                      <span className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form & WhatsApp */}
            <div className="space-y-6 sm:space-y-8">
              {/* WhatsApp CTA */}
              <div className="card-elegant p-6 sm:p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-3">
                    Atendimento via WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-green-700 mb-6 px-2">
                    Fale diretamente com nossa equipe técnica e tire suas dúvidas em tempo real.
                  </p>
                  <a
                    href="https://wa.me/5511970394816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Iniciar conversa</span>
                  </a>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="card-elegant p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
                  Envie sua mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                      Nome
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                      E-mail
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Enviar mensagem</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;