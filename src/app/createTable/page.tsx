"use client";
import { roomDataType } from "@/types/types";
import styles from "./page.module.css";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useRouter } from "next/navigation";

const page = () => {
  const [newData_1F, setNewData_1F] = useState<roomDataType[] | null>(null);
  const [newData_2F, setNewData_2F] = useState<roomDataType[] | null>(null);
  const router = useRouter();

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<roomDataType[] | null>>
  ) => {
    if (e.target.files?.length) {
      const reader = new FileReader();

      reader.readAsArrayBuffer(e.target.files![0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target!.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parseData: roomDataType[] = XLSX.utils.sheet_to_json(sheet);
        setFunction(parseData);
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const API_URL = process.env.NEXT_PUBLIC_API_URL!;

    await fetch(`${API_URL}/api/createTable`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newData_1F, newData_2F }),
    });
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <div className={styles.input}>
          <label htmlFor="1F">1Fのデータを選択</label>
          <input
            id="1F"
            type="file"
            accept=".xlsx"
            onChange={(e) => handleFileUpload(e, setNewData_1F)}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="2F">2Fのデータを選択</label>
          <input
            id="2F"
            type="file"
            accept=".xlsx"
            onChange={(e) => handleFileUpload(e, setNewData_2F)}
          />
        </div>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          {newData_1F && newData_2F && (
            <button className={styles.submit_btn} type="submit">
              作成する
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
