import axios from "axios";
import React, { useState } from "react";
import ViewFour from "./Project4View";

type TData = [IDataFreeRank, IDataSoloRank];

interface IDataFreeRank {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
  miniSeries: {
    target: number;
    wins: number;
    losses: number;
    progress: string;
  };
}

interface IDataSoloRank {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}
export interface IUserInfo {
  queueType: string;
  summonerName: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}

const API_KEY = `RGAPI-91e8f17c-9f1d-4a5a-ada0-ee2178fcd6d3`;

const ControllerFour = () => {
  const [value, setValue] = useState<string>("");
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  const API_KEY = `RGAPI-91e8f17c-9f1d-4a5a-ada0-ee2178fcd6d3`; // 만료기간땜에 바꿔야함!
  const BASE_URL = `https://kr.api.riotgames.com`;

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSummonersByName();
  };

  const onSummonersByName = async () => {
    const {
      data: { id },
    } = await axios.get(
      `${BASE_URL}/lol/summoner/v4/summoners/by-name/${value}?api_key=${API_KEY}`
    );
    onInfoById(id);
  };

  const onInfoById = async (id: string) => {
    const {
      data: [
        _,
        { queueType, summonerName, tier, rank, leaguePoints, wins, losses },
      ],
    } = await axios.get<TData>(
      `${BASE_URL}/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`
    );
    setUserInfo({
      queueType,
      summonerName,
      tier,
      rank,
      leaguePoints,
      wins,
      losses,
    });
  };
  return (
    <ViewFour
      onChange={onChange}
      onSubmit={onSubmit}
      value={value}
      userInfo={userInfo}
    />
  );
};

export default ControllerFour;

// summonerName으로 puuid 를 받음
//
