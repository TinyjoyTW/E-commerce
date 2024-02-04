import productsJSON from "../../assets/products.json";
import Product from "../Product";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState(productsJSON);

  function deleteProduct(id) {
    setProducts((productList) => {
      return productList.filter((product) => {
        return id !== product.id ? true : false;
      });
    });
  }

  return (
    <main>
      <ul className="productList">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`details/${product.id}`}>{product.title}</Link>
              <button
                className="deleteButton"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
