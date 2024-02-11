import { router, publicProcedure } from "./trpc";
import { getTodos, movieList, personList } from "./hooks";

export const appRouter = router({
  getTodos,
  movieList,
  personList,
});

export type AppRouter = typeof appRouter;
