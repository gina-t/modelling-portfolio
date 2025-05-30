import { useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { preloadImages } from '../utils/imageUtils';

interface CarouselProps {
  title: string;
  images: { src: string; alt: string }[];
  id: string;
}

const ImageCarousel = ({ title, images, id }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  // Register ScrollTrigger plugin if not already registered
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Only run when DOM is ready and images are loaded
    preloadImages('.card__face').then(() => {
      if (!carouselRef.current) return;
      
      // 1. Position the carousel cells in a circle
      const cells = carouselRef.current.querySelectorAll('.carousel__cell');
      const cellCount = cells.length;
      const angleStep = 360 / cellCount;
      const radius = 300;
      
      cells.forEach((cell, i) => {
        const angle = i * angleStep;
        gsap.set(cell, {
          rotateY: angle,
          z: -radius,
          transformOrigin: `50% 50% ${radius}px`,
        });
      });
      
      // 2. Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: true,
        }
      });
      
      // 3. Rotate carousel based on scroll position
      tl.to(carouselRef.current, {
        rotateY: -180,
        rotateZ: -3,
        rotateX: -3,
        ease: "none"
      });
      
      // 4. Change brightness of cards during scroll
      tl.fromTo('.card__face', 
        { filter: 'brightness(100%)' },
        { filter: 'brightness(80%)', ease: 'none' },
        0  // Start at the same time as the previous animation
      );
    });
  }, [images]);

  return (
    <div className="scene" ref={sceneRef} data-radius="300" id={id}>
      <h2 className="scene__title" ref={titleRef}>
        <span>{title}</span>
      </h2>
      
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div className="carousel__cell" key={index}>
            <div className="card">
              <div 
                className="card__face card__face--front" 
                style={{ 
                  '--img': `url(${image.src})` 
                } as React.CSSProperties}
              />
              <div 
                className="card__face card__face--back" 
                style={{ 
                  '--img': `url(${image.src})` 
                } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
