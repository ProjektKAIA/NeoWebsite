export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          Neoneo Bank, {currentYear}
        </p>
      </div>
    </footer>
  );
}
