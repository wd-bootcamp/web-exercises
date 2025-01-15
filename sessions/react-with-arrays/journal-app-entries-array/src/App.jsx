import "./App.css";
import EntriesSection from "./components/EntriesSection/EntriesSection";
import EntryForm from "./components/EntryForm/EntryForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
