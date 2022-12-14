import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moo from "../../../../api/moo";

export const Continer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
`;
export const TitleWhen = styled.div`
  padding: 10px 0px 10px 10px;
`;
export const DateTimeContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 10px;
  width: 400px;
  display: flex;
`;
export const DateAdd = styled.input`
  width: 200px;
  height: 20px;
  margin-right: 30px;
`;
export const TimeAdd = styled.input`
  width: 200px;
  height: 20px;
`;
export const TitleBreath = styled.div`
  padding: 10px 0px 10px 10px;
`;
export const BreathContainer = styled.div`
  display: flex;
  padding: 0px 0px 0px 10px;
  width: 250px;
  display: flex;
  margin-bottom: 10px;
`;
export const BreathAdd = styled.input`
  width: 100px;
  height: 20px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const DEV_TOKEN1 = process.env.NEXT_PUBLIC_DEV_TOKEN1;
const DEV_PET1 = process.env.NEXT_PUBLIC_DEV_PET1;
const DEV_OS = process.env.NEXT_PUBLIC_DEV_OS;
const DEV_VERSION = process.env.NEXT_PUBLIC_DEV_VERSION;

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
      .then(() => router.push("/project/project_6"));
  };

  return (
    <div>
      <Continer onSubmit={handleSubmit(onSubmit)}>
        <TitleWhen>?????? ????????????????</TitleWhen>
        <DateTimeContainer>
          <DateAdd type="date" {...register("date")} />
          <TimeAdd type="time" {...register("time")} />
        </DateTimeContainer>
        <TitleBreath>10?????? ?????? ????????????????</TitleBreath>
        <BreathContainer>
          <BreathAdd {...register("breath")} />
        </BreathContainer>
        <SubmitButton type="submit">??????</SubmitButton>
      </Continer>
    </div>
  );
};

export default Add;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies["moo-token"];
  //token?????? ?????? ?????? ????????? ????????? ??? return ?????? props??? ????????? ??????

  if (!token) return { redirect: { destination: "/", permanent: false } };
  return {
    props: {},
  };
};
