import * as supabaseSsr from "@supabase/ssr";
import config from "../config/env";
import type { Request, Response } from "express";

export function createServerClient(req: Request, res: Response) {
  return supabaseSsr.createServerClient(
    config.supabaseUrl,
    config.supabaseAnonKey,
    {
      cookies: {
        getAll: async () =>
          Object.entries(req.cookies).map(([name, value]) => ({
            name,
            value,
          })),
        setAll: async (cookies) =>
          cookies.forEach(({ name, value, options }) => {
            res.cookie(name, value, {
              ...options,
              httpOnly: true,
              secure: false,
            });
          }),
      },
    }
  );
}
