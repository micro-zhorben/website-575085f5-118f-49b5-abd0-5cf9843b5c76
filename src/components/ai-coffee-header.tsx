import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Coffee } from "lucide-react";

export function AICoffeeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <Typography.H3>AI Coffee Guide</Typography.H3>
        </div>
        <nav className="flex items-center gap-4">
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}