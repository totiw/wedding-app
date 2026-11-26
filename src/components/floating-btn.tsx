import { ArrowBigUp } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { cn } from 'cn';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    document.getElementById('cover')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const cover = document.getElementById('cover');

    if (!cover) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(cover);

    return () => observer.disconnect();
  }, []);

  return (
    <Button
      onClick={scrollTop}
      className={cn(
        isVisible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0',
        'h-10 w-10',
        'fixed right-4 bottom-4 z-50',
        'rounded-full bg-yellow-500 shadow-lg transition-all duration-500'
      )}
    >
      <ArrowBigUp />
    </Button>
  );
}
