import { Metadata } from 'next';
import Info from '@/screens/info/Info';

export const metadata: Metadata = {
  title: 'Fresh Food Info',
  description: 'Fresh Food Info',
};

export default function InfoPage() {
  return (
    <div className="flex items-center justify-center w-full">
      <Info />
    </div>
  );
}
