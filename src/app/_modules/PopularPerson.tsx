"use client";

import { useMemo, useReducer } from "react";
import { usePopularPersons } from "@/hooks";
import { Card } from "@/components/ui/card";

export default function PopularPerson() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    {
      page: 1,
      personData: [],
    }
  );

  const { data: popularPersonsData } = usePopularPersons({ page: app.page });

  useMemo(() => {
    if (!popularPersonsData?.results) return;

    const persons = popularPersonsData.results.slice(0, 6);
    setApp({ personData: persons });
  }, [popularPersonsData]);

  return (
    <Card>
      {app.personData?.map((person: any) => {
        return (
          <div key={person.id} className="flex items-center">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                width="50px"
                height="auto"
                alt={person.name}
              />
            </div>
            <div>{person.original_name}</div>
          </div>
        );
      })}
    </Card>
  );
}
