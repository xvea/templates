import { useState } from 'react'
import reactLogo from './assets/react.svg'
import honoLogo from './assets/hono.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://hono.dev" target="_blank">
          <img src={honoLogo} className="logo hono" alt="Hono logo" />
        </a>
      </div>
      <h1>Vite + React + Hono</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR or open <code>/api/hello</code> and get the response
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Hono logos to learn more
      </p>
    </>
  )
}

export default App
