import { useState, useEffect, useId } from "react";
import "./Form.css";

export default function Form({ addProduct }) {
  // States:
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // handler functions:
  const handleNameInput = (e) => setTitle(e.target.value);
  const handleImageURL = (e) => setThumbnail(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleCategoryOption = (e) => setCategory(e.target.value);
  const handleTextarea = (e) => setDescription(e.target.value);

  // prevent reloading when clicking on the "save" button
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = self.crypto.randomUUID();
    const newProduct = { id, title, thumbnail, price, category, description };
    addProduct(newProduct);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span>Add your own product</span>
      <div>
        <label>
          Name:
          <input
            name="productName"
            type="text"
            placeholder="product name"
            value={title}
            onChange={handleNameInput}
          />
        </label>

        <label>
          Image:
          <input
            name="image"
            type="url"
            placeholder="product Image"
            value={thumbnail}
            onChange={handleImageURL}
          />
        </label>

        <label>
          Price:{" "}
          <input
            name="price"
            type="number"
            placeholder="price in euro"
            value={price}
            onChange={handlePriceInput}
          />
        </label>
        <label>
          Category:
          <select name="category" onChange={handleCategoryOption}>
            <option value="">-</option>
            <option value="electronics">Electronics</option>
            <option value="household">Household</option>
          </select>
        </label>
      </div>

      <div className="descriptionContainer">
        <textarea
          type="text"
          name="textarea"
          placeholder="add product description here"
          rows="3"
          value={description}
          onChange={handleTextarea}
        ></textarea>
        <button type="submit" onSubmit={handleSubmit}>
          SAVE
        </button>
      </div>
    </form>
  );
}
