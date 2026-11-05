import { useEffect, useRef, type ReactNode } from 'react';

import { CloseIcon } from './icons';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  side?: 'left' | 'right';
  children: ReactNode;
  footer?: ReactNode;
}

export function Drawer({ open, onClose, title, side = 'right', children, footer }: DrawerProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) {
      return;
    }
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const position =
    side === 'right'
      ? 'ml-auto mr-0 starting:open:translate-x-full'
      : 'mr-auto ml-0 starting:open:-translate-x-full';

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      className={`${position} my-0 h-dvh max-h-dvh w-full max-w-md flex-col bg-paper p-0 text-ink transition-transform duration-300 ease-out backdrop:bg-ink/40 open:flex`}
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
        <h2 className="text-lg">{title}</h2>
        <button type="button" onClick={onClose} className="-mr-2 p-2" aria-label="Close">
          <CloseIcon />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
      {footer && <div className="shrink-0 border-t border-line p-5">{footer}</div>}
    </dialog>
  );
}
