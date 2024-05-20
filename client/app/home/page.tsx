"use client";
import TempleteCard from "@/components/TempleteCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard/bulk-mail-form");
  };

  return (
    <div className="p-2 m-3 ">
      <div className="flex justify-center p-5 ">
        <h1 className="hover:font-bold transition ease-in-out delay-150">
          Choose Templete
        </h1>
      </div>

      <div className="flex gap-3 flex-wrap shrink items-center justify-center">
        <TempleteCard />
        <TempleteCard />
        <TempleteCard />
        <TempleteCard />
      </div>
    </div>
  );
};

export default Home;
