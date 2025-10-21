import http from "http";
import app from "./app";
import config from "./config/env";

const server = http.createServer(app);

server.listen({ port: config.port }, () => {
  console.log(`Server running on port ${config.port}`);
});
