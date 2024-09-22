import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Ola Mundo");
});

server.get("/produtos/:id", (req, res) => {
  const { id } = req.params;

  res.json({ id, name: "John Doe", price: 90 });
});

server.listen(3000, () => {
  console.log("Role Alaeatorio on");
});
