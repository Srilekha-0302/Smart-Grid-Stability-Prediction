import React, { useState, useRef } from "react";
import "./App.css";
import FeatureCard from "./components/FeatureCard";

function App() {
  const [stats, setStats] = useState({
    total: 0,
    stable: 0,
    unstable: 0,
  });

  const [log, setLog] = useState([]);
  const [liveValues, setLiveValues] = useState([]);

  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);

  const predict = async () => {
    const order = [
      "t1",
      "t2",
      "t3",
      "t4",
      "p1",
      "p2",
      "p3",
      "p4",
      "g1",
      "g2",
      "g3",
      "g4",
    ];

    const features = order.map((k) => Number(values[k]));

    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ features }),
    });

    const data = await res.json();
    setResult(data.prediction);
  };

  const intervalRef = useRef(null);

  const startSimulation = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(async () => {
      const res = await fetch("http://127.0.0.1:5000/simulate");
      const data = await res.json();

      setResult(data.prediction);
      setLiveValues(data.features);

      setStats((prev) => ({
        total: prev.total + 1,
        stable: prev.stable + (data.prediction === 0 ? 1 : 0),
        unstable: prev.unstable + (data.prediction === 1 ? 1 : 0),
      }));

      setLog((prev) => {
        const newLog = [
          `${new Date().toLocaleTimeString()} → ${
            data.prediction === 0 ? "STABLE" : "UNSTABLE"
          }`,
          ...prev,
        ];
        return newLog.slice(0, 5);
      });
    }, 2000); // 🔥 use 2 sec for demo (not 10)
  };

  return (
    <div className="app">
      <header>
        <h1>⚡ Smart Grid Predictor</h1>
        <span className="tag">SVM Stability Analysis</span>
      </header>

      <section className="infoBlock">
        <h2>Smart Grid Stability Monitoring</h2>
        <p>
          A smart grid is an advanced electrical network that monitors and
          manages power generation, transmission, and consumption in real time
          to maintain stability and reliability.
        </p>

        <div className="infoGrid">
          <div>
            <h3>Reaction Time (τ)</h3>
            <p>
              Response speed of generators and consumers to grid disturbances.
            </p>
          </div>

          <div>
            <h3>Power (P)</h3>
            <p>Nominal power produced or consumed by grid participants.</p>
          </div>

          <div>
            <h3>Gain (g)</h3>
            <p>Control strength used to regulate generator output.</p>
          </div>

          <div>
            <h3>Stability</h3>
            <p>Ability of the grid to return to normal after disturbances.</p>
          </div>
        </div>

        <div className="modelInfo">
          <strong>Model Accuracy: 97.8%</strong>
          <p>SVM‑based stability prediction using generator dynamics.</p>
        </div>
      </section>

      <div className="cards">
        <FeatureCard
          title="Reaction Time (τ)"
          subtitle="Producer/consumer reaction times"
          fields={["t1", "t2", "t3", "t4"]}
          placeholders={{
            t1: "0.5 - 10",
            t2: "0.5 - 10",
            t3: "0.5 - 10",
            t4: "0.5 - 10",
          }}
          values={values}
          setValues={setValues}
        />

        <FeatureCard
          title="Power (P)"
          subtitle="Nominal power consumed/produced"
          fields={["p1", "p2", "p3", "p4"]}
          placeholders={{
            p1: "1.5 - 6",
            p2: "-2 - -0.5",
            p3: "-2 - -0.5",
            p4: "-2 - -0.5",
          }}
          values={values}
          setValues={setValues}
        />

        <FeatureCard
          title="Gain (g)"
          subtitle="Control Gain"
          fields={["g1", "g2", "g3", "g4"]}
          placeholders={{
            g1: "0.05 - 1",
            g2: "0.05 - 1",
            g3: "0.05 - 1",
            g4: "0.05 - 1",
          }}
          values={values}
          setValues={setValues}
        />
      </div>

      <button className="predict" onClick={predict}>
        Predict Stability
      </button>

      <button
        className="predict"
        onClick={() => (window.location.href = "/simulation")}
      >
        Start Real-Time Simulation
      </button>

      {result !== null && (
        <div className={`result ${result === 0 ? "stable" : "unstable"}`}>
          {result === 0 ? "GRID STABLE" : "GRID UNSTABLE"}
        </div>
      )}

      {liveValues.length > 0 && (
        <>
          <div className="about">
            <h4>🔴 LIVE DATA STREAM (Simulated SCADA Feed)</h4>
          </div>

          <div className="about">
            <h4>LIVE GRID DATA</h4>
            ...
          </div>
        </>
      )}

      <div className="about">
        <h4>ABOUT THE MODEL</h4>
        <p>
          This system uses a Support Vector Machine (SVM) classifier to predict
          electrical grid stability based on 12 input features: reaction times
          (τ), power values (P), and price elasticity coefficients (γ) for 4
          grid participants. The model uses StandardScaler preprocessing for
          feature normalization.
        </p>
      </div>
    </div>
  );
}

export default App;
