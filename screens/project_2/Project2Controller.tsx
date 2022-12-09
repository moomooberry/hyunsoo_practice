import mitt from "next/dist/shared/lib/mitt";
import { useState } from "react";
import ViewTwo from "./Project2View";

export interface IFruitsInfo {
  name: string;
  key: number;
}

export const ControllerTwo = () => {
  const [fruits] = useState<IFruitsInfo[]>([
    { name: "딸기", key: 0 },
    { name: "포도", key: 1 },
    { name: "바나나", key: 2 },
    { name: "메론", key: 3 },
    { name: "똥", key: 4 },
  ]);

  const [numbers, setNumbers] = useState<number[]>([]);

  function each(index: number) {
    const onClick = () => {
      if (numbers.includes(index)) {
        setNumbers([...numbers.filter((item) => item !== index)]);
      } else {
        setNumbers([...numbers, index]);
      }
    };
    let isSelected = false;

    if (numbers.includes(index)) {
      isSelected = true;
    } else {
      isSelected = false;
    }

    return { onClick, isSelected };
  }

  return <ViewTwo fruits={fruits} each={each} />;
};

export default ControllerTwo;
