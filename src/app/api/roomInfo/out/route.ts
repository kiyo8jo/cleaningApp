import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: Response) {
  const { id, cleaningType, nowBeds, out, outCleaning, inBeds, memo, is1F } =
    await req.json();
  const table = is1F ? "rooms_1f" : "rooms_2f";
  const { data, error } = await supabase
    .from(table)
    .update({
      cleaningType: cleaningType,
      nowBeds: nowBeds,
      out: out,
      outCleaning: outCleaning,
      inBeds: inBeds,
      memo: memo,
      inCleaning: 0,
      stay: 0,
      inAdult: 0,
      inKidsInf: 0,
      inInf: 0,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
