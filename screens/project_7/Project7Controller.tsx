import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import ViewSeven from "./Project7View";

import moo from "../../pages/api/axios";
import mooApi from "../../api/axios";
import apiFetchGet from "../../api/testapi/test";

const ControllerSeven = () => {
  const [toggle, setToggle] = useState("✅");
  const [moo, setMoo] = useState(null);
  const click = useRef(0);
  const fruits = useRef(["딸기", "포도", "사과"]);
  const toggleClick = useCallback(() => {
    if (toggle === "✅") {
      setToggle("❌");
    } else {
      setToggle("✅");
    }
    click.current++;
  }, [toggle]);

  const { status, data, error } = useQuery("mooApiQueryTest", apiFetchGet, {
    onSuccess: (data) => setMoo(data.result.banner.title),
  });

  const viewProps = {
    toggleClick,
    toggle,
    click,
    data,
    moo,
  };

  return <ViewSeven {...viewProps} />;
};

export default ControllerSeven;
