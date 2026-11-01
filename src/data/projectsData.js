// src/data/projectsData.js

const projectsData = {

  "cervical-cancer-image-classification": {

    title: "Deep Learning - Computer Vision - Cervical Cancer Image Classification",

    category: "Deep Learning, Computer Vision & MLOps",

    description:
      "Developed an end-to-end deep learning application to classify cervical cytology images into five diagnostic categories: ASCUS, HSIL, LSIL, NILM, and SCC. Prepared a cleaned dataset containing 5,566 images and implemented a stratified 70:15:15 training, validation, and testing split. Performed dataset inspection, class distribution analysis, image preprocessing, and implemented a custom ResizeWithPadding transformation to preserve image aspect ratios before resizing images to 512 × 512. Conducted three custom CNN experiments, investigating baseline performance, class weighting, and higher image resolution. Following the experimental results, transitioned to transfer learning using ImageNet-pretrained ResNet50. Implemented a two-stage training strategy involving a frozen backbone followed by fine-tuning of the final residual block and classification head using discriminative learning rates. Evaluated the final model using accuracy, precision, recall, macro F1-score, weighted F1-score, and class-wise classification metrics. Integrated MLflow with DagsHub for experiment tracking and model artifact management. Developed a FastAPI inference backend, implemented automated API testing using Pytest, containerized the frontend and backend independently using Docker, and built a Streamlit interface for image classification. Established a continuous integration pipeline using GitHub Actions and deployed both services independently on Render.",

    technologies: [
      "Python",
      "PyTorch",
      "Torchvision",
      "ResNet50",
      "Transfer Learning",
      "Convolutional Neural Networks (CNN)",
      "Computer Vision",
      "Image Classification",
      "Image Preprocessing",
      "Pillow",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "ImageNet Normalization",
      "ResizeWithPadding",
      "Stratified Train-Test Split",
      "Model Evaluation",
      "Accuracy",
      "Precision",
      "Recall",
      "Macro F1-score",
      "Weighted F1-score",
      "MLflow",
      "DagsHub",
      "Model Artifact Management",
      "FastAPI",
      "Uvicorn",
      "Streamlit",
      "HTTP Requests",
      "Pytest",
      "Automated Testing",
      "Docker",
      "Docker Networking",
      "GitHub Actions",
      "Continuous Integration",
      "CI/CD",
      "Render",
      "Google Colab",
      "Jupyter Notebook"
    ],

    results: [

      "Prepared a cleaned cervical cytology image dataset containing 5,566 images distributed across five classification categories: ASCUS, HSIL, LSIL, NILM, and SCC",

      "Performed original dataset inspection and identified class counts of 782 ASCUS, 1,583 HSIL, 1,339 LSIL, 2,101 NILM, and 462 SCC images",

      "Implemented a stratified dataset split containing 3,896 training images (70%), 835 validation images (15%), and 835 testing images (15%)",

      "Developed a custom ResizeWithPadding preprocessing transformation to preserve image aspect ratios while resizing images to 512 × 512 pixels",

      "Established a preprocessing pipeline involving RGB conversion, aspect-ratio-preserving resizing, padding, PyTorch tensor conversion, and ImageNet normalization",

      "Conducted three custom CNN experiments to investigate classification performance using a baseline architecture, class weighting, and increased image resolution",

      "Achieved 40.12% validation accuracy and 25.74% macro F1-score with the baseline custom CNN",

      "Evaluated class weighting as an imbalance-handling strategy, obtaining 25.99% validation accuracy and 8.25% macro F1-score, with the model exhibiting prediction collapse predominantly towards HSIL",

      "Improved custom CNN performance through increased input resolution of 1024 × 1024, achieving 55.69% validation accuracy and 45.59% macro F1-score",

      "Transitioned from custom CNN architectures to ImageNet-pretrained ResNet50 transfer learning based on the outcomes of the initial experiments",

      "Implemented a two-stage transfer learning strategy, initially freezing the pretrained backbone and training the classification head, followed by fine-tuning the final residual block (layer4) and classification head",

      "Achieved 65.27% validation accuracy during the frozen-backbone stage, with a best validation loss of 0.8852",

      "Improved performance through fine-tuning, achieving 82.40% validation accuracy and a best validation loss of 0.5178",

      "Evaluated the final ResNet50 model on a held-out test dataset containing 835 images, achieving 79.52% test accuracy",

      "Achieved a macro precision of 77.23%, macro recall of 75.20%, macro F1-score of 75.83%, and weighted F1-score of 78.97% on the test dataset",

      "Evaluated class-wise performance, achieving F1-scores of 38.86% for ASCUS, 83.26% for HSIL, 81.08% for LSIL, 90.51% for SCC, and 85.42% for NILM",

      "Identified ASCUS as the weakest-performing category, with a recall of 35.42%, highlighting the need for further investigation into class-specific model performance",

      "Integrated MLflow with DagsHub to track model configurations, hyperparameters, training history, validation metrics, evaluation results, and model checkpoints across separate experimental runs",

      "Exported the selected ResNet50 model as a reusable artifact containing the model state dictionary, class information, input dimensions, and normalization parameters",

      "Developed a FastAPI inference backend with root, health-check, and image prediction endpoints, including image validation, preprocessing, model inference, and JSON prediction responses",

      "Implemented automated API testing using Pytest, covering the root endpoint, health endpoint, image prediction endpoint, and invalid file format handling, achieving 4/4 passing tests",

      "Containerized the FastAPI backend and Streamlit frontend independently using Docker and established a custom Docker bridge network for local inter-container communication",

      "Developed a Streamlit frontend supporting image uploads, image previews, prediction requests, classification results, confidence scores, loading indicators, and error handling",

      "Integrated GitHub Actions to automate dependency installation and execution of the Pytest suite whenever code is pushed to the main branch or a pull request targets it",

      "Successfully deployed the FastAPI backend and Streamlit frontend as independent Docker-based services on Render, with frontend-backend communication established through HTTP requests",

      "Demonstrated an end-to-end deep learning and MLOps workflow covering dataset preparation, model experimentation, transfer learning, experiment tracking, artifact management, API development, automated testing, containerization, continuous integration, and cloud deployment",

      "Documented important limitations, including low ASCUS recall, the absence of verified patient-level identifiers, unverified external generalization, uncalibrated confidence scores, and the absence of automated production monitoring and retraining"
    ],

    github:
      "https://github.com/Wajahath-Zaman/ClevicalCancerImageClassification-_DL-Project",

    frontend:
      "https://clevicalcancerimageclassification-1dq9.onrender.com",

    backend:
      "https://clevicalcancerimageclassification-dl.onrender.com",

    notebook:
      "/notebooks/Cancer_Image_Classification_DL.html"

  },

  "customer-segmentation": {


    title: "Customer Segmentation - RFM Analysis & K-Means Clustering",

    category: "Machine Learning & Customer Analytics",

    description:
      "Developed an end-to-end unsupervised machine learning pipeline to segment retail customers based on purchasing behavior using the Online Retail II dataset. Performed exploratory data analysis, data quality validation, and data cleaning, addressing missing customer identifiers, invalid invoice formats, non-standard stock codes, and zero-priced transactions. Engineered customer-level Recency, Frequency, and Monetary (RFM) features by aggregating transaction data and calculating the time since each customer's most recent purchase. Applied StandardScaler to normalize the RFM features and used the Elbow Method and Silhouette Score to determine the optimal number of clusters. Implemented K-Means clustering with four clusters for regular customers and separately identified high-value outliers using the Interquartile Range (IQR) method. Developed business-oriented customer segments and visualizations to support customer retention, re-engagement, nurturing, loyalty rewards, and targeted upselling strategies.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "K-Means Clustering",
      "Unsupervised Learning",
      "Customer Segmentation",
      "RFM Analysis",
      "Feature Engineering",
      "StandardScaler",
      "Elbow Method",
      "Silhouette Score",
      "Outlier Detection",
      "Interquartile Range (IQR)",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Customer Analytics",
      "Jupyter Notebook"
    ],

    results: [
      "Analysed the Online Retail II dataset containing 525,461 transaction records across eight columns",
      "Performed data cleaning by validating invoice and stock code formats, removing transactions without customer identifiers, and excluding zero-priced transactions",
      "Retained 406,309 transaction records after the implemented cleaning steps, representing approximately 77% of the original dataset",
      "Engineered customer-level RFM features consisting of MonetaryValue, Frequency, and RecencyValue for 4,285 unique customers",
      "Applied StandardScaler to normalize RFM features before distance-based clustering",
      "Evaluated candidate cluster counts using the Elbow Method and Silhouette Score, selecting four clusters for the primary K-Means model",
      "Segmented regular customers into four groups: Retain, Re-Engage, Nurture, and Reward",
      "Identified 423 monetary outliers and 279 frequency outliers using the IQR method, with 226 customers appearing in both groups",
      "Developed a separate outlier classification strategy to preserve valuable customers rather than excluding them from the final analysis",
      "Classified outlier customers into three additional groups: Pamper, Upsell, and Delight",
      "Created visualizations including cluster comparison plots, three-dimensional scatter plots, violin plots, and customer distribution charts to interpret purchasing behavior",
      "Translated customer clusters into actionable business strategies covering loyalty programs, personalized offers, customer reactivation, and upselling opportunities"
    ],

    github:
      "https://github.com/Wajahath-Zaman/ML-CustomerSegmentationUsingClustering",

    notebook:
      "/notebooks/customerSegmentation.html"


  },

  "french-bakery-time-series-forecasting": {

    title: "Time Series Forecasting - French Bakery Daily Sales Prediction",

    category: "Machine Learning & Time Series Forecasting",

    description:
      "Developed an end-to-end time series forecasting pipeline to predict daily product sales using a French bakery sales dataset containing 57,046 transaction records across 148 unique bakery products. Performed exploratory time series analysis, examined historical sales patterns, identified product-level demand variations, and investigated weekly seasonality. Selected SEIGLE as the primary forecasting target and implemented multiple statistical forecasting approaches using the StatsForecast library. Established baseline models using Naive, Historic Average, Window Average, and Seasonal Naive forecasting methods. Subsequently implemented ARIMA and SARIMA models using automatic parameter selection and compared their performance against baseline approaches. Applied time-series cross-validation using eight rolling forecast windows with a seven-day prediction horizon. Extended the forecasting pipeline by incorporating exogenous variables, including unit price, and engineered temporal and Fourier features to capture weekly seasonal patterns. Implemented prediction intervals with 80% confidence levels and evaluated forecasting performance using MAE, MSE, RMSE, MAPE, SMAPE, MASE, and Scaled CRPS.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "StatsForecast",
      "UtilsForecast",
      "Time Series Analysis",
      "Time Series Forecasting",
      "Naive Forecasting",
      "Historic Average",
      "Window Average",
      "Seasonal Naive",
      "ARIMA",
      "SARIMA",
      "AutoARIMA",
      "Statistical Forecasting",
      "Exogenous Variables",
      "Feature Engineering",
      "Fourier Features",
      "Temporal Feature Engineering",
      "Weekly Seasonality",
      "Time Series Cross-Validation",
      "Rolling Window Validation",
      "Prediction Intervals",
      "Probabilistic Forecasting",
      "MAE",
      "MSE",
      "RMSE",
      "MAPE",
      "SMAPE",
      "MASE",
      "Scaled CRPS",
      "Jupyter Notebook"
    ],

    results: [
      "Analysed the French bakery daily sales dataset containing 57,046 records, three initial modelling columns, and 148 unique bakery products",

      "Converted date information into datetime format and structured the dataset according to the StatsForecast requirements: unique_id, ds, and y",

      "Identified SEIGLE as the primary forecasting target, containing 637 daily observations spanning January 2021 to September 2022",

      "Established four baseline forecasting approaches: Naive, Historic Average, Window Average, and Seasonal Naive, using a seven-day forecasting horizon",

      "Evaluated baseline models across multiple bakery products using a seven-day holdout validation strategy, achieving an overall average MAE of 6.076 for Naive, 5.253 for Historic Average, 5.016 for Window Average, and 4.724 for Seasonal Naive",

      "Implemented ARIMA and SARIMA using AutoARIMA, comparing their forecasting performance against the baseline models for SEIGLE",

      "Performed eight-window time series cross-validation with a seven-day forecast horizon, achieving MAE scores of 1.857 for Seasonal Naive, 2.491 for ARIMA, and 2.646 for SARIMA",

      "Investigated the impact of exogenous variables by incorporating historical unit prices into SARIMA forecasting, achieving a cross-validation MAE of 2.795",

      "Engineered temporal features including day, week, and month, alongside Fourier sine and cosine transformations to represent weekly seasonal patterns",

      "Implemented SARIMA with Fourier-based temporal features, achieving a cross-validation MAE of 2.057",

      "Implemented 80% prediction intervals to quantify forecasting uncertainty and visualize lower and upper prediction boundaries",

      "Conducted a comprehensive final evaluation comparing SARIMA with exogenous variables against Seasonal Naive using MAE, MSE, RMSE, MAPE, SMAPE, MASE, and Scaled CRPS",

      "Identified Seasonal Naive as the stronger overall forecasting approach, achieving an MAE of 1.857, RMSE of 2.699, MAPE of 0.416, and MASE of 0.736 across the final evaluation",

      "Demonstrated that incorporating additional model complexity and exogenous variables does not necessarily improve forecasting accuracy over well-established seasonal baseline models"
    ],

    github:
      "https://github.com/Wajahath-Zaman/Time-Series-ML-Project",

    notebook:
      "/notebooks/TimeSeriesForecasting.html"

  },


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