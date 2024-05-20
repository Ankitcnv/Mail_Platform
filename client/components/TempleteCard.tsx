import React from "react";
import { useRouter } from "next/navigation";

const TempleteCard = () => {
  const router = useRouter();
  return (
    <div
      className="w-80 h-56 border bg-zinc-200 rounded-md hover:cursor-pointer"
      onClick={() => {
        router.push("/dashboard/bulk-mail-form");
      }}>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="object-cover h-40 w-full p-3 "
      />

      <div className="py-2 px-1">
        <h3 className="sm:text-md text-sm font-medium text-gray-900">
          Email Template For TDS Service.
        </h3>
      </div>
    </div>
  );
};

export default TempleteCard;
