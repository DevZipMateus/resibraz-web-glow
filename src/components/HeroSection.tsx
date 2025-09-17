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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading - H1 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            RESIBRAZ
          </h1>
          
          {/* Subtitle - H2 */}
          <h2 className="text-xl md:text-2xl mb-8 opacity-90 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Empresa brasileira especializada em aquecimento elétrico industrial desde 2006
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Atuamos nos segmentos de máquinas extrusora, sopradora, injetora, construção civil, 
            automobilística, hospitais e agronegócio com soluções de qualidade e durabilidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://wa.me/5511970394816"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Fale conosco agora
            </a>
            <button
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Conheça nossos serviços
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Expertise técnica</h3>
              <p className="text-sm opacity-80 text-center">Mais de 18 anos de experiência em aquecimento elétrico industrial</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Qualidade garantida</h3>
              <p className="text-sm opacity-80 text-center">Produtos com alta durabilidade e performance para aplicações industriais</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Atendimento especializado</h3>
              <p className="text-sm opacity-80 text-center">Suporte técnico qualificado para suas necessidades específicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;