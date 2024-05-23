import { NextResponse } from "next/server";
import cron from "node-cron";
import db from "@/config/db";

export async function GET() {
  const connection = await db.getConnection();
  const [rows] = await connection.query("show databases;");
  connection.release();

  return NextResponse.json({ data: rows });
}
