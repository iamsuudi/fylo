import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Productive from "./components/Productive";

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
            </main>
        </>
    );
}

export default App;
