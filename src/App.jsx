import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </div>
  );
}

export default App;