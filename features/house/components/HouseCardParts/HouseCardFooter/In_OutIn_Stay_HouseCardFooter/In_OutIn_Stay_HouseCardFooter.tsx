import { roomDataType } from "@/types/types";
import styles from "./In_OutIn_Stay_HouseCardFooter.module.css";

type props = {
  room: roomDataType;
};

const In_OutIn_Stay_HouseCardFooter = ({ room }: props) => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_right_container}>
        <div className={styles.beds}>2→1</div>
        <div className={styles.guests}>
          <p>3/2/1</p>
        </div>
      </div>
      <div className={styles.footer_left_container}>{room.memo}</div>
    </div>
  );
};

export default In_OutIn_Stay_HouseCardFooter;
