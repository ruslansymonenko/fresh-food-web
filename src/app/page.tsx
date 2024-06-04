import Link from 'next/link';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home Page description',
}

export default function Home() {
  return (
    <div>
      <h1>Main</h1>
      <Link href={'/catalogue'}>Go to catalogue</Link>
    </div>
  );
}
