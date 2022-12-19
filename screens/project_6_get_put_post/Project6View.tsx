import styled from "styled-components";
import { IBreathData } from "./Project6Controller";

const BreathContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 5px 20px 5px;
  border-bottom: 1px solid black;
  &:hover {
    cursor: pointer;
    background-color: yellow;
  }
`;
const MeasureDate = styled.div``;
const BreathCnt = styled.div``;

const AddButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: orange;
  position: fixed;
  bottom: 20px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 0px;
  color: white;
`;

const ViewSix = ({
  breathData,
  onClickAdd,
  onClickEdit,
}: {
  breathData: IBreathData[] | null;
  onClickAdd: () => void;
  onClickEdit: (breathId: number) => void;
}) => {
  console.log(breathData);
  return (
    <>
      <div>hi im six</div>
      <BreathContainer>
        <MeasureDate>날짜</MeasureDate>
        <BreathCnt>호흡수</BreathCnt>
      </BreathContainer>
      {breathData?.map((item, index) => {
        const { measureDate, breathCnt, breathId } = item;
        return (
          <div key={index}>
            <BreathContainer onClick={() => onClickEdit(breathId)}>
              <MeasureDate>
                {measureDate.slice(0, 4) +
                  "년 " +
                  measureDate.slice(4, 6) +
                  "월 " +
                  measureDate.slice(6, 8) +
                  "일 " +
                  measureDate.slice(8, 10) +
                  "시 " +
                  measureDate.slice(10, 12) +
                  "분"}
              </MeasureDate>
              <BreathCnt>{breathCnt + " 회"}</BreathCnt>
            </BreathContainer>
          </div>
        );
      })}
      <AddButton onClick={onClickAdd}>+</AddButton>
    </>
  );
};

export default ViewSix;
