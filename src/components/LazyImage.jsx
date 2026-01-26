import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({
  src,
  alt,
  wrapperClassName = '',
  imgClassName = '',
  wrapperStyle,
  aspectRatio,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative ${wrapperClassName}`}
      style={aspectRatio ? { aspectRatio, ...wrapperStyle } : wrapperStyle}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse rounded'></div>
      )}

      {/* Actual image - only load when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          onLoad={() => setIsLoaded(true)}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
        />
      )}
    </div>
  );
};

export default LazyImage;
