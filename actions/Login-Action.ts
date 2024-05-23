"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const AddFormActions = (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  if (email == "admin@gmail.com" && password == "admin") {
    cookies().set("user", "jwt-secret"); // TODO: NEED TO FIX
    redirect(`/dashboard`);
  } else {
    redirect("/");
    return { success: false };
  }
};

export default AddFormActions;
