import mooApi from "../mooApi";

const deleteConsultHistory = (consultId: any) => {
  return mooApi({
    method: "delete",
    url: `/clinic/consultHistory/${consultId}`,
  });
};

export default deleteConsultHistory;
