import { useState } from 'react';

import { buttonStyles } from '../../components/ui/button-styles';
import type { PaymentMethod } from '../../types';
import { PAYMENT_METHODS } from './payment-methods';

interface PaymentStepProps {
  initial: PaymentMethod;
  onContinue: (method: PaymentMethod) => void;
}

export function PaymentStep({ initial, onContinue }: PaymentStepProps) {
  const [method, setMethod] = useState<PaymentMethod>(initial);

  return (
    <div>
      <fieldset>
        <legend className="mb-5 text-xl">Payment method</legend>
        <div className="grid gap-3">
          {PAYMENT_METHODS.map(option => (
            <label
              key={option.id}
              className="flex cursor-pointer items-center gap-4 border border-line p-4 hover:border-ink has-checked:border-ink has-checked:ring-1 has-checked:ring-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink"
            >
              <input
                type="radio"
                name="payment"
                value={option.id}
                checked={method === option.id}
                onChange={() => setMethod(option.id)}
                className="size-4 accent-ink"
              />
              <span className="flex-1">
                <span className="block text-[15px]">{option.label}</span>
                <span className="block text-sm text-muted">{option.note}</span>
              </span>
              <img src={option.logo} alt="" className="h-6 w-auto" />
            </label>
          ))}
        </div>
      </fieldset>
      <p className="mt-4 text-sm text-muted">This is a demo store. No payment is taken.</p>
      <button type="button" onClick={() => onContinue(method)} className={`${buttonStyles.primary} mt-8 w-full sm:w-auto`}>
        Continue to review
      </button>
    </div>
  );
}
