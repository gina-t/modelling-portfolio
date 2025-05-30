import Router from './router';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, useGSAP);

export default function App() {
  return (
    <>
      <Router />
    </>
  );
}
