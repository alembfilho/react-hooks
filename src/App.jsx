import { useState } from 'react'
import { DarkModeContext, themeClass } from './theme'
import './App.css'
import { Counter } from './components/Counter'
import { Factorial } from './components/Factorial'
import { Theme } from './components/Theme'
import { Focus } from './components/Focus'
import { CounterMemo } from './components/CounterMemo'
import { Memo } from './components/Memo'

function App() {
  const [isDark, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={isDark}>
      <div className={`App ${themeClass(isDark)}`}>
        <div>
          <h1>This page aims to practice react hooks</h1>
          <Theme setDarkMode={setDarkMode} />
          <Counter />
          <Factorial />
          <Focus />
          <CounterMemo />
          <Memo />
        </div>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App
