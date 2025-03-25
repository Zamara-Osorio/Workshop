import React from 'react';
import DarkMode from './components/DarkMode';
import LikeDislike from './components/LikeDislike';
import ColorGerenator from './components/ColorGerenator';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Componentes de React</h1>
      
      <div className="components-grid">
        <section className="component-card">
          <h2>1. Modo oscuro</h2>
          <DarkMode/>
        </section>

        <section className="component-card">
          <h2>2. Me gusta  y No me gusta</h2>
          <LikeDislike />
        </section>

        <section className="component-card">
          <h2>3. Generador de colores</h2>
          <ColorGerenator />
        </section>

        <section className="component-card">
          <h2>4. Tiempo</h2>
          <Timer />
        </section>
      </div>
    </div>
  );
}

export default App;