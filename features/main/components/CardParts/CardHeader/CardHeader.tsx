import { roomDataType } from "@/types/types";
import styles from "./CardHeader.module.css";

type props = { room: roomDataType };

const CardHeader = ({ room }: props) => {
  return (
    <div className={styles.card_header}>
      <p>{`${room.id}(${room.type})`}</p>
      <p>{`${room.cleaningType}`}</p>
    </div>
  );
};

export default CardHeader;
