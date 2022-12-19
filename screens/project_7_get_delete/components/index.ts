import styled from "styled-components";

const Container = styled.div`
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
  BoxContainer,
  Box,
};

export default ProjectSevenComponents;
