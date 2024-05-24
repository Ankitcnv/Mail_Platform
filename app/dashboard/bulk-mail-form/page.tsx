"use client";
import submitFormData from "@/actions/Submit-Form-Data";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export interface InputPair {
  key: string;
  value: string;
}

const Bulk = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const url = params.get("url");
  const [loading, setLoading] = useState(false);

  const [inputPairs, setInputPairs] = useState<InputPair[]>([
    { key: "", value: "" },
  ]);

  const handleBroadcast = async (formData: FormData) => {
    setLoading(true);
    inputPairs.forEach((inputPair, index) => {
      formData.append(`key[${index}]`, inputPair.key);
      formData.append(`value[${index}]`, inputPair.value);
    });

    try {
      toast.loading("Boradcasting...", { id: "1" });
      const data = await submitFormData(formData);
      if (data.success) {
        toast.success("Done.", { id: "1" });
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error while Broadcast", { id: "1" });
    }
  };

  const handleInputChange = (
    index: number,
    key: keyof InputPair,
    value: string
  ) => {
    const newInputPairs = [...inputPairs];
    newInputPairs[index][key] = value;
    setInputPairs(newInputPairs);
  };

  const addInputPair = () => {
    if (inputPairs.length === 4) {
      toast.error("Not More Than 4 Buttons");
      return;
    }
    setInputPairs([...inputPairs, { key: "", value: "" }]);
  };

  const removeInputPair = (index: number) => {
    const newInputPairs = [...inputPairs];
    newInputPairs.splice(index, 1);
    setInputPairs(newInputPairs);
  };

  // const handleSubmit = () => {
  //   const formData = inputPairs.map((inputPair) => ({
  //     key: inputPair.key.trim(),
  //     value: inputPair.value.trim(),
  //   }));
  // };

  return (
    <Suspense>
      <div className="flex justify-center items-center mt-10 bg-slate-100">
        <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
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
                //@ts-ignore
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
                    placeholder="Enter The heading."
                    name="heading"
                  />
                </div>
              </div>
              <div>
                <div className="relative mb-1">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      className="w-full p-2 object-cover border border-zinc-900 rounded-lg text-sm shadow-sm"
                      src={url as string}
                      // @ts-ignore
                      name="file"
                      alt="Image Preview"
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
                    rows={3}
                    cols={4}
                    placeholder="Main Text Area."
                    name="textarea"
                  />
                </div>
              </div>
              <div>
                {inputPairs.map((inputPair, index) => (
                  <>
                    <div key={index} className="flex flex-row flex-wrap">
                      <input
                        type="text"
                        value={inputPair.key}
                        className="outline outline-1 outline-zinc-700 p-1 rounded-md w-1/2"
                        placeholder="Button name"
                        onChange={(e) =>
                          handleInputChange(index, "key", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        value={inputPair.value}
                        className="outline outline-1 outline-zinc-700 p-1 rounded-md w-1/2"
                        placeholder="Link."
                        onChange={(e) =>
                          handleInputChange(index, "value", e.target.value)
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="bg-red-400 outline outline-1 outline-zinc-900 my-1 p-1 text-sm rounded-lg text-red-800"
                      onClick={() => removeInputPair(index)}>
                      Remove
                    </button>
                  </>
                ))}
                <button
                  type="button"
                  onClick={addInputPair}
                  className=" text-black text-sm hover:text-red-700 mx-3">
                  Add Button
                </button>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                  {loading ? "Broadcast...." : "Broadcast"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Bulk;
