"use client";
import fetchTemplates from "@/actions/Fetch_Templetes";
import TempleteCard from "@/components/TempleteCard";
import UploadTemplete from "@/components/UploadTemplete";
import db from "@/config/db";
import { QueryResult } from "mysql2";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [Templete, setTemplete] = useState<QueryResult | undefined | []>();
  const [loading, setLoading] = useState<boolean>(true); // Start with loading state as true

  useEffect(() => {
    async function fetchData() {
      try {
        const data: QueryResult | undefined = await fetchTemplates();
        setTemplete(data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      } finally {
        setLoading(false); // Set loading state to false regardless of success or error
      }
    }

    fetchData();
  }, []);

  console.log(Templete);

  return (
    <div className="p-2 m-3 ">
      <div className="flex justify-center p-5 ">
        <h1 className="hover:font-bold transition ease-in-out delay-150">
          Choose Templete
        </h1>
      </div>
      <div className="flex justify-end m-3 ">
        <UploadTemplete />
      </div>
      <div className="flex gap-3 flex-wrap shrink items-center justify-center">
        {loading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-80 h-56 border bg-zinc-400 rounded-md hover:cursor-pointer animate-pulse">
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
              key={template.id}
              title={template?.title}
              image_url={template.image_url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
