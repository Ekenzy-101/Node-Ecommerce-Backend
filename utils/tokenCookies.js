module.exports = ({ accessToken, refreshToken }) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true, //for HTTPS only
    domain: process.env.COOKIE_DOMAIN,
    sameSite: true,
  };
  return {
    access: ["access", accessToken, cookieOptions],
    refresh: ["refresh", refreshToken, cookieOptions],
  };
};
