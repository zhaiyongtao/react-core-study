import React, { useState } from "react";

function HooksCounter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>现在计数： {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}> + 1 </button>
      <button onClick={() => setCounter(counter - 1)}> - 1 </button>
    </div>
  );
}

export default HooksCounter;
