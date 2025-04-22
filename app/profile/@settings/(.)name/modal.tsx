'use client';

import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog className="modal" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}