import { roomDataType } from "@/types/types";
import { getCheck, getKey } from "@/utils/hooks";
import styles from "./HouseCardContents.module.css";

type props = {
  room: roomDataType;
};

const HouseCardContents = ({ room }: props) => {
  return (
    <div className={styles.card_contents}>
      {/* 鍵の返却状況のマーク */}
      {getKey(room)}
      {/* 清掃状況のマーク */}
      {getCheck(room)}
    </div>
  );
};

export default HouseCardContents;
