import { UserInfo } from "os";
import React from "react";
import styled from "styled-components";
import { ScriptElementKindModifier } from "typescript";
import { IUserInfo } from "./Project4Controller";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  margin: 30px 0px 30px 0px;
`;

const SearchContainer = styled.div`
  display: flex;
`;
const SearchBar = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  background-color: #ebd1ef;
`;
const SearchButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: #baeaf2;
`;
const Info = styled.div`
  margin-top: 20px;
  width: 350px;
`;
const RankInfo = styled.div`
  width: 350px;
  text-align: center;
  background-color: #9cebdb;
  border-radius: 5px;
`;

const DoubleBox = styled.div`
  display: flex;
  background-color: #89bfeb;
`;

const TierImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: whitesmoke;
  margin: 10px 50px 10px 10px;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SummonerName = styled.div`
  background-color: whitesmoke;
  width: 165px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

const TierBox = styled.div`
  background-color: whitesmoke;
  width: 165px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
const WinRateBox = styled.div`
  background-color: whitesmoke;
  width: 165px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

// const UserContainer = styled.div`

//   width: 350px;

// `

const ViewFour = ({
  onChange,
  onSubmit,
  value,
  userInfo,
}: {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  userInfo: IUserInfo | null;
}) => {
  return (
    <div>
      <Container>
        <Title>소환사명 검색</Title>
        <SearchContainer>
          <form onSubmit={onSubmit}>
            <SearchBar value={value} onChange={onChange} />
            <SearchButton>🔍</SearchButton>
          </form>
        </SearchContainer>
        <Info>
          <RankInfo>Solo-Rank</RankInfo>
          <DoubleBox>
            <TierImg />
            <DetailBox>
              <SummonerName>{userInfo?.summonerName}</SummonerName>
              <TierBox>
                {userInfo?.tier} {userInfo?.rank}
              </TierBox>
              <WinRateBox>
                {userInfo?.wins} / {userInfo?.losses}
              </WinRateBox>
            </DetailBox>
          </DoubleBox>
        </Info>
      </Container>
    </div>
  );
};

export default ViewFour;
