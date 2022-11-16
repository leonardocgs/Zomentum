import Header from "./Header";
import "./App.css";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
      </main>
    </div>
  );
}

export default App;
