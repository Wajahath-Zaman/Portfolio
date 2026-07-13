// src/data/projectsData.js

const projectsData = {
  
  "techpulse-tech-news-analytics-platform": {

    title: "TechPulse - Tech News Analytics Platform",

    category: "End-to-End Data Engineering & Analytics",

    description:
      "Built an end-to-end automated tech news analytics platform that continuously collects articles from multiple technology publishers using custom Python web scrapers, processes them through an ETL pipeline, stores the data in a normalized MySQL database, and performs SQL and Python-based analytics to uncover trends and insights from technology news.",

    technologies: [
      "Python",
      "Requests",
      "BeautifulSoup",
      "RSS Feeds",
      "MySQL",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "GitHub Actions",
      "Git",
      "Tableau"
    ],

    results: [
      "Developed automated ETL pipelines to collect and process technology news from 4 major publishers",
      "Designed and implemented a normalized MySQL database with fact, dimension, and bridge tables for scalable analytics",
      "Performed 30+ SQL business analyses and 12+ Python exploratory analyses to identify publishing trends, technology mentions, and content patterns",
      "Automated data collection every 6 hours using GitHub Actions for continuous dataset growth",
      "Established a scalable foundation for future NLP applications including sentiment analysis, topic modeling, and trend forecasting"
    ],

    github:
      "https://github.com/Wajahath-Zaman/TechPulse",

    notebook:
      "/notebooks/TechPulse_News_analytics.html"
  },

  "end-to-end-ecommerce-data-analytics-project": {

    title: "End-to-End E-Commerce Data Analytics Project",

    category: "End-to-End Data Analytics",

    description:
      "Built a complete end-to-end data analytics solution using a Brazilian e-commerce dataset, covering business understanding, Excel data validation, SQL analysis, Python exploratory data analysis, statistical testing, and Tableau dashboard development to generate actionable business insights.",

    technologies: [
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

    results: [
      "Analyzed 89,301+ e-commerce orders across 5 relational tables",
      "Answered 30+ business questions using advanced SQL, CTEs, and window functions",
      "Performed 20+ exploratory data analyses and statistical tests using Python",
      "Built 3 interactive Tableau dashboards with 15+ business KPIs and visualizations",
      "Identified 10+ actionable business insights and recommendations to improve sales, logistics, and customer experience"
    ],

    github:
      "https://github.com/Wajahath-Zaman/END-TO-END-ECommerce-Data-Analytics-Project",

    notebook:
      "/notebooks/E_Commerce_DA_Project.html"
  },

  "netflix-content-analysis-project": {

    title: "Netflix Content Analysis Project",

    category: "EDA • Entertainment Analytics",

    description:
      "Performed exploratory data analysis on Netflix movies and TV shows dataset to uncover content trends, genre popularity, release patterns, and audience-focused insights.",

    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "EDA"
    ],

    results: [
      "Analyzed Netflix movie and TV show trends",
      "Visualized genre and content distribution",
      "Performed data cleaning and preprocessing",
      "Generated insights from release year trends"
    ],

    github:
      "https://github.com/Wajahath-Zaman/Netflix-Content-Analysis-Project",

    notebook:
      "/notebooks/netflix-content-analysis-project.html"
  },



  "walmart-business-case-study": {

    title: "Walmart Business Case Study",

    category: "Business Analytics • Retail Analytics",

    description:
      "Built an end-to-end Walmart sales analytics project analyzing customer behavior, KPIs, sales trends, and business performance for strategic insights.",

    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "Power BI",
      "Business Analytics"
    ],

    results: [
      "Performed KPI and sales trend analysis",
      "Generated business-focused retail insights",
      "Analyzed customer purchasing behavior",
      "Built end-to-end business analytics workflow"
    ],

    github:
      "https://github.com/Wajahath-Zaman/End-to-End-Walmart-Data-Analysis-Project-Business-Case-Study",

    notebook:
      "/notebooks/walmart-business-case-study.html"
  },



  "aerofit-treadmill-data-analytics-project": {

    title: "Aerofit Treadmill Data Analytics",

    category: "Customer Analytics • EDA",

    description:
      "Performed exploratory data analysis and customer segmentation on treadmill purchase behavior using Aerofit customer dataset.",

    technologies: [
      "Python",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "EDA"
    ],

    results: [
      "Analyzed treadmill customer purchase patterns",
      "Performed customer segmentation analysis",
      "Visualized behavioral and demographic trends",
      "Generated business insights from customer data"
    ],

    github:
      "https://github.com/Wajahath-Zaman/Aerofit-Treadmill-Data-Analytics-Project",

    notebook:
      "/notebooks/aerofit-treadmill-data-analytics-project.html"
  },
  "yulu-bike-rental-demand-analysis": {

    title: "Yulu Bike Rental Demand Analysis",

    category: "Business Analytics • Hypothesis Testing",

    description:
      "Performed exploratory data analysis and statistical hypothesis testing on Yulu bike rental demand data to identify seasonal, weather, and behavioral factors affecting rentals.",

    technologies: [
      "Python",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "SciPy",
      "EDA",
      "Hypothesis Testing"
    ],

    results: [
      "Identified strong seasonal trends influencing bike rentals",
      "Analyzed impact of weather and humidity on customer demand",
      "Detected peak commuting hours through hourly usage analysis",
      "Performed T-Test, Kruskal-Wallis, and Chi-Square hypothesis testing",
      "Generated operational and marketing recommendations to improve demand"
    ],

    github:
      "https://github.com/Wajahath-Zaman/Yulu-Bike-Rental-Demand-Analysis",

    notebook:
      "/notebooks/yulu-bike-rental-demand-analysis.html"
  }

}

export default projectsData