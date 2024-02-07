import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./HomePage.css";
import Form from "../Form";

export default function HomePage() {
  const [products, setProducts] = useOutletContext();

  const addNewProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
  };

  return (
    <main>
      <ul className="productList">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`details/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
        <Form addNewProduct={addNewProduct} />
      </ul>
    </main>
  );
}
