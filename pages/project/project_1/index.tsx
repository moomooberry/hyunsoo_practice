import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ControllerOne from "../../../screens/project_1/Project1Controller";
import { RootState } from "../../../store";

const ProjectOne = () => {
  return <ControllerOne />;
};

export default ProjectOne;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies["moo-token"];
  //token으로 뭔갈 하는 함수를 작성한 뒤 return 값을 props로 넘겨줄 예정

  if (!token) return { redirect: { destination: "/", permanent: false } };
  return {
    props: {},
  };
};
