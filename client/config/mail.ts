import nodemailer from "nodemailer";
import { BirthDay } from "@/Template/BirthDay";
export const sendMessage = async ({
  username,
  email,
  subject,
  url,
  heading,
  textarea,
}: {
  username: string;
  email: string;
  subject: FormDataEntryValue | null | string;
  url: string;
  heading: string;
  textarea: string;
}) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSMAIL,
      },
    });

    const htmlContent = await BirthDay(username, url, heading, textarea);

    const data = await transport.sendMail({
      from: process.env.USERMAIL,
      to: email,
      //@ts-ignore
      subject: subject || "Exciting Opportunity: Join Our Development Team!",
      html: htmlContent,
    });
    const success = data.response && data.response.includes("OK");
    return { success, response: data.response };
  } catch (error) {
    console.log(error);
  }
};
