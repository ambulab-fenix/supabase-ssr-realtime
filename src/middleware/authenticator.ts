import type { Request, Response, NextFunction } from "express";

export default async function authenticator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { supabase } = req;

  if (!supabase)
    throw new Error("Supabase client is required for authentication");

  try {
    const res = await supabase.auth.getUser();

    req.user = res.data.user ?? undefined;
  } catch (_) {}

  next();
}
