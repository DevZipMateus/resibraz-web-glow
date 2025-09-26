import { useState, useEffect } from 'react';

interface AlternatingImageProps {
  images: string[];
  alts: string[];
  className?: string;
}

export default function AlternatingImage({ images, alts, className = "" }: AlternatingImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={images[currentIndex]}
        alt={alts[currentIndex] || `Imagem ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
        key={currentIndex}
      />
    </div>
  );
}