import { cn } from "@/lib/cn";

/**
 * Tasteful product placeholder rendered as a vector garment so we never
 * rely on random stock photos. The owner can replace these with real
 * photography without changing the layout (same aspect ratio).
 *
 * tone maps to a restrained brand palette (black / bone / sand).
 */
export function ProductVisual({
  tone = "light",
  className,
  label,
}: {
  tone?: "light" | "dark" | "mid";
  className?: string;
  label: string;
}) {
  const palettes = {
    light: {
      bg: "#e9e2d6",
      garment: "#f2eee5",
      shade: "#ddd4c4",
      fold: "#c9bea9",
      label: "#3b3731",
    },
    dark: {
      bg: "#211d19",
      garment: "#2c2722",
      shade: "#383229",
      fold: "#4a4237",
      label: "#cbbb9f",
    },
    mid: {
      bg: "#cfc2ab",
      garment: "#dbd0bb",
      shade: "#c2b399",
      fold: "#ab9a7f",
      label: "#3b3731",
    },
  }[tone];

  return (
    <div
      className={cn("relative aspect-[4/5] w-full overflow-hidden", className)}
      role="img"
      aria-label={label}
      style={{ backgroundColor: palettes.bg }}
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* subtle grains / texture */}
        <g opacity="0.35">
          <circle cx="70" cy="80" r="1" fill={palettes.shade} />
          <circle cx="180" cy="60" r="0.8" fill={palettes.shade} />
          <circle cx="300" cy="120" r="1.2" fill={palettes.shade} />
          <circle cx="120" cy="420" r="1" fill={palettes.shade} />
          <circle cx="320" cy="380" r="0.9" fill={palettes.shade} />
          <circle cx="240" cy="460" r="1" fill={palettes.shade} />
          <rect x="40" y="150" width="2" height="2" fill={palettes.shade} />
          <rect x="360" y="200" width="2" height="2" fill={palettes.shade} />
        </g>

        {/* garment */}
        <g>
          {/* shoulders / sleeves */}
          <path
            d="M118 96 L80 120 Q64 132 74 146 L112 176 L146 150 L164 108 Z"
            fill={palettes.garment}
            stroke={palettes.shade}
            strokeWidth="2"
          />
          <path
            d="M282 96 L320 120 Q336 132 326 146 L288 176 L254 150 L236 108 Z"
            fill={palettes.garment}
            stroke={palettes.shade}
            strokeWidth="2"
          />
          {/* torso */}
          <path
            d="M164 108 L146 214 L137 368 Q200 388 263 368 L254 214 L236 108
               Q200 122 164 108 Z"
            fill={palettes.garment}
            stroke={palettes.shade}
            strokeWidth="2"
          />
          {/* neck */}
          <path
            d="M168 104 Q200 126 232 104 L238 108 Q200 142 162 108 Z"
            fill={palettes.fold}
          />
          {/* center stitching hint */}
          <line
            x1="200"
            y1="150"
            x2="200"
            y2="360"
            stroke={palettes.fold}
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.5"
          />
          {/* fold shadow on hem */}
          <path
            d="M141 368 Q200 388 259 368 L263 368 Q200 392 137 368 Z"
            fill={palettes.fold}
            opacity="0.6"
          />
          {/* herringbone/ribbed accents */}
          <path
            d="M120 300 Q132 306 124 314"
            fill="none"
            stroke={palettes.fold}
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M280 300 Q292 306 284 314"
            fill="none"
            stroke={palettes.fold}
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>

        {/* wordmark tag */}
        <g>
          <rect x="168" y="445" width="64" height="18" rx="1" fill={palettes.label} />
          <text
            x="200"
            y="457"
            textAnchor="middle"
            fontFamily="Archivo, sans-serif"
            fontWeight="700"
            fontSize="8"
            letterSpacing="2"
            fill={palettes.bg}
          >
            OG BLANKS
          </text>
        </g>
      </svg>
    </div>
  );
}
