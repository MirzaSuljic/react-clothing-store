import { useState } from 'react';
import { Link } from 'react-router';

import { buttonStyles } from '../components/ui/button-styles';
import { Container } from '../components/ui/Container';
import { InputField } from '../components/ui/FormField';
import { EyeIcon } from '../components/ui/icons';
import { useForm } from '../hooks/useForm';
import { email, minLength, required } from '../utils/validation';

export function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [signedInAs, setSignedInAs] = useState<string | null>(null);
  const { field, handleSubmit } = useForm(
    { email: '', password: '' },
    {
      email: [required('Enter your email address.'), email()],
      password: [required('Enter your password.'), minLength(8, 'Passwords are at least 8 characters.')],
    },
  );

  return (
    <Container className="pt-10 sm:pt-16">
      <title>Sign in | COS</title>
      <div className="mx-auto max-w-sm">
        <h1 className="text-4xl font-light tracking-tight">Sign in</h1>

        {signedInAs ? (
          <div className="mt-8" role="status">
            <p className="text-[17px]">You're signed in as {signedInAs}.</p>
            <p className="mt-2 text-[15px] text-muted">
              This is a demo store, so there are no real accounts and nothing was saved.
            </p>
            <Link to="/" className={`${buttonStyles.primary} mt-8 w-full`}>
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-3 text-[15px] text-muted">Sign in to see your orders and check out faster.</p>
            <form noValidate onSubmit={handleSubmit(values => setSignedInAs(values.email))} className="mt-8 space-y-5">
              <InputField label="Email" type="email" autoComplete="email" {...field('email')} />
              <InputField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                {...field('password')}
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPassword(shown => !shown)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    className={`p-2 ${showPassword ? 'text-ink' : 'text-muted'}`}
                  >
                    <EyeIcon />
                  </button>
                }
              />
              <button type="submit" className={`${buttonStyles.primary} w-full`}>
                Sign in
              </button>
            </form>
          </>
        )}
      </div>
    </Container>
  );
}
