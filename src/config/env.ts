import dotenv from "dotenv";

const nodeEnv = process.env.NODE_ENV || "production";

dotenv.config({ path: `.env.${nodeEnv}` });

interface Config {
  nodeEnv: string;
  url: string;
  port: number;
  supabaseUrl: string;
  supabaseAnonKey: string;
  cookieSecret: string;
}

const config: Config = {
  nodeEnv,
  url: process.env.URL || "http://localhost:3000",
  port: Number(process.env.PORT) || 3000,
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
  cookieSecret: process.env.COOKIE_SECRET || "",
};

export default config;
