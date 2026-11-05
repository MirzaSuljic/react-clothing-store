import applePay from '../../assets/payment/apple-pay.webp';
import klarna from '../../assets/payment/klarna.webp';
import paypal from '../../assets/payment/paypal.webp';
import stripe from '../../assets/payment/stripe.webp';
import type { PaymentMethod } from '../../types';

export const PAYMENT_METHODS: { id: PaymentMethod; label: string; note: string; logo: string }[] = [
  { id: 'paypal', label: 'PayPal', note: 'Pay with your PayPal account', logo: paypal },
  { id: 'stripe', label: 'Card', note: 'Visa, Mastercard or American Express', logo: stripe },
  { id: 'apple-pay', label: 'Apple Pay', note: 'Pay with Touch ID or Face ID', logo: applePay },
  { id: 'klarna', label: 'Klarna', note: 'Pay in 30 days or in 3 instalments', logo: klarna },
];

export function paymentLabel(id: PaymentMethod): string {
  return PAYMENT_METHODS.find(method => method.id === id)?.label ?? id;
}
