import { createServer } from "node:http";

type userProps = {
  id: Number;
  name: String;
  email: String;
};

var user: userProps[] = [];

const server = createServer((req, res) => {
  res.end(`Ola Mundo, ${process.env.NAME}`);
});

const serverMethod = createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(user));
  }

  if (method === "POST" && url === "/users") {
    user.push({
      id: 1,
      name: "Lucas",
      email: "lucas@example.com",
    });
    return res.writeHead(201).end();
  }
  return res.writeHead(404).end();
});

server.listen(3000, () => {
  console.log("Servidor funcionando em localhost:3000.");
});
