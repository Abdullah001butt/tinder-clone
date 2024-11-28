import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "http";
import path from "path";

// routes
import authRoutes from "./routes/authRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";

import { connectDB } from "./config/db.js";
import { initializeSocket } from "./socket/socket.server.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

const _dirname = path

initializeSocket(httpServer);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messagesRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/client/dist")));
  app.get("*"), (req,res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
  }
}

httpServer.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  connectDB();
});
