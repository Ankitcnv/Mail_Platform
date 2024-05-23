"use server";
import db from "@/config/db";

export default async function fetchTemplates() {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query("SELECT * FROM templete");
    connection.release();
    return rows;
  } catch (error) {
    console.error("Error fetching templates:", error);
  }
}
