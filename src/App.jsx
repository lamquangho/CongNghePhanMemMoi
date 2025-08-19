import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <p><strong>Họ tên:</strong> lam quang ho</p>
        <p><strong>MSSV:</strong> 22110002</p>
        <p><strong>Lớp:</strong> Cac cong nghe phan mem moi_ Nhom 01_ST3_ST4_A122</p>
        <p><strong>Email:</strong> 22110002@student.hcmute.edu.vn</p>
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
