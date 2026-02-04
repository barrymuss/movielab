import { NextRequest, NextResponse } from "next/server";
import { fetchTMDB } from "@/lib/tmdb";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    // Fetch movie details, credits, and videos in parallel
    const [details, credits, videos] = await Promise.all([
      fetchTMDB(`/movie/${id}?language=en-US`),
      fetchTMDB(`/movie/${id}/credits?language=en-US`),
      fetchTMDB(`/movie/${id}/videos?language=en-US`),
    ]);

    return NextResponse.json({
      ...details,
      credits,
      videos: videos.results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch movie details" },
      { status: 500 }
    );
  }
}
