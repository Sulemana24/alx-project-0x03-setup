const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 py-6 px-6 text-center mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} SplashApp. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Built with <span className="text-red-500">♥</span> using Next.js &
        Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
