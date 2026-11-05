import { useId, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from 'react';

import { ChevronDownIcon } from './icons';

const control =
  'block w-full border bg-paper px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-ink';

function controlClass(error?: string) {
  return `${control} ${error ? 'border-sale focus:border-sale focus:ring-sale' : 'border-line focus:border-ink'}`;
}

interface FieldShellProps {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: (props: { id: string; describedBy?: string; className: string }) => ReactNode;
  className?: string;
}

function FieldShell({ label, error, hint, optional, children, className = '' }: FieldShellProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error ?? hint;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm">
        {label}
        {optional && <span className="text-muted"> (optional)</span>}
      </label>
      {children({ id, describedBy: message ? messageId : undefined, className: controlClass(error) })}
      {message && (
        <p id={messageId} className={`mt-1.5 text-sm ${error ? 'text-sale' : 'text-muted'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  trailing?: ReactNode;
};

export function InputField({ label, error, hint, optional, className, trailing, ...input }: InputFieldProps) {
  return (
    <FieldShell label={label} error={error} hint={hint} optional={optional} className={className}>
      {({ id, describedBy, className: cls }) => (
        <div className="relative">
          <input
            id={id}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={`${cls} ${trailing ? 'pr-12' : ''}`}
            {...input}
          />
          {trailing && <div className="absolute inset-y-0 right-0 flex items-center pr-2">{trailing}</div>}
        </div>
      )}
    </FieldShell>
  );
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  hint?: string;
  rows?: number;
  className?: string;
}

export function TextAreaField({ label, error, hint, className, ...textarea }: TextAreaFieldProps) {
  return (
    <FieldShell label={label} error={error} hint={hint} className={className}>
      {({ id, describedBy, className: cls }) => (
        <textarea
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`${cls} resize-y`}
          {...textarea}
        />
      )}
    </FieldShell>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  error?: string;
  autoComplete?: string;
  className?: string;
}

export function SelectField({ label, error, options, placeholder, className, ...select }: SelectFieldProps) {
  return (
    <FieldShell label={label} error={error} className={className}>
      {({ id, describedBy, className: cls }) => (
        <div className="relative">
          <select
            id={id}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={`${cls} appearance-none pr-10`}
            {...select}
          >
            <option value="">{placeholder}</option>
            {options.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>
      )}
    </FieldShell>
  );
}
