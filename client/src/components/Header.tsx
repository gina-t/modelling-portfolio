import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import backgroundImage from '../assets/hectorclarke-2.png';

const cards = [
  {
    name: 'Philosophy',
    description:
      'Modelling is a powerful medium for expressing identity and redefining beauty beyond conventional boundaries. Through my work, I explore diverse interpretations of self-expression that transcend traditional gender and cultural norms.',
  },
  {
    name: 'Measurements',
    description:
      'Height: 185 cm, Chest: 96 cm, Waist: 76 cm, Hips: 96 cm, Inseam: 81 cm. These measurements reflect my unique physique, which I embrace as a canvas for artistic expression.',
  },
  {
    name: "Let's Work Together",
    description: `I am always open to new opportunities and collaborations. If you are interested in working with me, please feel free to reach out.

    Instagram: @jaydenhuntermodel,
    Website: www.jaydenhuntermodel.com,
    Email: jaydenhunter@gmail.com,
    Phone: 0431 555 555,
    `,
  },
];

export default function Header() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      document.fonts.ready.then(() => {
        const splitText = new SplitText(headingRef.current, {
          type: 'chars, words, lines',
        });

        gsap.from(splitText.chars, {
          y: 100,
          autoAlpha: 0,
          stagger: {
            amount: 0.5,
            from: 'random',
          },
        });

        return () => {
          splitText.revert();
        };
      });
    }
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      document.fonts.ready.then(() => {
        if (!cardRef.current) return;
        // Get all individual cards
        const cardElements = cardRef.current.querySelectorAll('.card-item');

        // Create SplitText for each card
        const splitTexts = Array.from(cardElements).map((card) => {
          return new SplitText(card, {
            type: 'chars, words, lines',
            smartWrap: true,
          });
        });

        // Create timeline for sequential animation
        const tl = gsap.timeline();

        // Animate each card sequentially
        splitTexts.forEach((splitText, index) => {
          tl.from(
            splitText.lines,
            {
              y: 100,
              autoAlpha: 0,
              stagger: 0.05,
              duration: 0.8,
              ease: 'power2.out',
            },
            index * 0.5 // Delay each card by 0.3 seconds
          );
        });

        return () => {
          splitTexts.forEach((splitText) => splitText.revert());
        };
      });
    }
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={backgroundImage}
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            ref={headingRef}
            className="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
          >
            Jayden Hunter
          </h2>
        </div>
        <div
          ref={cardRef}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {cards.map((card) => (
            <div
              key={card.name}
              className="card-item flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
            >
              {/* <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" /> */}
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
