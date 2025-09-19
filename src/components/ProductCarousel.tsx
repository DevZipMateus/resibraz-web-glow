import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

// Import das imagens
import produto1 from '@/assets/produto-1.jpg';
import produto2 from '@/assets/produto-2.jpg';
import produto3 from '@/assets/produto-3.jpg';
import produto4 from '@/assets/produto-4.jpg';
import produto5 from '@/assets/produto-5.jpg';
import produto6 from '@/assets/produto-6.jpg';
import produto7 from '@/assets/produto-7.jpg';
import produto8 from '@/assets/produto-8.jpg';
import produto9 from '@/assets/produto-9.jpg';
import produto10 from '@/assets/produto-10.jpg';

const produtos = [
  { id: 1, src: produto1, alt: 'Resistências Industriais Cilíndricas' },
  { id: 2, src: produto2, alt: 'Aquecedores Industriais Retangulares' },
  { id: 3, src: produto3, alt: 'Resistências Tubular Aletada Helicoidal' },
  { id: 4, src: produto4, alt: 'Terminais e Conectores Industriais' },
  { id: 5, src: produto5, alt: 'Resistências Micro Tubular' },
  { id: 6, src: produto6, alt: 'Aquecedores Industriais com Flanges' },
  { id: 7, src: produto7, alt: 'Resistências Cartridge com Cabos' },
  { id: 8, src: produto8, alt: 'Aquecedores Industriais Diversos' },
  { id: 9, src: produto9, alt: 'Aquecedores Dispostos em Pirâmide' },
  { id: 10, src: produto10, alt: 'Cabos e Conectores Especiais' },
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
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card cursor-pointer group shadow-md hover:shadow-lg transition-shadow duration-300"
                    onClick={() => handleImageClick(produto.src, produto.alt)}
                  >
                    <img
                      src={produto.src}
                      alt={produto.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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