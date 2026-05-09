import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import {
  BarChart3,
  Menu,
  X
} from "lucide-react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("about")

  const navLinks = [
    "about",
    "projects",
    "certifications",
    "contact"
  ]

  useEffect(() => {

    const handleScroll = () => {

      const sections = navLinks.map((id) =>
        document.getElementById(id)
      )

      const scrollPosition = window.scrollY + 150

      sections.forEach((section) => {

        if (!section) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id)
        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }}
            className="flex items-center gap-2 cursor-pointer"
          >

            <BarChart3 className="w-6 h-6 text-cyan-500" />

            <span className="font-semibold text-gray-900 text-lg">
              Wajahath Zaman
            </span>

          </motion.button>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8"
          >

            {navLinks.map((link) => (

              <a
                key={link}
                href={`#${link}`}
                className={`capitalize transition-colors font-medium ${activeSection === link
                    ? "text-cyan-500"
                    : "text-gray-700 hover:text-cyan-500"
                  }`}
              >
                {link}
              </a>

            ))}

          </motion.div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >

            {
              isOpen
                ? <X className="w-6 h-6 text-gray-900" />
                : <Menu className="w-6 h-6 text-gray-900" />
            }

          </button>

        </div>

        {/* Mobile Menu */}
        {
          isOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col gap-4 mt-4 pb-4"
            >

              {navLinks.map((link) => (

                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setIsOpen(false)}
                  className={`capitalize transition-colors ${activeSection === link
                      ? "text-cyan-500"
                      : "text-gray-700 hover:text-cyan-500"
                    }`}
                >
                  {link}
                </a>

              ))}

            </motion.div>

          )
        }

      </div>

    </nav>
  )
}

export default Navbar