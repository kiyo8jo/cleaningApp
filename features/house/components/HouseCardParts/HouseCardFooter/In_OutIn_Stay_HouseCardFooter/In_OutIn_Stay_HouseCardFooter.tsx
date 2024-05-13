import { roomDataType } from "@/types/types";
import styles from "./In_OutIn_Stay_HouseCardFooter.module.css";

type props = {
  room: roomDataType;
};

const In_OutIn_Stay_HouseCardFooter = ({ room }: props) => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_right_container}>
        <div className={styles.beds}>
          <p className={styles.beds}>{`${room.nowBeds}→${room.inBeds}`}</p>
        </div>
        <div className={styles.guests}>
          <p>
            {room.inAdult}/{room.inInf}/{room.inKidsInf}
          </p>
        </div>
      </div>
      <div className={styles.footer_left_container}>{room.memo}</div>
    </div>
  );
};

export default In_OutIn_Stay_HouseCardFooter;
