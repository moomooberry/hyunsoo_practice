import initialAxios from "axios";

const moo = initialAxios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_baseURL,
});

export default moo;
