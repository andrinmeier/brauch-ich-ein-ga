import React from "react";
import { TailwindProvider } from "tailwind-rn";
import Hello from "./src/Hello";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Hello />
    </TailwindProvider>
  );
}
