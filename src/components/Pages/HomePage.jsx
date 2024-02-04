import productsJSON from "../../assets/products.json";
import Product from "../Product";
import { useState } from "react";

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
              <Product product={product} onDelete={deleteProduct} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
