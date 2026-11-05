import { MAX_QUANTITY } from '../../utils/cart';
import { MinusIcon, PlusIcon } from '../ui/icons';

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
}

export function QuantityStepper({ value, onChange, label }: QuantityStepperProps) {
  const button = 'flex size-9 items-center justify-center disabled:text-muted/50';
  return (
    <div className="inline-flex items-center border border-line" role="group" aria-label={`Quantity of ${label}`}>
      <button
        type="button"
        className={button}
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label="Decrease quantity"
      >
        <MinusIcon />
      </button>
      <span className="w-8 text-center text-[15px] tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={button}
        onClick={() => onChange(value + 1)}
        disabled={value >= MAX_QUANTITY}
        aria-label="Increase quantity"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
