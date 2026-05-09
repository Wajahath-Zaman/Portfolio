import { motion } from "framer-motion"

import {
  Award,
  CheckCircle2,
  ExternalLink
} from "lucide-react"

const certifications = [
  {
    name: "SQL Proficiency Certificate",
    issuer: "Scaler By InterviewBit",
    date: "2025",
    logo: "🐬", skills: [
      "Data Analysis",
      "SQL",
      "MySQL",
      "Database Management",
      "Joins & Subqueries",
      "Data Filtering",
      "Aggregation Functions",
      "Query Optimization"
    ],
    verified: true,

    link: "/certificates/Sql_Certificate.png"
  },

  {
    name: "Python Libraries Proficiency Certificate",
    issuer: "Scaler By InterviewBit",
    date: "2026",
    logo: "📊",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Visualization",
      "Data Cleaning",
      "Exploratory Data Analysis"
    ],
    verified: true,
    link: "/certificates/Python_Libraries_certificate.png"
  },

  {
    name: "EDA Fundamentals Proficiency Certificate",
    issuer: "Scaler By InterviewBit",
    date: "2026",
    logo: "</>",
    skills: [
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statistical Analysis"
    ],
    verified: true,
    link: "/certificates/EDA_Fundamentals_Certificate.png"
  }
]

const Certifications = () => {
  return (
    <section
      id="certifications"
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

          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-cyan-500" />
          </div>

          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Certifications & Credentials
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuously expanding my expertise through
            industry-recognized certifications and
            professional development.
          </p>

        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.name}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
            >

              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">

                <div className="text-4xl">
                  {cert.logo}
                </div>

                {cert.verified && (

                  <div className="flex items-center gap-1 text-green-500">

                    <CheckCircle2 className="w-4 h-4" />

                    <span className="text-xs font-medium">
                      Verified
                    </span>

                  </div>

                )}

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {cert.name}
              </h3>

              {/* Issuer */}
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">

                <span>{cert.issuer}</span>

                <span>{cert.date}</span>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">

                {cert.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-2 py-1 bg-cyan-50 text-cyan-600 rounded text-xs border border-cyan-200 font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              {/* Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >

                View Credential

                <ExternalLink className="w-4 h-4" />

              </a>

            </motion.div>

          ))}

        </div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"
        >

          <div className="text-center">

            <h3 className="text-3xl font-bold mb-2 text-gray-900">
              Continuous Learning
            </h3>

            <p className="text-gray-600 mb-6">
              Currently pursuing advanced Machine Learning
              and Data Engineering specialization.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <div className="px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm">

                <div className="text-2xl font-bold text-cyan-500 mb-1">
                  200+
                </div>

                <div className="text-sm text-gray-600">
                  Hours of Training
                </div>

              </div>

              <div className="px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm">

                <div className="text-2xl font-bold text-blue-500 mb-1">
                  9+
                </div>

                <div className="text-sm text-gray-600">
                  Course Modules Completed
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Certifications