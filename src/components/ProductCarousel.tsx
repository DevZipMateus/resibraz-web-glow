import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const produtos = [
  // Resistências
  { id: 1, src: '/carrossel/RTH.webp', alt: 'Resistência Tubular - Modelo RTH' },
  { id: 2, src: '/carrossel/RTREDONDA.jpg', alt: 'Resistência Tubular Redonda' },
  { id: 3, src: '/carrossel/resistencia-em-quartzo-terminal-parafuso.jpg', alt: 'Resistência em Quartzo - Terminal Parafuso' },
  { id: 4, src: '/carrossel/resistencias-de-imersao-6.webp', alt: 'Resistências de Imersão' },
  { id: 5, src: '/carrossel/RESISTÊNCIA TUBULAR RETA.jpeg', alt: 'Resistência Tubular Reta' },
  { id: 6, src: '/carrossel/RTIMERSÃO.webp', alt: 'Resistência Tubular de Imersão' },
  { id: 7, src: '/carrossel/Resistências em Quartzo.jpeg', alt: 'Resistências em Quartzo' },
  { id: 8, src: '/carrossel/Resistências em Quartzo em todos os terminais a escolha..jpg', alt: 'Resistências em Quartzo - Terminais Personalizados' },

  // Termopares
  { id: 9, src: '/carrossel/TERMOPAR TIPO J PONTA DE 6MM.jpeg', alt: 'Termopar Tipo J - Ponta 6mm' },
  { id: 10, src: '/carrossel/TERMOPAR TIPO J PONTA DE 6 OU 8MM.jpeg', alt: 'Termopar Tipo J - Ponta 6 ou 8mm' },
  { id: 11, src: '/carrossel/TERMOPAR TIPO K PONTA DE 6 E 8MM.jpeg', alt: 'Termopar Tipo K - Ponta 6 e 8mm' },

  // Fios e Cabos
  { id: 12, src: '/carrossel/FIOS E FITAS DE NIQUELCROMO 80 20 RESIBRAZ.jpg', alt: 'Fios e Fitas de Níquel-Cromo 80/20' },
  { id: 13, src: '/carrossel/FITA NC 8020.webp', alt: 'Fita Níquel-Cromo 80/20' },
  { id: 14, src: '/carrossel/cabo_alta_temperatura_4_00_mm_1_5_metro_673_1_1fa30c14d97445dc84dbb34088309942.webp', alt: 'Cabo Alta Temperatura 4,00mm - 1,5 Metro' },
  { id: 15, src: '/carrossel/cabos-eletricos-condsucobre-85-1.webp', alt: 'Cabos Elétricos - Condutor Cobre' },

  // Adaptadores e Tomadas
  { id: 16, src: '/carrossel/ADAPTADOR DE LATÃO  A1 .jpg', alt: 'Adaptador de Latão A1' },
  { id: 17, src: '/carrossel/A1.jpg', alt: 'Adaptador A1' },
  { id: 18, src: '/carrossel/A3.jpg', alt: 'Adaptador A3' },
  { id: 19, src: '/carrossel/A4.webp', alt: 'Adaptador A4' },
  { id: 20, src: '/carrossel/A5.webp', alt: 'Adaptador A5' },
  { id: 21, src: '/carrossel/TOMADA DE ALUMÍNIO EM L .jpeg', alt: 'Tomada de Alumínio em L' },
  { id: 22, src: '/carrossel/TOMADA EM ALUMÍNIO RETA .jpeg', alt: 'Tomada em Alumínio Reta' },
  { id: 23, src: '/carrossel/tomada a t.webp', alt: 'Tomada em T' },
  { id: 24, src: '/carrossel/adaptador_longo_1_4_bsp_p_baioneta_pequena_63_2_e3d59b82562dc3a2630278b0f6e0c452.webp', alt: 'Adaptador Longo 1/4 BSP para Baioneta Pequena' },

  // Terminais
  { id: 25, src: '/carrossel/TERMINAIS DE LIGAÇÃO .jpg', alt: 'Terminais de Ligação' },
  { id: 26, src: '/carrossel/613kSzGgozL._SL1200_.webp', alt: 'Terminal Especial' },
  
  // Produtos Diversos
  { id: 27, src: '/carrossel/D_NQ_NP_638516-MLB51854756196_102022-F (1).jpg', alt: 'Produto Industrial Especializado' },
  { id: 28, src: '/carrossel/Imagem do WhatsApp de 2025-09-25 à(s) 11.26.13_b5383f76.jpg', alt: 'Produto RESIBRAZ' },

  // Produtos WhatsApp Images (organizados por data)
  { id: 29, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.29.jpeg', alt: 'Resistência Industrial' },
  { id: 30, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.29 (1).jpeg', alt: 'Componente Térmico' },
  { id: 31, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.30.jpeg', alt: 'Resistência Especializada' },
  { id: 32, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.30 (2).jpeg', alt: 'Produto Térmico Industrial' },
  { id: 33, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.30 (3).jpeg', alt: 'Componente Resistivo' },
  { id: 34, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.31 (1).jpeg', alt: 'Resistência Personalizada' },
  { id: 35, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.54.31 (2).jpeg', alt: 'Produto Industrial RESIBRAZ' },
  { id: 36, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.07.jpeg', alt: 'Resistência de Alta Precisão' },
  { id: 37, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.07 (1).jpeg', alt: 'Componente Térmico Avançado' },
  { id: 38, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.07 (2).jpeg', alt: 'Resistência Industrial Especial' },
  { id: 39, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.07 (4).jpeg', alt: 'Produto Resistivo' },
  { id: 40, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.07 (6).jpeg', alt: 'Resistência Customizada' },
  { id: 41, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.08.jpeg', alt: 'Componente Industrial' },
  { id: 42, src: '/carrossel/WhatsApp Image 2025-07-25 at 14.56.08 (3).jpeg', alt: 'Resistência RESIBRAZ' }
];

export default function ProductCarousel() {
  const [api, setApi] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  // Auto-play a cada 3 segundos
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <Carousel 
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {produtos.map((produto) => (
              <CarouselItem key={produto.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div 
                    className="relative aspect-square overflow-hidden rounded-lg bg-muted/30 cursor-pointer group shadow-md hover:shadow-lg transition-shadow duration-300"
                    onClick={() => handleImageClick(produto.src, produto.alt)}
                  >
                    <img
                      src={produto.src}
                      alt={produto.alt}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {produtos.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-muted transition-colors duration-200 hover:bg-primary"
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal para expansão da imagem */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
          <VisuallyHidden>
            <DialogTitle>{selectedAlt}</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt={selectedAlt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 text-center bg-background border-t">
                <a
                  href="https://wa.me/c/5511970394816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                  </svg>
                  <span>Para saber mais sobre modelo, tamanhos e preço clique aqui</span>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}