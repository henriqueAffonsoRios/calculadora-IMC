import { useState } from "react";
import './form.css';

const Formulario = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [submitted, setSubmitted] = useState('');

  const alturaChange = (event) => {
    setAltura(event.target.value)
  }

  const pesoChange = (event) => {
    setPeso(event.target.value)
  }

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25.0 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30.0 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35.0 && imc <= 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const resultado = peso / (altura * altura);
    const imc = resultado.toFixed(2)
    const classificaImc = classificarIMC(imc);

    if(altura != '' && peso != '') {
      setSubmitted(`Seu IMC é ${imc} (${classificaImc})`);
      setAltura('');
      setPeso('');
    }

  }


  return (
    <>
      <div className="container">
        <h1>Calculadora IMC</h1>
        <form onSubmit={formSubmit}>
          <input type="text" placeholder="Altura (M)" value={altura} onChange={alturaChange}/>
          <input type="text" placeholder="Peso (Kg)" value={peso} onChange={pesoChange}/>
          <button type="submit">Calcular</button>
        </form>
        <h3>{submitted}</h3>
      </div>
    </>
  )
}

export default Formulario
