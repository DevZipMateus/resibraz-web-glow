import { Zap, Shield, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-white rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading - H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            RESIBRAZ
          </h1>
          
          {/* Subtitle - H2 */}
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 font-light animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Empresa brasileira especializada em aquecimento elétrico industrial desde 2006
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            Atuamos nos segmentos de máquinas extrusora, sopradora, injetora, construção civil, 
            automobilística, hospitais e agronegócio com soluções de qualidade e durabilidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://wa.me/5511970394816"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero w-full sm:w-auto text-center"
            >
              Fale conosco agora
            </a>
            <button
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline w-full sm:w-auto text-center"
            >
              Conheça nossos serviços
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-fade-in px-4" style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Expertise técnica</h3>
              <p className="text-sm opacity-80 text-center max-w-xs">Mais de 18 anos de experiência em aquecimento elétrico industrial</p>
            </div>

            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Qualidade garantida</h3>
              <p className="text-sm opacity-80 text-center max-w-xs">Produtos com alta durabilidade e performance para aplicações industriais</p>
            </div>

            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Atendimento especializado</h3>
              <p className="text-sm opacity-80 text-center max-w-xs">Suporte técnico qualificado para suas necessidades específicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;