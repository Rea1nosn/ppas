import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/lib/i18n';
import { Product, InsertProduct } from '@shared/schema';
import { ProductForm } from './ProductForm';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ProductManagement() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    },
  });

  // Create product mutation
  const createProduct = useMutation({
    mutationFn: async (product: InsertProduct): Promise<Product> => {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create product');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setIsFormOpen(false);
      toast({
        title: t.productAdded,
        description: 'Product created successfully',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Update product mutation
  const updateProduct = useMutation({
    mutationFn: async ({ id, product }: { id: string; product: Partial<InsertProduct> }): Promise<Product> => {
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update product');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setEditingProduct(null);
      setIsFormOpen(false);
      toast({
        title: t.productUpdated,
        description: 'Product updated successfully',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Delete product mutation
  const deleteProduct = useMutation({
    mutationFn: async (id: string): Promise<void> => {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete product');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast({
        title: t.productDeleted,
        description: 'Product deleted successfully',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (product: InsertProduct) => {
    if (editingProduct) {
      updateProduct.mutate({ id: editingProduct.id, product });
    } else {
      createProduct.mutate(product);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = (product: Product) => {
    if (confirm(t.confirmDelete)) {
      deleteProduct.mutate(product.id);
    }
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gold-accent">
          {t.productManagement}
        </h2>
        
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={handleAddNew}
              className="bg-tobacco-primary hover:bg-tobacco-secondary"
              data-testid="button-add-product"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t.addProduct}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-dark-secondary border-tobacco-secondary/30">
            <DialogHeader>
              <DialogTitle className="text-gold-accent">
                {editingProduct ? t.editProduct : t.addProduct}
              </DialogTitle>
            </DialogHeader>
            <ProductForm
              product={editingProduct}
              onSubmit={handleSubmit}
              onCancel={() => setIsFormOpen(false)}
              isLoading={createProduct.isPending || updateProduct.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-tobacco-primary/30 to-transparent p-6 rounded-2xl border border-tobacco-secondary/30"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <h3 className="text-xl font-bold text-white mb-2" data-testid={`product-name-${product.id}`}>
              {product.name}
            </h3>
            
            <p className="text-gold-accent text-lg font-semibold mb-2" data-testid={`product-price-${product.id}`}>
              {formatPrice(product.price, language)}
            </p>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
              {product.description}
            </p>
            
            <div className="flex justify-between">
              <Button
                onClick={() => handleEdit(product)}
                variant="outline"
                size="sm"
                className="border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-dark-bg"
                data-testid={`button-edit-${product.id}`}
              >
                <Edit className="w-4 h-4 mr-1" />
                {t.edit}
              </Button>
              
              <Button
                onClick={() => handleDelete(product)}
                variant="outline"
                size="sm"
                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                data-testid={`button-delete-${product.id}`}
                disabled={deleteProduct.isPending}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                {t.delete}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}