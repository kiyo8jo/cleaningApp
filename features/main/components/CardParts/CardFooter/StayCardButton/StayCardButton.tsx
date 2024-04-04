import { roomDataType } from "@/types/types";
import { supabase } from "@/utils/supabaseClient";

type props = {
  room: roomDataType;
  getRooms: () => Promise<void>;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const StayCardButton = ({ room, getRooms, setTargetRoom }: props) => {
  // outの状態を変更する処理
  const changeButton = async (id: number) => {
    await supabase.from("rooms_1f").update({ stay: true }).eq("id", id);
    await supabase.from("rooms_2f").update({ stay: true }).eq("id", id);
    getRooms();
  };

  return (
    <div>
      {room.stay ? (
        <div>通知済み</div>
      ) : (
        <button
          onClick={() => {
            setTargetRoom(null);
            changeButton(room.id);
          }}
        >
          外出を通知
        </button>
      )}
    </div>
  );
};

export default StayCardButton;
