import { roomDataType } from "@/types/types";
import styles from "./StayCardContents.module.css";

type props = {
  room: roomDataType;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const StayCardContents = ({ room, setTargetRoom }: props) => {
  return (
    <div className={styles.container} onClick={() => setTargetRoom(room)}>
      <div className={styles.out_container}>
        <p>NowBeds</p>
        <p>{room.nowBeds}</p>
      </div>
      <div className={styles.arrow}>
        <p>→</p>
      </div>
      <div className={styles.in_container}>
        <div>
          <p>Type :</p>
          <p>{room.stayCleaningType ? "Normal" : "Eco"}</p>
        </div>
        <div className={styles.in_beds}>
          <p>Beds :</p>
          <p>{room.inBeds}</p>
        </div>
        <div className={styles.in_guests}>
          <p>Guests :</p>
          <p>{`${room.inAdult}/${room.inInf}/${room.inKidsInf}`}</p>
        </div>
        <div className={styles.memo}>
          <p>Memo</p>
          <p>{room.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default StayCardContents;
