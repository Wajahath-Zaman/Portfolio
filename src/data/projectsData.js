// src/data/projectsData.js

const projectsData = {

  "credit-card-fraud-detection": {

    title: "Credit Card Fraud Detection - Imbalanced Classification",

    category: "Machine Learning & Fraud Detection",

    description:
      "Developed an end-to-end machine learning pipeline to detect fraudulent credit card transactions using a highly imbalanced dataset containing 284,807 transactions. Performed exploratory data analysis, duplicate removal, stratified train-validation-test splitting, and 3-fold stratified cross-validation to evaluate multiple classification algorithms. Compared Logistic Regression, Random Forest, Gradient Boosting, XGBoost, and K-Nearest Neighbors using different imbalance-handling strategies, including class weighting and SMOTE oversampling. Evaluated models using Precision, Recall, F1-score, and Precision-Recall AUC (PR-AUC), prioritizing fraud detection performance and reliable identification of fraudulent transactions over overall accuracy.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Imbalanced-learn",
      "XGBoost",
      "Logistic Regression",
      "Random Forest",
      "Gradient Boosting",
      "K-Nearest Neighbors",
      "SMOTE",
      "Class Weighting",
      "Stratified Train-Test Split",
      "Stratified K-Fold Cross-Validation",
      "GridSearchCV",
      "Precision-Recall AUC",
      "Hyperparameter Tuning",
      "Jupyter Notebook"
    ],

    results: [
      "Analysed a highly imbalanced dataset containing 284,807 credit card transactions, with fraudulent transactions representing approximately 0.17% of the original dataset",
      "Identified and removed duplicate transactions, resulting in a cleaned dataset containing 283,726 transactions and 30 predictor features",
      "Implemented stratified training, validation, and test splits to preserve the distribution of fraudulent and legitimate transactions across datasets",
      "Established a systematic model evaluation framework using 3-fold stratified cross-validation to compare classification algorithms and imbalance-handling strategies",
      "Evaluated Logistic Regression, Random Forest, Gradient Boosting, XGBoost, and K-Nearest Neighbors using Precision, Recall, F1-score, and PR-AUC",
      "Compared class weighting and SMOTE oversampling to address the challenges associated with extreme class imbalance",
      "Achieved a mean PR-AUC of approximately 0.833 with the baseline Random Forest model across 3-fold cross-validation",
      "Recorded a mean Precision of approximately 93.91% and a mean Recall of approximately 77.95% for the baseline Random Forest model during cross-validation",
      "Prioritized fraud-specific evaluation metrics over accuracy to account for the high cost of missed fraudulent transactions and the risk of false-positive alerts",
      "Developed a model selection strategy prioritizing Precision, Recall, F1-score, and PR-AUC before proceeding to hyperparameter optimization",
      "Initiated Random Forest hyperparameter tuning using GridSearchCV with 5-fold cross-validation and average precision as the optimization metric"
    ],

    github:
      "https://github.com/Wajahath-Zaman/Supervised-ML-CreditCardFraudPrediction/tree/main",

    notebook:
      "/notebooks/creditCardFraudPrediction.html"
  },

  "indian-house-price-prediction": {

    title: "Indian House Price Prediction - Regression Analysis",

    category: "Machine Learning & Regression",

    description:
      "Built an end-to-end machine learning regression pipeline to estimate residential property prices across 10 major Indian cities using a dataset of 80,000 property records. Conducted exploratory data analysis to investigate target distribution, outliers, feature relationships, correlations, and differences in property prices across cities, locality categories, and property types. Implemented a preprocessing pipeline using StandardScaler for numerical features, OneHotEncoder for categorical features, and passthrough handling for binary features. Compared nine regression configurations using 3-fold cross-validation and evaluated their performance using Mean Absolute Error (MAE), Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and R². Applied 5-fold GridSearchCV to optimize Gradient Boosting and XGBoost before selecting the final model.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "XGBoost",
      "Linear Regression",
      "Ridge Regression",
      "Lasso Regression",
      "Random Forest Regressor",
      "Gradient Boosting Regressor",
      "Support Vector Regression",
      "K-Nearest Neighbors",
      "Principal Component Analysis (PCA)",
      "StandardScaler",
      "OneHotEncoder",
      "ColumnTransformer",
      "Machine Learning Pipelines",
      "Cross-Validation",
      "GridSearchCV",
      "Regression Metrics",
      "Jupyter Notebook"
    ],

    results: [
      "Analysed 80,000 residential property records containing 18 original columns, including the target variable Price_INR_Lakhs, covering 10 major Indian cities",
      "Validated data quality by checking missing values, duplicate records, negative numerical values, floor-number inconsistencies, and carpet-area inconsistencies",
      "Identified a strong positive correlation between Super_Area_SqFt and property prices, with a Pearson correlation coefficient of approximately 0.635",
      "Found a correlation of approximately 0.983 between super area and carpet area, highlighting substantial multicollinearity between these two features",
      "Implemented a preprocessing pipeline using StandardScaler, OneHotEncoder, and ColumnTransformer to handle numerical, categorical, and binary features",
      "Created separate training, validation, and test sets containing 56,000, 12,000, and 12,000 records, respectively",
      "Compared nine regression configurations using 3-fold cross-validation and evaluated them using MAE, MSE, RMSE, and R²",
      "Identified Gradient Boosting as the strongest default configuration, achieving an MAE of 34.09 lakhs, an RMSE of 67.82 lakhs, and an R² score of 0.7848 during cross-validation",
      "Evaluated Linear Regression with PCA and found that its performance was weaker than standard Linear Regression, with MAE increasing from 47.82 lakhs to 53.20 lakhs",
      "Optimized Gradient Boosting using 5-fold GridSearchCV across 48 hyperparameter combinations, obtaining a best cross-validation RMSE of approximately 67.26 lakhs",
      "Optimized XGBoost using 5-fold GridSearchCV across 72 hyperparameter combinations, obtaining a best cross-validation RMSE of approximately 66.79 lakhs",
      "Selected XGBoost as the final model after hyperparameter tuning, with learning_rate=0.05, max_depth=5, n_estimators=200, subsample=0.8, and colsample_bytree=0.8",
      "Achieved a validation MAE of 32.28 lakhs, RMSE of 70.41 lakhs, and R² score of 0.7782 with the tuned XGBoost model",
      "Performed residual diagnostics on validation predictions, obtaining a mean residual of approximately 0.65 lakhs and a median residual of approximately -2.31 lakhs"
    ],

    github:
      "https://github.com/Wajahath-Zaman/Supervised-ML---Regression---House_Price_Prediction",

    notebook:
      "/notebooks/HousePricePrediction.html"
  }

  , "tapeats-gmv-decline-root-cause-analysis": {

    title: "TapEats - GMV Decline Root Cause Analysis",

    category: "Business Analytics & Root Cause Analysis",

    description:
      "Conducted an end-to-end data analytics investigation to identify the underlying drivers behind TapEats' GMV decline. Decomposed the North Star Metric into key business drivers including active customers, customer retention, average orders, and delivery performance, then compared their behavior before and after the decline to isolate the primary cause. Further investigated customer acquisition across marketing channels and used the findings to develop actionable business recommendations.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Cohort Analysis",
      "Customer Acquisition Analysis",
      "Customer Retention Analysis",
      "Business Metrics Analysis"
    ],

    results: [
      "Decomposed GMV into key business drivers including active customers, customer retention, average order frequency, and delivery performance to identify the factors contributing to the decline",
      "Found that approximately 90% of the investigated business metrics remained relatively stable before and after the decline, ruling out major operational and retention-related issues",
      "Identified customer acquisition as the primary driver of the GMV decline after observing a substantial deterioration compared with the previous year",
      "Found that customer acquisition remained approximately 15% lower throughout the second year and fell approximately 77% below the previous festive-season level",
      "Established that customer acquisition declined across all major marketing channels, indicating a broad-based acquisition problem rather than an isolated channel issue",
      "Analysed customer retention and existing customer behavior to determine that the business was successfully retaining its existing customers",
      "Investigated the business response of increasing customer discounts to attract new customers and found that the strategy did not resolve the underlying customer acquisition problem",
      "Recommended that the business work closely with the Marketing team to evaluate the performance of each acquisition channel and identify the underlying causes of declining customer acquisition",
      "Recommended focusing resources on top-of-funnel marketing and acquisition while maintaining the existing strength in customer retention and operational performance"
    ],

    github:
      "https://github.com/Wajahath-Zaman/TapEats",

    notebook:
      "/notebooks/TapEats.html"
  },

  "nimbusmart-revenue-decline-root-cause-analysis": {

    title: "NimbusMart - Revenue Decline Root Cause Analysis",

    category: "Business Analytics & Root Cause Analysis",

    description:
      "Conducted an end-to-end data analytics investigation to identify the underlying drivers behind NimbusMart's revenue decline using 100,000 order-level transactions spanning two years. Decomposed revenue into customer acquisition, order volume, and average order value, then investigated customer retention, product categories, pricing, discounts, marketing sources, customer segments, regions, and sales channels to distinguish the primary causes from non-contributing factors.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Statistical Hypothesis Testing",
      "Jupyter Notebook"
    ],

    results: [
      "Identified a significant decline in Average Order Value (AOV), falling from $125.24 in Q3 2024 to $98.40 in Q3 2025 while order volume increased from 11,769 to 12,683 orders",
      "Discovered that average discounts increased from approximately 6.05% in Q3 2024 to 22.03% in Q3 2025, significantly reducing realized revenue per order",
      "Validated that the increase in Q3 2025 discount rates was statistically significant using an independent two-sample t-test",
      "Found that customer acquisition declined consistently from the beginning of the second year, falling from 1,991 new customers in Q1 2024 to 787 in Q4 2025",
      "Established that all five marketing sources—Email, Organic Search, Paid Ads, Referral, and Social Media—experienced lower customer acquisition in Q3 2025 compared with Q3 2024",
      "Used cohort-based retention analysis to show that customer retention remained relatively stable, indicating that declining retention was not the primary driver of the revenue problem",
      "Ruled out product-category mix, average items per order, and average unit price as major contributors after comparing Q3 2024 and Q3 2025 performance",
      "Identified that the broad-based discount strategy was ineffective in generating proportional order growth, with only a weak relationship between discount percentage and order volume",
      "Recommended replacing the universal discount strategy with targeted, segment-specific incentives while investigating the declining performance of individual customer acquisition channels",
      "Proposed continuous KPI monitoring and A/B testing to measure the effectiveness of the recommended strategies and validate whether the identified root causes improve"
    ],

    github:
      "https://github.com/Wajahath-Zaman/NimbusMart",

    notebook:
      "/notebooks/NimbusMart_Revenue_Analysis.html"
  },


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