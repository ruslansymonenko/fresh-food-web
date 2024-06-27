import { Metadata } from 'next';
import Contacts from '@/screens/contacts/Contacts';

export const metadata: Metadata = {
  title: 'Fresh Food Contact',
  description: 'Fresh Food Contact',
};

export default function ContactPage() {
  return <Contacts />;
}
