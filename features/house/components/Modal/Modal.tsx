"use client";

import styles from "./Modal.module.css";
import { roomDataType } from "@/types/types";
import { scrollBlockCancel } from "@/utils/hooks";

type props = {
  targetRoom: roomDataType | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<roomDataType | null>>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  is1F: boolean;
};

const Modal = ({ targetRoom, setTargetRoom, setIsModal, is1F }: props) => {
  // modalのボタンを押した際にモーダルを閉じる関数
  const closeModal = () => {
    setTargetRoom(null);
    setIsModal(false);
    // スクロールの禁止を解除する関数
    scrollBlockCancel();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;
    // API名を各cleaningTypeの小文字にしているので大文字であるtargetRoomのcleaningTypeを小文字に変換
    const lowerCleaningType = targetRoom!.cleaningType.toLowerCase();
    
    // 小文字に変換したcleaningTypeを使って対応するAPIをたたく
    await fetch(`${API_URL}/api/modal/${lowerCleaningType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: targetRoom!.id,
        is1F,
      }),
    });
    //モーダルを閉じる
    closeModal();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <p>
            {targetRoom!.id}({targetRoom!.type})
          </p>
          <p>{targetRoom!.cleaningType}</p>
        </div>
        <div className={styles.modal_contents}>contents</div>
        <div className={styles.modal_footer}>
          {/* targetRoomの清掃ステータスを清掃完了に変更するボタン */}
          <button type="submit">情報を送信</button>
          {/* 入力をキャンセルするボタン */}
          <button
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
              closeModal();
              e.preventDefault();
            }}
          >
            キャンセル
          </button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
