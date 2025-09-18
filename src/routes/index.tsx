import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        SPA + Convex
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A template for a client-side rendered React Vite single-page application
        with a Convex backend.
      </p>
    </div>
  );
}
