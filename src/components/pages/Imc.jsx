import React, { useState } from "react";

const Imc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");
  const [message, setMessage] = useState("");

  function CalculoImc() {
    if (peso && altura) {
      const alturaEmMetros = parseFloat(altura) / 100;
      const result = parseFloat(peso) / (alturaEmMetros * alturaEmMetros);
      setImc(result.toFixed(2));

      if (imc < 18.5) {
        setMessage("Abaixo do peso");
      } else if (imc >= 18.5 && imc < 24.9) {
        setMessage("Peso normal");
      } else if (imc >= 25 && imc < 29.9) {
        setMessage("Sobrepeso");
      } else {
        setMessage("Obesidade");
      }
    } else {
      alert("Por favor, insira valores válidos para peso e altura!");
    }
  }

  return (
    <div
      className="flex justify-center w-full mr-32 items-center bg-slate-500 h-auto rounded-full lg:flex-row
            md:flex-col sm:flex-col"
    >
      <div>
        <label className="text-indigo-700 pr-4 font-bold">Seu peso:</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="rounded-2xl"
        />
      </div>
      <div className="py-10">
        <label className="text-indigo-700 pr-4 font-bold">
          Sua altura em cm:
        </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="rounded-2xl"
        />
      </div>

      <button
        onClick={CalculoImc}
        className="font-bold text-base text-gray-200 bg-indigo-700 px-3 py-1.5 rounded gap-x-1 hover:bg-indigo-600/70 ease-out duration-500"
      >
        Resultado
      </button>

      <h1 className="text-indigo-700 p-2 font-bold">Você está:</h1>
      <p className="text-indigo-700 p-2 font-bold">{message}</p>
    </div>
  );
};

export default Imc;
