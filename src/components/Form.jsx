import { useState } from "react";

export default function Form({addNewProduct}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {name, image, price, category,description};
    addNewProduct(newProduct);
  };

  return (
    <form>
      <span>Add your own product</span>
      <div>
        <label>
          Product name:
          <input
            name="productName"
            type="text"
            placeholder="product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Add image
          <input
            name="image"
            type="url"
            placeholder="product Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          Price
          <input
            name="price"
            type="number"
            placeholder="price in euro"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="electronics">Electronics</option>
            <option value="household">Household</option>
          </select>
        </label>
        <label>Description: </label>
        <textarea
          type="text"
          name="description"
          placeholder="add product description here"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" onSubmit={handleSubmit}>SAVE</button>
      </div>
    </form>
  );
}
