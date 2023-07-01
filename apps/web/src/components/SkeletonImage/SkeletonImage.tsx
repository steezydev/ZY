import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

type SkeletonImageProps = {
  src: string;
  loaderSvg: ReactNode;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

const SkeletonImage: React.FC<SkeletonImageProps> = ({
  src,
  loaderSvg,
  alt,
  className,
  width,
  height,
  fill,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    const src = img.src;
    img.onload = () => setIsLoading(false);
    img.src = src;
  }, []);

  return (
    <div className={clsxm('relative', className)}>
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {loaderSvg}
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } `}
      >
        <Image
          className={`transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${fill && 'object-contain'}`}
          src={src}
          width={width}
          height={height}
          fill={fill}
          object-contain={fill?.toString()}
          alt={alt ?? 'Image'}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default SkeletonImage;
