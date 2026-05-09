import { useRef } from "react"
import emailjs from "@emailjs/browser"

import { motion } from "framer-motion"

import {
  Mail,
  MapPin,
  Send
} from "lucide-react"

import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs
      .sendForm(
        "service_zu2bhjg",
        "template_672gfdx",
        form.current,
        "Dc3YM2Ixa09SdDNZx"
      )

      .then(
        () => {
          alert("Message sent successfully!")
        },

        (error) => {
          alert("Failed to send message.")
          console.log(error.text)
        }
      )
  }

  return (
    <section
      id="contact"
      className="py-24 bg-white text-black"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Looking for a data analyst to help drive insights
            and business growth? I'm always open to discussing
            opportunities and collaborations.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Get In Touch
            </h3>

            <div className="space-y-4 mb-8">

              {/* Email */}
              <a
                href="mailto:mohammadwajahathzaman@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
              >

                <Mail className="w-6 h-6 text-cyan-500" />

                <div>

                  <div className="font-semibold text-gray-900">
                    Email
                  </div>

                  <div className="text-gray-600">
                    mohammadwajahathzaman@email.com
                  </div>

                </div>

              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zaman-wajahath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
              >
                <FaLinkedin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />

                <div>
                  <div className="font-semibold text-gray-900">
                    LinkedIn
                  </div>

                  <div className="text-gray-600 text-sm">
                    linkedin.com/in/zaman-wajahath
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">

                <MapPin className="w-6 h-6 text-purple-500" />

                <div>

                  <div className="font-semibold text-gray-900">
                    Location
                  </div>

                  <div className="text-gray-600">
                    Hyderabad, Telangana, India
                  </div>

                </div>

              </div>

            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-200">

              <p className="text-sm text-gray-700">

                <span className="font-semibold text-cyan-600">
                  Available for:
                </span>{" "}

                Full-time roles, freelance projects,
                internships, and collaborations.

              </p>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
          >

            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-cyan-500"
                />

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-cyan-500"
                />

              </div>

              {/* Subject */}
              <div>

                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-cyan-500"
                />

              </div>

              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:outline-none focus:border-cyan-500 resize-none"
                />

              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2"
              >

                Send Message

                <Send className="w-4 h-4" />

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact