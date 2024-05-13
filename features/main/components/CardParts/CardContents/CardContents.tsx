import { roomDataType } from "@/types/types";
import Out_None_CardContents from "./Out_None_CardContents/Out_None_CardContents";
import In_OutIn_Stay_CardContents from "./In_OutIn_Stay_CardContents/In_OutIn_Stay_CardContents";
import StayCardContents from "./StayCardContents/StayCardContents";
import styles from "./CardContents.module.css";

type props = {
  room: roomDataType;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const CardContents = ({ room, setTargetRoom }: props) => {
  const selectCard = (room: roomDataType) => {
    switch (room.cleaningType) {
      case "OUT":
        return (
          <Out_None_CardContents room={room} setTargetRoom={setTargetRoom} />
        );
      case "IN":
        return (
          <In_OutIn_Stay_CardContents
            room={room}
            setTargetRoom={setTargetRoom}
          />
        );
      case "OUT-IN":
        return (
          <In_OutIn_Stay_CardContents
            room={room}
            setTargetRoom={setTargetRoom}
          />
        );
      case "STAY":
        return <StayCardContents room={room} setTargetRoom={setTargetRoom} />;
      case "NONE":
        return (
          <Out_None_CardContents room={room} setTargetRoom={setTargetRoom} />
        );
    }
  };
  return <div className={styles.card_contents}>{selectCard(room)}</div>;
};

export default CardContents;
