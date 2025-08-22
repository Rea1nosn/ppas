import { useCallback, useEffect } from 'react';

export function useAnimations() {
  const initializeScrollAnimations = useCallback(() => {
    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (!scrollIndicator) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / scrollHeight;
      
      scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
    };

    // Navbar background on scroll
    const updateNavbarBackground = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      
      if (window.scrollY > 80) {
        navbar.style.background = 'rgba(15, 15, 35, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
      }
    };

    const handleScroll = () => {
      updateScrollProgress();
      updateNavbarBackground();
    };

    // Add scroll event listeners
    window.addEventListener('scroll', handleScroll);

    // Initial calls
    updateScrollProgress();
    updateNavbarBackground();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    initializeScrollAnimations
  };
}
