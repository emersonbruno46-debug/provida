import React from 'react';
import manifest from '../data/imageManifest.json';

type Dims = { width: number; height: number };

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  /** Base sem largura/extensão, ex.: "/img/prof/dr-joao-carlos-pena" */
  base: string;
  widths: number[];
  sizes: string;
  alt: string;
  dims?: Dims;
  priority?: boolean;
}

/** <picture> AVIF + WebP com srcset/sizes, dimensões reservadas e lazy por padrão. */
export const ResponsiveImage: React.FC<Props> = ({ base, widths, sizes, alt, dims, priority, ...img }) => {
  const set = (ext: string) => widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
  const fallback = `${base}-${widths[Math.min(1, widths.length - 1)]}.webp`;
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={dims?.width}
        height={dims?.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // fetchPriority é suportado pelo React 19
        fetchPriority={priority ? 'high' : 'auto'}
        {...img}
      />
    </picture>
  );
};

export const PROF_WIDTHS = [320, 480, 720];
export const profDims = (slug: string): Dims | undefined =>
  (manifest.professionals as Record<string, Dims>)[slug];
export const heroDims = manifest.hero as Dims | null;
export const aboutDims = manifest.about as Dims | null;
