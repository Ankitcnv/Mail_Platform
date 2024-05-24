"use server";
import { v2 as cloudinary } from "cloudinary";
import { tmpdir } from "os";
import { writeFile } from "fs/promises";
import { join } from "path";
import db from "@/config/db";
import QueryResult, { OkPacket } from "mysql2";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Api_key,
  api_secret: process.env.Api_secret,
});

export const Templete_upload_Action = async (formData: FormData) => {
  const title = formData.get("title");
  const image = formData.get("image") as File;
  const mailinput = formData.get("mailinput");
  const tempDir = tmpdir();
  const tempFilePath = join(tempDir, image.name);
  const fileContent = await image.arrayBuffer();
  await writeFile(tempFilePath, Buffer.from(fileContent));
  const uploadResponse = await cloudinary.uploader.upload(tempFilePath, {
    upload_preset: "s9y39nb8",
  });

  if (uploadResponse.url) {
    const query = `
      INSERT INTO templete (title, image_url, mail_input)
      VALUES (?, ?, ?)
    `;
    const values = [title, uploadResponse.secure_url, mailinput];
    const [result] = await db.execute(query, values);

    if ((result as OkPacket).affectedRows === 1) {
      console.log("Data inserted successfully.");
      return {
        success: true,
      };
    } else {
      console.log("Failed to insert data.");
      return {
        success: false,
      };
    }
  } else {
    return false;
  }
};
