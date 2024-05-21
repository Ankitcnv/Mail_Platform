"use server";
import db from "@/config/db";
import { sendMessage } from "@/config/mail";

const submitFormData = async (formData: FormData) => {
  const subject: FormDataEntryValue | null = formData.get("subject");
  const url = formData.get("url");

  const dbUsrs = await db.query("select * from users");
  const users: any = dbUsrs[0];

  //@ts-ignore
  for (const user of users) {
    const obj = {
      username: user.name,
      email: user.email,
      subject,
      url: url,
    };
    await sendMessage({ ...obj });
  }

  return {
    success: true,
  };
};
export default submitFormData;
