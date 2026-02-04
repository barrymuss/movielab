"use client";

import { useMemo, useReducer } from "react";
import { usePopularPersons } from "@/hooks";
import { cn } from "@/lib/utils";

interface Person {
  id: number;
  name: string;
  profile_path: string;
  known_for_department: string;
}

export default function PopularPerson() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    { page: 1, personData: [] }
  );

  const { data: popularPersonsData } = usePopularPersons({ page: app.page });

  useMemo(() => {
    if (!popularPersonsData?.results) return;
    const persons = popularPersonsData.results.slice(0, 10);
    setApp({ personData: persons });
  }, [popularPersonsData]);

  if (app.personData.length === 0) return null;

  return (
    <section className="py-8 px-6 lg:px-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-foreground text-xl font-semibold">Popular Actors</h2>
        <button className="text-sm text-foreground/50 hover:text-foreground transition-colors">
          See all
        </button>
      </div>

      {/* Person List - Horizontal Scroll */}
      <div
        className={cn(
          "flex gap-5 overflow-x-auto pb-2",
          "scrollbar-none [&::-webkit-scrollbar]:hidden"
        )}
      >
        {app.personData.map((person: Person) => (
          <div
            key={person.id}
            className="flex-shrink-0 w-[120px] group cursor-pointer text-center"
          >
            {/* Profile Image */}
            <div className="relative mb-3">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto">
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  className={cn(
                    "w-full h-full object-cover",
                    "transition-transform duration-300",
                    "group-hover:scale-110"
                  )}
                />
              </div>
            </div>

            {/* Info */}
            <h3 className="text-foreground font-medium text-sm line-clamp-1">
              {person.name}
            </h3>
            <p className="text-foreground/50 text-xs">
              {person.known_for_department}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
