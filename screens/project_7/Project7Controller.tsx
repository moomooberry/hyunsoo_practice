import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import ViewSeven from "./Project7View";

import apiFetchGet from "../../api/clinic/custmain";
import { AxiosError } from "axios";

export interface ApiData {
  bannerGbn: string;
  title: string;
  body: string;
}

const ControllerSeven = () => {
  const [toggle, setToggle] = useState("✅");
  //const [moo, setMoo] = useState(null);
  const click = useRef(0);
  //const fruits = useRef(["딸기", "포도", "사과"]);
  const [apiData, setApiData] = useState<ApiData | null>(null);
  // const [statusEmoji, setStatusEmoji] = useState("🟡");

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

  const viewProps = {
    toggleClick,
    toggle,
    click,
    apiData,
    status,
    error,
  };

  return <ViewSeven {...viewProps} />;
};

export default ControllerSeven;
