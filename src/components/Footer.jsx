import { Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left */}
          <p className="text-gray-400 text-sm">
            © 2026 Wajahath Zaman. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.linkedin.com/in/zaman-wajahath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:mohammadwajahathzaman@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer