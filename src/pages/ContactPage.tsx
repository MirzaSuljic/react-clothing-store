import { useState } from 'react';
import { Link } from 'react-router';

import { buttonStyles } from '../components/ui/button-styles';
import { Container } from '../components/ui/Container';
import { InputField, SelectField, TextAreaField } from '../components/ui/FormField';
import { useForm } from '../hooks/useForm';
import { email, minLength, required } from '../utils/validation';

const TOPICS = ['An order I placed', 'Returns and refunds', 'A product', 'Something else'];

export function ContactPage() {
  const [sentTo, setSentTo] = useState<{ name: string; email: string } | null>(null);
  const { field, handleSubmit } = useForm(
    { name: '', email: '', topic: '', orderNumber: '', message: '' },
    {
      name: [required('Enter your name.')],
      email: [required('Enter your email address so we can reply.'), email()],
      topic: [required('Choose what your message is about.')],
      message: [required('Write your message.'), minLength(10, 'Tell us a little more, at least 10 characters.')],
    },
  );

  return (
    <Container className="pt-10 sm:pt-16">
      <title>Contact us | COS</title>
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl">Contact us</h1>

        {sentTo ? (
          <div className="mt-8" role="status">
            <p className="text-[17px]">Thanks, {sentTo.name}. Your message has been sent.</p>
            <p className="mt-2 text-[15px] text-muted">
              In a real store we'd reply to {sentTo.email}. This demo doesn't send email.
            </p>
            <Link to="/" className={`${buttonStyles.primary} mt-8`}>
              Back to the shop
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-3 text-[17px] text-muted">
              Questions about an order, a return or a product? Send us a message.
            </p>
            <form
              noValidate
              onSubmit={handleSubmit(values => setSentTo({ name: values.name.trim(), email: values.email.trim() }))}
              className="mt-8 grid gap-5 sm:grid-cols-2"
            >
              <InputField label="Name" autoComplete="name" {...field('name')} />
              <InputField label="Email" type="email" autoComplete="email" {...field('email')} />
              <SelectField label="What is it about?" placeholder="Choose a topic" options={TOPICS} {...field('topic')} />
              <InputField label="Order number" optional inputMode="numeric" {...field('orderNumber')} />
              <TextAreaField label="Message" rows={6} className="sm:col-span-2" {...field('message')} />
              <div className="sm:col-span-2">
                <button type="submit" className={buttonStyles.primary}>
                  Send message
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </Container>
  );
}
