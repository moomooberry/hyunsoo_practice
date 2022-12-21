import { GetServerSideProps, NextPage } from "next";
import HomeController from "../screens/home/HomeController";

export interface HomeProps {
  token: string;
  locale: "ko" | "En";
}

const Home: NextPage<HomeProps> = (props) => {
  return <HomeController {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (data) => {
  const token = process.env.NEXT_PUBLIC_MOO_TOKEN;
  const { locale } = data;
  return {
    props: {
      token,
    },
  };
};

export default Home;
