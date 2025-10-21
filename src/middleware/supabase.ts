import { createServerClient } from "../db/supabase";
import type { Request, Response, NextFunction } from "express";

export default async function supabase(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const client = createServerClient(req, res);

  req.supabase = client;

  next();
}
