module.exports = ({ accessToken, refreshToken }) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true, //for HTTPS only
    path: "/",
    // domain: process.env.FRONTEND_ENDPOINT,
    // sameSite: "none",
  };
  return {
    access: ["access", accessToken, cookieOptions],
    refresh: ["refresh", refreshToken, cookieOptions],
  };
};
