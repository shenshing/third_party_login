const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

const port = 8081;
app.listen(port, () => console.log(`Client listen to ${port}`));
