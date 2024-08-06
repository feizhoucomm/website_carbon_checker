import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeizouComConsists from "./components/FeizouComConsists";
import CardsGroup from "./components/CardsGroup";
import OurServices from "./components/OurServices";
import More from "./components/More";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeizouComConsists />
      <CardsGroup />
      <OurServices />
      <More />
      <Footer />
    </>
  );
}

export default App;
