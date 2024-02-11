"use client";

import { useReducer, useMemo } from "react";
import { usetrpc } from "@/useTRPC";
import { Carousel, Tag } from "antd";

import style from "@/styles/component/banner.module.scss";
import { Button, Icon } from "@/components";

const Banner = () => {
  const [app, setApp] = useReducer((next: any, prev: any) => ({ ...next, ...prev }), {
    page: 1,
    genre: [],
    movieData: [],
  });

  const getPopularMovie = usetrpc.movieList.popular.useQuery({ page: app.page });
  const getGenre = usetrpc.movieList.genre.useQuery();

  useMemo(() => {
    const datas = getPopularMovie.data as any;
    let arrMovie: any[] = [];
    let arrGenre: any[] = [];

    datas?.results.map((item: any) => {
      arrMovie.push(item);
    });

    getGenre.data?.genres.map((item: any) => {
      arrGenre.push(item);
    });

    setApp({ movieData: arrMovie.splice(0, 5), genre: arrGenre });
  }, [getPopularMovie.data]);

  const onChange = (currentSlide: any) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      className={style["banner"]}
      autoplay
      autoplaySpeed={10000}
      effect='fade'
      easing='ease'
      dotPosition='right'>
      {app.movieData.map((item: any) => {
        return (
          <div
            key={item.id}
            style={{ borderRadius: "6px" }}>
            <div className={style["carousel-item"]}>
              <div className={style["image"]}>
                <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} />
              </div>
              <div className={style["overlay"]}>
                <div className={style["inner-overlay"]}>
                  <div className={style["title-overlay"]}>
                    <h2 className={style["title"]}>{item.title}</h2>
                    <div className={style["genre"]}>
                      {item.genre_ids.map((genres: any, idx: any) => {
                        let genreName: any = "";
                        app.genre.map((genre: any) => {
                          if (genre.id == genres) {
                            genreName = genre.name;
                          }
                        });
                        return (
                          <Tag
                            key={idx}
                            bordered={false}
                            className={style["genre-tag"]}>
                            {genreName}
                          </Tag>
                        );
                      })}
                    </div>
                    <h6 className={style["overview"]}>{item.overview}</h6>
                    <div className={style["buttons"]}>
                      <Button
                        className={`${style["btn-overlay"]} ${style["btn-play"]}`}
                        size='large'
                        danger
                        icon={
                          <Icon
                            size={18}
                            className={style["play-icon"]}
                            type='play'
                          />
                        }>
                        Trailer
                      </Button>
                      <Button
                        className={style["btn-overlay"]}
                        size='large'
                        icon={
                          <Icon
                            size={18}
                            type='info'
                          />
                        }>
                        More info
                      </Button>
                    </div>
                  </div>
                  {/* <div className={style["info"]}>
                    <p className={style["date"]}>{item.release_date}</p>
                    <p className={style["rating"]}>Rating: {item.vote_average}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
