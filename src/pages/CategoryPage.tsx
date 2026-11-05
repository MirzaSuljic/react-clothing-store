import { useSearchParams } from 'react-router';

import { ProductGrid } from '../components/product/ProductGrid';
import { SortSelect } from '../components/product/SortSelect';
import { Container } from '../components/ui/Container';
import { products } from '../data/products';
import type { Gender } from '../types';
import { sortProducts, toSortOption } from '../utils/sort-products';

const titles: Record<Gender, string> = { women: 'Women', men: 'Men' };

export function CategoryPage({ gender }: { gender: Gender }) {
  const [params, setParams] = useSearchParams();
  const sort = toSortOption(params.get('sort'));
  const list = sortProducts(
    products.filter(p => p.gender === gender),
    sort,
  );

  return (
    <Container className="pt-10 sm:pt-14">
      <title>{`${titles[gender]} | COS`}</title>

      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
        <div>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">{titles[gender]}</h1>
          <p className="mt-2 text-[15px] text-muted">
            {list.length} {list.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        <SortSelect
          value={sort}
          onChange={value => setParams(value === 'featured' ? {} : { sort: value }, { replace: true })}
        />
      </div>

      <div className="mt-8">
        <ProductGrid products={list} />
      </div>
    </Container>
  );
}
