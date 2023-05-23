import { useState } from 'react';

export default function Home() {
  const [name] = useState("Luis");
  const [lastname] = useState("Rodriguez")
  return (
    <h1>{name} {lastname}</h1>
  )
}
