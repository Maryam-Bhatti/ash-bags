import type { ReactNode, SVGProps } from "react";

type IconName =
  | "bag"
  | "search"
  | "arrow"
  | "arrowUp"
  | "menu"
  | "close"
  | "plus"
  | "minus"
  | "trash"
  | "instagram"
  | "facebook"
  | "pinterest"
  | "check";

const paths: Record<IconName, ReactNode> = {
  bag: (
    <>
      <path d="M5 8h14l1 12H4L5 8Z" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4 4" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUp: <path d="M7 17 17 7M8 7h9v9" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  plus: <path d="M12 5v14m-7-7h14" />,
  minus: <path d="M5 12h14" />,
  trash: (
    <>
      <path d="M3 6h18m-2 0-.9 14H5.9L5 6m4 0V4h6v2" />
      <path d="M10 11v5m4-5v5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
  pinterest: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 20c2-3 2-5 3-9m-1 4c3 2 7 0 7-4a5 5 0 0 0-10 0" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.65"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
