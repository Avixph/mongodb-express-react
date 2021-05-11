const app = require("./app");
const db = require("./db");

const PORT = process.env.PORT || 5000;

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});

/* HTTP request is sent to the http://localhost:5000/
call the handler function */
