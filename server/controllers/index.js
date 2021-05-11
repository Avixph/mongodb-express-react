const Item = require("../models/item");

const createItem = async (req, res) => {
  try {
    const item = await new Item(req.body);
    await item.save();
    return res.status(201).json({ item });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).send(eror.message);
  }
};

const getItemByID = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (item) {
      return res.status(200).json({ item });
    }
    return res.status(404).send("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getItemByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const findItems = await Item.find();
    const item = findItems.filter((item) => {
      if (item.title.toLowerCase() === title.toLowerCase()) {
        return item;
      }
    });
    if (item) {
      return res.status(200).json({ item });
    }
    return res.status(404).send("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!item) {
        res.status(500).send("Item not found!");
      }
      return res.status(200).json(item);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Item.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Item deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemByID,
  getItemByTitle,
  updateItem,
  deleteItem,
};
