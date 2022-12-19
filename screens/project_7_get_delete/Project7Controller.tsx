import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import ViewSeven from "./Project7View";

import apiFetchGet from "../../api/clinic/custmain";
import { AxiosError } from "axios";
import getConsultHistory from "../../api/clinic/getConsultHistory";
import { useRouter } from "next/router";
import deleteConsultHistory from "../../api/clinic/deleteConsultHistory";

export interface ApiData {
  bannerGbn: string;
  title: string;
  body: string;
}

export interface ConsultData {
  consultId: number;
  expertName: string;
  expertId: string;
  expertPhoto: string;
  expertCode: ExportCode;
  exclusive: false;
  petName: string;
  petPhoto: string;
  catNm: string;
  startTime: number;
  endTime: number;
  status: Status;
  payState: PayState;
  epilogState: EpliogState;
  epilogRecordDay: number;
  epilogPoint: number;
  threeDaysPass: true;
}

type ExportCode = "A" | "B" | "C" | "D";
type Status = "PAID" | "REC" | "APP" | "EXP" | "ERR";
type PayState = "PAID" | "REFN";
type EpliogState =
  | "NEW"
  | "EDIT"
  | "DONE"
  | "DEL"
  | "OVER"
  | "COMP"
  | "NONE"
  | "ERR";

const ControllerSeven = () => {
  const [toggle, setToggle] = useState("✅");
  //const [moo, setMoo] = useState(null);
  const click = useRef(0);
  //const fruits = useRef(["딸기", "포도", "사과"]);
  const [apiData, setApiData] = useState<ApiData | null>(null);
  // const [statusEmoji, setStatusEmoji] = useState("🟡");
  const [consultData, setConsultData] = useState<ConsultData[] | null>(null);

  const router = useRouter();

  const toggleClick = useCallback(() => {
    if (toggle === "✅") {
      setToggle("❌");
    } else {
      setToggle("✅");
    }
    click.current++;
  }, [toggle]);

  const { status, data, error } = useQuery<any, AxiosError | null>({
    queryKey: "mooApiQueryTest",
    queryFn: apiFetchGet,
    onSuccess: (data) => setApiData(data.result.banner), // 전역처리할 예정 dispatch redux
  });

  const {
    status: consultHistoryStatus,
    data: consultHistoryData,
    error: consultHistoryError,
  } = useQuery<any, AxiosError | null>({
    queryKey: "consultHistoryQuery",
    queryFn: getConsultHistory,
    onSuccess: (data) => setConsultData(data.data.result),
  });

  const onClickConsult = useCallback((consultId: any) => {
    deleteConsultHistory(consultId);
    window.location.replace("/project/project_7");
  }, []);

  // const onClickConsult = useMutation({
  //   mutationFn: deleteConsultHistory,
  //   onSuccess: (data) => console.log(data),
  // });

  const viewProps = {
    toggleClick,
    toggle,
    click,
    apiData,
    status,
    error,
    consultData,
    consultHistoryStatus,
    consultHistoryError,
    onClickConsult,
  };

  return <ViewSeven {...viewProps} />;
};

export default ControllerSeven;
