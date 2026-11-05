export type Validator = (value: string) => string | null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const required =
  (message = 'This field is required.'): Validator =>
  value =>
    value.trim() ? null : message;

export const email =
  (message = 'Enter an email address like name@example.com.'): Validator =>
  value =>
    !value.trim() || EMAIL_PATTERN.test(value.trim()) ? null : message;

export const minLength =
  (length: number, message?: string): Validator =>
  value =>
    !value.trim() || value.trim().length >= length
      ? null
      : (message ?? `Enter at least ${length} characters.`);

export const phone =
  (message = 'Enter a phone number, digits and an optional +.'): Validator =>
  value =>
    !value.trim() || /^\+?[\d\s()-]{6,}$/.test(value.trim()) ? null : message;

export type Rules<T> = Partial<Record<keyof T, Validator[]>>;

export function validate<T extends Record<string, string>>(
  values: T,
  rules: Rules<T>,
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};
  for (const key of Object.keys(rules) as (keyof T)[]) {
    for (const rule of rules[key] ?? []) {
      const error = rule(values[key] ?? '');
      if (error) {
        errors[key] = error;
        break;
      }
    }
  }
  return errors;
}
