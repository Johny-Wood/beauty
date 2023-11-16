function AlexandriteIcon({ width = 32 }: { width?: string | number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#387C81" />
      <path d="M25.24 16L16.12 4L7 16L16.12 28L25.24 16Z" fill="#CFCA46" />
    </svg>
  )
}

export default AlexandriteIcon
