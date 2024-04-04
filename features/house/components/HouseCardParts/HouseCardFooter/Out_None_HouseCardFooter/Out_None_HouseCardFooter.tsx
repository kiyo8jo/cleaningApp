import { roomDataType } from "@/types/types";
import styles from "./Out_None_HouseCardFooter.module.css";

type props = {
  room: roomDataType;
};

const Out_None_HouseCardFooter = ({ room }: props) => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_right_container}>
        <p className={styles.beds}>{`${room.nowBeds}→${room.inBeds}`}</p>
      </div>
      <div className={styles.footer_left_container}>{room.memo}</div>
    </div>
  );
};

export default Out_None_HouseCardFooter;
