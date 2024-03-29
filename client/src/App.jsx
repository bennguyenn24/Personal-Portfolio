import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import About from './components/About';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </div>
  )
}

export default App
