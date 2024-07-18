import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Benefits />
                <Pricing />
                <Footer />
            </div>
            <ButtonGradient />
        </>
    );
};

export default App;
