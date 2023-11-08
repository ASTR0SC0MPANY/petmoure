import React, { useEffect } from 'react';
import './App.css'; // Importe seu arquivo CSS, se necessário

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'caminho/para/o/seu/script.js'; // Substitua com o caminho correto para o seu script.js
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      {/* Seu conteúdo React aqui */}
    </div>
  );
}

export default App;