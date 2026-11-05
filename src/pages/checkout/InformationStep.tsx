import { InputField, SelectField } from '../../components/ui/FormField';
import { buttonStyles } from '../../components/ui/button-styles';
import { useForm } from '../../hooks/useForm';
import type { ShippingDetails } from '../../types';
import { email, phone, required } from '../../utils/validation';
import { COUNTRIES } from './countries';

interface InformationStepProps {
  initial: ShippingDetails;
  onContinue: (details: ShippingDetails) => void;
}

export function InformationStep({ initial, onContinue }: InformationStepProps) {
  const { field, handleSubmit } = useForm<ShippingDetails>(initial, {
    email: [required('Enter your email address.'), email()],
    firstName: [required('Enter your first name.')],
    lastName: [required('Enter your last name.')],
    address: [required('Enter your street and house number.')],
    postalCode: [required('Enter your postal code.')],
    city: [required('Enter your city.')],
    country: [required('Choose your country.')],
    phone: [required('Enter a phone number for the delivery driver.'), phone()],
  });

  return (
    <form noValidate onSubmit={handleSubmit(onContinue)} className="space-y-10">
      <fieldset className="space-y-5">
        <legend className="mb-5 text-xl">Contact</legend>
        <InputField label="Email" type="email" autoComplete="email" {...field('email')} />
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 text-xl">Shipping address</legend>
        <InputField label="First name" autoComplete="given-name" {...field('firstName')} />
        <InputField label="Last name" autoComplete="family-name" {...field('lastName')} />
        <InputField label="Company" optional autoComplete="organization" className="sm:col-span-2" {...field('company')} />
        <InputField label="Address" autoComplete="address-line1" className="sm:col-span-2" {...field('address')} />
        <InputField
          label="Apartment, suite, floor"
          optional
          autoComplete="address-line2"
          className="sm:col-span-2"
          {...field('apartment')}
        />
        <InputField label="Postal code" autoComplete="postal-code" {...field('postalCode')} />
        <InputField label="City" autoComplete="address-level2" {...field('city')} />
        <SelectField
          label="Country"
          placeholder="Choose a country"
          options={COUNTRIES}
          autoComplete="country-name"
          {...field('country')}
        />
        <InputField label="Phone" type="tel" autoComplete="tel" {...field('phone')} />
      </fieldset>

      <button type="submit" className={`${buttonStyles.primary} w-full sm:w-auto`}>
        Continue to payment
      </button>
    </form>
  );
}
