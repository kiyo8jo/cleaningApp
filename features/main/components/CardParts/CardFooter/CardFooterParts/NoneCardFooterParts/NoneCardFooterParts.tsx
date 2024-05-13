import { roomDataType } from "@/types/types";
import styles from "../CardFooterParts.module.css";

type props = {
  room: roomDataType;
};

const NoneCardFooterParts = ({ room }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        {room.noneCleaning ? <p>清掃済み</p> : <p>未清掃</p>}
      </div>
    </div>
  );
};

export default NoneCardFooterParts;
