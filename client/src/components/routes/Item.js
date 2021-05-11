import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import LayOut from "../shared/LayOut";

const Item = (props) => {
  const [item, setItem] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const fetchItem = async () => {
    const response = await axios(
      `http://localhost:5000/api/items/${props.match.params.id}`
    );
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const deleteItem = async () => {
    await axios({
      url: `http://localhost:5000/api/items/${props.match.params.id}`,
      method: "DELETE",
    })
      .then(() => {
        setDeleted(true);
      })
      .catch(console.error);
  };

  if (!item) {
    return <p>Loading...</p>;
  }
  if (deleted) {
    return (
      <Redirect to={{ pathname: "/", deleted: { msg: "Item deleted!" } }} />
    );
  }

  return (
    <LayOut>
      <h4>{item.title}</h4>
      <p>Link: {item.link}</p>
      <button onClick={deleteItem}>Delete Item</button>
      <Link to={`/items/${props.match.params.id}/edit`}>
        <button>Edit Item</button>
      </Link>
      <Link to="/items">
        <button>Return to Items</button>
      </Link>
    </LayOut>
  );
};

export default Item;
