"use server";
import { v2 as cloudinary } from "cloudinary";
import { tmpdir } from "os";
import { writeFile } from "fs/promises";
import { join } from "path";

export const Templete_upload_Action = async (formData: FormData) => {
  console.log(formData);
};
