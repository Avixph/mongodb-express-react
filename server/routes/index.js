const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/items", controllers.createItem);

router.get("/items", controllers.getAllItems);

router.get("/items/:id", controllers.getItemByID);

router.get("/items/title/:title", controllers.getItemByTitle);

router.patch("/items/:id", controllers.updateItem);

router.delete("/items/:id", controllers.deleteItem);

module.exports = router;
