import express from "express";
import StudentsRoutes from "../routes/students.js";
import cors from "cors";

class App {
  app;
  port;

  constructor(port) {
    this.app = express();
    this.port = port;

    this._applySetting();
    this._applyMiddleware();
    this._initializeRoutes();
  }

  _applySetting() {
    this.app.set("port", this.port || 8000);
  }

  _applyMiddleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  _initializeRoutes() {
    this.app.get("/", (request, response) => {
      response.status(200);
      response.send("OK");
    });

    this.app.use("/api/students", StudentsRoutes);

    this.app.get("*", (request, response) => {
      response.status(404);
      response.send("Resource not found");
    });
  }

  listen() {
    return this.app.listen(this.app.get("port"), () => {
      console.log("Server listening on port: ", this.port);
    });
  }

  getServer() {
    return this.app;
  }
}

export default App;
