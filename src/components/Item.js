import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddItem() {
    console.log("adding");
    setInCart(!inCart);

  }

  const itemClass = inCart ? "in-cart" : "";
  const cartOptions = inCart ? "Remove From Cart" : "Add To Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>{cartOptions}</button>
    </li>
  );
}

export default Item;
