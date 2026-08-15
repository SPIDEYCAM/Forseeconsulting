import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("container", className)}
      {...props}
    >
      {children}
    </div>
  );
}