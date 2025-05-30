import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreviewProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  id: string;
}

const ImagePreview = ({ isOpen, onClose, title, images, id }: PreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen && previewRef.current) {
      // Animation for opening preview
      gsap.fromTo(
        previewRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      ref={previewRef}
      className="preview fixed top-0 left-0 w-full h-full bg-black/95 z-50 overflow-y-auto" 
      id={id}
    >
      <header className="preview__header sticky top-0 bg-black/80 backdrop-blur p-4 flex justify-between items-center">
        <h2 className="preview__title text-white text-2xl font-bold">
          <span>{title}</span>
        </h2>
        <button 
          className="preview__close text-white text-xl"
          onClick={onClose}
        >
          Close ×
        </button>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((img, index) => (
          <figure key={index} className="grid__item">
            <div 
              className="grid__item-image h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${img.src})` }}
            />
            <figcaption className="grid__item-caption p-2 text-white">
              <h3>{img.caption || img.alt}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;