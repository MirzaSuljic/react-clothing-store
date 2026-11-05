export type CheckoutStep = 'information' | 'payment' | 'review';

const STEPS: { id: CheckoutStep; label: string }[] = [
  { id: 'information', label: 'Information' },
  { id: 'payment', label: 'Payment' },
  { id: 'review', label: 'Review' },
];

interface CheckoutStepsProps {
  current: CheckoutStep;
  onSelect: (step: CheckoutStep) => void;
}

export function CheckoutSteps({ current, onSelect }: CheckoutStepsProps) {
  const currentIndex = STEPS.findIndex(step => step.id === current);

  return (
    <nav aria-label="Checkout steps">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
        {STEPS.map((step, index) => {
          const done = index < currentIndex;
          const active = index === currentIndex;
          return (
            <li key={step.id} className="flex items-center gap-3">
              {done ? (
                <button type="button" onClick={() => onSelect(step.id)} className="underline underline-offset-4">
                  {index + 1}. {step.label}
                </button>
              ) : (
                <span aria-current={active ? 'step' : undefined} className={active ? 'font-medium' : 'text-muted'}>
                  {index + 1}. {step.label}
                </span>
              )}
              {index < STEPS.length - 1 && (
                <span aria-hidden="true" className="text-muted">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
