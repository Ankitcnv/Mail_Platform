"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard/bulk-mail-form");
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <Button onClick={handleRedirect}>To Dashboard</Button>
    </div>
  );
};

export default Home;
