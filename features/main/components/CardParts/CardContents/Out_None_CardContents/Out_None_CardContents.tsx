import React from "react";
import styles from "./Out_None_CardContents.module.css";
import { roomDataType } from "@/types/types";

type props = {
  room: roomDataType;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const Out_None_CardContents = ({
  room,

  setTargetRoom,
}: props) => {
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
        <div className={styles.in_beds}>
          <p>Beds :</p>
          <p>{room.inBeds}</p>
        </div>
        <div className={styles.memo}>
          <p>Memo</p>
          <p>{room.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default Out_None_CardContents;
