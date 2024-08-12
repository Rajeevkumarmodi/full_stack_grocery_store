import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(8001, () => {
  console.log("server is start on port 8001");
});
