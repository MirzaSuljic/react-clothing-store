import { describe, expect, it } from 'vitest';

import { email, minLength, phone, required, validate } from './validation';

describe('validation', () => {
  it('checks required fields, emails, phones and length', () => {
    expect(required()('  ')).not.toBeNull();
    expect(required()('Ana')).toBeNull();
    expect(email()('ana@example')).not.toBeNull();
    expect(email()('ana@example.com')).toBeNull();
    expect(phone()('abc')).not.toBeNull();
    expect(phone()('+387 61 123 456')).toBeNull();
    expect(minLength(10)('short')).not.toBeNull();
  });

  it('reports the first failing rule per field', () => {
    const errors = validate(
      { email: '', name: 'Ana' },
      { email: [required('Enter your email.'), email()], name: [required()] },
    );
    expect(errors).toEqual({ email: 'Enter your email.' });
  });
});
