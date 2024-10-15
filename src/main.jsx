import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Orcamento from './components/Orcamento.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Orcamento />
  </StrictMode>,
)
