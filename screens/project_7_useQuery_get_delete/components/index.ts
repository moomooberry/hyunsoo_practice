import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const custMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: aliceblue;
  margin: 10px 0px 15px 10px;
`;
const Title = styled.div`
  background-color: orange;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #535c68;
`;
const StatusBox = styled.div`
  margin: 10px 0px 10px 10px;
  width: 200px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BannerGbnBox = styled.div`
  margin: 10px 0px 10px 10px;
  width: 200px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  margin: 10px 0px 10px 10px;
  width: 200px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BodyBox = styled.div`
  margin: 10px 0px 10px 10px;
  width: 200px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContainerContainer = styled.div`
  display: flex;
`;
const BoxContainer = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background-color: aliceblue;
  margin: 10px 0px 15px 10px;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  padding: 5px 0px 5px 0px;
  background-color: beige;
`;

const ProjectSevenComponents = {
  Container,
  custMainContainer,
  Title,
  StatusBox,
  BannerGbnBox,
  TitleBox,
  BodyBox,
  BoxContainerContainer,
  BoxContainer,
  Box,
};

export default ProjectSevenComponents;
