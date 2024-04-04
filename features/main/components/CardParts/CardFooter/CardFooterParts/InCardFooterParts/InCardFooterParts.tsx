import React from "react";
import styles from '../CardFooterParts.module.css'
import { roomDataType } from "@/types/types";


type props = {
  room: roomDataType;
};

const InCardFooterParts = ({ room }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
      {room.inCleaning ? <p>清掃済み</p> : <p>未清掃</p>}
      </div>
    </div>
  );
};

export default InCardFooterParts;
