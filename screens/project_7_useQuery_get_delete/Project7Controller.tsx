import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import ViewSeven from "./Project7View";

import apiFetchGet from "../../api/clinic/custmain";
import { AxiosError } from "axios";
import getConsultHistory from "../../api/clinic/getConsultHistory";
import { useRouter } from "next/router";
import deleteConsultHistory from "../../api/clinic/deleteConsultHistory";
import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { increment, nameChange } from "../../store/reducers/counter";
import { RootState } from "../../store";

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
  const queryClient = useQueryClient();

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

  const consultHistoryDelete = useMutation({
    mutationKey: "consultHistoryMutation",
    mutationFn: deleteConsultHistory,
    onSuccess: () => {
      queryClient.invalidateQueries("consultHistoryQuery");
    },
  });

  const onClickConsult = useCallback((consultId: any) => {
    console.log(consultId);
    consultHistoryDelete.mutate(consultId);
  }, []);

  const storeCount = useSelector<RootState>(
    (state) => state.rootReducer.counter.value
  );
  const storeName = useSelector<RootState>(
    (state) => state.rootReducer.counter.name
  );
  const dispatch = useDispatch();
  const onClickCount = () => {
    dispatch(increment());
    dispatch(nameChange("moohyun"));
    console.log(storeCount);
    console.log(storeName);
  };

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
    storeCount,
    onClickCount,
  };

  return <ViewSeven {...viewProps} />;
};

export default ControllerSeven;
