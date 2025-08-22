import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  onLogin: (username: string, password: string) => Promise<void>;
  isLoading: boolean;
}

export function LoginForm({ onLogin, isLoading }: LoginFormProps) {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await onLogin(username, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="bg-gradient-to-br from-tobacco-primary/30 to-transparent p-8 rounded-2xl border border-tobacco-secondary/30">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username" className="text-gold-accent">
            {t.username}
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
            placeholder={t.username}
            data-testid="input-username"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-gold-accent">
            {t.password}
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-dark-bg border-tobacco-secondary/30 focus:border-gold-accent text-white"
            placeholder={t.password}
            data-testid="input-password"
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg" data-testid="login-error">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-tobacco-primary hover:bg-tobacco-secondary"
          disabled={isLoading}
          data-testid="button-login"
        >
          {isLoading ? '...' : t.loginButton}
        </Button>
      </form>
    </div>
  );
}