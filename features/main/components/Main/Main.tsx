"use client";

import styles from "./Main.module.css";
import Card from "../CardParts/Card/Card";
import { useEffect, useState } from "react";
import FloorChangeButton from "../FloorChangeButton/FloorChangeButton";
import Aside from "../AsideParts/Aside";
import { getRooms_1f, getRooms_2f } from "@/utils/hooks";
import { roomDataType } from "@/types/types";

const Main = () => {
  // useEffectでapiをたたき、取得したデータのstate
  const [rooms_1f, setRooms_1f] = useState<roomDataType[]>([]);
  const [rooms_2f, setRooms_2f] = useState<roomDataType[]>([]);

  // 1Fと2Fのどちらを表示させるかのstate
  const [is1F, setIs1F] = useState<boolean>(true);

  // asideに表示させる部屋のstate
  const [targetRoom, setTargetRoom] = useState<roomDataType | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL!;

  // apiをたたいて1Fのデータを取得する関数
  const getRooms_1f = async (API_URL: string) => {
    const res_1f = await fetch(`${API_URL}/api/rooms/1f`, {
      cache: "no-store",
    });
    const rooms_1f: roomDataType[] = await res_1f.json();
    return rooms_1f;
  };
  // apiをたたいて2Fのデータを取得する関数
  const getRooms_2f = async (API_URL: string) => {
    const res_2f = await fetch(`${API_URL}/api/rooms/2f`, {
      cache: "no-store",
    });
    const rooms_2f: roomDataType[] = await res_2f.json();
    return rooms_2f;
  };

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
