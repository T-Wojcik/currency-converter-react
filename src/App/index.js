import React, { useState } from 'react';
import { Header } from "./Header/index";
import "./app.css";
import { currencies } from "./currencies";
import Form from "./Form";
import { Table } from "./Table";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      fromAmount: +amount,
      toAmount: amount / rate,
      currency,
    })
  };

  return (
    <div className="app">
      <Header title={"Najkorzystniejszy wirtualny kantor "} />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
      <Table />
    </div>
  );
};

export default App;
