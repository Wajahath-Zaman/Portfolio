import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
  FaExternalLinkAlt,
  FaFilm,
  FaShoppingCart,
  FaDumbbell,
  FaBicycle,
  FaNewspaper,
  FaChartLine
} from "react-icons/fa"

import {
  BarChart,
  Bar,
  AreaChart,
  Area,
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

const seasonData = [
  { season: "Spring", rentals: 312498 },
  { season: "Summer", rentals: 588282 },
  { season: "Fall", rentals: 640662 },
  { season: "Winter", rentals: 544034 }
]

const articleTrendData = [
  { day: "Mon", articles: 42 },
  { day: "Tue", articles: 57 },
  { day: "Wed", articles: 51 },
  { day: "Thu", articles: 68 },
  { day: "Fri", articles: 73 },
  { day: "Sat", articles: 61 },
  { day: "Sun", articles: 79 },
];

const revenueTrendData = [
  { quarter: "Q1 2024", revenue: 1.21 },
  { quarter: "Q2 2024", revenue: 1.33 },
  { quarter: "Q3 2024", revenue: 1.47 },
  { quarter: "Q4 2024", revenue: 2.10 },
  { quarter: "Q1 2025", revenue: 1.45 },
  { quarter: "Q2 2025", revenue: 1.58 },
  { quarter: "Q3 2025", revenue: 1.25 },
  { quarter: "Q4 2025", revenue: 1.48 }
];


const projects = [

  {
    title: "NimbusMart - Revenue Decline Root Cause Analysis",

    slug: "nimbusmart-revenue-decline-root-cause-analysis",

    description:
      "Conducted an end-to-end business analytics investigation to identify the root causes behind NimbusMart's revenue decline using 100,000 order-level transactions across two years. Decomposed revenue into customer activity, order frequency, and average order value, then investigated customer acquisition, retention, discounts, product categories, regions, marketing sources, and other business drivers to distinguish the key contributors from non-contributing factors.",

    icon: FaChartLine,

    chart: (
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={revenueTrendData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

          <XAxis dataKey="quarter" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Statistical Hypothesis Testing",
      "Cohort Analysis",
      "Jupyter Notebook"
    ],

    impact:
      "Analysed 100,000 order-level transactions to identify the drivers behind NimbusMart's revenue decline. Established that declining customer acquisition and a significant increase in discounting were key contributors, while cohort analysis showed relatively stable customer retention. Statistical testing was used to validate the significance of the discount increase, leading to recommendations around acquisition-channel performance and a more targeted discount strategy."
  },

  {
    title: "TechPulse - Tech News Analytics Platform",

    slug: "techpulse-tech-news-analytics-platform",

    description:
      "Designed and developed an end-to-end tech news analytics platform that automates data collection from multiple technology news publishers using custom Python web scrapers, processes the data through an ETL pipeline, stores it in a normalized MySQL database, and performs SQL and Python-based analytics to uncover technology trends and publishing insights.",

    icon: FaNewspaper,

    chart: (
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={articleTrendData}>
          <defs>
            <linearGradient id="colorArticles" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="articles"
            stroke="#10b981"
            fill="url(#colorArticles)"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Python",
      "Requests",
      "BeautifulSoup",
      "RSS",
      "MySQL",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "GitHub Actions",
      "Jupyter Notebook"
    ],

    impact:
      "Built an automated ETL pipeline that aggregates technology news from four major publishers into a centralized MySQL database, enabling 30+ SQL analyses, 12+ Python visualizations, and establishing a scalable foundation for future NLP and trend analysis."
  },

  {
    title: "End-to-End E-Commerce Data Analytics Project",

    slug: "end-to-end-ecommerce-data-analytics-project",

    description:
      "Designed and executed a complete data analytics workflow on a Brazilian e-commerce dataset, covering business understanding, SQL analysis, Python exploratory data analysis, statistical testing, and Tableau dashboard development to generate actionable business insights.",

    icon: FaShoppingCart,

    chart: (
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={salesData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Excel",
      "MySQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Tableau",
      "Jupyter Notebook"
    ],

    impact:
      "Analyzed 89K+ e-commerce transactions across five relational tables, answering 30+ business questions through SQL, Python EDA, statistical analysis, and three interactive Tableau dashboards."
  },

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
  },
  {
    title: "Yulu Bike Rental Demand Analysis",

    slug: "yulu-bike-rental-demand-analysis",

    description:
      "Performed exploratory data analysis and hypothesis testing on Yulu bike rental data to identify seasonal, weather, and user behavior factors affecting demand.",

    icon: FaBicycle,

    chart: (


      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={seasonData}
          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
        >

          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

          <XAxis
            dataKey="season"
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip />

          <Bar
            dataKey="rentals"
            fill="#8E3B76"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    ),

    tech: [
      "Python",
      "EDA",
      "Hypothesis Testing",
      "Pandas",
      "Seaborn",
      "SciPy",
      "Matplotlib"
    ],

    impact:
      "Identified weather, seasonal, humidity, and commuting patterns affecting bike rental demand and provided business recommendations to improve user growth by 15%."
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