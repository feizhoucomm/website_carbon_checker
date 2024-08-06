import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeizouComConsists from "./components/FeizouComConsists";
import CardsGroup from "./components/CardsGroup";
import OurServices from "./components/OurServices";
import More from "./components/More";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Calculate Your Website's Carbon Emissions | Eco-Friendly Web Solutions
        </title>
        <link rel="canonical" href="https://www.feizhoucom.com" />
        <meta
          name="description"
          content="Discover how your website impacts the environment with our precise carbon emission calculator. Create eco-friendly websites and mobile apps that minimize carbon footprints and achieve green certification."
        />
      </Helmet>
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
