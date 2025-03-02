export function AddToCartIcon(props: Record<string, string>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3H5L6 16H19L21 6H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
      <g transform="translate(12, 11) scale(0.7) translate(-12, -11)">
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="11"
          x2="15"
          y2="11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
