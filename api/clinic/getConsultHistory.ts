import mooApi from "../mooApi";

const getConsultHistory = () =>
  mooApi({
    method: "get",
    url: "clinic/consultHistory",
  });

export default getConsultHistory;
