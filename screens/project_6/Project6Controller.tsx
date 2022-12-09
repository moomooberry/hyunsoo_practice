import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Add from "../../pages/add";
import moo from "../../pages/api/axios";
import ViewSix from "./Project6View";

const DEV_TOKEN1 = process.env.NEXT_PUBLIC_DEV_TOKEN1;
const DEV_PET1 = process.env.NEXT_PUBLIC_DEV_PET1;
const DEV_OS = process.env.NEXT_PUBLIC_DEV_OS;
const DEV_VERSION = process.env.NEXT_PUBLIC_DEV_VERSION;

export interface IBreathData {
  breathCnt: number;
  breathId: number;
  breathLevel: string;
  breathLevelNm: string;
  measureDate: string;
  petAge: number;
  petAgeLevel: any;
  petId: string;
}

const ControllerSix = () => {
  // const initialSetting = () => {};
  const [breathData, setBreathData] = useState<IBreathData[] | null>(null);
  const router = useRouter();
  useEffect(() => {
    moo
      .get(`/breath/${DEV_PET1}`, {
        headers: {
          "TT-OS": DEV_OS,
          "TT-Version": DEV_VERSION,
          Authorization: `Bearer ${DEV_TOKEN1}`,
        },
      })
      .then((res) => {
        setBreathData(res.data.result.breath);
      });
  }, []);
  console.log(breathData);

  const onClickAdd = () => {
    router.push("/add");
  };

  return <ViewSix breathData={breathData} onClickAdd={onClickAdd} />;
};

export default ControllerSix;