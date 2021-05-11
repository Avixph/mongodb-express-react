import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ItemForm from "../shared/ItemForm";
import LayOut from "../shared/LayOut";

const ItemEdit = (props) => {
  const [item, setItem] = useState({ title: "", link: "" });
  const [updated, setUpdated] = useState(false);

  const fetchUpdate = async () => {
    try {
      const response = await axios(
        `http://localhost:5000/api/items/${props.match.params.id}`
      );
      setItem(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUpdate();
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedItem = Object.assign(item, updatedField);
    setItem(editedItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:5000/api/items/${props.match.params.id}`,
      method: "POST",
      data: item,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  if (updated) {
    return <Redirect to={`/items/${props.match.params.id}`} />;
  }

  return (
    <LayOut>
      <h4>Edit Item</h4>
      <ItemForm
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/items/${props.match.params.id}`}
      />
    </LayOut>
  );
};
export default ItemEdit;
