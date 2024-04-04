import React, { useState } from "react";
import styles from "../../Aside.module.css";
import { createObjOptions, createOptions, sanitize } from "@/utils/hooks";
import {
  BedsStatusOptions,
  guestsOptions,
  isCleaningOptions,
  isNoticeOptions,
  roomStatusOptions,
} from "@/utils/options";
import { roomDataType } from "@/types/types";

type props = {
  targetRoom: roomDataType | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
  is1F: boolean;
};

const OutInTargetRoom = ({ targetRoom, setTargetRoom, is1F }: props) => {
  // selectタグで選択したoption用のstate
  const [cleaningType, setCleaningType] = useState<string>(
    targetRoom!.cleaningType
  );
  const [nowBeds, setNowBeds] = useState<number>(targetRoom!.nowBeds);
  const [out, setOut] = useState<number>(Number(targetRoom!.out));
  const [inCleaning, setInCleaning] = useState<number>(
    Number(targetRoom!.inCleaning)
  );
  const [inBeds, setInBeds] = useState<number>(targetRoom!.inBeds);
  const [inAdult, setInAdult] = useState<number>(targetRoom!.inAdult);
  const [inInf, setInInf] = useState<number>(targetRoom!.inInf);
  const [inKidsInf, setInKidsInf] = useState<number>(targetRoom!.inKidsInf);
  const [memo, setMemo] = useState<string>(targetRoom!.memo);

  // selectタグで選択したoptionをsubmitした時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/roomInfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: targetRoom!.id,
        cleaningType,
        nowBeds,
        out,
        inCleaning,
        inBeds,
        inAdult,
        inInf,
        inKidsInf,
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
          <label htmlFor="room_status">CleaningStatus</label>
          <select
            id="room_status"
            defaultValue={targetRoom?.cleaningType}
            onChange={(e) => setCleaningType(e.target.value)}
          >
            {createOptions(roomStatusOptions)}
          </select>
        </div>

        <hr />

        {/* OUTを通知済みか否か */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="is_out">OutStatus</label>
          <select
            id="is_out"
            defaultValue={Number(targetRoom?.out)}
            onChange={(e) => setOut(Number(e.target.value))}
          >
            {createObjOptions(isNoticeOptions)}
          </select>
        </div>

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
            defaultValue={Number(targetRoom?.inCleaning)}
            onChange={(e) => setInCleaning(Number(e.target.value))}
          >
            {createObjOptions(isCleaningOptions)}
          </select>
        </div>

        {/* INのベッド数 */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="in_beds">InBeds</label>
          <select
            id="in_beds"
            defaultValue={targetRoom?.inBeds}
            onChange={(e) => setInBeds(Number(e.target.value))}
          >
            {createOptions(BedsStatusOptions)}
          </select>
        </div>

        {/* INのゲスト内訳 */}
        {/* Adult */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="in_adult">Adult</label>
          <select
            id="in_adult"
            defaultValue={targetRoom?.inAdult}
            onChange={(e) => setInAdult(Number(e.target.value))}
          >
            {createOptions(guestsOptions)}
          </select>
        </div>
        {/* Inf */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="in_inf">Inf</label>
          <select
            id="in_inf"
            defaultValue={targetRoom?.inInf}
            onChange={(e) => setInInf(Number(e.target.value))}
          >
            {createOptions(guestsOptions)}
          </select>
        </div>
        {/* KidInf */}
        <div className={styles.targetRoom_status}>
          <label htmlFor="in_kids_inf">KidInf</label>
          <select
            id="in_kids_inf"
            defaultValue={targetRoom?.inKidsInf}
            onChange={(e) => setInKidsInf(Number(e.target.value))}
          >
            {createOptions(guestsOptions)}
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

export default OutInTargetRoom;
