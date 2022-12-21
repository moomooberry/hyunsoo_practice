import HomeComponents from "./components";

interface IViewProps {
  onClickOne: () => void;
  onClickTwo: () => void;
  onClickThree: () => void;
  onClickFour: () => void;
  onClickFive: () => void;
  onClickSix: () => void;
  onClickSeven: () => void;
  onClickToken: () => void;
  isAuth: boolean;
}
const HomeView = ({
  onClickOne,
  onClickTwo,
  onClickThree,
  onClickFour,
  onClickFive,
  onClickSix,
  onClickSeven,
  onClickToken,
  isAuth,
}: IViewProps) => {
  if (isAuth === false) {
    console.log("Please Token First");
  }
  return (
    <div>
      <HomeComponents.TokenButton onClick={onClickToken}>
        🔑
      </HomeComponents.TokenButton>
      <HomeComponents.Title>Home</HomeComponents.Title>
      <HomeComponents.ProjectContainer>
        {isAuth ? (
          <>
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
          </>
        ) : (
          <>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
            <HomeComponents.ProjectTitleContainer>
              <HomeComponents.ProjectTitleBox>
                🔒
              </HomeComponents.ProjectTitleBox>
            </HomeComponents.ProjectTitleContainer>
          </>
        )}
      </HomeComponents.ProjectContainer>
    </div>
  );
};

export default HomeView;
