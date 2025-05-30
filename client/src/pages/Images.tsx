import Header from '../components/Header';
import ImageCarousel from '../components/Carousel';

// Import your images
import cygnenoir1 from '../assets/cygnenoir-1.png';
import cygnenoir2 from '../assets/cygnenoir-2.png';
import cygnenoir3 from '../assets/cygnenoir-3.png';
import cygnenoir4 from '../assets/cygnenoir-4.png';
import maticevski1 from '../assets/maticevski-1.png';
import maticevski2 from '../assets/maticevski-2.png';
import maticevski3 from '../assets/maticevski-3.png';
import maticevski4 from '../assets/maticevski-4.png';
import donovandarling1 from '../assets/donovandarling-1.png';
import fragment1 from '../assets/fragment-1.png';
import fragment3 from '../assets/fragment-3.png';
import jordangorgos1 from '../assets/jordangorgos-1.png';


export default function Images () {
  const carouselData = [
    {
      id: "editorial-carousel",
      title: "Editorial",
      images: [
        { src: cygnenoir1, alt: "Cygne Noir" },
        { src: cygnenoir2, alt: "Cygne Noir" },
        { src: cygnenoir3, alt: "Cygne Noir" },
        { src: cygnenoir4, alt: "Cygne Noir" },
      ],
    },
    {
      id: "print-carousel",
      title: "Print",
      images: [
        { src: maticevski1, alt: "Maticevski" },
        { src: maticevski2, alt: "Maticevski" },
        { src: maticevski3, alt: "Maticevski" },
        { src: maticevski4, alt: "Maticevski" },
      ],
    },
    {
      id: "runway-carousel",
      title: "Runway",
      images: [
        { src: donovandarling1, alt: "Donovan Darling" },
        { src: fragment1, alt: "Fragment" },
        { src: fragment3, alt: "Fragment" },
        { src: jordangorgos1, alt: "Jordan Gorgos" },
      ],
    },
  ];
  return (
    <>
      <Header />
      <div className="scene-wrapper">
        {carouselData.map((carousel) => (
          <ImageCarousel 
            key={carousel.id} 
            id={carousel.id} 
            title={carousel.title} 
            images={carousel.images} 
          />
        ))} 
      </div>
    </>
  );
};


