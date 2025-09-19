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
      <div className="w-full max-w-4xl mx-auto">
        <Carousel 
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {produtos.map((produto) => (
              <CarouselItem key={produto.id}>
                <div className="p-1">
                  <div 
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card cursor-pointer group"
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
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
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
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}