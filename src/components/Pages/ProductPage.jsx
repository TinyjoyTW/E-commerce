import "../Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useOutletContext();
  const { productId } = useParams();
  const product = products.find((product) => {
    return product.id === Number(productId) ? true : false;
  });

  function deleteProduct(id) {
    setProducts((productList) => {
      return productList.filter((product) => {
        return id !== product.id ? true : false;
      });
    });
    // after deleting, go back to home page
    navigate("/");
  }

  return (
    <article>
      <div className="productTitlePrice">
        <h2>{product.title}</h2>
        <span>{product.price}€</span>
        {product.discountPercentage > 10 ? <h3>On sale!</h3> : null}
        <button
          className="deleteButton"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
      <p>{product.description}</p>
      <p>Rating: {Math.round(product.rating * 10) / 10}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <img className="thumbnail" src={product.thumbnail} />
    </article>
  );
}
