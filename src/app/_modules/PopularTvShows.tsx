"use client";

import { useMemo, useReducer } from "react";
import { usePopularTvShows } from "@/hooks";
import { MediaSection } from "@/components/ui/media-section";

export default function PopularTvShows() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    { page: 1, tvData: [] }
  );

  const { data: tvShowsData } = usePopularTvShows({ page: app.page });

  useMemo(() => {
    if (!tvShowsData?.results) return;
    const shows = tvShowsData.results.slice(0, 10);
    setApp({ tvData: shows });
  }, [tvShowsData]);

  if (app.tvData.length === 0) return null;

  return (
    <MediaSection
      title="Popular TV Shows"
      data={app.tvData}
      showGenre={false}
      type="tv"
    />
  );
}
