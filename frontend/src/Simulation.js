import React, { useState, useRef } from "react";
import "./Simulation.css";

function Simulation() {
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    stable: 0,
    unstable: 0,
  });
  const [log, setLog] = useState([]);
  const [liveValues, setLiveValues] = useState([]);

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
        return newLog.slice(0, 10);
      });
    }, 2000);
  };

  const stopSimulation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="sim-container">
      <div className="sim-title">⚡ Real-Time Grid Simulation</div>

      <div className="sim-buttons">
        <button onClick={startSimulation}>▶ Start</button>
        <button onClick={stopSimulation}>⏹ Stop</button>
      </div>

      <div className="sim-grid">
        {/* LEFT: LOG */}
        <div className="sim-log">
          <h3>📜 Live Log</h3>
          {log.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>

        {/* RIGHT: MAIN */}
        <div className="sim-main">
          {/* RESULT */}
          {result !== null && (
            <div className={`sim-result ${result === 1 ? "alert" : "normal"}`}>
              {result === 0 ? "GRID STABLE" : "GRID UNSTABLE"}
            </div>
          )}

          {/* LIVE DATA */}
          {liveValues.length > 0 && (
            <div className="sim-data">
              <h3>🔴 Live Grid Data</h3>
              <div className="data-grid">
                <div>
                  <strong>t1</strong>
                  <span>{liveValues[0]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>t2</strong>
                  <span>{liveValues[1]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>t3</strong>
                  <span>{liveValues[2]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>t4</strong>
                  <span>{liveValues[3]?.toFixed(2)}</span>
                </div>

                <div>
                  <strong>p1</strong>
                  <span>{liveValues[4]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>p2</strong>
                  <span>{liveValues[5]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>p3</strong>
                  <span>{liveValues[6]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>p4</strong>
                  <span>{liveValues[7]?.toFixed(2)}</span>
                </div>

                <div>
                  <strong>g1</strong>
                  <span>{liveValues[8]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>g2</strong>
                  <span>{liveValues[9]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>g3</strong>
                  <span>{liveValues[10]?.toFixed(2)}</span>
                </div>
                <div>
                  <strong>g4</strong>
                  <span>{liveValues[11]?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* STATS */}
          <div className="sim-stats">
            <div className="stat-card">
              <h4>Total</h4>
              <p>{stats.total}</p>
            </div>

            <div className="stat-card">
              <h4>Stable</h4>
              <p>{stats.stable}</p>
            </div>

            <div className="stat-card">
              <h4>Unstable</h4>
              <p>{stats.unstable}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulation;
