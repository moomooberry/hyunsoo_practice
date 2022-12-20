import mooApi from "../mooApi";

interface DeleteConsultHistoryParms {
  consultId: string;
}

const deleteConsultHistory = (consultId: any) => {
  return mooApi({
    method: "delete",
    url: `/clinic/consultHistory/${consultId}`,
  });
};

export default deleteConsultHistory;
