import nodemailer from "nodemailer";
import * as pdf from "html-pdf";
import fs from "fs";
import { StringDecoder } from "string_decoder";
import { BirthDay } from "@/Template/BirthDay";
// import { FormPdf } from "@/Template/FormPdf";
export const sendMessage = async ({
  username,
  email,
  subject,
}: {
  username: string;
  email: string;
  subject: FormDataEntryValue | null | string;
}) => {
  try {
    console.log("subject in email: ", subject);
    const transport = nodemailer.createTransport({
      service: "gmail",
      // port: 2525,
      // secure: false,
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSMAIL,
      },
    });

    const htmlContent = await BirthDay(username);

    await transport.sendMail({
      from: process.env.USERMAIL,
      to: email,
      //@ts-ignore
      subject: subject || "Exciting Opportunity: Join Our Development Team!",
      html: htmlContent,
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
};
