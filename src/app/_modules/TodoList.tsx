"use client";

import { usetrpc } from "@/useTRPC";

export default function TodoList() {
  const getTodos = usetrpc.getTodos.getTodos.useQuery();

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
}
