import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/utils/mode-toggle";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => toast.info("Hello")}>Click me</Button>
      <ModeToggle className="fixed right-4 bottom-4" />
    </div>
  );
}

export { App };
