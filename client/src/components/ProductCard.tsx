import { Product } from "@shared/schema";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatPrice } from "@/lib/i18n";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { language } = useLanguage();
  
  return (
    <div
      className="product-card bg-gradient-to-br from-tobacco-primary/30 to-transparent p-6 rounded-2xl border border-tobacco-secondary/30 cursor-pointer hover:shadow-2xl hover:shadow-gold-accent/30"
      onClick={onClick}
      data-testid={`card-product-${product.id}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
        data-testid={`img-product-${product.id}`}
      />

      <h3
        className="font-orbitron text-xl font-bold mb-2"
        data-testid={`title-product-${product.id}`}
      >
        {product.name}
      </h3>
      <p
        className="text-gray-300 mb-4"
        data-testid={`description-product-${product.id}`}
      >
        {product.description.length > 80
          ? `${product.description.substring(0, 80)}...`
          : product.description}
      </p>
      <div className="flex justify-between items-center">
        <span
          className="text-2xl font-bold text-gold-accent"
          data-testid={`price-product-${product.id}`}
        >
          {formatPrice(product.price, language)}
        </span>
        <button
          className="bg-tobacco-primary hover:bg-tobacco-secondary px-4 py-2 rounded-lg transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://t.me/Dark090222", "_blank");
          }}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
