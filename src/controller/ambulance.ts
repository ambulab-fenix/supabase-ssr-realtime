import type { Request, Response } from "express";

export interface WatchRequest extends Request {}

export function watch(req: WatchRequest, res: Response) {
  const { user, supabase } = req;

  if (!supabase)
    throw new Error("Supabase client is required to watch ambulances");
  if (!user) throw new Error("You must be authenticated to watch ambulances");

  const channel = supabase
    .channel(`ambulance-${user.id}`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "ambulance" },
      (payload) => {
        switch (payload.eventType) {
          case "INSERT":
            res.json(payload.new);
            break;
          case "UPDATE":
            res.json(payload.new);
            break;
          case "DELETE":
            res.json(payload.old);
        }
      }
    )
    .subscribe((status, error) => {
      if (error) {
        throw error;
      } else {
        console.log(status);
      }
    });
}

export default {
  watch,
};
