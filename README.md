# ⚡ Smart Grid Stability Prediction System

## Overview
The **Smart Grid Stability Prediction System** is a machine learning–based application that predicts the stability of an electrical power grid using key dynamic parameters. It helps in identifying whether the grid is **stable or unstable** using data-driven techniques.

---
## Key Highlights
- Achieved ~97–98% prediction accuracy using SVM
- Built a real-time SCADA-like simulation system
- Integrated React frontend with Flask ML backend
- Supports live prediction monitoring and dashboard analytics

---
## Objectives
- Predict grid stability using ML models  
- Simulate real-time SCADA-like data input  
- Provide a simple and interactive dashboard  
- Reduce dependency on complex analytical calculations  

---

## Technologies Used
- **Frontend:** React.js  
- **Backend:** Flask (Python)  
- **Machine Learning:** Scikit-learn (SVM)  
- **Libraries:** NumPy, Pandas, Joblib  

---

## Features

### 🔹 Manual Prediction
- User inputs:
  - Reaction Time (τ)
  - Power (P)
  - Gain (g)
- Instant prediction of grid stability  

### 🔹 Real-Time Simulation
- Reads data from dataset (`visual.xlsx`)  
- Simulates live SCADA input  
- Predicts stability continuously  
- Displays:
  - Live data stream  
  - Stability result  
  - Running statistics  
  - Recent logs  

### 🔹 Interactive Dashboard
- Clean UI with structured inputs  
- Dynamic results display  
- Simulation visualization  

---

## Input Parameters
Total **12 features**:

- Reaction Time: t1, t2, t3, t4  
- Power: p1, p2, p3, p4  
- Gain: g1, g2, g3, g4  

---

## Machine Learning Model
- **Model:** Support Vector Machine (SVM)  
- **Preprocessing:** StandardScaler  
- **Accuracy:** ~97–98%  

---

## Workflow
1. Input data (manual / simulated)  
2. Data preprocessing (scaling)  
3. Model prediction  
4. Output result (Stable / Unstable)  
5. Display in dashboard  

---

## 📁 Project Structure
SMART GRID/
│
├── backend/
│ ├── app.py
│ ├── svm_model.pkl
│ ├── scaler.pkl
│ ├── visual.xlsx
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── Simulation.js
│ │ ├── components/
│ │ ├── App.css
│ │ ├── Simulation.css
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

* Integration with real SCADA systems
* Cloud deployment
* Deep learning models
* Graph-based visualization
* Alert system

---

## Conclusion

This project demonstrates how machine learning can be applied to smart grid systems for stability prediction. The real-time simulation enhances understanding and usability of the system.
ion
This project demonstrates how machine learning can be applied to smart grid systems for stability prediction. The real-time simulation enhances understanding and usability of the system.
