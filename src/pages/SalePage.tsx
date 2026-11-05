import { useSearchParams } from 'react-router';

import { ProductGrid } from '../components/product/ProductGrid';
import { SortSelect } from '../components/product/SortSelect';
import { Container } from '../components/ui/Container';
import { products } from '../data/products';
import { discountPercent, isOnSale } from '../utils/price';
import { sortProducts, toSortOption } from '../utils/sort-products';

const filters = [
  { value: '', label: 'All' },
  { value: 'women', label: 'Women' },
  { value: 'men', label: 'Men' },
] as const;

export function SalePage() {
  const [params, setParams] = useSearchParams();
  const sort = toSortOption(params.get('sort'));
  const genderParam = params.get('gender');
  const gender = genderParam === 'women' || genderParam === 'men' ? genderParam : '';

  const onSale = products.filter(isOnSale);
  const maxDiscount = Math.max(...onSale.map(discountPercent));
  const list = sortProducts(
    onSale.filter(p => !gender || p.gender === gender),
    sort,
  );

  const update = (key: 'gender' | 'sort', value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== 'featured') {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setParams(next, { replace: true });
  };

  return (
    <Container className="pt-10 sm:pt-14">
      <title>Sale | COS</title>

      <div className="border-b border-line pb-6">
        <h1 className="text-4xl font-light tracking-tight text-sale sm:text-5xl">Sale</h1>
        <p className="mt-2 text-[15px] text-muted">Selected pieces, now up to {maxDiscount}% off.</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Show" className="flex gap-2">
            {filters.map(filter => (
              <button
                key={filter.value}
                type="button"
                aria-pressed={gender === filter.value}
                onClick={() => update('gender', filter.value)}
                className="border border-line px-4 py-1.5 text-[15px] hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <SortSelect value={sort} onChange={value => update('sort', value)} />
        </div>
      </div>

      <p className="mt-6 text-[15px] text-muted">
        {list.length} {list.length === 1 ? 'item' : 'items'}
      </p>
      <div className="mt-4">
        <ProductGrid products={list} />
      </div>
    </Container>
  );
}
