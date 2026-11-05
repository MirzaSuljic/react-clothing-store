const base =
  'inline-flex h-12 items-center justify-center gap-2 px-6 text-[15px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50';

export const buttonStyles = {
  primary: `${base} bg-ink text-paper hover:bg-ink/85`,
  secondary: `${base} border border-ink bg-paper text-ink hover:bg-stone`,
  link: 'text-[15px] underline decoration-1 underline-offset-4 hover:decoration-2',
};
