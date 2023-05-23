import { useState } from 'react';

const App = () => {
  const [name, setName] = useState("Luis")
  const [lastname, setLastName] = useState("Rodriguez")
  return (
    <h1>{name} {lastname}</h1>
  )
}

export default App;