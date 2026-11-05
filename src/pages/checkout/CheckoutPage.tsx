import { useState } from 'react';
import { Link } from 'react-router';

import { Logo } from '../../components/layout/Logo';
import { ScrollToTop } from '../../components/layout/ScrollToTop';
import { buttonStyles } from '../../components/ui/button-styles';
import { Container } from '../../components/ui/Container';
import { useCart } from '../../hooks/useCart';
import type { CartItem, PaymentMethod, ShippingDetails } from '../../types';
import { CheckoutSteps, type CheckoutStep } from './CheckoutSteps';
import { CheckoutSummary } from './CheckoutSummary';
import { InformationStep } from './InformationStep';
import { PaymentStep } from './PaymentStep';
import { ReviewStep } from './ReviewStep';

const EMPTY_DETAILS: ShippingDetails = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  address: '',
  apartment: '',
  postalCode: '',
  city: '',
  country: '',
  phone: '',
};

interface PlacedOrder {
  number: string;
  firstName: string;
  items: CartItem[];
  subtotal: number;
}

export function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState<CheckoutStep>('information');
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [payment, setPayment] = useState<PaymentMethod>('paypal');
  const [order, setOrder] = useState<PlacedOrder | null>(null);

  const goTo = (next: CheckoutStep) => {
    setStep(next);
    window.scrollTo(0, 0);
  };

  const placeOrder = () => {
    setOrder({
      number: String(Math.floor(100000 + Math.random() * 900000)),
      firstName: details.firstName.trim(),
      items,
      subtotal,
    });
    clear();
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-dvh">
      <title>Checkout | COS</title>
      <ScrollToTop />
      <header className="border-b border-line">
        <Container className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          {order ? (
            <span />
          ) : (
            <Link to="/cart" className="justify-self-start text-[15px] hover:underline hover:underline-offset-4">
              Back to bag
            </Link>
          )}
          <Logo />
          <span />
        </Container>
      </header>

      <Container className="py-10 sm:py-14">
        {order ? (
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[3fr_2fr]">
            <div role="status">
              <h1 className="text-4xl font-light tracking-tight sm:text-5xl">Thank you, {order.firstName}</h1>
              <p className="mt-4 text-[17px]">Your order number is {order.number}.</p>
              <p className="mt-2 text-[15px] text-muted">
                This is a demo store, so nothing will be charged or shipped.
              </p>
              <Link to="/" className={`${buttonStyles.primary} mt-8`}>
                Continue shopping
              </Link>
            </div>
            <CheckoutSummary items={order.items} subtotal={order.subtotal} />
          </div>
        ) : items.length === 0 ? (
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-4xl font-light tracking-tight">Your bag is empty</h1>
            <p className="mt-3 text-[15px] text-muted">Add something to your bag before checking out.</p>
            <Link to="/women" className={`${buttonStyles.primary} mt-8`}>
              Shop women
            </Link>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
            <div>
              <h1 className="mb-4 text-4xl font-light tracking-tight">Checkout</h1>
              <CheckoutSteps current={step} onSelect={goTo} />
              <div className="mt-10">
                {step === 'information' && (
                  <InformationStep
                    initial={details}
                    onContinue={value => {
                      setDetails(value);
                      goTo('payment');
                    }}
                  />
                )}
                {step === 'payment' && (
                  <PaymentStep
                    initial={payment}
                    onContinue={value => {
                      setPayment(value);
                      goTo('review');
                    }}
                  />
                )}
                {step === 'review' && (
                  <ReviewStep details={details} payment={payment} onEdit={goTo} onPlaceOrder={placeOrder} />
                )}
              </div>
            </div>
            <div className="lg:sticky lg:top-8 lg:self-start">
              <CheckoutSummary items={items} subtotal={subtotal} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
