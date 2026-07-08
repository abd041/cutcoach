"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicSection } from "@/components/ui/CinematicSection";
import { AudienceModeTransition } from "@/components/ui/AudienceModeTransition";
import { BrandLogo } from "@/components/ui/BrandLogo";
import {
  TOOL_ICON_MAP,
  type ToolIconId,
} from "@/components/ui/ToolIcons";
import { useAudienceContent, useAudienceMode } from "@/lib/audience/AudienceModeProvider";
import { useUi } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;
const ORBIT_RADIUS = 38;

type ToolUiKey =
  | "toolClippers"
  | "toolTrimmers"
  | "toolGuards"
  | "toolShears"
  | "toolComb"
  | "toolGlasses"
  | "toolMobile"
  | "toolAi"
  | "toolCloud"
  | "toolPassport"
  | "toolQr";

type OrbitTool = {
  id: ToolIconId;
  uiKey: ToolUiKey;
  angle: number;
};

/** Brand-neutral tool orbit — no manufacturer names or logos. */
const BARBER_ORBIT_TOOLS: OrbitTool[] = [
  { id: "clippers", uiKey: "toolClippers", angle: -90 },
  { id: "trimmers", uiKey: "toolTrimmers", angle: -50 },
  { id: "guards", uiKey: "toolGuards", angle: -10 },
  { id: "shears", uiKey: "toolShears", angle: 30 },
  { id: "comb", uiKey: "toolComb", angle: 70 },
  { id: "glasses", uiKey: "toolGlasses", angle: 110 },
  { id: "mobile", uiKey: "toolMobile", angle: 150 },
  { id: "ai", uiKey: "toolAi", angle: 190 },
  { id: "cloud", uiKey: "toolCloud", angle: 230 },
];

const CLIENT_ORBIT_TOOLS: OrbitTool[] = [
  { id: "mobile", uiKey: "toolMobile", angle: -90 },
  { id: "passport", uiKey: "toolPassport", angle: -35 },
  { id: "qr", uiKey: "toolQr", angle: 20 },
  { id: "ai", uiKey: "toolAi", angle: 75 },
  { id: "cloud", uiKey: "toolCloud", angle: 130 },
];

function toolPosition(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + ORBIT_RADIUS * Math.cos(rad),
    y: 50 + ORBIT_RADIUS * Math.sin(rad),
  };
}

function connectorPath(angle: number) {
  const { x, y } = toolPosition(angle);
  const midX = (50 + x) / 2;
  const midY = (50 + y) / 2;
  const rad = (angle * Math.PI) / 180;
  const cpX = midX - Math.sin(rad) * 4;
  const cpY = midY + Math.cos(rad) * 4;
  return `M 50 50 Q ${cpX} ${cpY} ${x} ${y}`;
}

function ConnectorLines({
  activeTool,
  tools,
}: {
  activeTool: ToolIconId | null;
  tools: OrbitTool[];
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="compat-connector-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="rgba(77, 223, 255, 0.15)" />
          <stop offset="45%" stopColor="rgba(77, 223, 255, 0.75)" />
          <stop offset="100%" stopColor="rgba(77, 223, 255, 0.35)" />
        </linearGradient>
        <filter
          id="compat-connector-glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {tools.map((tool, index) => {
        const isActive = activeTool === tool.id;
        const isDimmed = activeTool !== null && !isActive;

        return (
          <g key={tool.id}>
            <path
              d={connectorPath(tool.angle)}
              fill="none"
              stroke="url(#compat-connector-gradient)"
              strokeWidth={isActive ? 0.55 : 0.32}
              strokeLinecap="round"
              filter="url(#compat-connector-glow)"
              className={cn(
                "compat-connector-path compat-connector-path--drawn",
                isActive && "compat-connector-path--active",
                isDimmed && "compat-connector-path--dimmed"
              )}
              style={{ animationDelay: `${index * 0.12}s` }}
            />
            <circle
              cx={toolPosition(tool.angle).x}
              cy={toolPosition(tool.angle).y}
              r={isActive ? 0.85 : 0.45}
              className={cn(
                "compat-connector-node transition-all duration-500",
                isActive && "compat-connector-node--active",
                isDimmed && "opacity-30"
              )}
            />
          </g>
        );
      })}
    </svg>
  );
}

function ToolOrbitChip({
  toolId,
  isActive,
  isDimmed,
}: {
  toolId: ToolIconId;
  isActive: boolean;
  isDimmed: boolean;
}) {
  const Icon = TOOL_ICON_MAP[toolId];

  return (
    <div
      className={cn(
        "compat-partner-chip compat-tool-chip relative flex h-[3.6rem] w-[3.6rem] items-center justify-center text-[#4DDFFF] transition-all duration-500 sm:h-16 sm:w-16",
        isActive && "compat-partner-chip--active compat-tool-chip--active",
        isDimmed && "compat-partner-chip--dimmed"
      )}
    >
      <div
        className="compat-partner-chip-glow pointer-events-none absolute inset-1.5 rounded-[0.9rem] opacity-0 transition-opacity duration-500"
        style={
          {
            "--partner-glow": "rgba(77, 223, 255, 0.4)",
          } as React.CSSProperties
        }
        aria-hidden
      />
      <motion.div
        animate={
          isActive
            ? { scale: [1, 1.06, 1], rotate: [0, -2, 2, 0] }
            : { scale: 1, rotate: 0 }
        }
        transition={
          isActive
            ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
        className="relative z-10"
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.div>
    </div>
  );
}

function IntegrationHub({ liveLabel }: { liveLabel: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0, duration: 0.7, ease }}
      className="absolute left-1/2 top-1/2 z-30 flex h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[8.25rem] sm:w-[8.25rem]"
    >
      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="compat-hub-pulse absolute inset-0 rounded-full"
          style={{ animationDelay: `${ring * 1.1}s` }}
          aria-hidden
        />
      ))}

      <div
        className="absolute inset-[-12%] rounded-full bg-[#4DDFFF]/12 blur-2xl"
        aria-hidden
      />

      <div className="compat-hub relative flex h-full w-full flex-col items-center justify-center gap-1.5 overflow-hidden rounded-full border border-[#4DDFFF]/30 bg-[#05070a]/95 px-3 shadow-[0_0_72px_-10px_rgba(77,223,255,0.5)] sm:gap-2 sm:px-3.5">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent"
          aria-hidden
        />
        <BrandLogo size="orbit" className="relative z-10 max-h-[3rem] w-auto sm:max-h-[3.25rem]" />
        <span className="relative z-10 inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/85 sm:text-[9px]">
          <span className="compat-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DDFFF]" />
          {liveLabel}
        </span>
      </div>
    </motion.div>
  );
}

