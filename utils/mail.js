const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

module.exports.sendMail = async ({
  email,
  name,
  subject,
  templateId,
  ...data
}) => {
  try {
    const mailerSend = new MailerSend({
      apiKey: process.env.EMAIL_API_KEY,
    });

    const sentFrom = new Sender(process.env.EMAIL_SENDER, "Kenzy Food");

    const recipients = [new Recipient(email, name)];

    const personalization = [{ email, data }];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(subject)
      .setTemplateId(templateId)
      .setPersonalization(personalization);

    await mailerSend.email.send(emailParams);

    console.log("Sent", subject);
  } catch (e) {
    console.error(e);
  }
};
