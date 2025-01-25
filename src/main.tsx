import React from 'react'
import ReactDOM from 'react-dom/client'
import Resume from './components/Resume'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Resume />
    </ThemeProvider>
  </React.StrictMode>
)
