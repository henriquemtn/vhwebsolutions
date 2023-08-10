"use client"

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const fadeClasses = `opacity-0 transform transition-opacity duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : ''
  }`;

  return <div ref={ref} className={fadeClasses}>{children}</div>;
};

export default FadeInOnScroll;
