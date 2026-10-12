/** The brand's three-bar asterisk, used as big architectural shapes. */
export default function Asterisk({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-50 -50 100 100" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x="-9" y="-50" width="18" height="100" rx="9" />
        <rect x="-9" y="-50" width="18" height="100" rx="9" transform="rotate(60)" />
        <rect x="-9" y="-50" width="18" height="100" rx="9" transform="rotate(120)" />
      </g>
    </svg>
  );
}
