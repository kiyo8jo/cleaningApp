import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';


export async function GET(req: NextRequest) {
  let { data, error } = await supabase.from("rooms_2f").select("*").order("id");
  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}
