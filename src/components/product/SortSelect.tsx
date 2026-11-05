import { useId } from 'react';

import type { SortOption } from '../../types';
import { SORT_OPTIONS } from '../../utils/sort-products';
import { ChevronDownIcon } from '../ui/icons';

export function SortSelect({ value, onChange }: { value: SortOption; onChange: (value: SortOption) => void }) {
  const id = useId();
  return (
    <div className="flex items-center gap-2 text-[15px]">
      <label htmlFor={id} className="text-muted">
        Sort by
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={event => onChange(event.target.value as SortOption)}
          className="field-sizing-content appearance-none bg-transparent py-1 pr-6 underline decoration-1 underline-offset-4"
        >
          {SORT_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
