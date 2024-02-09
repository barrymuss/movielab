import { router, publicProcedure } from "./trpc";
import { getTodos, movieList } from "./hooks";

export const appRouter = router({
  getTodos,
  movieList,
});

export type AppRouter = typeof appRouter;
