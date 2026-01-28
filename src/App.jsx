import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Themes from "./components/Themes";
import Prizes from "./components/Prizes";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Themes />
            <Prizes />
            <Sponsors />
            <Register />
            <Footer />
        </>
    );
}

export default App;
