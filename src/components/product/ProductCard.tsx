import { Link } from 'react-router';

import type { Product } from '../../types';
import { CARD_SIZES, imageSrcSet } from '../../utils/images';
import { Price } from './Price';

export function ProductCard({ product }: { product: Product }) {
  const [image, hoverImage] = product.images;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[2/3] overflow-hidden bg-stone">
        <img
          src={image}
          srcSet={imageSrcSet(image)}
          sizes={CARD_SIZES}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className={`size-full object-cover transition-opacity duration-500 ${hoverImage ? 'group-hover:opacity-0' : ''}`}
        />
        {hoverImage && (
          <img
            src={hoverImage}
            srcSet={imageSrcSet(hoverImage)}
            sizes={CARD_SIZES}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-paper px-2 py-0.5 text-[13px]">New</span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3 text-[15px]">
        <h3 className="group-hover:underline group-hover:underline-offset-4">{product.name}</h3>
        <Price product={product} className="shrink-0 text-right" />
      </div>
      <p className="mt-0.5 text-sm text-muted">{product.color}</p>
    </Link>
  );
}
