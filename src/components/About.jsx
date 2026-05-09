import { motion } from "framer-motion"

import {
  Code,
  Database,
  TrendingUp,
  Brain
} from "lucide-react"

const skills = [
  {
    icon: Database,
    title: "Data Management",
    description: "Expert in SQL, Python, and database optimization",
    color: "text-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Tableau, Power BI, and dashboard development",
    color: "text-blue-500"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Predictive modeling and statistical analysis",
    color: "text-purple-500"
  },
  {
    icon: Code,
    title: "Programming",
    description: "Python, SQL, and automation workflows",
    color: "text-pink-500"
  }
]

const tools = [
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "Excel",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "Git"
]

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 text-black"
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
            About Me
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate data analyst focused on transforming
            complex datasets into actionable insights that drive
            smarter business decisions and measurable growth.
          </p>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{
                y: -5
              }}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
            >

              <skill.icon
                className={`w-10 h-10 mb-4 ${skill.color}`}
              />

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {skill.title}
              </h3>

              <p className="text-gray-600">
                {skill.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">

            {tools.map((tool, index) => (

              <motion.span
                key={tool}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }}
                whileHover={{
                  scale: 1.08
                }}
                className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full border border-cyan-200 font-medium"
              >

                {tool}

              </motion.span>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About