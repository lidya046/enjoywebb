import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhyChooseUs from './components/sections/WhyChooseUs';
import HighlightPackage from './components/sections/HighlightPackage';
import BestPacket from './components/sections/BestPacket';
import RentalCar from './components/sections/RentalCar';
import Gallery from './components/sections/Gallery';
import Partners from './components/sections/Partners';
import ContactMap from './components/sections/ContactMap';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { useEffect } from 'react';

function App() {
  // Initialize reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif] text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <HighlightPackage />

      {/* Carousel Sections */}
      <div className="bg-white">
        <BestPacket />
        <RentalCar />
      </div>

      <Gallery />
      <Partners />
      <ContactMap />
      <Footer />
    </div>
  );
}

export default App;
