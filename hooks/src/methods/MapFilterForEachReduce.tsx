import React, { useEffect, useState } from "react";

export default function MapFilterForEachReduce() {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
  const [evenNumbers, setEvenNumbers] = useState<number[]>([]);
  const [doubleNumbers, setDoubleNumbers] = useState<number[]>([]);
  const [sum, setSum] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // 🔹 filter → only even numbers
    const filtered = numbers.filter((n) => n % 2 === 0);
    setEvenNumbers(filtered);

    // 🔹 map → double each number
    const doubled = numbers.map((n) => n * 2);
    setDoubleNumbers(doubled);

    // 🔹 reduce → calculate total sum
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);

    // 🔹 forEach → collect logs
    const logsArr: string[] = [];
    numbers.forEach((n) => logsArr.push(`Processed number: ${n}`));
    setLogs(logsArr);
  }, [numbers]);

  const addNumber = () => {
    const newNum = Math.floor(Math.random() * 100) + 1;
    setNumbers((prev) => [...prev, newNum]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>ReactJS Array Methods Example</h2>

      <button onClick={addNumber}>Add Random Number</button>

      <h3>1️⃣ All Numbers (Original)</h3>
      <p>{numbers.join(", ")}</p>

      <h3>2️⃣ Filter (Even Numbers)</h3>
      <p>{evenNumbers.join(", ")}</p>

      <h3>3️⃣ Map (Doubled Numbers)</h3>
      <p>{doubleNumbers.join(", ")}</p>

      <h3>4️⃣ Reduce (Sum of Numbers)</h3>
      <p>Sum: {sum}</p>

      <h3>5️⃣ forEach (Logs)</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}
