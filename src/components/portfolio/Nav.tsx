import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, MessageSquare } from "lucide-react";

const ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export function Nav({ onOpenChat }: { onOpenChat: () => void }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setLight(true);
      document.documentElement.classList.add("light");
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ITEMS.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-hairline bg-background/80 backdrop-blur-md" : ""}`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10" aria-label="Main">
        <a href="#home" className="display text-2xl">
          TM<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {ITEMS.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? "true" : undefined}
                className={`label-mono relative px-3 py-2 transition-colors ${active === i.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {i.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-primary transition-transform duration-500 ${active === i.id ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenChat}
            className="label-mono hidden items-center gap-2 rounded-full border border-border px-3 py-2 transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <MessageSquare className="h-3.5 w-3.5" /> Ask
          </button>
          <button
            onClick={toggleTheme}
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="display text-2xl">TM<span className="text-primary">.</span></span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center" autoFocus>
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
            {ITEMS.map((i, n) => (
              <li key={i.id} className="fade-in" style={{ ["--d" as string]: `${n * 60}ms` }}>
                <a href={`#${i.id}`} onClick={() => setOpen(false)} className="display flex items-baseline gap-4 text-6xl">
                  <span className="label-mono text-primary">0{n + 1}</span>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setOpen(false);
              onOpenChat();
            }}
            className="label-mono m-6 rounded-full border border-border py-4"
          >
            Ask Tushar’s Portfolio
          </button>
        </div>
      )}
    </header>
  );
}
