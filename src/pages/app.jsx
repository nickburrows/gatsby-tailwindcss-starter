import React, { useState } from "react"
import { ThemeContext, themes } from "../contexts/ThemeContext"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-warning">Dark/Light mode</h1>

        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              role="button"
              onClick={() => {
                setDarkMode(!darkMode)
                changeTheme(darkMode ? themes.light : themes.dark)
              }}
            >
              <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
              <span className="d-lg-none d-md-block">Switch mode</span>
            </button>
          )}
        </ThemeContext.Consumer>
      </header>
    </div>
  )
}

export default App
