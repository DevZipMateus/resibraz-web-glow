import ProductCarousel from './ProductCarousel';

export default function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha completa de equipamentos de aquecimento industrial, 
            desenvolvidos com tecnologia de ponta para atender às mais diversas aplicações.
          </p>
        </div>
        
        <ProductCarousel />
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Clique nas imagens para visualizar em tamanho completo
          </p>
        </div>
      </div>
    </section>
  );
}