import { useState, type ChangeEvent, type FormEvent } from 'react';

import { validate, type Rules } from '../utils/validation';

type Errors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends Record<string, string>>(initial: T, rules: Rules<T>) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name as keyof T;
    const next = { ...values, [name]: event.target.value };
    setValues(next);
    if (submitted) {
      setErrors(validate(next, rules));
    }
  };

  const handleSubmit = (onValid: (values: T) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values, rules);
    setErrors(found);
    setSubmitted(true);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    onValid(values);
  };

  const field = (name: keyof T & string) => ({
    name,
    value: values[name],
    onChange,
    error: errors[name],
  });

  return { values, errors, field, handleSubmit };
}
