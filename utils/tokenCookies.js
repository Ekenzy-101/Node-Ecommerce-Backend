module.exports = ({ accessToken, refreshToken }) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true, //for HTTPS only
    path: "/",
    domain: process.env.COOKIE_DOMAIN,
    sameSite: "none",
  };
  return {
    access: ["access", accessToken, cookieOptions],
    refresh: ["refresh", refreshToken, cookieOptions],
  };
};
