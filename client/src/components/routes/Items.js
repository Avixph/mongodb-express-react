import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LayOut from "../shared/LayOut";

const Items = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios("http://localhost:5000/api/items");
    setItems(response.data.items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const getItems = items.map((item) => (
    <li key={item._id}>
      <Link to={`/items/${item._id}`}>{item.title}</Link>
    </li>
  ));

  return (
    <LayOut>
      <h4>Items</h4>
      <ul>{getItems}</ul>
    </LayOut>
  );
};
export default Items;
