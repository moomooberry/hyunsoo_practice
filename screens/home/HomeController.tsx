import { useRouter } from "next/router";
import { useCallback } from "react";
import HomeView from "./HomeView";

const HomeController = () => {
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

  const viewProps = {
    onClickOne,
    onClickTwo,
    onClickThree,
    onClickFour,
    onClickFive,
    onClickSix,
    onClickSeven,
  };

  return <HomeView {...viewProps} />;
};

export default HomeController;
