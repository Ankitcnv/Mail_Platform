"use client";
import submitFormData from "@/actions/Submit-Form-Data";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Bulk = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const url = params.get("url");
  const [loading, setLoading] = useState(false);

  const handleBroadcast = async (formData: FormData) => {
    try {
      setLoading(true);
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
  if (loading) return <p>loaing...</p>;
  return (
    <div className="flex justify-center items-center mt-2">
      <div className="mx-auto max-w-scree-nxl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          <p className="mt-4 text-gray-500">
            Increase Your Productivity by Integrating with Bulk Email Feature.
          </p>
        </div>
        <div>
          <form
            action={handleBroadcast}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border-zinc-700 outline outline-1"
                  placeholder="Enter The subject of the mail."
                  name="subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="file" className="sr-only">
                Password
              </label>

              <div className="relative">
                <div className="border border-zinc-900 rounded-lg">
                  <img
                    className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border-zinc-700"
                    src={url}
                    name="file"
                  />
                </div>

                <input type="text" value={url} className="hidden" name="url" />
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
