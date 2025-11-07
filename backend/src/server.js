import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening at port ${port}`);
});
