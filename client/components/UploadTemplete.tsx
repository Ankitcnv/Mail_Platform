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
import { Input } from "@/components/ui/input";
import { Templete_upload_Action } from "@/actions/Templete_upload_action";
import { TemplteForm } from "./TemplteForm";
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
        <TemplteForm />
      </DialogContent>
    </Dialog>
  );
};

export default UploadTemplete;
