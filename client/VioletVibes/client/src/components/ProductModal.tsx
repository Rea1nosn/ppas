import { Product } from "@shared/schema";
import { X, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatPrice } from "@/lib/i18n";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  open,
  onClose,
}: ProductModalProps) {
  const { t, language } = useLanguage();
  
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="modal-overlay max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-dark-secondary rounded-2xl border border-tobacco-secondary/30 p-0">
        <div className="p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="float-right text-2xl hover:text-gold-accent transition-colors"
            data-testid="button-close-modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6 mt-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl"
              data-testid="img-modal-product"
            />
            <div>
              <h2
                className="font-orbitron text-3xl font-bold mb-2"
                data-testid="title-modal-product"
              >
                {product.name}
              </h2>
              <p
                className="text-2xl font-bold text-gold-accent mb-4"
                data-testid="price-modal-product"
              >
                {formatPrice(product.price, language)}
              </p>
              <p
                className="text-gray-300 mb-6"
                data-testid="description-modal-product"
              >
                {product.description}
              </p>

              <h3 className="font-semibold text-lg mb-3">{t.features}:</h3>
              <ul
                className="space-y-2 mb-6"
                data-testid="features-modal-product"
              >
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-gold-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4">
                <button
                  className="btn-neon bg-tobacco-primary hover:bg-tobacco-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex-1"
                  onClick={() =>
                    window.open("https://t.me/Dark090222", "_blank")
                  }
                  data-testid="button-add-to-cart-modal"
                >
                  {t.contactToBuy}
                </button>
                <button
                  className="border border-gold-accent hover:bg-gold-accent hover:text-dark-bg px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  onClick={() =>
                    window.open("https://t.me/Dark090222", "_blank")
                  }
                  data-testid="button-buy-now-modal"
                >
                  {t.orderCash}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
