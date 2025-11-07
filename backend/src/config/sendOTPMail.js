import nodemailer from "nodemailer";
import "dotenv/config";

const sendOTPMail = async (otp, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailConfigurations = {
    // It should be a string of sender/server email
    from: process.env.MAIL_USER,

    to: email,
    // Subject of Email
    subject: "Password reset otp",

    // This would be the text of email body
    html: `<p>Your reset password otp is: <b>${otp}</b></p>`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log("otp Sent Successfully");
    console.log(info);
  });
};

export default sendOTPMail;
