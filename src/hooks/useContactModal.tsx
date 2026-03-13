import { createContext, useContext, useState, ReactNode } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const ContactModalContext = createContext<{ open: () => void }>({ open: () => {} });

export const useContactModal = () => useContext(ContactModalContext);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ContactFormModal open={isOpen} onOpenChange={setIsOpen} />
    </ContactModalContext.Provider>
  );
};
