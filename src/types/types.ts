export type roomDataType = {
  id: number;
  type: string;
  cleaningType: string;

  out: boolean;
  outCleaning: boolean;

  in: boolean;
  inCleaning: boolean;

  stay: boolean;
  stayCleaning: boolean;
  stayCleaningType: string;

  noneCleaning: boolean;

  nowBeds: number;
  inBeds: number;
  inAdult: number;
  inInf: number;
  inKidsInf: number;

  memo: string;
};
