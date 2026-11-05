export const CARD_SIZES = '(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw';

export function smallImage(src: string): string {
  return src.replace(/\.webp$/, '-600.webp');
}

export function imageSrcSet(src: string): string {
  return `${smallImage(src)} 600w, ${src} 1000w`;
}
