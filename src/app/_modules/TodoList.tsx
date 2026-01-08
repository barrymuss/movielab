"use client";

export default function TodoList() {
  // Demo component - tRPC removed
  const todos = [10, 20, 30];

  return (
    <div>
      <div>{JSON.stringify(todos)}</div>
    </div>
  );
}
