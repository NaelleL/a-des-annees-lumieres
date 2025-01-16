import './App.css'
import { Outlet } from 'react-router-dom'


import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Credits from './pages/Credits';
import Dialogue1 from './pages/Dialogue1';
import Dialogue2 from './pages/Dialogue2';
import Dialogue3 from './pages/Dialogue3';
import Dialogue4 from './pages/Dialogue4';
import Dialogue5 from './pages/Dialogue5';
import Dialogue6 from './pages/Dialogue6';
import Dialogue7 from './pages/Dialogue7';
import Arme1 from './pages/Arme1';
import Arme2 from './pages/Arme2';
import Arme3A from './pages/Arme3A';
import Arme3B from './pages/Arme3B';
import DialogueArme3A from './pages/DialogueArme3A';
import DialogueArme3B from './pages/DialogueArme3B';
import DialogueArmeInexistante from './pages/DialogueArmeInexistante';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/dialogue1" element={<Dialogue1 />} />
      <Route path="/dialogue2" element={<Dialogue2 />} />
      <Route path="/dialogue3" element={<Dialogue3 />} />
      <Route path="/dialogue4" element={<Dialogue4 />} />
      <Route path="/dialogue5" element={<Dialogue5 />} />
      <Route path="/dialogue6" element={<Dialogue6 />} />
      <Route path="/dialogue7" element={<Dialogue7 />} />
      <Route path="/arme1" element={<Arme1 />} />
      <Route path="/arme2" element={<Arme2 />} />
      <Route path="/arme3A" element={<Arme3A />} />
      <Route path="/arme3B" element={<Arme3B />} />
      <Route path="/dialogueArme3A" element={<DialogueArme3A />} />
      <Route path="/dialogueArme3B" element={<DialogueArme3B />} />
      <Route path="/dialogueArmeInexistante" element={<DialogueArmeInexistante />} />
    </Routes>
  );
}

export default App;