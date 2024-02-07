import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./HomePage.css";
import Form from "../Form";
import { useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useOutletContext();
  const [search, setSearch] = useState("");

  const addNewProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter((product) => {
    if (typeof product.title == "string" && search.length) {
      return product.title.toLowerCase().includes(search);
    } else {
      return true;
    }
  });

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <main>
      <h3 className="searchbar">Search</h3>
      <input
        type="text"
        name="searchbar"
        value={search}
        onChange={handleSearch}
      />
      <ul className="productList">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`details/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
        <Form addProduct={addNewProduct} />
      </ul>
    </main>
  );
}
