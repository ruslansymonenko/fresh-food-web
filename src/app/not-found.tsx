import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="px-4 mx-auto lg:max-w-7xl sm:max-w-full min-h-screen">
      <h1 className="font-bold text-rose-600 mb-4">Page not found</h1>
      <Link className="underline" href="/">
        Go to main page
      </Link>
    </div>
  );
}
