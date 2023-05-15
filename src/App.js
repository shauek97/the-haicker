import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
      fdsfdsf
      <button onClick={handleClick}>button</button>
      {
        console.log(count)
      }
    </>
  );
}

export default App;
