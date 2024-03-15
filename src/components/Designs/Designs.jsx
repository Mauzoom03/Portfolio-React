import React, { useState } from 'react';

// Componente para mostrar el código HTML del botón
const ButtonCode = ({ buttonText, onTextChange }) => {
  const handleInputChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <p>
      {' '}
      &lt;button&gt;
      <input type="text" value={buttonText} onChange={handleInputChange} />
      &lt;/button&gt;
    </p>
  );
};

// Componente para configurar el color de fondo y color del texto del botón
const ButtonConfig = ({ buttonText, onChange }) => {
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
    onChange({ buttonText, bgColor, textColor });
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
    onChange({ buttonText, bgColor, textColor });
  };

  return (
    <div>
      <label>Background Color:</label>
      <input type="color" value={bgColor} onChange={handleBgColorChange} />
      <label>Text Color:</label>
      <input type="color" value={textColor} onChange={handleTextColorChange} />
    </div>
  );
};
// Componente para mostrar el botón con estilos configurables
const StyledButton = ({ btn }) => {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: btn.bgColor, color: btn.textColor }}>
        {btn.buttonText}
      </button>
    </div>
  );
};

// Componente para mostrar el código generado del botón
const GeneratedCode = ({ btn }) => {
  const { buttonText, bgColor, textColor } = btn;

  const htmlCode = `<button class="btn">${buttonText}</button>`;
  const cssCode = 
    `.btn {
      background-color: ${bgColor};
      color: ${textColor};
    }`
  ;

  return (
    <div>
      <h2>Código HTML:</h2>
      <code>{htmlCode}</code>
      <h2>Código CSS:</h2>
      <code>{cssCode}</code>
    </div>
  );
};

// Componente principal
const Designs = () => {
  const [buttonText, setButtonText] = useState('boton');
  const [btnStyle, setBtnStyle] = useState({ buttonText: 'boton', bgColor: '', textColor: '' });

  const handleTextChange = (newText) => {
    setButtonText(newText);
  };

  const handleStyleChange = (style) => {
    setBtnStyle(style);
  };

  return (
    <div>
      <h1>Generador de botones</h1>
      <div>
        <h2>Código del botón:</h2>
        <ButtonCode buttonText={buttonText} onTextChange={handleTextChange} />
      </div>
      <div>
        <h2>Configuración de Estilos:</h2>
        <ButtonConfig buttonText={buttonText} onChange={handleStyleChange} />
      </div>
      <div>
        <h2>Botón generado:</h2>
        <StyledButton btn={btnStyle} />
      </div>
      <div>
        <h2>Código generado:</h2>
        <GeneratedCode btn={btnStyle} />
      </div>
    </div>
  );
};

export default Designs;
