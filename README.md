# ⚡ Smart Grid Stability Prediction System

## Overview
Smart Grid Stability Prediction System is a machine learning and deep learning based web application developed to classify the stability of electrical power grids using operational grid parameters such as reaction time, nominal power, and control gain.

The system integrates machine learning models with a Flask backend and React frontend to provide real-time grid stability prediction through an interactive dashboard.

---

## Key Highlights
- Achieved highest prediction performance using Support Vector Machine (SVM)
- Implemented multiple ML/DL models including Decision Tree, Random Forest, XGBoost, and MLP
- Applied hyperparameter tuning and 5-fold cross-validation for model evaluation
- Integrated Flask backend with React frontend for real-time prediction
- Developed interactive dashboard for manual and simulated grid monitoring

---

## Technologies Used

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Flask (Python)

### Machine Learning & Deep Learning
- Scikit-learn
- NumPy
- Pandas
- Joblib

---

## Features

### Manual Stability Prediction
- User input for:
  - Reaction Time (τ)
  - Power (P)
  - Gain (g)
- Instant prediction of grid stability

### Real-Time Simulation
- Simulates continuous grid parameter input using dataset values
- Displays live prediction updates and monitoring statistics
- Tracks stable and unstable prediction states

### Interactive Dashboard
- Responsive user interface
- Dynamic prediction display
- Real-time monitoring visualization

---

## Input Parameters

The system uses 12 grid parameters:

- Reaction Time: t1, t2, t3, t4
- Power: p1, p2, p3, p4
- Gain: g1, g2, g3, g4

---

## Machine Learning Models
- Logistic Regression
- Decision Tree
- Random Forest
- Support Vector Machine (SVM)
- XGBoost
- Multilayer Perceptron (MLP)

---

## Workflow
1. Input grid parameters
2. Data preprocessing and scaling
3. Model prediction
4. Stability classification
5. Display prediction results on dashboard

---

## Project Structure

SMART_GRID/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   ├── scaler.pkl
│   ├── visual.xlsx
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── App.js
│   ├── Simulation.js
│
└── README.md

---

## ▶️ How to Run

### 🔹 Backend

```bash
cd backend
pip install flask flask-cors numpy pandas scikit-learn joblib openpyxl
python app.py
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

---

## Future Enhancements

* Cloud deployment
* Advanced deep learning architectures
* Real-world grid data integration
* Graph-based visualization
* Alert and monitoring system

---

## Conclusion

This project demonstrates how machine learning can be applied to smart grid systems for stability prediction. The real-time simulation enhances understanding and usability of the system.
ion
This project demonstrates how machine learning can be applied to smart grid systems for stability prediction. The real-time simulation enhances understanding and usability of the system.
