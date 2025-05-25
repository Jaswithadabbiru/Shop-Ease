import './App.css'; // Keep this import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Promotion from './components/Promotion';
import Trends from './components/Trends';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <Promotion />
      <Trends />
      <Footer />
    </div>
  );
};

export default App;