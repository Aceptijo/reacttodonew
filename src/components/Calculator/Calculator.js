import React, { useState } from "react";
import BoilingVerdict from "../BoilingVedict/BoilingVerdict";

const Calculator = () => {
  const [temperature, setTemperature] = useState({ temperature: "" });

  const handleChange = (event) => {
    setTemperature({ temperature: event.target.value });
  };

  return (
    <fieldset>
      <legend>Введите температуру в градусах Цельсия:</legend>
      <input type="text" value={temperature} onChange={handleChange} />
      <BoilingVerdict celsium={temperature} />
    </fieldset>
  );
};

export default Calculator;
