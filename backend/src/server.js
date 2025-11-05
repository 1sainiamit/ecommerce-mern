import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening at port ${port}`);
});
