import styles from "./Aside.module.css";
import OutTargetRoom from "./TargetRoom/OutTargetRoom/OutTargetRoom";
import InTargetRoom from "./TargetRoom/InTargetRoom/InTargetRoom";
import OutInTargetRoom from "./TargetRoom/OutInTargetRoom/OutInTargetRoom";
import Progress from "./Progress/Progress";
import NoneTargetRoom from "./TargetRoom/NoneTargetRoom/NoneTargetRoom";
import { roomDataType } from "@/types/types";
import StayTargetRoom from "./TargetRoom/StayTargetRoom/StayTargetRoom";
import NotSelectTargetRoom from "./TargetRoom/NotSelectTargetRoom/NotSelectTargetRoom";

type props = {
  targetRoom: roomDataType | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
  rooms_1f: roomDataType[];
  rooms_2f: roomDataType[];
  is1F: boolean;
};

const Aside = ({
  targetRoom,
  setTargetRoom,
  rooms_1f,
  rooms_2f,
  is1F,
}: props) => {
  // targetRoomのcleaningTypeにより返すコンポーネントを変える
  const selectTargetRoom = () => {
    switch (targetRoom?.cleaningType) {
      case "OUT":
        return (
          <OutTargetRoom
            targetRoom={targetRoom}
            setTargetRoom={setTargetRoom}
            // keyに固有値であるidを付与してoptionのdefaultValueを更新させる
            is1F={is1F}
            key={targetRoom.id}
          />
        );
      case "IN":
        return (
          <InTargetRoom
            targetRoom={targetRoom}
            setTargetRoom={setTargetRoom}
            // keyに固有値であるidを付与してoptionのdefaultValueを更新させる
            is1F={is1F}
            key={targetRoom.id}
          />
        );
      case "OUT-IN":
        return (
          <OutInTargetRoom
            targetRoom={targetRoom}
            setTargetRoom={setTargetRoom}
            // keyに固有値であるidを付与してoptionのdefaultValueを更新させる
            is1F={is1F}
            key={targetRoom.id}
          />
        );
      case "STAY":
        return (
          <StayTargetRoom
            targetRoom={targetRoom}
            setTargetRoom={setTargetRoom}
            // keyに固有値であるidを付与してoptionのdefaultValueを更新させる
            is1F={is1F}
            key={targetRoom.id}
          />
        );

      case "NONE":
        return (
          <NoneTargetRoom
            targetRoom={targetRoom}
            setTargetRoom={setTargetRoom}
            // keyに固有値であるidを付与してoptionのdefaultValueを更新させる
            is1F={is1F}
            key={targetRoom.id}
          />
        );
    }
  };
  return (
    <aside className={styles.aside}>
      <Progress rooms_1f={rooms_1f} rooms_2f={rooms_2f} />
      {/* targetRoomがnullでない場合はselectTargetRoomで適切なコンポーネントを返し、nullの場合は専用のコンポーネントを返す */}
      {targetRoom ? selectTargetRoom() : <NotSelectTargetRoom />}
    </aside>
  );
};

export default Aside;
