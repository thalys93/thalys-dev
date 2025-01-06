import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './navegation/routes.tsx'

import '@/assets/global.css'
import '@/assets/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)
