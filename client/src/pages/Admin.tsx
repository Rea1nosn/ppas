import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { LoginForm } from '@/components/admin/LoginForm';
import { ProductManagement } from '@/components/admin/ProductManagement';

interface User {
  id: string;
  username: string;
  role: string;
}

export default function Admin() {
  const { t } = useLanguage();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setUser(data.user);
      } else {
        throw new Error(data.error || 'Login failed');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <div className="pt-20 container mx-auto px-6 py-8">
        {!user ? (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gold-accent mb-2" data-testid="admin-panel-title">
                {t.adminPanel}
              </h1>
              <p className="text-gray-400">
                {t.heroSubtitle}
              </p>
            </div>
            <LoginForm onLogin={handleLogin} isLoading={isLoading} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gold-accent" data-testid="product-management-title">
                {t.productManagement}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  {t.admin}: {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-tobacco-secondary hover:bg-tobacco-primary px-4 py-2 rounded-lg transition-colors"
                  data-testid="logout-button"
                >
                  {t.logout}
                </button>
              </div>
            </div>
            <ProductManagement />
          </div>
        )}
      </div>
    </div>
  );
}