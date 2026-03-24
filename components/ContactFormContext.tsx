'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactFormContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('ContactFormContext: openModal called');
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    console.log('ContactFormContext: closeModal called');
    setIsModalOpen(false);
  };

  console.log('ContactFormContext: isModalOpen =', isModalOpen);

  return (
    <ContactFormContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  console.log('useContactForm: context =', context);
  return context;
}
