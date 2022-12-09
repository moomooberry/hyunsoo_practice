import styled from "styled-components";
import { IFruitsInfo } from "./Project2Controller";

export const CircleFruit = styled.div<{ isSelected?: boolean }>`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  color: tomato;
  background-color: teal;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.isSelected ? "3px solid red" : "none")};
`;

export interface IViewTwo {
  fruits: IFruitsInfo[];
  each: (index: number) => {
    onClick: () => void;
    isSelected: boolean;
  };
}

const ViewTwo = ({ fruits, each }: IViewTwo) => {
  return (
    <div>
      {fruits.map((i, index) => {
        const { onClick, isSelected } = each(i.key);

        return (
          <div key={index}>
            <CircleFruit key={i.key} onClick={onClick} isSelected={isSelected}>
              {i.key} , {i.name}
            </CircleFruit>
          </div>
        );
      })}
    </div>
  );
};

export default ViewTwo;
