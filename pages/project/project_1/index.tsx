import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ControllerOne from "../../../screens/project_1/Project1Controller";
import { RootState } from "../../../store";

const ProjectOne = () => {
  return <ControllerOne />;
};

export default ProjectOne;

export const getServerSideProps: GetServerSideProps = async (data) => {
  return {
    props: {},
  };
};
