"use client";

import { useEffect, useState } from "react";
import { getRooms_1f, getRooms_2f } from "@/utils/hooks";
import { roomDataType } from "@/types/types";
import FloorChangeButton from "../FloorChangeButton/FloorChangeButton";
import Card from "../CardParts/Card/Card";
import Aside from "../AsideParts/Aside";
import styles from "./Main.module.css";

const Main = () => {
  // useEffectでapiをたたき、取得したデータのstate
  const [rooms_1f, setRooms_1f] = useState<roomDataType[]>([]);
  const [rooms_2f, setRooms_2f] = useState<roomDataType[]>([]);

  // 1Fと2Fのどちらを表示させるかのstate
  const [is1F, setIs1F] = useState<boolean>(true);

  // asideに表示させる部屋のstate
  const [targetRoom, setTargetRoom] = useState<roomDataType | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL!;

  const getRooms = async (): Promise<void> => {
    // apiをたたいて1Fと2Fのデータを取得しstateにセット
    setRooms_1f(await getRooms_1f(API_URL));
    setRooms_2f(await getRooms_2f(API_URL));
  };

  useEffect(() => {
    const doGetRooms = async () => await getRooms();
    doGetRooms();
  }, [targetRoom]);

  return (
    <main className={styles.main}>
      {/* 1Fと2Fの切り替えボタン */}
      <FloorChangeButton
        is1F={is1F}
        setIs1F={setIs1F}
        targetRoom={targetRoom}
      />
      <div className={styles.wrapper}>
        <div className={styles.card_container}>
          {/* 切り替えボタンに応じて表示するCardを変更する */}
          {is1F
            ? rooms_1f.map((room: roomDataType) => (
                <Card
                  room={room}
                  getRooms={getRooms}
                  setTargetRoom={setTargetRoom}
                  key={room.id}
                />
              ))
            : rooms_2f.map((room: roomDataType) => (
                <Card
                  room={room}
                  getRooms={getRooms}
                  setTargetRoom={setTargetRoom}
                  key={room.id}
                />
              ))}
        </div>
        <Aside
          targetRoom={targetRoom}
          setTargetRoom={setTargetRoom}
          rooms_1f={rooms_1f}
          rooms_2f={rooms_2f}
          is1F={is1F}
        />
      </div>
    </main>
  );
};

export default Main;
