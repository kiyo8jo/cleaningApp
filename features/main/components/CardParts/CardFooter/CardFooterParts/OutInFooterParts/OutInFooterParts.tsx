import React from "react";
import styles from "../CardFooterParts.module.css";
import { roomDataType } from "@/types/types";
import OutCardButton from "../../OutCardButton/OutCardButton";

type props = {
  room: roomDataType;
  getRooms: () => Promise<void>;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const OutInFooterParts = ({ room, getRooms, setTargetRoom }: props) => {
  return (
    <div className={styles.container}>
      <OutCardButton
        room={room}
        getRooms={getRooms}
        setTargetRoom={setTargetRoom}
      />
      <div className={styles.status}>
        {room.inCleaning ? <p>清掃済み</p> : <p>未清掃</p>}
      </div>
    </div>
  );
};

export default OutInFooterParts;
