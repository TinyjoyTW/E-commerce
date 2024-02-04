import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
