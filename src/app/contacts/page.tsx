import { Metadata } from 'next';
import ContactForm from '@/components/ui/forms/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Fresh Food Contact',
  description: 'Fresh Food Contact',
};

export default function ContactPage() {
  return <ContactForm />;
}
