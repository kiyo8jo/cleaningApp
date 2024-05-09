import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: Response) {
  const { id, cleaningType, nowBeds, inBeds, noneCleaning, is1F, memo } =
    await req.json();
  const table = is1F ? "rooms_1f" : "rooms_2f";
  const { data, error } = await supabase
    .from(table)
    .update({
      cleaningType: cleaningType,
      nowBeds: nowBeds,
      inCleaning: 0,
      stay: 0,
      inBeds: inBeds,
      noneCleaning: noneCleaning,
      inAdult: 0,
      inChild: 0,
      inInf: 0,
      memo: memo,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
