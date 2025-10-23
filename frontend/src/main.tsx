import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CharacterDetails } from './pages/CharacterDetails.tsx';
import { EpisodeDetails } from './pages/EpisodeDetails.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/character/:id" element={<CharacterDetails />} />
    <Route path="/episode/:id" element={<EpisodeDetails />} />
  </Routes>
  </BrowserRouter>,
)