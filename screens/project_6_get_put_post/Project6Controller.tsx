import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import moo from "../../api/mooApi";
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
  petAgeLevel: string;
  petId: string;
}

const ControllerSix = () => {
  //test dayjs library
  const now = dayjs(Date.now());
  const nowFormat = now.format("YYYYMMDDHHmmss");
  console.log(nowFormat);

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

  const onClickAdd = useCallback(() => {
    router.push("/project/project_6/add");
  }, [router]);

  const onClickEdit = useCallback(
    (breathId: number) => {
      router.push({
        pathname: `/project/project_6/edit`,
        query: {
          breathId,
        },
      });
    },
    [router]
  );

  return (
    <ViewSix
      breathData={breathData}
      onClickAdd={onClickAdd}
      onClickEdit={onClickEdit}
    />
  );
};

export default ControllerSix;
