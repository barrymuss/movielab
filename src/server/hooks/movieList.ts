import { APITOKEN, APIURL } from ".";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const movieList = router({
	popular: publicProcedure
		.input(
			z.object({
				page: z.number(),
			})
		)
		.query(async ({ input: { page } }) => {
			const response = await fetch(`${APIURL}/movie/popular?language=en-US&page=${page}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${APITOKEN}`,
				},
			});

			const data = await response.json();

			return data;
		}),
});
