import { AxiosError, AxiosResponse } from "axios";
import { MutableRefObject } from "react";
import { UseMutationResult } from "react-query";
import ProjectSevenComponents from "./components";
import { ApiData, ConsultData } from "./Project7Controller";

interface IViewProps {
  toggleClick: () => void;
  toggle: string;
  click: MutableRefObject<number>;
  apiData: ApiData | null;
  status: "idle" | "error" | "loading" | "success";
  error: AxiosError | null;
  consultData: ConsultData[] | null;
  consultHistoryStatus: "idle" | "error" | "loading" | "success";
  consultHistoryError: AxiosError | null;
  onClickConsult: (consultId: any) => void;
}

const ViewSeven = ({
  toggleClick,
  toggle,
  click,
  apiData,
  status,
  error,
  consultData,
  consultHistoryStatus,
  consultHistoryError,
  onClickConsult,
}: IViewProps) => {
  //console.log(apiData);
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
      <>
        {consultData?.map((item, index) => {
          return (
            <div key={index} onClick={() => onClickConsult(item.consultId)}>
              <div>
                {item.consultId} | {item.expertName} | {item.petName}
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default ViewSeven;
