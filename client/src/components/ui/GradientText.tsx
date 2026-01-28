import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "subtle" | "white";
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  const gradients = {
    primary: "from-primary via-purple-400 to-primary",
    subtle: "from-white via-primary/80 to-white",
    white: "from-white/90 via-white to-white/90",
  };

  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
