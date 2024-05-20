"use server";
import { v2 as cloudinary } from "cloudinary";
import { tmpdir } from "os";
import { writeFile } from "fs/promises";
import { join } from "path";

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Api_key,
  api_secret: process.env.Api_secret,
});

export const Templete_upload_Action = async (formData: FormData) => {
  try {
    console.log("hi form server actions");
    const title = formData.get("title");
    const image = formData.get("image") as File;
    const mailinput = formData.get("mailinput");

    const tempDir = tmpdir();
    const tempFilePath = join(tempDir, image.name);
    // @ts-ignore
    await writeFile(tempFilePath, image);

    const uploadResponse = await cloudinary.uploader.upload(tempFilePath, {
      upload_preset: "ehd16dvf",
    });
    console.log("upload response: ", uploadResponse);
    // Delete the temporary file
    // fs.unlink(tempFilePath, (err) => {
    //   if (err) {
    //     console.error('Error deleting temporary file:', err);
    //   }
    // });

    return uploadResponse;
  } catch (error) {
    console.error("Error uploading image:", error);
    return false;
  }
};
