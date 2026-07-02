
import logo from "../assets/FullLogo_Transparent.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center">
                        <img
                          src={logo}
                          alt="GudMed"
                          className="h-50 w-auto"
                        />
                      </a>

              
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              AI-powered discharge summaries for hospitals across India.
              NABH certified and MCI compliant.
            </p>
          </div>

          {/* Product */}

          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="mb-5 font-semibold text-slate-800">
              Product
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#how">How It Works</a>
              </li>

              <li>
                <a href="#compliance">Compliance</a>
              </li>

              <li>
                <a href="#integration">Integration</a>
              </li>

              <li>
                <a href="#roi">ROI</a>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="mb-5 font-semibold text-slate-800">
              Company
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="mb-5 font-semibold text-slate-800">
              Connect
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li>LinkdIn</li>
              <li>WhatsApp</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-400 pt-8 text-center text-sm text-slate-600">
          © 2026 GudMed Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;