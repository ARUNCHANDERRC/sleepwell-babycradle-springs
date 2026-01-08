import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
