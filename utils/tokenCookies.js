module.exports = ({ accessToken, refreshToken }) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true, //for HTTPS only
    // domain: process.env.FRONTEND_DOMAIN,
    sameSite: "none",
  };
  return {
    access: ["access", accessToken, cookieOptions],
    refresh: ["refresh", refreshToken, cookieOptions],
  };
};
