import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo / Brand */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        SplashApp
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        <Link
          href="/generate-text-ai"
          className="text-gray-700 hover:text-blue-500"
        >
          Generate Text
        </Link>
        <Link
          href="/text-to-image"
          className="text-gray-700 hover:text-blue-500"
        >
          Text to Image
        </Link>
        <Link href="/counter-app" className="text-gray-700 hover:text-blue-500">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
