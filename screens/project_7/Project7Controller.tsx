import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import ViewSeven from "./Project7View";

import apiFetchGet from "../../api/testapi/test";

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

  const toggleClick = useCallback(() => {
    if (toggle === "✅") {
      setToggle("❌");
    } else {
      setToggle("✅");
    }
    click.current++;
  }, [toggle]);

  const { status, data, error } = useQuery({
    queryKey: "mooApiQueryTest",
    queryFn: apiFetchGet,
    onSuccess: (data) => setApiData(data.result.banner), // 전역처리할 예정 dispatch redux
    onError: (err) => console.log(err),
  });

  const viewProps = {
    toggleClick,
    toggle,
    click,
    apiData,
    status,
  };

  return <ViewSeven {...viewProps} />;
};

export default ControllerSeven;
