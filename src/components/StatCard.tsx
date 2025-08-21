import React, { useEffect, useState, useRef } from 'react';

// @ts-ignore
const easeOutQuad = t => t * ( 2 - t );
const frameDuration = 1000 / 60;

// @ts-ignore
const CountUpAnimation = ({ children, duration = 1500 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // Prevent re-triggering

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let frame = 0;
          const totalFrames = Math.round(duration / frameDuration);

          const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            setCount(countTo * progress);

            if (frame === totalFrames) {
              clearInterval(counter);
            }
          }, frameDuration);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [countTo, duration]);

  return <span ref={ref}>{Math.floor(count)}</span>;
};

// @ts-ignore
const StatCard = ( {children, value} ) => {

    return (
        <div className='w-full sm:w-70 md:w-80 lg:w-100 bg-white rounded-2xl p-8 shadow-lg outline-1'>
            <h3
                className='
                    font-black text-sjsugold shade-color-auggold
                    text-8xl sm:text-6xl md:text-7xl lg:text-8xl  
                    drop-3 sm:drop-2 md:drop-2.5 lg:drop-3'
            >
                +<CountUpAnimation>{value}</CountUpAnimation>%
            </h3>
            <p className='mt-4 text-lg text-clipper text-center'>
                {children}
            </p>
        </div>
    )
}

export default StatCard