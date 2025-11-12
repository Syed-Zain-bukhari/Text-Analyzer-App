import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbars from './components/Navbar';
import TextFoam from './components/TextFoam';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbars />
     <TextFoam />

    </>
  )
}

export default App
