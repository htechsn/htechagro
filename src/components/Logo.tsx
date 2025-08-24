import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 300 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular arrangement of leaves */}
      <g transform="translate(40, 40)">
        {/* Top green leaf */}
        <path 
          d="M0,-20 Q-10,-25 -8,-35 Q0,-40 8,-35 Q10,-25 0,-20Z" 
          fill="#22c55e" 
          opacity="0.9"
        />
        
        {/* Top-right teal leaf */}
        <path 
          d="M14,-14 Q20,-20 28,-18 Q30,-10 25,-5 Q18,-8 14,-14Z" 
          fill="#14b8a6" 
          opacity="0.9"
        />
        
        {/* Right blue leaf */}
        <path 
          d="M20,0 Q25,-10 35,-8 Q40,0 35,8 Q25,10 20,0Z" 
          fill="#0ea5e9" 
          opacity="0.9"
        />
        
        {/* Bottom-right green leaf */}
        <path 
          d="M14,14 Q20,20 18,28 Q10,30 5,25 Q8,18 14,14Z" 
          fill="#84cc16" 
          opacity="0.9"
        />
        
        {/* Bottom lime leaf */}
        <path 
          d="M0,20 Q10,25 8,35 Q0,40 -8,35 Q-10,25 0,20Z" 
          fill="#a3e635" 
          opacity="0.9"
        />
        
        {/* Bottom-left green leaf */}
        <path 
          d="M-14,14 Q-20,20 -28,18 Q-30,10 -25,5 Q-18,8 -14,14Z" 
          fill="#22c55e" 
          opacity="0.9"
        />
        
        {/* Left white/gray leaf */}
        <path 
          d="M-20,0 Q-25,10 -35,8 Q-40,0 -35,-8 Q-25,-10 -20,0Z" 
          fill="#e5e7eb" 
          opacity="0.9"
        />
        
        {/* Top-left green leaf */}
        <path 
          d="M-14,-14 Q-20,-20 -18,-28 Q-10,-30 -5,-25 Q-8,-18 -14,-14Z" 
          fill="#10b981" 
          opacity="0.9"
        />
      </g>
      
      {/* Text "htechagro" */}
      <g transform="translate(90, 50)">
        <text 
          fontFamily="'Segoe UI', system-ui, sans-serif" 
          fontSize="36" 
          fontWeight="300"
          letterSpacing="-1"
        >
          <tspan fill="#6b7280">htech</tspan>
          <tspan fill="#22c55e" fontWeight="500">agro</tspan>
        </text>
      </g>
    </svg>
  );
};

export default Logo;
