import { NextResponse } from "next/server";
import { fetchTMDB } from "@/lib/tmdb";

export async function GET() {
  try {
    const data = await fetchTMDB("/genre/movie/list?language=en");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch genres" },
      { status: 500 }
    );
  }
}
