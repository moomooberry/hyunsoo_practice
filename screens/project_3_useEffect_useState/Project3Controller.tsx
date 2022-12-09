import { useEffect, useState } from "react";
import styled from "styled-components";
import ViewThree from "./Project3View";

const Title = styled.div`
  font-size: 35px;
  text-align: center;
  margin-bottom: 50px;
  height: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LikeButton = styled.div`
  background-color: blue;
  color: white;
  width: 100px;
  text-align: center;
  margin-bottom: 50px;
`;
const DislikeButton = styled.div`
  background-color: red;
  color: white;
  width: 100px;
  text-align: center;
  margin-bottom: 50px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LikeBox = styled.div`
  border: 2px solid blue;
  width: 300px;
  height: 400px;
  flex-direction: column;
  overflow-y: scroll;
`;

const DislikeBox = styled.div`
  border: 2px solid red;
  width: 300px;
  height: 400px;
  flex-direction: column;
  overflow-y: scroll;
`;

const Likey = styled.div`
  border: 0.5px solid darkblue;
  padding: 10px 10px 10px 10px;
  display: inline-block;
  text-align: center;
`;
const Dislikey = styled.div`
  border: 0.5px solid darkred;
  padding: 10px 10px 10px 10px;
  display: inline-block;
  text-align: center;
`;

const arrData = [
  "apple",
  "banna",
  "grape",
  "똥",
  "김치찌개",
  "tomato",
  "pizza",
  "제육볶음",
  "아이스크림",
  "strawberry",
];

const ControllerThree = () => {
  const [arr, setArr] = useState<string[]>(arrData);
  const [count, setCount] = useState<number>(0);
  const [likey, setLikey] = useState<string[]>([]);
  const [dislikey, setDislikey] = useState<string[]>([]);

  useEffect(
    function () {
      console.log(count);
      if (count > arrData.length - 1) {
        setCount(0);
      }
    },
    [count]
  );

  const buttonLikeClick = () => {
    setCount((p) => p + 1);
    setLikey([...likey, arr[count]]);
  };

  const buttonDislikeClick = () => {
    setCount(count + 1);
    setDislikey([...dislikey, arr[count]]);
  };

  const deleteLikey = (index: number) => {
    setLikey([...likey.slice(0, index), ...likey.slice(index + 1)]);
  };

  const deleteDislikey = (index: number) => {
    setDislikey([...dislikey.slice(0, index), ...dislikey.slice(index + 1)]);
  };

  return (
    <div>
      <Title>{arr[count]}</Title>
      <ButtonContainer>
        <LikeButton onClick={buttonLikeClick}>좋아요</LikeButton>
        <DislikeButton onClick={buttonDislikeClick}>싫어요</DislikeButton>
      </ButtonContainer>
      <BoxContainer>
        <LikeBox>
          {likey.map((item, index) => (
            <Likey key={index} onClick={() => deleteLikey(index)}>
              {item}
            </Likey>
          ))}
        </LikeBox>
        <DislikeBox>
          {dislikey.map((item, index) => (
            <Dislikey key={index} onClick={() => deleteDislikey(index)}>
              {item}
            </Dislikey>
          ))}
        </DislikeBox>
      </BoxContainer>
    </div>
  );
  //   return <ViewThree />;
};

export default ControllerThree;

// 눌렀을때 없어지고
// 키워드 무한반복
