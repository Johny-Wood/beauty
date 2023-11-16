function LaserRemovalIcon({ width = 32 }: { width?: string | number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#387C81" />
      <path d="M28 4C14.7452 4 4 14.7452 4 28H28V4Z" fill="#CFCA46" />
    </svg>
  )
}

export default LaserRemovalIcon
