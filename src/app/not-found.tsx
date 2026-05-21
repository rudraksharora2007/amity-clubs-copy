import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-9xl font-extrabold text-primary/10">404</h1>
        <div className="absolute">
          <h2 className="text-4xl font-bold text-primary mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            The institutional resource you are looking for has been moved or archived.
          </p>
          <Link 
            href="/" 
            className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
