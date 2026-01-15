export function ProfileAvatar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Face (brown skin tone) */}
        <ellipse cx="100" cy="130" rx="60" ry="75" fill="#D4A574" />
        
        {/* Hair (black) */}
        <path
          d="M 50 80 Q 50 40, 100 35 Q 150 40, 150 80 Q 145 65, 100 60 Q 55 65, 50 80 Z"
          fill="#1a1a1a"
        />
        <path
          d="M 45 75 Q 45 30, 100 25 Q 155 30, 155 75 Q 150 55, 100 50 Q 50 55, 45 75 Z"
          fill="#0f0f0f"
        />
        
        {/* Hair sides */}
        <ellipse cx="75" cy="90" rx="20" ry="35" fill="#1a1a1a" />
        <ellipse cx="125" cy="90" rx="20" ry="35" fill="#1a1a1a" />
        
        {/* Eyes */}
        <circle cx="85" cy="115" r="8" fill="#2a2a2a" />
        <circle cx="115" cy="115" r="8" fill="#2a2a2a" />
        <circle cx="87" cy="115" r="4" fill="#fff" />
        <circle cx="117" cy="115" r="4" fill="#fff" />
        
        {/* Nose */}
        <ellipse cx="100" cy="130" rx="3" ry="8" fill="#B8946A" />
        
        {/* Mouth */}
        <path
          d="M 90 145 Q 100 150, 110 145"
          stroke="#2a2a2a"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Subtle shadow for depth */}
        <ellipse cx="100" cy="180" rx="50" ry="15" fill="#000" opacity="0.1" />
      </svg>
    </div>
  );
}

