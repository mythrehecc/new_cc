'use client';

import ContactFormModal from './ContactFormModal';
import { useContactForm } from './ContactFormContext';

export default function GlobalContactFormModal() {
  const { isModalOpen, closeModal } = useContactForm();

  return (
    <ContactFormModal 
      isOpen={isModalOpen} 
      onClose={closeModal} 
    />
  );
}
