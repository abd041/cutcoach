"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  AiIcon,
  ClippersIcon,
  CombIcon,
  GuardsIcon,
  MobileAppIcon,
  SecureCloudIcon,
  ShearsIcon,
  SmartGlassesIcon,
  TrimmersIcon,
} from "@/components/ui/ToolIcons";
import { useUi } from "@/lib/i18n/LocaleProvider";

const showcase = [
  { id: "clippers", Icon: ClippersIcon, key: "toolClippers" as const },
  { id: "trimmers", Icon: TrimmersIcon, key: "toolTrimmers" as const },
  { id: "guards", Icon: GuardsIcon, key: "toolGuards" as const },
  { id: "shears", Icon: ShearsIcon, key: "toolShears" as const },
  { id: "comb", Icon: CombIcon, key: "toolComb" as const },
  { id: "glasses", Icon: SmartGlassesIcon, key: "toolGlasses" as const },
  { id: "mobile", Icon: MobileAppIcon, key: "toolMobile" as const },
  { id: "ai", Icon: AiIcon, key: "toolAi" as const },
  { id: "cloud", Icon: SecureCloudIcon, key: "toolCloud" as const },
];

/** Legacy showcase: brand logos removed — custom tool icons only. */
export function TrustedCompanies() {
  const ui = useUi();
  const tools = [...showcase, ...showcase];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted/60"
        >
          {ui.toolClippers} · {ui.toolGlasses} · {ui.toolAi}
        </motion.p>

        <div className="relative flex items-center justify-center gap-10 text-[#4DDFFF]/70 opacity-70 lg:gap-14">
          {tools.slice(0, 9).map((tool, i) => (
            <motion.div
              key={`${tool.id}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ opacity: 1, scale: 1.08, color: "#4DDFFF" }}
              className="flex flex-col items-center gap-2 transition-all duration-500"
              title={ui[tool.key]}
            >
              <tool.Icon className="h-8 w-8" />
              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35 sm:block">
                {ui[tool.key]}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
