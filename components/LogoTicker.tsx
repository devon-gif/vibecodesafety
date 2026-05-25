// Temporary placeholder logos for layout testing. Replace with real customer/member logos after launch.
const placeholderLogos = [
  "Northstar Labs",
  "PixelForge",
  "LaunchNest",
  "StackBloom",
  "VioletOps",
  "NovaDesk",
  "FoundryLoop",
  "Shipwell Studio",
  "OrbitBase",
  "Studio Relay",
  "BrightStack",
  "CodeGarden",
];

function LogoMark({ index }: { index: number }) {
  return (
    <span className="relative flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-[#D8B4FE]/18 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <span
        className={[
          "block h-3.5 w-3.5 border border-[#D8B4FE]/70",
          index % 3 === 0 ? "rounded-full" : "",
          index % 3 === 1 ? "rotate-45 rounded-[0.2rem]" : "",
          index % 3 === 2 ? "rounded-sm" : "",
        ].join(" ")}
      />
    </span>
  );
}

function LogoItems({ offset = 0 }: { offset?: number }) {
  return (
    <>
      {placeholderLogos.map((name, index) => (
        <li
          key={`${name}-${offset}`}
          className="logo-ticker-item flex flex-none items-center gap-2.5 px-5 py-2 text-sm font-semibold text-[#F6F2FF]/70 transition hover:text-white sm:text-base"
        >
          <LogoMark index={index} />
          <span className="whitespace-nowrap">{name}</span>
        </li>
      ))}
    </>
  );
}

export function LogoTicker() {
  return (
    <section
      aria-label="Placeholder logo layout preview"
      className="relative overflow-hidden border-y border-[#D8B4FE]/10 bg-[#05030B]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_44%),linear-gradient(180deg,rgba(24,11,45,0.62),rgba(3,2,8,0.92))]" />
      <div className="relative mx-auto max-w-7xl px-6 py-7">
        <div className="mb-4 flex flex-col gap-1 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-[#F6F2FF]/82">
            Built for builders shipping with AI.
          </p>
          <p className="text-[11px] text-[#C4B5FD]/46">
            Placeholder logos for layout preview.
          </p>
        </div>

        <div className="logo-ticker-mask overflow-hidden rounded-2xl border border-[#D8B4FE]/10 bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_70px_-50px_rgba(124,58,237,0.85)] backdrop-blur-xl">
          <ul className="logo-ticker-track flex w-max items-center py-3">
            <LogoItems />
            <LogoItems offset={1} />
          </ul>
        </div>
      </div>
    </section>
  );
}
