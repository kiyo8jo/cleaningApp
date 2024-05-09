import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: Response) {
  const {
    id,
    cleaningType,
    nowBeds,
    stay,
    stayCleaning,
    stayCleaningType,
    inBeds,
    inAdult,
    inInf,
    inKidsInf,
    memo,
    is1F,
  } = await req.json();
  const table = is1F ? "rooms_1f" : "rooms_2f";
  const { data, error } = await supabase
    .from(table)
    .update({
      cleaningType: cleaningType,
      nowBeds: nowBeds,
      stay: stay,
      stayCleaning: stayCleaning,
      stayCleaningType: stayCleaningType,
      inBeds: inBeds,
      inAdult: inAdult,
      inInf: inInf,
      inKidsInf: inKidsInf,
      memo: memo,
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
