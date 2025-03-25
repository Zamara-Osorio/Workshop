import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? '#ffffff' : '#000000';
    document.body.style.color = isDark ? '#000000' : '#ffffff';
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDark ? 'Modo Claro' : ' Modo Oscuro'}
      </button>
    </div>
  );
};

export default DarkModeToggle;