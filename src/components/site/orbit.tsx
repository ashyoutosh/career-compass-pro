import {
  siBehance,
  siDribbble,
  siGithub,
  siNotion,
} from "simple-icons";
import icon from "@/assets/proofolio-icon.png.asset.json";

type Mark = { name: string; hex: string; path: string };

const LINKEDIN: Mark = {
  name: "LinkedIn",
  hex: "#0A66C2",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
};

const WEB: Mark = {
  name: "Personal website",
  hex: "#111111",
  path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c1.47 0 2.94 1.86 3.66 4.86-1.17.18-2.4.28-3.66.28s-2.49-.1-3.66-.28C9.06 3.36 10.53 1.5 12 1.5zM7.02 2.4c-.6 1.05-1.08 2.4-1.41 3.96-1.2-.27-2.28-.63-3.15-1.08A10.6 10.6 0 0 1 7.02 2.4zm9.96 0a10.6 10.6 0 0 1 4.56 2.88c-.87.45-1.95.81-3.15 1.08-.33-1.56-.81-2.91-1.41-3.96zM1.71 6.6c1.05.54 2.31.96 3.72 1.26-.18 1.2-.28 2.46-.28 3.78 0 .45.01.9.04 1.34H1.55A10.4 10.4 0 0 1 1.5 12c0-1.9.45-3.69 1.2-5.28l-.99-.12zm20.58 0 .01.01A10.45 10.45 0 0 1 22.5 12c0 .34-.02.67-.05 1H18.8c.03-.44.04-.89.04-1.34 0-1.32-.1-2.58-.28-3.78 1.41-.3 2.67-.72 3.73-1.28zM6.93 8.13c1.29.21 2.65.32 4.32.35v4.5H6.7c-.03-.44-.05-.89-.05-1.34 0-1.24.1-2.43.28-3.51zm10.14 0c.18 1.08.28 2.27.28 3.51 0 .45-.02.9-.05 1.34h-4.55v-4.5c1.67-.03 3.03-.14 4.32-.35zM1.71 14.5h3.6c.19 1.62.53 3.09.99 4.32-1.41.3-2.67.72-3.72 1.26a10.42 10.42 0 0 1-.87-5.58zm5.11 0h4.43v4.72c-1.55.03-3.03.15-4.4.37-.02-.06-.03-.12-.05-.18-.42-1.44-.72-2.99-.87-4.55l.89-.36zm6.03 0h4.43c-.15 1.65-.45 3.2-.87 4.64-1.42-.24-2.96-.37-4.56-.4V14.5h1zM2.46 21.1c.87-.45 1.95-.81 3.15-1.08.33 1.56.81 2.91 1.41 3.96a10.6 10.6 0 0 1-4.56-2.88zm19.08 0a10.6 10.6 0 0 1-4.56 2.88c.6-1.05 1.08-2.4 1.41-3.96 1.2.27 2.28.63 3.15 1.08zM12 20.2c1.26 0 2.49.1 3.66.28-.72 3-2.19 4.86-3.66 4.86s-2.94-1.86-3.66-4.86c1.17-.18 2.4-.28 3.66-.28z",
};

const MARKS: Mark[] = [
  LINKEDIN,
  { name: siGithub.title, hex: `#${siGithub.hex}`, path: siGithub.path },
  { name: siBehance.title, hex: `#${siBehance.hex}`, path: siBehance.path },
  { name: siDribbble.title, hex: `#${siDribbble.hex}`, path: siDribbble.path },
  { name: siNotion.title, hex: `#${siNotion.hex}`, path: siNotion.path },
  WEB,
];

const OUTER = MARKS.slice(0, 4);
const INNER = MARKS.slice(4);

const TILT = 62;
const OUT_DUR = "84s";
const IN_DUR = "58s";

function Ring({
  marks,
  radiusVar,
  duration,
  reverse,
  size,
}: {
  marks: Mark[];
  radiusVar: string;
  duration: string;
  reverse?: boolean;
  size: string;
}) {
  return (
    <div
      className={reverse ? "absolute inset-0 orbit-spin-rev" : "absolute inset-0 orbit-spin"}
      style={{ animationDuration: duration, transformStyle: "preserve-3d" }}
    >
      {marks.map((m, i) => {
        const angle = (360 / marks.length) * i;
        return (
          <div
            key={m.name}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(var(${radiusVar}) * -1)) rotate(${-angle}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className={reverse ? "orbit-spin" : "orbit-spin-rev"}
              style={{ animationDuration: duration, transformStyle: "preserve-3d" }}
            >
              {/* stand the tile back up out of the tilted plane */}
              <div style={{ transform: `rotateX(${-TILT}deg)` }}>
                <div
                  className={`flex ${size} items-center justify-center rounded-xl border border-border bg-white shadow-[0_18px_30px_-16px_rgba(17,17,17,0.45),0_2px_6px_-2px_rgba(17,17,17,0.12)] backdrop-blur-sm`}
                  title={m.name}
                >
                  <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill={m.hex} role="img">
                    <title>{m.name}</title>
                    <path d={m.path} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ToolkitOrbit() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[300px] select-none sm:max-w-[380px] lg:max-w-[460px]"
      style={{
        ["--orbit-r" as string]: "clamp(112px, 33vw, 186px)",
        ["--orbit-r2" as string]: "clamp(92px, 27vw, 134px)",
        perspective: "900px",
      }}
      aria-hidden="true"
    >
      {/* soft depth halos */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, color-mix(in oklab, var(--signal) 12%, transparent) 0%, color-mix(in oklab, var(--signal) 5%, transparent) 42%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, color-mix(in oklab, var(--signal) 16%, transparent) 0%, transparent 72%)",
          filter: "blur(10px)",
        }}
      />

      {/* tilted 3D stage */}
      <div
        className="absolute inset-0"
        style={{ transform: `rotateX(${TILT}deg)`, transformStyle: "preserve-3d" }}
      >
        {/* outer orbital line */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-border/80"
          style={{
            width: "calc(var(--orbit-r) * 2)",
            height: "calc(var(--orbit-r) * 2)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* inner orbital line */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-border"
          style={{
            width: "calc(var(--orbit-r2) * 2)",
            height: "calc(var(--orbit-r2) * 2)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <Ring marks={OUTER} radiusVar="--orbit-r" duration={OUT_DUR} size="h-11 w-11 sm:h-14 sm:w-14" />
        <Ring
          marks={INNER}
          radiusVar="--orbit-r2"
          duration={IN_DUR}
          reverse
          size="h-9 w-9 sm:h-11 sm:w-11"
        />
      </div>

      {/* center tile */}
      <div className="absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-white shadow-[0_26px_50px_-20px_rgba(17,17,17,0.5),0_3px_10px_-4px_rgba(17,17,17,0.16)] sm:h-[88px] sm:w-[88px]">
        <img src={icon.url} alt="" className="h-9 w-9 object-contain sm:h-12 sm:w-12" />
      </div>
    </div>
  );
}
