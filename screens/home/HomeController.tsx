import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import token, { setToken } from "../../store/reducers/token";
import initialAxios from "axios";

import HomeView from "./HomeView";
import { redirect } from "next/dist/server/api-utils";
import { url } from "inspector";

const HomeController = ({ value }: { value: boolean }) => {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(value);

  const onClickOne = useCallback(() => {
    router.push(`/project/project_1`);
  }, [router]);

  const onClickTwo = useCallback(() => {
    router.push(`/project/project_2`);
  }, [router]);

  const onClickThree = useCallback(() => {
    router.push(`/project/project_3`);
  }, [router]);

  const onClickFour = useCallback(() => {
    router.push(`/project/project_4`);
  }, [router]);

  const onClickFive = useCallback(() => {
    router.push(`/project/project_5`);
  }, [router]);

  const onClickSix = useCallback(() => {
    router.push(`/project/project_6`);
  }, [router]);

  const onClickSeven = useCallback(() => {
    router.push(`/project/project_7`);
  }, [router]);

  /* store로 token */

  // const tokenStore = useSelector<RootState>(
  //   (state) => state.rootReducer.token.token
  // );

  // const dispatch = useDispatch();

  // const onClickToken = () => {
  //   dispatch(setToken(token));
  // };

  /* api통신으로 token */

  const axios = initialAxios.create();

  const onClickToken = async () => {
    await axios({
      method: "get", // 추후 post전환예정, 버튼이 아닌 입력을 받아야하기때문
      url: "/api/login",
    }).then((res) => {
      console.log(res.data);
      console.log(
        "축하합니다 토큰을 발급받았습니다. 토큰은 쿠키에 저장됩니다."
      );
      setIsAuth(true);
    });
  };

  const viewProps = {
    onClickOne,
    onClickTwo,
    onClickThree,
    onClickFour,
    onClickFive,
    onClickSix,
    onClickSeven,
    onClickToken,
    isAuth,
  };

  return <HomeView {...viewProps} />;
};

export default HomeController;
