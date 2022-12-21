import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IBreathData } from "../../../../screens/project_6_get_put_post/Project6Controller";
import {
  BreathAdd,
  BreathContainer,
  Continer,
  DateAdd,
  DateTimeContainer,
  SubmitButton,
  TimeAdd,
  TitleBreath,
  TitleWhen,
} from "../add";
import moo from "../../../../api/moo";

const DEV_TOKEN1 = process.env.NEXT_PUBLIC_DEV_TOKEN1;
const DEV_PET1 = process.env.NEXT_PUBLIC_DEV_PET1;
const DEV_OS = process.env.NEXT_PUBLIC_DEV_OS;
const DEV_VERSION = process.env.NEXT_PUBLIC_DEV_VERSION;

export interface IData {
  breath: string;
  date: string;
  time: string;
}

export interface Iprops {
  breathId: string;
}

const edit = (props: Iprops) => {
  const [breathData, setBreathData] = useState<IBreathData[] | null>(null);
  // const [id, setId] = useState("");
  const { breathId } = props;
  //
  const { register, handleSubmit } = useForm<IData>();
  const onSubmit = (data: IData) => {
    const { breath, date, time } = data;
    moo
      .put(
        `/breath/${breathId}`,
        {
          breathCnt: breath,
          measureDate:
            date.slice(0, 10).replace(/-/g, "") +
            time.slice(0, 5).replace(/:/g, "") +
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

  const router = useRouter();

  useEffect(() => {
    moo
      .get(`/breath/${DEV_PET1}`, {
        headers: {
          "TT-OS": DEV_OS,
          "TT-Version": DEV_VERSION,
          Authorization: `Bearer ${DEV_TOKEN1}`,
        },
      })
      .then((res) => {
        setBreathData(res.data.result.breath);
      });
  }, []);
  console.log(Number(router.query));
  // router.query  왜 object??
  console.log(breathData);

  return (
    <div>
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (data) => {
  const {
    query: { breathId },
    params,
  } = data;
  console.log("타입은 " + typeof breathId);
  console.log("param은 " + params);

  const token = data.req.cookies["moo-token"];
  if (!token)
    return {
      redirect: { destination: "/", permanent: false },
    };
  // console.log(params);
  return {
    props: {
      breathId,
    },
  };
};

export default edit;
