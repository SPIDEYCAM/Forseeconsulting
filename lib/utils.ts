import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScrollTo(
  e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href?: string,
  onComplete?: () => void
) {
  const targetHref = href || (e && e.currentTarget ? e.currentTarget.getAttribute("href") || "" : "");
  if (!targetHref || !targetHref.includes("#")) return;

  if (e) {
    e.preventDefault();
  }

  const id = targetHref.split("#")[1];
  if (!id) return;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined") {
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
    }
  }

  if (onComplete) {
    onComplete();
  }
}