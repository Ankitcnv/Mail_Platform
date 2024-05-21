"use server";

import db from "@/config/db";
import { sendMessage } from "@/config/mail";

const submitFormData = async (formData: FormData) => {
  const subject: FormDataEntryValue | null = formData.get("subject");
  const url = formData.get("url");
  console.log("file: ", url);
  //const file = formData.get('file') as File;
  //const arrayBuffer = await file.arrayBuffer();
  //const buffer = new Uint8Array(arrayBuffer);

  const dbUsrs = await db.query("select * from users");
  const users: any = dbUsrs[0];

  //@ts-ignore
  users.map((user) => {
    const obj = {
      username: user.name,
      email: user.email,
      subject,
      url: url,
    };
    sendMessage({ ...obj });
  });

  return {
    success: true,
  };
};

export default submitFormData;
