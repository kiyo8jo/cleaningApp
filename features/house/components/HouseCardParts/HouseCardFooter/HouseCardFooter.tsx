import { roomDataType } from "@/types/types";
import Out_None_HouseCardFooter from "./Out_None_HouseCardFooter/Out_None_HouseCardFooter";
import In_OutIn_Stay_HouseCardFooter from "./In_OutIn_Stay_HouseCardFooter/In_OutIn_Stay_HouseCardFooter";

type props = {
  room: roomDataType;
};

const HouseCardFooter = ({ room }: props) => {
  // cleaningTypeに合ったcardFooterを返す関数
  const selectHouseCardFooter = (room: roomDataType) => {
    switch (room.cleaningType) {
      case "OUT":
        return <Out_None_HouseCardFooter room={room} />;
      case "NONE":
        return <Out_None_HouseCardFooter room={room} />;
      case "IN":
        return <In_OutIn_Stay_HouseCardFooter room={room} />;
      case "OUT-IN":
        return <In_OutIn_Stay_HouseCardFooter room={room} />;
      case "STAY":
        return <In_OutIn_Stay_HouseCardFooter room={room} />;
    }
  };
  return selectHouseCardFooter(room);
};

export default HouseCardFooter;
