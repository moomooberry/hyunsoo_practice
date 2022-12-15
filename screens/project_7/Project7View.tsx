import { MutableRefObject } from "react";
import ProjectSevenComponents from "./components";

interface IViewProps {
  toggleClick: () => void;
  toggle: string;
  click: MutableRefObject<number>;
}

const ViewSeven = ({ toggleClick, toggle, click }: IViewProps) => {
  return (
    <div>
      <ProjectSevenComponents.Container>
        <ProjectSevenComponents.BoxContainer onClick={toggleClick}>
          <ProjectSevenComponents.Box>{toggle}</ProjectSevenComponents.Box>
        </ProjectSevenComponents.BoxContainer>
        <ProjectSevenComponents.BoxContainer>
          <ProjectSevenComponents.Box>
            {click.current}
          </ProjectSevenComponents.Box>
        </ProjectSevenComponents.BoxContainer>
      </ProjectSevenComponents.Container>
    </div>
  );
};

export default ViewSeven;
