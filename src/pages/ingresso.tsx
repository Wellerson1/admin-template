import React, { useState, useEffect, CSSProperties } from 'react';

function IngressoComponent() {
  const [repeticoes, setRepeticoes] = useState<any>(20);

  const containerStyle: CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
  };

  const paragraphStyle = {
    fontSize: '16px',
  };

  const labelStyle = {
    fontSize: '16px',
    marginTop: '20px',
    display: 'block',
  };

  const inputStyle = {
    width: '50px',
    padding: '5px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#0073e6',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  function calcularTempoRestantePara3PM(): number {
    const agora = new Date();
    const horaDesejada = new Date(agora);
    horaDesejada.setHours(15, 0, 0, 0);

    let tempoRestante = horaDesejada.getTime() - agora.getTime();
    if (tempoRestante < 0) {
      tempoRestante += 24 * 60 * 60 * 1000;
    }

    return tempoRestante;
  }

  function agendarSimularCliques(repeticoes: number): void {
    const tempoRestante = calcularTempoRestantePara3PM();

    setTimeout(() => {
      simularCliques(repeticoes);
      agendarSimularCliques(repeticoes);
    }, tempoRestante);
  }

  function simularCliques(repeticoes: number): void {
    for (let i = 0; i < repeticoes; i++) {
      window.open(
        'https://libertadores.eleventickets.com/?lang=pt_BR#!/apresentacao/aa1e3ea226a772c20be4759baa1fe08fe65e2ebf',
        '_blank',
        'width=600, height=400'
      );
    }
  }

  const handleButtonClick = (): void => {
    const numRepeticoes = parseInt(repeticoes, 10);
    simularCliques(numRepeticoes);
  };

  useEffect(() => {
    agendarSimularCliques(20);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Compra de ingresso do Fluzão</h1>
      <p style={paragraphStyle}>Clique no botão abaixo para abrir uma nova janela:</p>
      <label htmlFor="repeticoes" style={labelStyle}>Número de janelas</label>
      <input
        type="number"
        id="repeticoes"
        value={repeticoes}
        onChange={(e) => setRepeticoes(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleButtonClick} style={buttonStyle}>ABRIR</button>
    </div>
  );
}

export default IngressoComponent;
