import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-[30px] border-t-4 border-dark-gray">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link className="w-full text-3xl font-bold text-white" href="/">
            RETRO JOY
          </Link>
          <p className="text-sm text-white">
            © {new Date().getFullYear()} RETRO JOY. All rights reserved.
          </p>
        </div>
        <Link
          href="/polityka"
          className="hover:text-main transition text-white"
        >
          Polityka prywatności i cookies
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
