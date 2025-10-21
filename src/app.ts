import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import config from "./config/env";
import authRoutes from "./router/auth";
import ambulanceRoutes from "./router/ambulance";
import authenticator from "./middleware/authenticator";
import supabase from "./middleware/supabase";

const app = express();

app.use(cookieParser(config.cookieSecret));
app.use(supabase);
app.use(express.json());
app.use(express.static("public"));
app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :user-agent"
  )
);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/ambulances", authenticator, ambulanceRoutes);

export default app;
