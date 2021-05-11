import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ItemForm from "../shared/ItemForm";
import LayOut from "../shared/LayOut";

const ItemCreate = (props) => {
  const [item, setItem] = useState({ title: "", link: "" });
  const [created, setCreated] = useState(null);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedItem = Object.assign(item, updatedField);

    setItem(editedItem);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios({
      url: `http://localhost:5000/api/items`,
      method: "POST",
      data: item,
    })
      .then((res) => setCreated(res.data.item))
      .catch(console.error);
  };

  if (created) {
    return <Redirect to={`/items`} />;
  }

  return (
    <LayOut>
      <h4>Add Item</h4>
      <ItemForm
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/`}
      />
    </LayOut>
  );
};

export default ItemCreate;
