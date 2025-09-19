import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-square",
  priority = false,
  blurDataURL,
  quality = 75,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Create optimized image URLs
  const createImageSrc = (originalSrc: string, width?: number) => {
    // For now, just return the original src
    // In production, you'd implement image optimization here
    return originalSrc;
  };

  return (
    <div ref={imgRef} className={`${aspectRatio} relative overflow-hidden bg-muted ${className}`}>
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-110"
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && !blurDataURL && (
        <div className="absolute inset-0 animate-pulse bg-muted flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Carregando...</div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-muted-foreground text-sm text-center p-4">
            Erro ao carregar imagem
          </div>
        </div>
      ) : (
        isInView && (
          <motion.img
            src={createImageSrc(src)}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            sizes={sizes}
            decoding={priority ? "sync" : "async"}
            {...(priority && { 'fetchpriority': 'high' })}
          />
        )
      )}
      
      {/* Loading indicator overlay for slow connections */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute top-2 right-2 z-10">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}