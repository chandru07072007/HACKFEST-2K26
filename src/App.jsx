import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Themes from "./components/Themes";
import Prizes from "./components/Prizes";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import StaffCoordinator from "./components/StaffCoordinator";
import Register from "./components/Register";
import Contact from "./components/Contact";

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
            <StaffCoordinator />
            <Register />
            <Contact />
        </>
    );
}

export default App;



