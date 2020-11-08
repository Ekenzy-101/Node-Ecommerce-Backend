module.exports.cookieOptions = {
  httpOnly: true,
  secure: true, //for HTTPS only
  path: "/",
  domain: process.env.COOKIE_DOMAIN,
  sameSite: "none",
};
