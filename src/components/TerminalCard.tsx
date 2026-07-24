import { useEffect, useState } from "react";

type TLine = { prompt?: string; text: string; className?: string; pause?: number };

const script: TLine[] = [
  { prompt: "$", text: "whoami", className: "text-slate-100" },
  {
    text: "ankur_bakre :: Penetration Tester & Security Researcher | Offensive Security",
    className: "text-accent-soft",
  },
  { prompt: "$", text: "cat engagements.txt", className: "text-slate-100" },
  {
    text: "Web AppSec · API Testing · Thick-Client · Active Directory",
    className: "text-slate-400",
  },
  { prompt: "$", text: "./recon --achievements", className: "text-slate-100" },
  { text: "[+] 7 CVEs Disclosed to Vendors", className: "text-cyan-300" },
  { text: "[+] 2x Microsoft MSRC Blue Hat CTF Winner", className: "text-cyan-300" },
  {
    text: "[+] MSRC: Special Mention · Researcher Recognition Program",
    className: "text-cyan-300",
  },
  {
    text: "[+] Hall of Fame: Apple · DELL · CrowdStrike · Airmeet …",
    className: "text-cyan-300",
  },
];

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] animate-blink bg-accent align-middle" />
  );
}

export default function TerminalCard() {
  const [done, setDone] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (done >= script.length) return;
    const line = script[done];
    if (typed.length < line.text.length) {
      const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), 26);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setDone((d) => d + 1);
        setTyped("");
      },
      line.pause ?? (line.prompt ? 240 : 430),
    );
    return () => clearTimeout(t);
  }, [done, typed]);

  const finished = done >= script.length;

  return (
    <div className="card overflow-hidden shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-base-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-slate-500">ankur@offsec: ~/portfolio</span>
      </div>

      <div className="min-h-[280px] space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {script.slice(0, done).map((line, i) => (
          <Row key={i} line={line} text={line.text} />
        ))}

        {!finished && <Row line={script[done]} text={typed} cursor />}

        {finished && (
          <div className="flex">
            <span className="mr-2 select-none text-accent">$</span>
            <Cursor />
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ line, text, cursor }: { line: TLine; text: string; cursor?: boolean }) {
  return (
    <div className="flex">
      {line.prompt && <span className="mr-2 shrink-0 select-none text-accent">{line.prompt}</span>}
      <span className={`min-w-0 break-words ${line.className ?? "text-slate-300"}`}>
        {text}
        {cursor && <Cursor />}
      </span>
    </div>
  );
}
