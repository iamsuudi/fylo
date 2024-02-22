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
            <header className=" w-full flex justify-center  max-w-screen-lg">
                <Nav />
            </header>
            <main className="main z-10 w-full flex flex-col items-center justify-center max-w-screen-lg">
                <Hero />
                <Services />
                <Productive />
                <Testimonials />
                <Email />
            </main>
            <footer className=" -z-10 w-full flex justify-center  max-w-screen-lg">
                <Footer />
            </footer>
        </>
    );
}

export default App;
