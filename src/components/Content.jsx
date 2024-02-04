import products from "../assets/products.json";
import Product from "./Product";

export default function Content() {
  return (
    <main>
      <ul className="productList">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Product product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
