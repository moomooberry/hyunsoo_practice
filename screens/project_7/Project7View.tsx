import { AxiosError } from "axios";
import { MutableRefObject } from "react";
import { UseQueryResult } from "react-query";
import ProjectSevenComponents from "./components";
import { ApiData } from "./Project7Controller";

interface IViewProps {
  toggleClick: () => void;
  toggle: string;
  click: MutableRefObject<number>;
  apiData: ApiData | null;
  status: "idle" | "error" | "loading" | "success";
  error: AxiosError | null;
}

const ViewSeven = ({
  toggleClick,
  toggle,
  click,
  apiData,
  status,
  error,
}: IViewProps) => {
  console.log(apiData);
  return (
    <div>
      <div> 상태 : {status}...</div>
      <div> {apiData?.bannerGbn}</div>
      <div> {apiData?.title}</div>
      <div> {apiData?.body}</div>
      <div> {error?.message}</div>
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
