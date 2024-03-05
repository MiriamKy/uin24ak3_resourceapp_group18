import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id="innhold">
        <nav>
            <ul id="knapper"></ul>
        </nav>
        <main id="aktivtInnhold">
            
        </main>
    </section>
    </>
  )
}

export default App
