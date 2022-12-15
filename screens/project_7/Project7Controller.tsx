import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ViewSeven from "./Project7View";

const ControllerSeven = () => {
  const [toggle, setToggle] = useState("✅");
  const click = useRef(0);
  const fruits = useRef(["딸기", "포도", "사과"]);
  const toggleClick = useCallback(() => {
    //console.log(fruits);
    //console.log(toggle);
    //console.log(click);
    if (toggle === "✅") {
      setToggle("❌");
    } else {
      setToggle("✅");
    }
    click.current++;
  }, [toggle]);

  const viewProps = {
    toggleClick,
    toggle,
    click,
  };

  return <ViewSeven {...viewProps} />;
};

export default ControllerSeven;
