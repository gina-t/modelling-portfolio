import { Routes, Route, useLocation } from 'react-router';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import Images from '../pages/Images';
import '../styles.css'; 

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      ignoreMobileResize: true, // Helps with iOS
      normalizeScroll: true, // Helps with iOS
      smoothTouch: 0.1,
    });

    // General effects for images
    smoother.effects("img", {
      speed: "auto",
    });

    // Special effect for carousel titles
    smoother.effects(".scene__title", {
      speed: 0.7,
    });

    return () => {
      smoother.kill();
    };
  }, [location]);

  return (
    <div id="smooth-wrapper" className="overflow-hidden fixed h-full w-full inset-0">
      <div id="smooth-content" className="min-h-screen w-full bg-gray-900">
        <Routes>
          <Route>
            <Route index element={<Images />} />  
          </Route>
        </Routes>
      </div>
    </div>
  );
}

// ScrollSmoother needs two elements:
//1. An outer wrapper with id "smooth-wrapper" that stays fixed
//2. An inner content with id "smooth-content" that contains the scrollable content
