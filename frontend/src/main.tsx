import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Character } from './pages/Character.tsx';
import { Episode } from './pages/Episode.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/character/:id" element={<Character />} />
    <Route path="/episode/:id" element={<Episode />} />
  </Routes>
  </BrowserRouter>,
)