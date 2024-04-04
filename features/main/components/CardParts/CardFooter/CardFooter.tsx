import React from "react";
import styles from "./CardFooter.module.css";
import InCardFooterParts from "./CardFooterParts/InCardFooterParts/InCardFooterParts";
import { roomDataType } from "@/types/types";
import StayCardFooterParts from "./CardFooterParts/StayCardFooterParts/StayCardFooterParts";
import NoneCardFooterParts from "./CardFooterParts/NoneCardFooterParts/NoneCardFooterParts";
import OutCardFooterParts from "./CardFooterParts/OutCardFooterParts/OutCardFooterParts";
import OutInFooterParts from "./CardFooterParts/OutInFooterParts/OutInFooterParts";

type props = {
  room: roomDataType;
  getRooms: () => Promise<void>;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
};

const CardFooter = ({ room, getRooms, setTargetRoom }: props) => {
  // 清掃方法にあったフッターを返す関数
  const selectFooter = (room: roomDataType) => {
    switch (room.cleaningType) {
      case "OUT":
        return (
          <OutCardFooterParts
            room={room}
            getRooms={getRooms}
            setTargetRoom={setTargetRoom}
          />
        );
      case "OUT-IN":
        return (
          <OutInFooterParts
            room={room}
            getRooms={getRooms}
            setTargetRoom={setTargetRoom}
          />
        );
      case "IN":
        return <InCardFooterParts room={room} />;
      case "STAY":
        return (
          <StayCardFooterParts
            room={room}
            getRooms={getRooms}
            setTargetRoom={setTargetRoom}
          />
        );
      case "NONE":
        return <NoneCardFooterParts room={room}/>;
    }
  };
  return <div className={styles.card_footer}>{selectFooter(room)}</div>;
};

export default CardFooter;
