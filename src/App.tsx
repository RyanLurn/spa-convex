import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => toast.info("Hello")}>Click me</Button>
    </div>
  );
}

export { App };
