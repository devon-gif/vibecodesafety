import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logogog.png?v=2"
        alt="VibeCode Safety"
        width={2508}
        height={627}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </span>
  );
}
