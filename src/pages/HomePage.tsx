import { Link } from 'react-router';

import { ProductCard } from '../components/product/ProductCard';
import { buttonStyles } from '../components/ui/button-styles';
import { Container } from '../components/ui/Container';
import { products } from '../data/products';
import { smallImage } from '../utils/images';
import { discountPercent, isOnSale } from '../utils/price';

const departments = [
  { to: '/women', label: 'Women', image: '/editorial/women.webp' },
  { to: '/men', label: 'Men', image: '/editorial/men.webp' },
];

export function HomePage() {
  const newIn = products.filter(p => p.isNew).slice(0, 4);
  const maxDiscount = Math.max(...products.filter(isOnSale).map(discountPercent));

  return (
    <>
      <title>COS</title>

      <h1 className="sr-only">COS, women's and men's clothing</h1>
      <section className="grid md:grid-cols-2" aria-label="Shop by department">
        {departments.map((department, index) => (
          <Link
            key={department.to}
            to={department.to}
            className="group relative block h-[64svh] min-h-[420px] overflow-hidden bg-stone md:h-[min(76svh,780px)]"
          >
            <img
              src={department.image}
              srcSet={`${smallImage(department.image)} 600w, ${department.image} 1400w`}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt=""
              fetchPriority={index === 0 ? 'high' : undefined}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/55 to-transparent p-6 pt-24 text-paper sm:p-10 sm:pt-32">
              <h2 className="text-5xl font-light tracking-tight sm:text-6xl">{department.label}</h2>
              <p className="mt-3 text-[15px] underline decoration-1 underline-offset-4">
                Shop {department.label.toLowerCase()}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <Container className="py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">New this season</h2>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
          {newIn.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>

      <section className="bg-stone">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-[3fr_2fr] md:gap-16 md:py-24">
          <div className="grid grid-cols-2 gap-4">
            <Link to="/product/5" className="block">
              <img
                src="/editorial/linen-women.webp"
                alt="Linen wrap jacket"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </Link>
            <Link to="/product/10" className="block md:mt-16">
              <img
                src="/editorial/linen-men.webp"
                alt="Relaxed linen suit jacket"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </Link>
          </div>
          <div className="max-w-md">
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">Linen, made for warm days</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Washed linen that stays cool when it's hot and looks better every time you wear it. Unlined,
              relaxed and easy to throw on.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link to="/product/5" className={buttonStyles.link}>
                Linen wrap jacket
              </Link>
              <Link to="/product/10" className={buttonStyles.link}>
                Relaxed linen suit jacket
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="flex flex-col items-start justify-between gap-6 py-20 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-sale sm:text-4xl">Sale</h2>
          <p className="mt-3 text-[17px] text-muted">Selected pieces, now up to {maxDiscount}% off.</p>
        </div>
        <Link to="/sale" className={buttonStyles.primary}>
          Shop the sale
        </Link>
      </Container>
    </>
  );
}
