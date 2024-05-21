const jsonServer = require("json-server"); //importing json-server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //chose port from here like

server.use(middlewares);
server.use(router);

server.listen(port)