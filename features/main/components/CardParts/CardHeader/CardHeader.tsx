import React from "react";
import styles from "./CardHeader.module.css";
import { roomDataType } from "@/types/types";

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
