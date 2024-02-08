import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

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
      <List
        items={["a", "b", "c"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  );
}