function OrbitDiagram() {
  const ui = useUi();
  const { mode } = useAudienceMode();
  const orbitTools = mode === "client" ? CLIENT_ORBIT_TOOLS : BARBER_ORBIT_TOOLS;
  const [activeTool, setActiveTool] = useState<ToolIconId | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.5 });
  const parallaxX = useTransform(springX, [-1, 1], [-10, 10]);
  const parallaxY = useTransform(springY, [-1, 1], [-8, 8]);

  const labelFor = (uiKey: OrbitTool["uiKey"]) => ui[uiKey];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveTool(null);
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex aspect-square max-h-[min(92vw,400px)] w-full max-w-[min(92vw,400px)] items-center justify-center sm:max-h-[480px] sm:max-w-[480px]"
    >
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="relative h-full w-full will-change-transform"
      >
        <div className="compat-orbit-ring compat-orbit-ring-spin absolute inset-[2%] rounded-full" />
        <div className="compat-orbit-ring compat-orbit-ring-inner compat-orbit-ring-spin-reverse absolute inset-[14%] rounded-full" />
        <motion.div
          className="absolute inset-[26%] rounded-full border border-[#4DDFFF]/12"
          animate={{ opacity: [0.28, 0.58, 0.28], scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <ConnectorLines activeTool={activeTool} tools={orbitTools} />

        {orbitTools.map((tool, index) => {
          const { x, y } = toolPosition(tool.angle);
          const isActive = activeTool === tool.id;
          const isDimmed = activeTool !== null && !isActive;

          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.82, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + index * 0.05,
                duration: 0.55,
                ease,
              }}
              className="absolute z-20 w-[4.75rem] -translate-x-1/2 -translate-y-1/2 sm:w-[5.5rem]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              onMouseEnter={() => setActiveTool(tool.id)}
              onFocus={() => setActiveTool(tool.id)}
              onBlur={() => setActiveTool(null)}
              onClick={() =>
                setActiveTool((prev) => (prev === tool.id ? null : tool.id))
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveTool((prev) => (prev === tool.id ? null : tool.id));
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={labelFor(tool.uiKey)}
            >
              <div
                className={cn(
                  "flex flex-col items-center gap-1.5 transition-all duration-500",
                  isDimmed && "scale-[0.96] opacity-40"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3, ease }}
                  className="rounded-[1.2rem]"
                >
                  <ToolOrbitChip
                    toolId={tool.id}
                    isActive={isActive}
                    isDimmed={isDimmed}
                  />
                </motion.div>
                <span
                  className={cn(
                    "text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.14em] transition-colors duration-500 sm:text-[10px]",
                    isActive ? "text-white/85" : "text-white/55"
                  )}
                >
                  {labelFor(tool.uiKey)}
                </span>
              </div>
            </motion.div>
          );
        })}

        <IntegrationHub liveLabel={ui.liveSync} />
      </motion.div>
    </div>
  );
}

export function PlatformCompatibility() {
  const { compatibilitySection, compatibilityPlatforms } = useAudienceContent();

  return (
    <CinematicSection
      id="compatibility"
      mood="depth"
      className="section-divider -mt-6 !overflow-visible sm:-mt-8"
    >
      <Container className="section-py relative overflow-visible">
        <AudienceModeTransition variant="scale" presenceMode="popLayout" layout>
          <SectionHeader
            tag={compatibilitySection.tag}
            heading={compatibilitySection.heading}
            headingAccent={compatibilitySection.headingAccent}
            description={compatibilitySection.description}
            pills={compatibilitySection.pillars}
            premium
          />

          <div className="compat-stage-shell mx-auto mt-4 max-w-4xl overflow-hidden rounded-[1.75rem] p-px sm:mt-6">
          <div className="relative overflow-hidden rounded-[1.72rem] bg-[#060a10]/94 px-3 py-12 backdrop-blur-2xl sm:px-10 sm:py-14 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_62%_at_50%_42%,rgba(77,223,255,0.16),transparent_70%)]"
              aria-hidden
            />
            <div
              className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
            />
            <div
              className="compat-stage-vignette pointer-events-none absolute inset-0"
              aria-hidden
            />

            <OrbitDiagram />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {compatibilityPlatforms.map((platform) => (
            <div
              key={platform.label}
              className="compat-platform-chip group"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-5 bg-[#4DDFFF]/70" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4DDFFF]/85">
                  {platform.label}
                </span>
              </span>
              <p className="mt-3 text-sm leading-[1.7] text-white/45 transition-colors group-hover:text-white/62">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
        </AudienceModeTransition>
      </Container>
    </CinematicSection>
  );
}
