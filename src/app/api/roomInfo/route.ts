import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const {
    id,
    cleaningType,
    nowBeds,
    out,
    inCleaning,
    is1F,
    inBeds,
    inAdult,
    inInf,
    inKidsInf,
    memo,
  } = await req.json();
  const table = is1F ? "rooms_1f" : "rooms_2f";
  const { data, error } = await supabase
    .from(table)
    .update({
      cleaningType: cleaningType,
      nowBeds: nowBeds,
      out: out,
      inCleaning: inCleaning,
      inBeds: inBeds,
      inAdult: inAdult,
      inKidsInf: inKidsInf,
      inInf: inInf,
      memo: memo,
    })
    .eq("id", id);


  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
