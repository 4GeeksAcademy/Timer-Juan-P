import React, { useState, useEffect } from "react";

function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(intervalId);
  }, [counter]);

  // Cálculos de días, horas, minutos y segundos
  const days = Math.floor(counter / 86400); // 1 día = 86400 segundos
  const hours = Math.floor((counter % 86400) / 3600); // 1 hora = 3600 segundos
  const minutes = Math.floor((counter % 3600) / 60); // 1 minuto = 60 segundos
  const seconds = counter % 60; // Segundos restantes

  return (
    <section>
      <div className="container text-center">
        {/* Lista que contiene los textos y los valores */}
        <ul className="list-unstyled position-absolute top-50 start-50 translate-middle d-flex justify-content-between w-50">
          
          {/* Primer grupo de elementos con los textos encima */}
          <li className="d-flex flex-column align-items-center">
            <span className="h3 bg-dark text-white p-3 rounded">Days</span>
            <span className="h1 bg-light-subtle border border-dark p-3 rounded">{days}</span>
          </li>
          <li className="d-flex flex-column align-items-center">
            <span className="h3 bg-dark text-white p-3 rounded">Hours</span>
            <span className="h1 bg-light-subtle border border-dark p-3 rounded">{hours}</span>
          </li>
          <li className="d-flex flex-column align-items-center">
            <span className="h3 bg-dark text-white p-3 rounded">Mins</span>
            <span className="h1 bg-light-subtle border border-dark p-3 rounded">{minutes}</span>
          </li>
          <li className="d-flex flex-column align-items-center">
            <span className="h3 bg-dark text-white p-3 rounded">Secs</span>
            <span className="h1 bg-light-subtle border border-dark p-3 rounded">{seconds}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;



