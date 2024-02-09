import { publicProcedure, router } from "../trpc";

export const getTodos = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
});
