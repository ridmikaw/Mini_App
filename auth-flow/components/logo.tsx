export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <span className="text-xl font-bold text-white">ROOM.ME</span>
    </div>
  )
}

