import express from "express";
import mongoose from "mongoose";
import { restRouter } from "./api/index.js";
import { devConfig } from "./config/env/development.js";
import { setGlobalMiddleware } from "./api/middlewares/global-middleware.js";

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/${devConfig.database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = devConfig.port;
setGlobalMiddleware(app); // set global middleware here

app.use("/api", restRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.message = "Invalid route";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
