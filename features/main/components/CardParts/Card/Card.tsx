import { roomDataType } from "@/types/types";
import CardHeader from "../CardHeader/CardHeader";
import CardContents from "../CardContents/CardContents";
import CardFooter from "../CardFooter/CardFooter";
import styles from "./Card.module.css";

type props = {
  room: roomDataType;
  getRooms: () => Promise<void>;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const Card = ({ room, getRooms, setTargetRoom }: props) => {
  return (
    // 共通のクラスとcleaningTypeの種類により異なるcardの色を付与するクラス
    <div
      className={`${styles.card} ${
        room.cleaningType ? styles[room.cleaningType] : ""
      }`}
    >
      <CardHeader room={room} />
      <CardContents room={room} setTargetRoom={setTargetRoom} />
      <CardFooter
        room={room}
        setTargetRoom={setTargetRoom}
        getRooms={getRooms}
      />
    </div>
  );
};

export default Card;
