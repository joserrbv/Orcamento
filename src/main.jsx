import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OrcamentoDoc from './components/OrcamentoDoc.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <OrcamentoDoc />
    
  </StrictMode>,
)
