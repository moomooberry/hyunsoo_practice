import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import token, { setToken } from "../../store/reducers/token";
import HomeView from "./HomeView";

const HomeController = ({ token }: { token: string }) => {
  const router = useRouter();
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

  /* store */
  const tokenStore = useSelector<RootState>(
    (state) => state.rootReducer.token.token
  );

  const dispatch = useDispatch();

  const onClickToken = () => {
    dispatch(setToken(token));
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
    tokenStore,
  };

  return <HomeView {...viewProps} />;
};

export default HomeController;
