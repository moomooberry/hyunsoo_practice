import { MutableRefObject } from "react";
import { UseQueryResult } from "react-query";
import ProjectSevenComponents from "./components";

interface IViewProps {
  toggleClick: () => void;
  toggle: string;
  click: MutableRefObject<number>;
  data: any;
  moo: any;
}

const ViewSeven = ({ toggleClick, toggle, click, data, moo }: IViewProps) => {
  console.log(moo);
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
