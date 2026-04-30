import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244d3f] text-white py-10">
      {/* Top Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-3">KeenKeeper</h2>
        <p className="text-sm text-white/70 max-w-lg mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="font-semibold mt-6 mb-3">Social Links</p>
        <div className="flex justify-center gap-3">
          <a
            href="#"
            className="btn btn-circle btn-sm bg-white text-black border-none hover:bg-white/80"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="btn btn-circle btn-sm bg-white text-black border-none hover:bg-white/80"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="btn btn-circle btn-sm bg-white text-black border-none hover:bg-white/80"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mx-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 pt-5 text-sm text-white/60 gap-3">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
