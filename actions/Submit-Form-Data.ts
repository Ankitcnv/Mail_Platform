"use server";
import db from "@/config/db";
import { sendMessage } from "@/config/mail";

const submitFormData = async (formData: FormData) => {
  const subject: FormDataEntryValue | null = formData.get("subject");
  const url = formData.get("url");
  const heading = formData.get("heading");
  const textarea = formData.get("textarea");

  const inputPairKeys: string[] = [];
  const inputPairValues: string[] = [];
  let buttonCount: number = 0;

  const formDataKeys = Array.from(formData.keys());
  for (const key of formDataKeys) {
    if (key.startsWith("key[")) {
      buttonCount++;
      inputPairKeys.push(formData.get(key) as string);
    }
    if (key.startsWith("value[")) {
      inputPairValues.push(formData.get(key) as string);
      buttonCount++;
    }
  }

  const dbUsrs = await db.query("select * from users");
  const users: any = dbUsrs[0];

  const responseLog = [];

  //@ts-ignore
  for (const user of users) {
    const obj = {
      username: user.name,
      email: user.email,
      subject,
      url: url,
      heading: heading,
      textarea: textarea,
      button: inputPairKeys.map((key, index) => ({
        key,
        value: inputPairValues[index],
      })),
      buttonCount: buttonCount / 2,
    };
    const response = await sendMessage({ ...obj });
    responseLog.push(response);
  }

  return {
    success: true,
    responseLog: responseLog,
  };
};
export default submitFormData;
