import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product, InsertProduct } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductFormProps {
  product?: Product | null;
  onSubmit: (product: InsertProduct) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export function ProductForm({ product, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
    description: '',
    features: [],
    category: 'cigarettes',
  });
  const [featuresText, setFeaturesText] = useState('');

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        features: product.features,
        category: product.category,
      });
      setFeaturesText(product.features.join(', '));
    } else {
      setFormData({
        name: '',
        price: 0,
        image: '',
        description: '',
        features: [],
        category: 'cigarettes',
      });
      setFeaturesText('');
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const features = featuresText
      .split(',')
      .map(f => f.trim())
      .filter(f => f.length > 0);
    
    onSubmit({
      ...formData,
      features,
      price: Math.round(formData.price * 100), // Convert to agorot
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setFormData({ ...formData, price: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gold-accent">
            {t.productName}
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
            placeholder={t.productName}
            required
            disabled={isLoading}
            data-testid="input-product-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price" className="text-gold-accent">
            {t.productPrice} (₪)
          </Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={formData.price / 100}
            onChange={handlePriceChange}
            className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
            placeholder="0.00"
            required
            disabled={isLoading}
            data-testid="input-product-price"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image" className="text-gold-accent">
          {t.productImage}
        </Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
          placeholder="https://example.com/image.jpg"
          required
          disabled={isLoading}
          data-testid="input-product-image"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-gold-accent">
          {t.productCategory}
        </Label>
        <Select 
          value={formData.category} 
          onValueChange={(value) => setFormData({ ...formData, category: value })}
          disabled={isLoading}
        >
          <SelectTrigger className="bg-dark-bg border-tobacco-secondary/30 text-white" data-testid="select-category">
            <SelectValue placeholder={t.productCategory} />
          </SelectTrigger>
          <SelectContent className="bg-dark-secondary border-tobacco-secondary/30">
            <SelectItem value="cigarettes">{t.categoryCigarettes}</SelectItem>
            <SelectItem value="e-cigarettes">{t.categoryEcigarettes}</SelectItem>
            <SelectItem value="heated-tobacco">{t.categoryHeated}</SelectItem>
            <SelectItem value="disposable">{t.categoryDisposable}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-gold-accent">
          {t.productDescription}
        </Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
          placeholder={t.productDescription}
          rows={4}
          required
          disabled={isLoading}
          data-testid="textarea-product-description"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="features" className="text-gold-accent">
          {t.productFeatures} (comma separated)
        </Label>
        <Textarea
          id="features"
          value={featuresText}
          onChange={(e) => setFeaturesText(e.target.value)}
          className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
          placeholder="Feature 1, Feature 2, Feature 3"
          rows={3}
          disabled={isLoading}
          data-testid="textarea-product-features"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-gray-500 text-gray-300 hover:bg-gray-500"
          disabled={isLoading}
          data-testid="button-cancel"
        >
          {t.cancel}
        </Button>
        
        <Button
          type="submit"
          className="bg-tobacco-primary hover:bg-tobacco-secondary"
          disabled={isLoading}
          data-testid="button-save"
        >
          {isLoading ? '...' : t.save}
        </Button>
      </div>
    </form>
  );
}