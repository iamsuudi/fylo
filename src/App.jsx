import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import Email from "./components/Email";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Hero />
                <Services />
                <Productive />
                <Testimonials />
                <Email />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
