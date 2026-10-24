import { useId } from "react";
export function FootballArt({
  persona = "trainer",
  kind = "hero",
}: {
  persona?: string;
  kind?: "hero" | "problem" | "kids" | "stack" | "pitch";
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 640 390"
      role="img"
      aria-label={
        kind === "pitch"
          ? "Taktikfeld mit Spielern, Passwegen und Laufwegen"
          : kind === "kids"
            ? "Vielfältige Kinder spielen mit Ball, Hütchen und kleinen Toren"
            : kind === "stack"
              ? "Geordnete Modulkarten der Trainingsbibliothek"
              : kind === "problem"
                ? "Trainer, Spieler und Eltern zwischen verstreuten Trainingsideen"
                : "Trainer mit Tablet, Spieler am Ball und Elternteil mit Kind"
      }
    >
      <defs>
        <marker id={id} markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M0 0L6 3L0 6" fill="none" stroke="#FACC15" />
        </marker>
      </defs>
      <rect width="640" height="390" rx="30" fill={kind === "problem" ? "#dce5df" : "#0B2E1A"} />
      <path d="M24 335L160 120H505L620 335Z" fill="#155c34" stroke="#9cceb0" strokeWidth="2" />
      <path d="M320 120V335M112 208H551" stroke="#9cceb0" fill="none" />
      <ellipse cx="326" cy="220" rx="54" ry="31" fill="none" stroke="#9cceb0" />
      {kind === "pitch" ? (
        <>
          <path
            className="de-pass"
            d="M175 295L330 165L490 290L175 295"
            fill="none"
            stroke="#FACC15"
            strokeWidth="4"
            strokeDasharray="12 8"
            markerEnd={`url(#${id})`}
          />
          {[
            [175, 295],
            [330, 165],
            [490, 290],
            [320, 250],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="16" fill={i === 3 ? "#F97316" : "#fff"} />
              <text
                x={x}
                y={y + 6}
                fill="#0B2E1A"
                textAnchor="middle"
                fontSize="18"
                fontWeight="800"
              >
                {i + 1}
              </text>
            </g>
          ))}
        </>
      ) : kind === "stack" ? (
        <>
          {[0, 1, 2].map((i) => (
            <g
              key={i}
              transform={`translate(${115 + i * 110},${65 + i * 35}) rotate(${i * 5 - 5})`}
            >
              <rect
                width="210"
                height="215"
                rx="20"
                fill={["#fff", "#e1f4e7", "#FACC15"][i]}
                stroke="#0B2E1A"
                strokeWidth="3"
              />
              <rect x="20" y="30" width="170" height="85" rx="10" fill="#16a34a" />
              <path d="M35 145H170M35 172H140" stroke="#0B2E1A" strokeWidth="9" />
              <text
                x="105"
                y="85"
                fill="#0B2E1A"
                textAnchor="middle"
                fontSize="21"
                fontWeight="800"
              >
                {["Bibliothek", "Videos", "4 Boni"][i]}
              </text>
            </g>
          ))}
        </>
      ) : (
        <>
          {[0, 1, 2].map((i) => {
            const x = 105 + i * 205;
            return (
              <g
                key={i}
                opacity={
                  kind === "hero" && ["trainer", "spieler", "eltern"][i] !== persona ? 0.72 : 1
                }
              >
                <circle
                  cx={x}
                  cy={kind === "kids" ? 175 : 115}
                  r="25"
                  fill={["#ad7050", "#f1c7a0", "#754832"][i]}
                />
                <path
                  d={`M${x - 32} ${kind === "kids" ? 210 : 150}Q${x} ${kind === "kids" ? 190 : 135} ${x + 32} ${kind === "kids" ? 210 : 150}L${x + 30} 275H${x - 30}Z`}
                  fill={["#FACC15", "#fff", "#F97316"][i]}
                />
                <path
                  d={`M${x - 18} 275L${x - 25} 335M${x + 18} 275L${x + 40} 325`}
                  stroke="#102c20"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                {i === 0 && kind !== "kids" && (
                  <rect
                    x={x + 10}
                    y="173"
                    width="55"
                    height="68"
                    rx="6"
                    fill="#152b22"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                )}
                {i === 1 && (
                  <circle
                    cx={x + 56}
                    cy="324"
                    r="19"
                    fill="#fff"
                    stroke="#0B2E1A"
                    strokeWidth="5"
                  />
                )}
                {i === 2 && (
                  <g>
                    <circle cx={x - 52} cy="230" r="17" fill="#c38b61" />
                    <path d={`M${x - 70} 255H${x - 34}V305H${x - 70}Z`} fill="#fff" />
                  </g>
                )}
              </g>
            );
          })}
          <path
            d="M175 348Q310 240 470 345"
            stroke="#FACC15"
            strokeWidth="3"
            strokeDasharray="8 7"
            fill="none"
            markerEnd={`url(#${id})`}
          />
        </>
      )}
    </svg>
  );
}
