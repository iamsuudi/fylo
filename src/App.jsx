import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Hero />
                <Services />
            </main>
        </>
    );
}

export default App;
