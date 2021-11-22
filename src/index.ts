import { renderToString } from "react-dom/server";
import express, { Express } from "express";
import IndexView from "./view/index/IndexView";

const app: Express = express();

app.listen(3000);

app.use(express.static("dist/assets"));

app.get("/", (req, res) => {
  res.send(renderToString(IndexView()));
});
