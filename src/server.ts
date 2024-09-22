import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { fileURLToPath } from "url";
import produtosRouter from "./routes/produtos";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));
server.use("/", router);
server.use("/produtos", produtosRouter);

server.listen(3000, () => {
  console.log("Role Aleatorio On");
});
