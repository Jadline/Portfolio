export default function DotSquare({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill="#FDE68A" />
        </pattern>
      </defs>
      <rect width={size} height={size} rx="10" fill="transparent" />
      <rect width={size} height={size} rx="10" fill="url(#dots)" />
    </svg>
  )
}
