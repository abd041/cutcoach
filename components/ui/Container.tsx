import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
}

export function Container({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl pl-[max(1.25rem,var(--safe-left))] pr-[max(1.25rem,var(--safe-right))] sm:px-8 lg:px-12 xl:max-w-[1440px]",
        className
      )}
    >
      {children}
    </Component>
  );
}
