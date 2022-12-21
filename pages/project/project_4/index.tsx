import { GetServerSideProps } from "next";
import ControllerFour from "../../../screens/project_4_api/Project4Controller";

const ProjectFour = () => {
  return <ControllerFour />;
};

export default ProjectFour;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies["moo-token"];
  //token으로 뭔갈 하는 함수를 작성한 뒤 return 값을 props로 넘겨줄 예정

  if (!token) return { redirect: { destination: "/", permanent: false } };
  return {
    props: {},
  };
};
