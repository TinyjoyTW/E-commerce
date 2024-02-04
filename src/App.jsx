import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";
import productsJSON from "./assets/products.json";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(productsJSON);

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Outlet context={[products, setProducts]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
