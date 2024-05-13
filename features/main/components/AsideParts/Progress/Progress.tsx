import { roomDataType } from "@/types/types";
import styles from "./Progress.module.css";

type props = {
  rooms_1f: roomDataType[];
  rooms_2f: roomDataType[];
};

const Progress = ({ rooms_1f, rooms_2f }: props) => {
  // カウントアップ処理
  const allRooms = [...rooms_1f, ...rooms_2f];
  let outTotal = 0;
  let outCount = 0;
  let inTotal = 0;
  let inCount = 0;
  let stayTotal = 0;
  let stayCount = 0;
  allRooms.map((room) => {
    if (room.cleaningType === "OUT") {
      outTotal++;
      if (room.outCleaning) {
        outCount++;
      }
    }
    if (room.cleaningType === "IN") {
      inTotal++;
      if (room.inCleaning) {
        inCount++;
      }
    }
    if (room.cleaningType === "OUT-IN") {
      outTotal++;
      inTotal++;
      if (room.outCleaning) {
        outCount++;
      }
      if (room.inCleaning) {
        inCount++;
      }
    }
    if (room.cleaningType === "STAY") {
      stayTotal++;
      if (room.stayCleaning) {
        stayCount++;
      }
    }
  });
  return (
    <section className={styles.status_container}>
      <h2 className={styles.title}>進行状況</h2>
      <div className={styles.cleaning_status}>
        <p>OUT</p>
        <p>{`${outCount}/${outTotal}`}</p>
      </div>
      <div className={styles.cleaning_status}>
        <p>IN</p>
        <p>{`${inCount}/${inTotal}`}</p>
      </div>
      <div className={styles.cleaning_status}>
        <p>STAY</p>
        <p>{`${stayCount}/${stayTotal}`}</p>
      </div>
    </section>
  );
};

export default Progress;
