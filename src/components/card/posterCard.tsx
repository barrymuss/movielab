import { CardProps } from "antd";
import { Card, Grid } from "..";

import style from "@/styles/component/posterCard.module.scss";
type PosterCardProps = {
  children?: any;
  cover?: any;
  data?: any;
};

const PosterCard = ({ children, cover, data }: PosterCardProps, props: CardProps) => {
  return (
    <div className={style["poster-card"]}>
      <section className={style["section"]}>
        <Grid>
          {data &&
            data?.map((item: any, index: any) => {
              return (
                <Grid.Col
                  flex={"auto"}
                  key={item.id}>
                  <img
                    alt='example'
                    src={
                      item.backdrop_path == null
                        ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                        : `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
                    }
                  />
                </Grid.Col>
              );
            })}
        </Grid>
      </section>
    </div>
  );
};

export default PosterCard;
