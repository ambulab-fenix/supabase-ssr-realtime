import type { User, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../db/types";

declare module "express" {
  interface Request {
    user?: User;
    supabase?: SupabaseClient<Database>;
  }
}
