import submitFormData from "@/actions/Submit-Form-Data";
import React from "react";

const Bulk = () => {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Bulk Email Send.</h1>

          <p className="mt-4 text-gray-500">
            Increase Your Productivity by Integrating with Bulk Email Feature.
          </p>
        </div>
        <form
          action={submitFormData}
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
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <div className="border border-zinc-900 rounded-lg">
                <input
                  type="file"
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border-zinc-700"
                  placeholder="Upload file."
                  name="file"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
              Send.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bulk;
