/** Purpose-built abstract visuals. These are illustrations, not app screenshots. */
export function ProjectVisual({ id }: { id: string }) {
  if (id === "python-programs") {
    const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    return (
      <div className="grid-lines relative flex h-full items-end gap-2 p-8">
        {fib.map((n, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <span className="label-mono text-muted-foreground">{n}</span>
            <div
              className="w-full rounded-sm bg-foreground/80 transition-all duration-700 group-hover:bg-primary"
              style={{ height: `${8 + n * 5}px`, transitionDelay: `${i * 40}ms` }}
            />
          </div>
        ))}
        <span className="label-mono absolute left-8 top-6 text-muted-foreground">
          a, b = b, a + b
        </span>
      </div>
    );
  }
  if (id === "quiz-app") {
    return (
      <div className="grid-lines flex h-full flex-col justify-center gap-3 p-8">
        <div className="label-mono text-muted-foreground">Q 03 / 05</div>
        <div className="display mb-2 text-3xl">What makes a useful test?</div>
        {["A", "B", "C", "D"].map((l, i) => (
          <div
            key={l}
            className={`flex items-center gap-3 rounded border px-4 py-2.5 text-sm transition-colors duration-500 ${i === 1 ? "border-border group-hover:border-signal group-hover:bg-signal/10" : "border-hairline"}`}
          >
            <span className="label-mono text-muted-foreground">{l}</span>
            <span
              className="h-1.5 rounded-full bg-muted-foreground/30"
              style={{ width: `${40 + i * 12}%` }}
            />
          </div>
        ))}
      </div>
    );
  }
  if (id === "debugging" || id === "cursor-debugging") {
    const cursor = id === "cursor-debugging";
    return (
      <div className="grid-lines flex h-full flex-col justify-center gap-6 p-6 md:p-8">
        <p className="label-mono text-primary">{cursor ? "Running total" : "Boundary checks"}</p>
        <p className="display text-4xl">
          {cursor ? "10 + 20 + 30 + 40 + 50" : "Reproduce. Correct. Verify."}
        </p>
        <div className="border-t border-border pt-6">
          <p className="display text-6xl text-primary">{cursor ? "150" : "RED → GREEN"}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {cursor
              ? "Accumulate values, don’t overwrite the total."
              : "Average · pass boundary · grade ordering"}
          </p>
        </div>
      </div>
    );
  }
  const books = [
    { h: 78, s: "Finished" },
    { h: 92, s: "Reading" },
    { h: 64, s: "Want" },
    { h: 86, s: "Finished" },
    { h: 70, s: "Want" },
    { h: 96, s: "Reading" },
  ];
  return (
    <div className="grid-lines flex h-full items-end gap-2 p-8">
      {books.map((b, i) => (
        <div
          key={i}
          className={`relative flex-1 rounded-t-sm border border-border transition-transform duration-500 group-hover:-translate-y-2 ${b.s === "Reading" ? "bg-primary/80" : b.s === "Finished" ? "bg-foreground/80" : "bg-transparent"}`}
          style={{ height: `${b.h}%`, transitionDelay: `${i * 50}ms` }}
        >
          <span className="label-mono absolute bottom-3 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-[9px] text-background mix-blend-difference">
            {b.s}
          </span>
        </div>
      ))}
    </div>
  );
}
