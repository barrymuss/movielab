"use client";

import { Card } from "@/components";
import { usetrpc } from "@/useTRPC";
import { useMemo, useReducer } from "react";

export default function PopularPerson() {
 const [app, setApp] = useReducer(
  (next: any, prev: any) => ({ ...next, ...prev }),
  {
   page: 1,
   span: 6,
   personData: [],
  }
 );
 const getPerson = usetrpc.personList.popular.useQuery({ page: 1 });

 const data = useMemo(() => {
  let arrPerson: any[] = [];

  getPerson.data?.results.map((item: any) => {
   arrPerson.push(item);
  });

  setApp({ personData: arrPerson.splice(0, 6) });
 }, [getPerson.data]);

 return (
  <Card>
   {app.personData?.map((person: any) => {
    return (
     <div
      key={person.id}
      style={{ display: "flex", alignItems: "center" }}>
      <div>
       <img
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        width={"50px"}
        height={"auto"}
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
