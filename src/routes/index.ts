import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  let name = "Elson";
  let age = 90;
  //res.send("Ola Mundo");
  res.json({ name, age });
});

export default router;
