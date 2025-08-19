import { useState } from "react";
import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [average, setAverage] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + average + bad;
  const goodPercentage = total > 0 ? ((good / total) * 100).toFixed(1) : 0;
  const avgPercentage = total > 0 ? ((average / total) * 100).toFixed(1) : 0;
  const badPercentage = total > 0 ? ((bad / total) * 100).toFixed(1) : 0;

  const resetFeedback = () => {
    setGood(0);
    setAverage(0);
    setBad(0);
  };

  return (
    <div className="app-container">
      <h1>🌟 Feedback Collector 🌟</h1>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={() => setGood(good + 1)} className="good-btn">👍 Good</button>
        <button onClick={() => setAverage(average + 1)} className="average-btn">😐 Average</button>
        <button onClick={() => setBad(bad + 1)} className="bad-btn">👎 Bad</button>
      </div>

      {/* Feedback Results */}
      <div className="results-card">
        <h2>📊 Results</h2>
        <p>Good: {good}</p>
        <p>Average: {average}</p>
        <p>Bad: {bad}</p>
        <hr style={{ margin: "15px 0", borderColor: "rgba(255,255,255,0.3)" }} />
        <p>Total Feedback: {total}</p>
        <p>Good Feedback: {goodPercentage}%</p>

        {/* Progress Bars */}
        {total > 0 && (
          <div className="progress-container">
            <div className="progress-bar"><div className="progress-fill good-fill" style={{ width: `${goodPercentage}%` }}></div></div>
            <div className="progress-bar"><div className="progress-fill average-fill" style={{ width: `${avgPercentage}%` }}></div></div>
            <div className="progress-bar"><div className="progress-fill bad-fill" style={{ width: `${badPercentage}%` }}></div></div>
          </div>
        )}
      </div>

      {total > 0 && (
        <button onClick={resetFeedback} className="reset-btn">
          🔄 Reset Feedback
        </button>
      )}
    </div>
  );
}
