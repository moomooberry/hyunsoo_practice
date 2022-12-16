import initialAxios from "axios";

const mooApi = initialAxios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_baseURL,
  headers: {
    "TT-Service": "EXPERT",
  },
});

export default mooApi;
