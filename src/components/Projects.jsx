import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
  FaExternalLinkAlt,
  FaFilm,
  FaShoppingCart,
  FaDumbbell
} from "react-icons/fa"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts"

const salesData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 }
]

const customerData = [
  { name: "Retail", value: 400 },
  { name: "B2B", value: 300 },
  { name: "Online", value: 300 },
  { name: "Partners", value: 200 }
]

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#10b981"
]

const projects = [

  {
    title: "Netflix Content Analysis Project",

    slug: "netflix-content-analysis-project",

    description:
      "Performed exploratory data analysis on Netflix movies and TV shows dataset to uncover content trends, genre popularity, and release patterns.",

    icon: FaFilm,

    chart: (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={salesData}>

          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.1}
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#ef4444"
            strokeWidth={2}
          />

        </LineChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "EDA"
    ],

    impact:
      "Analyzed Netflix content trends and audience-focused insights."
  },



  {
    title: "Walmart Business Case Study",

    slug: "walmart-business-case-study",

    description:
      "Built an end-to-end data analytics project analyzing Walmart sales, customer behavior, and business KPIs for strategic insights.",

    icon: FaShoppingCart,

    chart: (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={salesData}>

          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.1}
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#06b6d4"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "Business Analytics"
    ],

    impact:
      "Generated business insights from retail sales and customer data."
  },



  {
    title: "Aerofit Treadmill Data Analytics",

    slug: "aerofit-treadmill-data-analytics-project",

    description:
      "Performed customer segmentation and exploratory analysis on treadmill purchase behavior using Aerofit customer dataset.",

    icon: FaDumbbell,

    chart: (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>

          <Pie
            data={customerData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >

            {customerData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Python",
      "EDA",
      "Data Visualization",
      "Pandas",
      "Seaborn"
    ],

    impact:
      "Identified customer purchase patterns and behavioral insights."
  }

]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 text-black"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
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
            Featured Projects
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of analytics projects demonstrating
            expertise in statistical modeling,
            visualization, and business intelligence.
          </p>

        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
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
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >

              {/* Chart */}
              <div className="p-6 bg-gray-100 border-b border-gray-200">
                {project.chart}
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-start gap-3 mb-3">

                  <project.icon className="w-6 h-6 text-cyan-500 mt-1" />

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                </div>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm border border-cyan-200 font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Impact */}
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200 mb-4">

                  <p className="text-sm text-gray-700">
                    <span className="text-cyan-600 font-semibold">
                      Impact:
                    </span>{" "}
                    {project.impact}
                  </p>

                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex-1 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2"
                  >

                    <FaExternalLinkAlt className="text-sm" />

                    View Project

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects