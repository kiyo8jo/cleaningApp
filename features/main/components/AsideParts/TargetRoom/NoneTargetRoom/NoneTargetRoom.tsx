"use client";

import { useState } from "react";
import styles from "../../Aside.module.css";
import {
  BedsStatusOptions,
  isCleaningOptions,
  roomStatusOptions,
} from "@/utils/options";
import { createObjOptions, createOptions, sanitize } from "@/utils/hooks";
import { roomDataType } from "@/types/types";

type props = {
  targetRoom: roomDataType | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
  is1F: boolean;
};

const NoneTargetRoom = ({ targetRoom, setTargetRoom, is1F }: props) => {
  // selectタグで選択したoption用のstate
  const [cleaningType, setCleaningType] = useState<string>(
    targetRoom!.cleaningType
  );
  const [nowBeds, setNowBeds] = useState<number>(targetRoom!.nowBeds);
  const [inBeds, setInBeds] = useState<number>(targetRoom!.inBeds);
  const [noneCleaning, setNoneCleaning] = useState<number>(
    Number(targetRoom!.noneCleaning)
  );
  const [memo, setMemo] = useState<string>(targetRoom!.memo);

  // selectタグで選択したoptionをsubmitした時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/roomInfo/none`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: targetRoom!.id,
        cleaningType,
        nowBeds,
        inBeds,
        noneCleaning,
        memo,
        is1F,
      }),
    });
    setTargetRoom(null);
  };

  return (
    <section className={styles.targetRoom_container}>
      <h2 className={styles.title}>{targetRoom?.id}を編集</h2>
      <form onSubmit={handleSubmit}>
        {/* 部屋のステータス */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="room_status">CleaningType</label>
          <select
            id="room_status"
            defaultValue={targetRoom?.cleaningType}
            onChange={(e) => setCleaningType(e.target.value)}
          >
            {createOptions(roomStatusOptions)}
          </select>
        </div>

        <hr />

        {/* 現在のベッド数 */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="now_beds">NowBeds</label>
          <select
            id="now_beds"
            defaultValue={targetRoom?.nowBeds}
            onChange={(e) => setNowBeds(Number(e.target.value))}
          >
            {createOptions(BedsStatusOptions)}
          </select>
        </div>

        <hr />

        {/* 清掃済みか否か */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="is_cleaning">CleaningStatus</label>
          <select
            id="is_cleaning"
            defaultValue={Number(targetRoom?.outCleaning)}
            onChange={(e) => setNoneCleaning(Number(e.target.value))}
          >
            {createObjOptions(isCleaningOptions)}
          </select>
        </div>

        {/* 次回IN時のベッド数 */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="next_beds">NextBeds</label>
          <select
            id="next_beds"
            defaultValue={targetRoom?.inBeds}
            onChange={(e) => setInBeds(Number(e.target.value))}
          >
            {createOptions(BedsStatusOptions)}
          </select>
        </div>

        {/* メモ */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="memo">Memo</label>
          <textarea
          // textareaのvalueはサニタイズし、supabaseのemptyやnullを文字として取得したくないので''を返す
            value={sanitize(memo) ?? ""}
            id="memo"
            onChange={(e) => setMemo(e.target.value)}
          ></textarea>
        </div>
        
        {/* ボタン */}
        <div className={styles.button_container}>
          {/* データの更新 */}
          <button type="submit">変更</button>
          {/* フォームを閉じ、初期化 */}
          <button
            onClick={(e) => {
              setTargetRoom(null);
              e.preventDefault();
            }}
          >
            キャンセル
          </button>
        </div>
      </form>
    </section>
  );
};

export default NoneTargetRoom;
