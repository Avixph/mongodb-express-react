import { Link } from "react-router-dom";

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input
        placeholder="An item"
        // value={item.title}
        name="title"
        onChange={handleChange}
      />
      <label>Link: </label>
      <input
        placeholder="http://coolItem.com"
        // value={item.link}
        name="link"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};
export default ItemForm;
