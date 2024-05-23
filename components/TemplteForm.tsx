"use client";
import { Templete_upload_Action } from "@/actions/Templete_upload_action";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

export function TemplteForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    try {
      const data = await Templete_upload_Action(formData);
      // @ts-ignore
      if (data.success) {
        window.location.reload();
      }
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form data:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form action={handleSubmit}>
      <div className="gap-4 py-1 flex flex-col justify-between">
        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="title" className="text-left">
            Title
          </Label>

          <Input
            id="title"
            name="title"
            placeholder={"Enter Title for the Mail."}
            className="col-span-3"
            disabled={loading}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="image" className="text-left">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            type="file"
            className="col-span-3"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="mailinput" className="text-left">
            Mail Input
          </Label>
          <Input
            id="mailinput"
            name="mailinput"
            type="text"
            placeholder="Enter mail Input."
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <TemplteButton />
      </DialogFooter>
    </form>
  );
}
function TemplteButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-zinc-300 text-black hover:text-white mt-3">
      {pending ? "Sending..." : "Send"}
    </Button>
  );
}
