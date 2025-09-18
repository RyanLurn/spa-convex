import { createFileRoute } from "@tanstack/react-router";
import { api } from "backend/_generated/api";
import { useQuery } from "convex/react";

export const Route = createFileRoute("/tasks")({
  component: Tasks
});

function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="App">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}
