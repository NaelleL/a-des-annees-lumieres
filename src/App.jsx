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
import Complice1 from './pages/Complice1';
import Complice2 from './pages/Complice2';
import Complice3A from './pages/Complice3A';
import Complice3B from './pages/Complice3B';
import DialogueComplice3A from './pages/DialogueComplice3A';
import DialogueComplice3B from './pages/DialogueComplice3B';
import DialogueCompliceInexistante from './pages/DialogueCompliceInexistante';
import Tueur1 from './pages/Tueur1';
import Tueur2 from './pages/Tueur2';
import Tueur3A from './pages/Tueur3A';
import Tueur3B from './pages/Tueur3B';
import Tueur3C from './pages/Tueur3C';
import DialogueTueur3A from './pages/DialogueTueur3A';
import DialogueTueur3B from './pages/DialogueTueur3B';
import DialogueTueur3C from './pages/DialogueTueur3C';
import DialogueTueurInexistant from './pages/DialogueTueurInexistant';

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
      <Route path="/complice1" element={<Complice1 />} />
      <Route path="/complice2" element={<Complice2 />} />
      <Route path="/complice3A" element={<Complice3A />} />
      <Route path="/complice3B" element={<Complice3B />} />
      <Route path="/dialogueComplice3A" element={<DialogueComplice3A />} />
      <Route path="/dialogueComplice3B" element={<DialogueComplice3B />} />
      <Route path="/dialogueCompliceInexistante" element={<DialogueCompliceInexistante />} />
      <Route path="/tueur1" element={<Tueur1 />} />
      <Route path="/tueur2" element={<Tueur2 />} />
      <Route path="/tueur3A" element={<Tueur3A />} />
      <Route path="/tueur3B" element={<Tueur3B />} />
      <Route path="/tueur3C" element={<Tueur3C />} />
      <Route path="/dialogueTueur3A" element={<DialogueTueur3A />} />
      <Route path="/dialogueTueur3B" element={<DialogueTueur3B />} />
      <Route path="/dialogueTueur3C" element={<DialogueTueur3C />} />
      <Route path="/dialogueTueurInexistant" element={<DialogueTueurInexistant />} />
    </Routes>
  );
}

export default App;