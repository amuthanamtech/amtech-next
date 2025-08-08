import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "data", "knowledge.md");
    console.log("Reading file at:", filePath);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return NextResponse.json({ content: fileContents });
  } catch (error) {
    console.error("Error reading knowledge.md:", error);
    return NextResponse.json(
      { error: "Failed to load knowledge file" },
      { status: 500 }
    );
  }
}
