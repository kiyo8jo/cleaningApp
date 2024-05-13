import { roomDataType } from "@/types/types";
import StayCardButton from "../../StayCardButton/StayCardButton";
import styles from "../CardFooterParts.module.css";

type props = {
  room: roomDataType;
  getRooms: () => Promise<void>;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const StayCardFooterParts = ({ room, getRooms, setTargetRoom }: props) => {
  return (
    <div className={styles.container}>
      <StayCardButton
        room={room}
        getRooms={getRooms}
        setTargetRoom={setTargetRoom}
      />
      <div className={styles.status}>
        {room.stayCleaning ? <p>清掃済み</p> : <p>未清掃</p>}
      </div>
    </div>
  );
};

export default StayCardFooterParts;
