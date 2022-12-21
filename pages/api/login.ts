import { NextApiHandler } from "next";

const login: NextApiHandler = async (req, res) => {
  // method !post 404 띄우기
  try {
    const TOKEN = process.env.NEXT_PUBLIC_MOO_TOKEN;

    res.setHeader("Set-Cookie", `moo-token=${TOKEN}; path=/;`); // path 꼭!!!!!!!!! / 해야함 아니면 /api 이거 뒤로 쿠키적용
    res.status(200).json({
      user: "moohyun",
      ok: true,
    });
  } catch (error) {
    // error 핸들링 일단 안해놨음~
    console.log(error);
    res.end();
  }
};

export default login;
