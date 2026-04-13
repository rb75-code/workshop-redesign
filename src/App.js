import React, { useState, useEffect } from 'react';
import { Calendar, Users, ChevronRight, CheckCircle } from 'lucide-react';
import './App.css';

function App() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // This fetches the data from your Python script
    fetch('http://127.0.0.1:8000/workshops')
      .then(res => res.json())
      .then(data => setWorkshops(data))
      .catch(err => console.log("Make sure your backend is running!"));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>FOSSEE<span>Booking</span></h1>
      </header>

      <section className="hero">
        <h2>Upgrade your skills.</h2>
        <p>Join expert-led workshops from IIT Bombay. Simple, direct, and open-source.</p>
      </section>

      <main className="list">
        <h3>Current Workshops</h3>
        {workshops.map(ws => (
          <div key={ws.id} className={`card ${ws.seats === 0 ? 'full' : ''}`}>
            <div className="card-content">
              <h4>{ws.title}</h4>
              <div className="meta">
                <span><Calendar size={14} /> {ws.date}</span>
                <span><Users size={14} /> {ws.seats > 0 ? `${ws.seats} seats left` : 'House Full'}</span>
              </div>
            </div>
            <button className="btn" disabled={ws.seats === 0}>
              {ws.seats > 0 ? <ChevronRight /> : <CheckCircle />}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;