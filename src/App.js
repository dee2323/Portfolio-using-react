import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
