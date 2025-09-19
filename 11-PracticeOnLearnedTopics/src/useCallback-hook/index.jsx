import React, { useCallback, useState } from "react";


function Parent() {
    const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // No dependencies → stable reference


  return (
    <>
    <br />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <br />
      <br />
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

export default Parent;