import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 shadow-sm border-b border-neutral-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              DocumentDB
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
