const fs = require("fs").promises;
const nodemailer = require("nodemailer");
const path = require("path");

module.exports.sendMail = async ({ email, subject, templateId, ...data }) => {
  try {
    const filePath = path.join(__dirname, "templates", templateId);
    const template = await fs.readFile(filePath, "utf8");

    const html = template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] !== undefined ? data[key] : match;
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_API_KEY,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: email,
      subject,
      html,
    });

    console.log("Sent", subject);
  } catch (e) {
    console.error(e);
  }
};
