import type { ReactNode } from 'react';

import { buttonStyles } from '../../components/ui/button-styles';
import type { PaymentMethod, ShippingDetails } from '../../types';
import type { CheckoutStep } from './CheckoutSteps';
import { paymentLabel } from './payment-methods';

interface ReviewStepProps {
  details: ShippingDetails;
  payment: PaymentMethod;
  onEdit: (step: CheckoutStep) => void;
  onPlaceOrder: () => void;
}

export function ReviewStep({ details, payment, onEdit, onPlaceOrder }: ReviewStepProps) {
  return (
    <div>
      <h2 className="mb-5 text-xl">Review your order</h2>
      <dl className="divide-y divide-line border-y border-line">
        <ReviewRow label="Contact" onEdit={() => onEdit('information')}>
          {details.email}
          <br />
          {details.phone}
        </ReviewRow>
        <ReviewRow label="Ship to" onEdit={() => onEdit('information')}>
          {details.firstName} {details.lastName}
          {details.company && (
            <>
              <br />
              {details.company}
            </>
          )}
          <br />
          {details.address}
          {details.apartment && `, ${details.apartment}`}
          <br />
          {details.postalCode} {details.city}
          <br />
          {details.country}
        </ReviewRow>
        <ReviewRow label="Payment" onEdit={() => onEdit('payment')}>
          {paymentLabel(payment)}
        </ReviewRow>
      </dl>
      <button type="button" onClick={onPlaceOrder} className={`${buttonStyles.primary} mt-8 w-full sm:w-auto`}>
        Place order
      </button>
    </div>
  );
}

function ReviewRow({ label, onEdit, children }: { label: string; onEdit: () => void; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[7rem_1fr_auto] gap-4 py-4 text-[15px]">
      <dt className="text-muted">{label}</dt>
      <dd className="leading-relaxed">{children}</dd>
      <dd>
        <button type="button" onClick={onEdit} className="text-sm underline underline-offset-4">
          Change<span className="sr-only"> {label.toLowerCase()}</span>
        </button>
      </dd>
    </div>
  );
}
