import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: Response) {
  const { id, is1F } = await req.json();
  const table = is1F ? "rooms_1f" : "rooms_2f";
  const { data, error } = await supabase
    .from(table)
    .update({
      noneCleaning: true,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
