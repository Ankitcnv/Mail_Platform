"use client";
import submitFormData from "@/actions/Submit-Form-Data";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRef } from "react";

const Bulk = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const url = params.get("url");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  const handleBroadcast = async (formData: FormData) => {
    setLoading(true);
    try {
      await toast.loading("Boradcasting...", { id: "1" });
      const data = await submitFormData(formData);
      if (data.success) {
        await toast.success("Done.", { id: "1" });
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error while Broadcast", { id: "1" });
    }
  };
  console.log("loader value: ", loading);
  return (
    <div className="flex justify-center items-center ">
      <div className="mx-auto max-w-scree-nxl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          <p className="mt-4 mb-3 text-gray-500">
            Increase Your Productivity by Integrating with Bulk Email Feature.
          </p>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleBroadcast(formData);
            }}
            className="mx-auto max-w-md space-y-4">
            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full mb-2 rounded-lg p-1 text-sm shadow-sm border-zinc-700 outline outline-1"
                  placeholder="Enter The subject of the mail."
                  name="subject"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-1 text-sm shadow-sm border-zinc-700 outline outline-1"
                  placeholder="Enter The heading. "
                  name="heading"
                />
              </div>
            </div>

            <div>
              <div className="relative mb-2">
                <div className="">
                  <img
                    className="w-56 h-56 p-2 object-cover border border-zinc-900 rounded-lg text-sm shadow-sm items-center justify-center"
                    src={url as string}
                    name="file"
                  />
                </div>

                <input
                  type="text"
                  value={url as string}
                  className="hidden"
                  name="url"
                />
              </div>

              <div className="relative">
                <textarea
                  className="w-full rounded-lg p-1 text-sm shadow-sm border-zinc-700 outline outline-1"
                  rows={6}
                  cols={4}
                  placeholder="Main Text Area."
                  name="textarea"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button
                type="submit"
                disabled={loading}
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                {loading ? "Broadcast...." : "Broadcast"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bulk;
