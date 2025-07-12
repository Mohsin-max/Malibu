import Benefits from "./components/benefits/Benefits";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Pricing from "./components/pricing/Pricing";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <Hero />
      <Container >
        <Services />
        <Benefits />
        <Pricing />
        <Reviews />
      </Container>
      <Footer />
    </>
  )
}

export default App;