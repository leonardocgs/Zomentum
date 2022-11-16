import Header from "./Header";
import "./App.css";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Footer />
      </main>
    </div>
  );
}

export default App;
