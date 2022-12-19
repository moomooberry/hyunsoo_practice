import initialAxios from "axios";

const DEV_TOKEN1 = process.env.NEXT_PUBLIC_DEV_TOKEN1;

const mooApi = initialAxios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_baseURL,
  headers: {
    "TT-Service": "EXPERT",
    Authorization: `Bearer ${DEV_TOKEN1}`,
  },
});

export default mooApi;
