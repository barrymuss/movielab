import { NextRequest, NextResponse } from "next/server";
import { fetchTMDB } from "@/lib/tmdb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") || "1";

  try {
    const data = await fetchTMDB(`/movie/popular?language=en-US&page=${page}`);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch popular movies" },
      { status: 500 }
    );
  }
}
