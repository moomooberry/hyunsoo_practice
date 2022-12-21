import { GetServerSideProps, NextPage } from "next";
import HomeController from "../screens/home/HomeController";

export interface HomeProps {
  value: boolean;
}

const Home: NextPage<HomeProps> = (props) => {
  return <HomeController {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (data) => {
  const token = data.req.cookies["moo-token"]; // 쿠키 이름 "moo-token" 이렇게하면 value 뽑을 수 있다.

  if (!token)
    return {
      props: { value: false },
    };
  return {
    props: { value: true },
  };
};

export default Home;
