import React from "react";
import { useRouter } from "next/navigation";

const TempleteCard = ({
  title,
  image_url,
}: {
  title: string;
  image_url: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="w-80 h-56 border bg-zinc-200 rounded-md hover:cursor-pointer"
      onClick={() => {
        router.push(
          `/dashboard/bulk-mail-form?title=${title}&url=${image_url}`
        );
      }}>
      <img alt="" src={image_url} className="object-cover h-40 w-full p-3 " />

      <div className="py-2 px-1">
        <h3 className="sm:text-md text-sm font-medium text-gray-900">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default TempleteCard;
