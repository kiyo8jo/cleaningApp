"use client";

import { useEffect, useState } from "react";
import { roomDataType } from "@/types/types";
import { getRooms_1f, getRooms_2f } from "@/utils/hooks";
import FloorChangeButton from "../../../main/components/FloorChangeButton/FloorChangeButton";
import HouseCard from "../HouseCardParts/HouseCard/HouseCard";
import Modal from "../Modal/Modal";
import styles from "./HouseMain.module.css";

const HouseMain = () => {
  // useEffectでapiをたたき、取得したデータのstate
  const [rooms_1f, setRooms_1f] = useState<roomDataType[]>([]);
  const [rooms_2f, setRooms_2f] = useState<roomDataType[]>([]);

  // 1Fと2Fのどちらを表示させるかのstate
  const [is1F, setIs1F] = useState<boolean>(true);

  // modalを表示させるか否かのstate
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // modalに表示させる部屋のstate
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
  }, [targetRoom?.cleaningType]);

  return (
    <div className={styles.container}>
      {/* 1Fと2Fの切り替えボタン */}
      <FloorChangeButton
        is1F={is1F}
        setIs1F={setIs1F}
        targetRoom={targetRoom}
      />
      {isModalOpen && (
        <Modal
          targetRoom={targetRoom}
          setTargetRoom={setTargetRoom}
          setIsModal={setIsModalOpen}
          is1F={is1F}
        />
      )}
      {/* 1Fと2Fの切り替えボタンに応じて表示するものを切り替える */}
      <div className={styles.card_container}>
        {is1F
          ? rooms_1f.map((room: roomDataType) => (
              <HouseCard
                room={room}
                getRooms={getRooms}
                setIsModalOpen={setIsModalOpen}
                setTargetRoom={setTargetRoom}
                key={room.id}
              />
            ))
          : rooms_2f.map((room: roomDataType) => (
              <HouseCard
                room={room}
                getRooms={getRooms}
                setIsModalOpen={setIsModalOpen}
                setTargetRoom={setTargetRoom}
                key={room.id}
              />
            ))}
      </div>
    </div>
  );
};

export default HouseMain;
