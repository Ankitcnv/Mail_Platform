"use client";
import fetchTemplates from "@/actions/Fetch_Templetes";
import TempleteCard from "@/components/TempleteCard";
import UploadTemplete from "@/components/UploadTemplete";
import db from "@/config/db";
import { QueryResult } from "mysql2";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [Templete, setTemplete] = useState<QueryResult | undefined | []>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const data: QueryResult | undefined = await fetchTemplates();
        setTemplete(data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-2 m-3 ">
      <div className="flex justify-center p-5 ">
        {/* <h1 className="hover:font-bold transition ease-in-out delay-150">
          Choose Templete
        </h1> */}
      </div>
      <div className="flex justify-end m-3 ">
        <UploadTemplete />
      </div>
      <div className="flex gap-3 flex-wrap shrink items-center justify-start">
        {/* This is for Mobile phone. */}

        <div className="sm:hidden block">
          <div
            className="w-80 h-56 border bg-zinc-200 rounded-md hover:cursor-pointer"
            onClick={() => {
              router.push(
                `/dashboard/bulk-mail-form?title=${"birthday"}&url=${"https://res.cloudinary.com/dmocmx63u/image/upload/v1716284467/cnvmoney/c2uwgpbd07syrvw4hjea.jpg"}`
              );
            }}>
            <img
              alt=""
              src={
                "https://res.cloudinary.com/dmocmx63u/image/upload/v1716284467/cnvmoney/c2uwgpbd07syrvw4hjea.jpg"
              }
              className="object-cover h-40 w-full p-3 "
            />

            <div className="py-2 px-1">
              <h3 className="sm:text-md text-sm font-medium text-gray-900">
                {"birthday"}
              </h3>
            </div>
          </div>
        </div>
        {Array.isArray(Templete) && Templete.length == 0 && (
          <>
            <h1 className="text-xl text-black flex justify-center items-center">
              No Templete Found
            </h1>
          </>
        )}
        {loading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-80 h-56 border bg-zinc-300 rounded-md hover:cursor-pointer animate-pulse">
                <div className="py-2 px-1">
                  <h3 className="sm:text-md text-sm font-medium text-gray-900 w-3 h-3 animate-bounce"></h3>
                </div>
              </div>
            ))}
          </>
        ) : (
          Array.isArray(Templete) &&
          Templete.map((template, index) => (
            <TempleteCard
              // @ts-ignore
              key={template.id}
              // @ts-ignore
              title={template?.title}
              // @ts-ignore
              image_url={template.image_url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
