import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProjectTitleContainer = styled.div`
  width: 200px;
  height: 50px;
  background-color: aliceblue;
  margin: 15px 0px 15px 15px;
  display: flex;
  align-items: center;
`;
const ProjectTitleBox = styled.div`
  margin-left: 10px;
`;

const HomeComponents = {
  Title,
  ProjectContainer,
  ProjectTitleContainer,
  ProjectTitleBox,
};

export default HomeComponents;
