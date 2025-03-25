import React from 'react';
import DarkMode from './components/DarkMode';
import LikeDislike from './components/LikeDislike';
import ColorGerenator from './components/ColorGerenator';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Components</h1>
      
      <div className="components-grid">
        <section className="component-card">
          <h2>1. Dark Mode Toggle</h2>
          <DarkMode/>
        </section>

        <section className="component-card">
          <h2>2. Like & Dislike</h2>
          <LikeDislike />
        </section>

        <section className="component-card">
          <h2>3. Color Generator</h2>
          <ColorGerenator />
        </section>

        <section className="component-card">
          <h2>4. Timer</h2>
          <Timer />
        </section>
      </div>
    </div>
  );
}

export default App;