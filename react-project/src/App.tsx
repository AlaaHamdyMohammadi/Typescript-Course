import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Heading title="Hello" />
      <Section>
        {" "}
        <p>LoremChildren</p>{" "}
      </Section>
      <Counter setCount={setCount}>Count = {count}</Counter>
    </div>
  );
}
