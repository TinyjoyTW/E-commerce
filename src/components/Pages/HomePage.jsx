import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useOutletContext();

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
      </ul>
    </main>
  );
}
