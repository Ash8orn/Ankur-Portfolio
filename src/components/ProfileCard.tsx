export default function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mr-0">
      <span className="pointer-events-none absolute -left-3.5 -top-3.5 h-8 w-8 rounded-tl-md border-l-2 border-t-2 border-accent" />
      <span className="pointer-events-none absolute -right-3.5 -top-3.5 h-8 w-8 rounded-tr-md border-r-2 border-t-2 border-accent" />
      <span className="pointer-events-none absolute -bottom-3.5 -left-3.5 h-8 w-8 rounded-bl-md border-b-2 border-l-2 border-accent" />
      <span className="pointer-events-none absolute -bottom-3.5 -right-3.5 h-8 w-8 rounded-br-md border-b-2 border-r-2 border-accent" />

      <div className="rounded-3xl bg-accent-gradient p-[2px] shadow-glow">
        <div className="relative overflow-hidden rounded-[calc(1.5rem-2px)] bg-base-950">
          <img
            src="/ankur.png"
            alt="Ankur Bakre — Penetration Tester"
            width={800}
            height={800}
            decoding="async"
            className="aspect-square w-full object-cover"
          />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-accent/25 to-transparent animate-scan" />
        </div>
      </div>
    </div>
  );
}
