module.exports = ({ accessToken, refreshToken }) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true, //for HTTPS only
    domain: process.env.FRONTEND_ENDPOINT,
    sameSite: true,
  };
  return {
    access: ["access", accessToken, cookieOptions],
    refresh: ["refresh", refreshToken, cookieOptions],
  };
};
