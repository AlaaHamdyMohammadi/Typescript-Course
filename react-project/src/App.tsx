import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
}
export default function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);
  }, [users]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Add</button>
    </div>
  );
}
