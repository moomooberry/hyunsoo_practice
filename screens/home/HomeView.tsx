import HomeComponents from "./components";

interface IViewProps {
  onClickOne: () => void;
  onClickTwo: () => void;
  onClickThree: () => void;
  onClickFour: () => void;
  onClickFive: () => void;
  onClickSix: () => void;
  onClickSeven: () => void;
}
const HomeView = ({
  onClickOne,
  onClickTwo,
  onClickThree,
  onClickFour,
  onClickFive,
  onClickSix,
  onClickSeven,
}: IViewProps) => {
  return (
    <div>
      <HomeComponents.Title>Home</HomeComponents.Title>
      <HomeComponents.ProjectContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickOne}>
          <HomeComponents.ProjectTitleBox>1</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickTwo}>
          <HomeComponents.ProjectTitleBox>2</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickThree}>
          <HomeComponents.ProjectTitleBox>3</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickFour}>
          <HomeComponents.ProjectTitleBox>4</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickFive}>
          <HomeComponents.ProjectTitleBox>5</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickSix}>
          <HomeComponents.ProjectTitleBox>6</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
        <HomeComponents.ProjectTitleContainer onClick={onClickSeven}>
          <HomeComponents.ProjectTitleBox>7</HomeComponents.ProjectTitleBox>
        </HomeComponents.ProjectTitleContainer>
      </HomeComponents.ProjectContainer>
    </div>
  );
};

export default HomeView;
