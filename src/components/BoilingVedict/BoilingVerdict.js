import React from "react";

const BoilingVerdict = (props) => {
  if (props.celsium >= 100) {
    return <p>Вода закипит!</p>;
  }
  return <p>Водна НЕ закипит!</p>;
};

export default BoilingVerdict;
