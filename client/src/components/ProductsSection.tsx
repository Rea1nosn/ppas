import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsSection() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-5xl font-bold mb-4 text-gradient">{t.ourProducts}</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Loading...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="products" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-5xl font-bold mb-4 text-gradient" data-testid="products-title">
              {t.ourProducts}
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto" data-testid="products-description">
              {t.heroSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}
