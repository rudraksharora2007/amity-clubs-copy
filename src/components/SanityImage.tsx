import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface SanityImageProps {
  source: any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function SanityImage({
  source,
  alt,
  width,
  height,
  className,
  fill,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: SanityImageProps) {
  if (!source) {
    return (
      <div className={className || ''}>
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-primary/30 font-serif text-sm uppercase tracking-widest">
          No Image
        </div>
      </div>
    );
  }

  const imageUrl = typeof source === 'string'
    ? source
    : urlFor(source)?.width(width || 800).height(height || 600).fit('crop').url();

  if (!imageUrl) {
    return (
      <div className={className || ''}>
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-primary/30 font-serif text-sm uppercase tracking-widest">
          No Image
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={fill ? undefined : width || 800}
      height={fill ? undefined : height || 600}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
