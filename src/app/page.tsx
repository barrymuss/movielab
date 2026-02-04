import {
  Banner,
  PopularMovie,
  TopRatedMovie,
  NowPlayingMovie,
  UpcomingMovie,
  PopularTvShows,
  PopularPerson,
} from "@/modules";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularMovie />
      <TopRatedMovie />
      <NowPlayingMovie />
      <UpcomingMovie />
      <PopularTvShows />
      <PopularPerson />
    </>
  );
}
