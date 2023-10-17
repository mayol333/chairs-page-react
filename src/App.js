import { Navigation } from "./components/Navigation";
import { FirstSection } from "./components/FirstSection";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";
import { FourSection } from "./components/FourSection";
import { FiveSection } from "./components/FiveSection";
import { Footer } from "./components/Footer";
function App() {
    return (
        <>
            <Navigation />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourSection />
            <FiveSection />
            <Footer />
        </>
    );
}

export default App;
