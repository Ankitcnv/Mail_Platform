import { NextResponse } from "next/server";
import cron from "node-cron";
import db from "@/config/db";
import { sendMessage } from "@/config/mail";

export async function GET() {
  cron.schedule("14 16 * * *", async () => {
    const today: string = new Date().toISOString().split("T")[0];

    const connection = await db.getConnection();

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE DATE_FORMAT(date_of_birth, '%m-%d') = DATE_FORMAT(?, '%m-%d')",
      [today]
    );

    console.log("rows: ", rows);

    connection.release();

    // @ts-ignore
    rows.forEach(async (user: any) => {
      console.log("for user: ", user);
      const obj = {
        username: user.name,
        email: user.email,
      };
      await sendMessage({ ...obj });
    });
  });

  return NextResponse.json({
    data: "Job is running... at morning for bithday mail.",
  });
}
