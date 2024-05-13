import { roomDataType } from "@/types/types";
import { scrollBlock } from "@/utils/hooks";
import HouseCardHeader from "../HouseCardHeader/HouseCardHeader";
import HouseCardContents from "../HouseCardContents/HouseCardContents";
import HouseCardFooter from "../HouseCardFooter/HouseCardFooter";
import styles from "./HouseCard.module.css";

type props = {
  room: roomDataType;
  getRooms: () => Promise<void>;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HouseCard = ({ room, setTargetRoom, setIsModalOpen }: props) => {
  return (
    // 共通のクラス+cleaningTypeの種類により異なるcardの色を付与するクラス
    <div
      className={`${styles.house_card} ${
        room.cleaningType ? styles[room.cleaningType] : ""
      }`}
      // targetRoomについてのモーダルを開き、スクロールを禁止する
      onClick={() => {
        setTargetRoom(room);
        setIsModalOpen(true);
        scrollBlock();
      }}
    >
      <HouseCardHeader room={room} />
      <HouseCardContents room={room} />
      <HouseCardFooter room={room} />
    </div>
  );
};

export default HouseCard;
