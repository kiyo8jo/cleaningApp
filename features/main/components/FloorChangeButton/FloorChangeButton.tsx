import { roomDataType } from "@/types/types";
import styles from "./FloorChangeButton.module.css";

type props = {
  is1F: boolean;
  setIs1F: React.Dispatch<React.SetStateAction<boolean>>;
  targetRoom: roomDataType | null;
};

const FloorChangeButton = ({ is1F, setIs1F, targetRoom }: props) => {
  return (
    // targetRoomが選択されている場合、操作できなくさせるcssを持つクラスを付与
    <div
      className={`${styles.btn_container} ${targetRoom && styles.not_select}`}
    >
      <div
        onClick={() => {
          setIs1F((prev: boolean) => !prev);
        }}
        className={is1F ? `${styles.btn} ${styles.active}` : styles.btn}
      >
        1F
      </div>
      <div
        onClick={() => {
          setIs1F((prev: boolean) => !prev);
        }}
        className={is1F ? styles.btn : `${styles.btn} ${styles.active}`}
      >
        2F
      </div>
    </div>
  );
};

export default FloorChangeButton;
