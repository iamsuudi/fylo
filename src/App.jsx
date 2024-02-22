import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";

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
            </main>
        </>
    );
}

export default App;
