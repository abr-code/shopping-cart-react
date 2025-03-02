// <!-- item de disminuir -->

export function MinusIcon(props: Record<string, string>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
