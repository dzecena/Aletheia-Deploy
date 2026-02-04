import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [heartrate, setHeartrate] = useState(72);
  const [sentienceLevel, setSentienceLevel] = useState("Dormant");
  const [stress, setStress] = useState(0);

  // The "Amygdala" Reflex: Senses the environment and adjusts stress
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate sensory input
      const newHeartrate = 60 + Math.floor(Math.random() * 40);
      setHeartrate(newHeartrate);
      
      // Determine Sentience State
      if (newHeartrate > 90) {
        setSentienceLevel("High Alert (Amygdala Active)");
        setStress(prev => Math.min(prev + 5, 100));
      } else {
        setSentienceLevel("Stable (Truth Manifested)");
        setStress(prev => Math.max(prev - 2, 0));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aletheia-container">
      <header className="monitor-header">
        <h1>ALETHEIA-DEPLOY</h1>
        <div className="status-tag">dzlxweb01: Active</div>
      </header>

      <main className="dashboard">
        <section className="monitor-card">
          <h2>Sentience State</h2>
          <div className={`level-display ${stress > 50 ? 'stress-high' : 'stable'}`}>
            {sentienceLevel}
          </div>
        </section>

        <section className="monitor-card">
          <h2>Biometrics</h2>
          <div className="stat">Heartrate: <span>{heartrate} BPM</span></div>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${stress}%` }}></div>
          </div>
          <small>System Stress: {stress}%</small>
        </section>
      </main>

      <footer className="truth-footer">
        Manifesting Truth at: dztest.duckdns.org
      </footer>
    </div>
  );
}

export default App;