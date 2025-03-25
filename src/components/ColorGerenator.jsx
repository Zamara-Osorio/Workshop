import React, { useState } from 'react';

const ColorGenerator = () => {
  const coloresAbsolutos = [
    "#FF0000",     // Rojo
    "#00FF00",     // Verde
    "#0000FF",     // Azul
    "#FFFF00",     // Amarillo
    "#FF00FF",     // Magenta
    "#00FFFF",     // Cian
    "#000000",     // Negro
    "#FFFFFF",     // Blanco
    "#808080",     // Gris
    "#800000",     // Marrón oscuro
    "#808000",     // Oliva
    "#800080",     // Púrpura
    "#008080",     // Verde azulado
    "#C0C0C0",     // Plata
    "#FFA500",     // Naranja
    "#A52A2A"      // Marrón
  ];

  const [selectedColor, setSelectedColor] = useState('');

  const generateColor = () => {
    const randomIndex = Math.floor(Math.random() * coloresAbsolutos.length);
    const color = coloresAbsolutos[randomIndex];
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <button onClick={generateColor}>Generar Color</button>
      
    </div>
  );
};

export default ColorGenerator;