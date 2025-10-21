import httpStatus from "http-status-codes";
import type { Request, Response } from "express";

export interface SignInRequest extends Request {
  body: { email: string; password: string };
}

export interface SignUpRequest extends Request {
  body: { email: string; password: string };
}

export interface SignOutRequest extends Request {}

export const signUp = async (req: SignInRequest, res: Response) => {
  const { body, supabase } = req;

  if (!supabase) throw new Error("Supabase client is required for sign up");

  const supabaseRes = await supabase.auth.signUp(body);

  if (supabaseRes.error) throw supabaseRes.error;

  res.status(httpStatus.OK).json(supabaseRes.data.session);
};

export const signIn = async (req: SignUpRequest, res: Response) => {
  const { body, supabase } = req;

  if (!supabase) throw new Error("Supabase client is required for sign in");

  const supabaseRes = await supabase.auth.signInWithPassword(body);

  if (supabaseRes.error) throw supabaseRes.error;

  res.status(httpStatus.OK).json(supabaseRes.data.session);
};

export async function signOut(req: SignOutRequest, res: Response) {
  const { supabase } = req;

  if (!supabase) throw new Error("Supabase client is required for sign out");

  const supabaseRes = await supabase.auth.signOut();

  if (supabaseRes.error) throw supabaseRes.error;

  res.status(httpStatus.OK).json();
}

export default {
  signUp,
  signIn,
  signOut,
};
