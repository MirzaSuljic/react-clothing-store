import { useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router';

import { Price } from '../components/product/Price';
import { ProductCard } from '../components/product/ProductCard';
import { buttonStyles } from '../components/ui/button-styles';
import { Container } from '../components/ui/Container';
import { getProduct, products } from '../data/products';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types';
import { imageSrcSet } from '../utils/images';
import { NotFoundPage } from './NotFoundPage';

export function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);

  if (!product) {
    return <NotFoundPage />;
  }
  return <ProductDetails key={product.id} product={product} />;
}

function ProductDetails({ product }: { product: Product }) {
  const { addItem, openDrawer } = useCart();
  const [size, setSize] = useState('');
  const [sizeError, setSizeError] = useState(false);

  const related = products.filter(p => p.gender === product.gender && p.id !== product.id).slice(0, 4);
  const department = product.gender === 'women' ? 'Women' : 'Men';

  const addToBag = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    addItem(product.id, size);
    openDrawer();
  };

  return (
    <>
      <title>{`${product.name} | COS`}</title>

      <Container className="pt-6 lg:pt-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <Link to={`/${product.gender}`} className="hover:text-ink hover:underline hover:underline-offset-4">
            {department}
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page" className="text-ink">
            {product.name}
          </span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:gap-14">
          <Gallery product={product} />

          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-3xl font-light tracking-tight sm:text-4xl">{product.name}</h1>
            <Price product={product} className="mt-3 text-lg" />
            <p className="mt-1 text-[15px] text-muted">{product.color}</p>

            <fieldset className="mt-8">
              <legend className="text-[15px]">Size</legend>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
                {product.sizes.map(option => (
                  <label key={option} className="relative">
                    <input
                      type="radio"
                      name="size"
                      value={option}
                      checked={size === option}
                      onChange={() => {
                        setSize(option);
                        setSizeError(false);
                      }}
                      aria-describedby={sizeError ? 'size-error' : undefined}
                      className="peer sr-only"
                    />
                    <span className="flex h-11 cursor-pointer items-center justify-center border border-line text-[15px] hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {sizeError && (
                <p id="size-error" role="alert" className="mt-2 text-sm text-sale">
                  Choose a size to add this to your bag.
                </p>
              )}
            </fieldset>

            <button type="button" onClick={addToBag} className={`${buttonStyles.primary} mt-6 w-full`}>
              Add to bag
            </button>

            <p className="mt-8 text-[17px] leading-relaxed">{product.description}</p>

            <div className="mt-8 divide-y divide-line border-y border-line">
              <Details title="Details">
                <ul className="list-disc space-y-1 pl-5">
                  {product.details.map(detail => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Details>
              <Details title="Material">
                <p>{product.material}</p>
              </Details>
            </div>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="pt-24">
          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">You might also like</h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
            {related.map(item => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
}

function Gallery({ product }: { product: Product }) {
  const [first, ...rest] = product.images;

  return (
    <div className="lg:grid">
      <div className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:hidden">
        {product.images.map((image, index) => (
          <img
            key={image}
            src={image}
            srcSet={imageSrcSet(image)}
            sizes="85vw"
            alt={index === 0 ? product.name : `${product.name}, view ${index + 1}`}
            loading="lazy"
            className={`aspect-[2/3] shrink-0 snap-center bg-stone object-cover ${product.images.length > 1 ? 'w-[85%]' : 'w-full'}`}
          />
        ))}
      </div>

      {rest.length ? (
        <div className="hidden gap-3 lg:grid lg:grid-cols-2">
          {product.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={index === 0 ? product.name : `${product.name}, view ${index + 1}`}
              loading="lazy"
              className="aspect-[2/3] w-full bg-stone object-cover"
            />
          ))}
        </div>
      ) : (
        <img
          src={first}
          alt={product.name}
          loading="lazy"
          className="hidden aspect-[2/3] w-[min(100%,calc((100svh-11rem)*2/3))] justify-self-center bg-stone object-cover lg:block"
        />
      )}
    </div>
  );
}

function Details({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group py-4" open>
      <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] [&::-webkit-details-marker]:hidden">
        {title}
        <span aria-hidden="true" className="text-lg leading-none group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="hidden text-lg leading-none group-open:inline">
          −
        </span>
      </summary>
      <div className="pt-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </details>
  );
}
