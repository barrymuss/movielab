import { Grid } from "@/components/ui/grid";
import { cn } from "@/lib/utils";

type PosterCardProps = {
  children?: React.ReactNode;
  data?: Array<{
    id: number;
    backdrop_path: string | null;
    poster_path: string;
  }>;
};

export default function PosterCard({ children, data }: PosterCardProps) {
  return (
    <div className="overflow-hidden">
      <section className="flex flex-row w-full relative">
        <Grid>
          {data?.map((item) => (
            <Grid.Col flex="auto" key={item.id}>
              <img
                alt="movie poster"
                src={
                  item.backdrop_path == null
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
                }
                className={cn(
                  "w-[120px] h-[340px] object-cover rounded-md cursor-pointer",
                  "transition-[width] duration-[800ms] ease-in-out",
                  "hover:w-[500px]"
                )}
              />
            </Grid.Col>
          ))}
        </Grid>
      </section>
    </div>
  );
}

export { PosterCard };
