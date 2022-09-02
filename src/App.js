// sections
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Fruits from './components/Fruits';
import Testimonials from './components/Testimonials';
import GalleryBottom from './components/GalleryBottom';
import Footer from './components/Footer';

// styles
import './stylesheets/main.css';

const App = () => {
  return (
    <div className='App' id='app'>
      <Hero />
      <Gallery />
      <Fruits />
      <Testimonials />
      <GalleryBottom />
      <Footer />
    </div>
  );
};

export default App;
