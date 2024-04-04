import { roomDataType } from "@/types/types";
import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

type req = {
  newData_1F: roomDataType[];
  newData_2F: roomDataType[];
};

export async function POST(req: Request, res: Response) {
  try {
    const { newData_1F, newData_2F }: req = await req.json();

    await supabase.from("rooms_1f").delete().neq("id", 0);
    await supabase.from("rooms_2f").delete().neq("id", 0);

    await Promise.all(
      newData_1F!.map(
        async (_data) =>
          await supabase.from("rooms_1f").insert({
            id: _data.id,
            type: _data.type,
            cleaningType: _data.cleaningType,
            out: _data.out,
            outCleaning: _data.outCleaning,
            inCleaning: _data.inCleaning,
            stay: _data.stay,
            stayCleaning: _data.stayCleaning,
            stayCleaningType: _data.stayCleaningType,
            noneCleaning: _data.noneCleaning,
            nowBeds: _data.nowBeds,
            inBeds: _data.inBeds,
            inAdult: _data.inAdult,
            inInf: _data.inInf,
            inKidsInf: _data.inKidsInf,
            memo: "",
          })
      )
    );
    await Promise.all(
      newData_2F!.map(
        async (_data) =>
          await supabase.from("rooms_2f").insert({
            id: _data.id,
            type: _data.type,
            cleaningType: _data.cleaningType,
            out: _data.out,
            outCleaning: _data.outCleaning,
            inCleaning: _data.inCleaning,
            stay: _data.stay,
            stayCleaning: _data.stayCleaning,
            stayCleaningType: _data.stayCleaningType,
            noneCleaning: _data.noneCleaning,
            nowBeds: _data.nowBeds,
            inBeds: _data.inBeds,
            inAdult: _data.inAdult,
            inInf: _data.inInf,
            inKidsInf: _data.inKidsInf,
            memo: "",
          })
      )
    );
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return { message: "API ERROR" };
  }
}
