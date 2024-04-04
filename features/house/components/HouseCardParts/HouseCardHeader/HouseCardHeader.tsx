import { roomDataType } from "@/types/types";
import styles from "./HouseCardHeader.module.css";

type props = { room: roomDataType };

const HouseCardHeader = ({ room }: props) => {
  return (
    <div className={styles.card_header}>
      <p>{`${room.id}(${room.type})`}</p>
      <p>{`${room.cleaningType}`}</p>
    </div>
  );
};

export default HouseCardHeader;
