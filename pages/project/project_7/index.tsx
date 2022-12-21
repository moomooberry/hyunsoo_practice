import { GetServerSideProps } from "next";
import ControllerSeven from "../../../screens/project_7_useQuery_get_delete/Project7Controller";

const ProjectSeven = () => {
  return <ControllerSeven />;
};

export default ProjectSeven;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies["moo-token"];
  if (!token) return { redirect: { destination: "/", permanent: false } };
  return {
    props: {},
  };
};
