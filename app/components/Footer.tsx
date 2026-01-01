export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-800">PKM</span>
          </div>
          <p className="text-gray-600">
            © {new Date().getFullYear()} All rights reserved by{' '}
            <a href="/" className="text-[#ff014f] hover:underline">
              Prosenjit Kumar Mandal
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
