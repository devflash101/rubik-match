'use client';

import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {

  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')!
  );
}