import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Templete_upload_Action } from "@/actions/Templete_upload_action";
const UploadTemplete = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-zinc-300">
          Upload Templete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Template</DialogTitle>
          <DialogDescription>
            Make changes to Templete. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={Templete_upload_Action}>
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
            <Button
              type="submit"
              className="bg-zinc-300 text-black hover:text-white">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadTemplete;
