import { AxiosError, AxiosResponse } from "axios";
import { MutableRefObject, useState } from "react";
import { UseMutationResult } from "react-query";
import { useSelector } from "react-redux";
import { store } from "../../store";
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
  storeCount: any;
  onClickCount: () => void;
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
  storeCount,
  onClickCount,
}: IViewProps) => {
  //console.log(apiData);
  return (
    <div>
      <ProjectSevenComponents.Container>
        <ProjectSevenComponents.custMainContainer>
          <ProjectSevenComponents.Title>
            Get custmain Information
          </ProjectSevenComponents.Title>
          <ProjectSevenComponents.StatusBox>
            상태 : {status}...
          </ProjectSevenComponents.StatusBox>
          <ProjectSevenComponents.BannerGbnBox>
            {apiData?.bannerGbn}
          </ProjectSevenComponents.BannerGbnBox>
          <ProjectSevenComponents.TitleBox>
            {apiData?.title}
          </ProjectSevenComponents.TitleBox>
          <ProjectSevenComponents.BodyBox>
            {apiData?.body}
          </ProjectSevenComponents.BodyBox>
          <div> {error?.message}</div>
        </ProjectSevenComponents.custMainContainer>
        <ProjectSevenComponents.BoxContainerContainer>
          <ProjectSevenComponents.BoxContainer onClick={toggleClick}>
            <ProjectSevenComponents.Box>{toggle}</ProjectSevenComponents.Box>
          </ProjectSevenComponents.BoxContainer>
          <ProjectSevenComponents.BoxContainer>
            <ProjectSevenComponents.Box>
              {click.current}
            </ProjectSevenComponents.Box>
          </ProjectSevenComponents.BoxContainer>
          <ProjectSevenComponents.BoxContainer onClick={onClickCount}>
            <ProjectSevenComponents.Box>click</ProjectSevenComponents.Box>
          </ProjectSevenComponents.BoxContainer>
          <ProjectSevenComponents.BoxContainer>
            <ProjectSevenComponents.Box>
              {storeCount}
            </ProjectSevenComponents.Box>
          </ProjectSevenComponents.BoxContainer>
        </ProjectSevenComponents.BoxContainerContainer>
      </ProjectSevenComponents.Container>
      <ProjectSevenComponents.custMainContainer>
        <ProjectSevenComponents.Title>
          Get & Delete Consult History
        </ProjectSevenComponents.Title>
        <ProjectSevenComponents.StatusBox>
          상태 : {consultHistoryStatus}...
        </ProjectSevenComponents.StatusBox>

        <div>{consultHistoryError?.message}</div>
        {consultData?.map((item, index) => {
          return (
            <ProjectSevenComponents.StatusBox
              key={index}
              onClick={() => onClickConsult(item.consultId)}
            >
              <div>
                {item.consultId} | {item.expertName} | {item.petName}
              </div>
            </ProjectSevenComponents.StatusBox>
          );
        })}
      </ProjectSevenComponents.custMainContainer>
    </div>
  );
};

export default ViewSeven;
