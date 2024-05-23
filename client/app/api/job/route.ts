import { NextResponse } from "next/server";
import cron from "node-cron";
import db from "@/config/db";

export async function GET() {
  cron.schedule("* * * * * *", async () => {
    console.log("");
    console.log("######################################");
    console.log("#                                    #");
    console.log("# Running scheduler every 1 second   #");
    console.log("#                                    #");
    console.log("######################################");
    console.log("");
  });

  return NextResponse.json({ msg: "route is working.." });
}
