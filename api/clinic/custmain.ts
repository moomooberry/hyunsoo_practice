import mooApi from "../axios";

const DEV_TOKEN1 = process.env.NEXT_PUBLIC_DEV_TOKEN1;

async function apiFetchGet() {
  const { data } = await mooApi({
    method: "GET",
    headers: {
      Authorization: `Bearer ${DEV_TOKEN1}`,
    },
    url: "/clinic/custmain",
  });
  return data;
}
export default apiFetchGet;
