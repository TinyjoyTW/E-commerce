import "./Product.css";

export default function Product({ product, onDelete }) {
  return (
    <article>
      <div className="productTitlePrice">
        <h2>{product.title}</h2>
        <span>{product.price}€</span>
        {product.discountPercentage > 10 ? <h3>On sale!</h3> : null}
        <button className="deleteButton" onClick={() => onDelete(product.id)}>
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
