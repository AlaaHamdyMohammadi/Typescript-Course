import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
const Counter = ({setCount, children}: CounterProps) => {
  
  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <span>{children}</span>
      <button onClick={() => setCount(count => count - 1)}>-</button>
    </>
  );
};

export default Counter;
