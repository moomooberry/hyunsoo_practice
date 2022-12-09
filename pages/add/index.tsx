import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moo from "../api/axios";

const Continer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
`;
const TitleWhen = styled.div`
  padding: 10px 0px 10px 10px;
`;
const DateTimeContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 10px;
  width: 400px;
  display: flex;
`;
const DateAdd = styled.input`
  width: 200px;
  height: 20px;
  margin-right: 30px;
`;
const TimeAdd = styled.input`
  width: 200px;
  height: 20px;
`;
const TitleBreath = styled.div`
  padding: 10px 0px 10px 10px;
`;
const BreathContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 10px;
  width: 250px;
  display: flex;
  margin-bottom: 10px;
`;
const BreathAdd = styled.input`
  width: 100px;
  height: 20px;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const DEV_TOKEN1 = "5fe5fac7-9fb9-40ba-b448-667affa8cdae";
const DEV_PET1 = "PT.10662";
const DEV_OS = "IOS";
const DEV_VERSION = "36";
const DEV_MARGINB = "0";
const DEV_MARGINT = "30";
const DEV_USERID = "A.8864";

const Add = () => {
  const { register, handleSubmit } = useForm();
  const [petId] = useState(DEV_PET1);
  const router = useRouter();

  const onSubmit = (data: any) => {
    moo
      .post(
        "/breath",
        {
          petId,
          breathCnt: data.breath,
          measureDate:
            data.date.slice(0, 10).replace(/-/g, "") +
            data.time.slice(0, 5).replace(/:/g, "") +
            "00",
        },
        {
          headers: {
            "TT-OS": DEV_OS,
            "TT-Version": DEV_VERSION,
            Authorization: `Bearer ${DEV_TOKEN1}`,
          },
        }
      )
      .then(() => router.push("/"));
  };

  return (
    <div>
      <Continer onSubmit={handleSubmit(onSubmit)}>
        <TitleWhen>언제 측정했나요?</TitleWhen>
        <DateTimeContainer>
          <DateAdd type="date" {...register("date")} />
          <TimeAdd type="time" {...register("time")} />
        </DateTimeContainer>
        <TitleBreath>10초에 몇번 호흡했나요?</TitleBreath>
        <BreathContainer>
          <BreathAdd {...register("breath")} />
        </BreathContainer>
        <SubmitButton type="submit">제출</SubmitButton>
      </Continer>
    </div>
  );
};

export default Add;
