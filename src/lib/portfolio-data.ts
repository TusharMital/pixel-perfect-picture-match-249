export const LINKS = {
  github: "https://github.com/TusharMital",
  linkedin: "https://www.linkedin.com/in/tushar-mittal-179761364/",
  email: "tushar.mitt6@gmail.com",
};

export type Category = "Python" | "Web Development" | "Debugging" | "Prompt Engineering";
export const CATEGORIES: Category[] = ["Python", "Web Development", "Debugging", "Prompt Engineering"];

export type Project = {
  id: string;
  index: string;
  title: string;
  label: string;
  description: string;
  tech: string[];
  categories: Category[];
  repo: string;
  live?: string;
  caseStudy: { objective: string; implementation: string; outcome: string };
};

export const PROJECTS: Project[] = [
  {
    id: "python-programs",
    index: "01",
    title: "Python Programs Collection",
    label: "PYTHON · FUNDAMENTALS",
    description:
      "A collection of Python exercises: factorial calculation, Fibonacci sequence generation and structure-to-dictionary conversion, documented with example outputs.",
    tech: ["Python", "Jupyter Notebook"],
    categories: ["Python", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/python-programs-collection",
    caseStudy: {
      objective: "Practise foundational programming and present each exercise clearly.",
      implementation:
        "Notebook-based programs using variables, loops and arithmetic, e.g. a for-loop that updates two variables to produce the Fibonacci series.",
      outcome:
        "Each program is documented with its explanation, run instructions and expected output — for Fibonacci: 0 1 1 2 3 5 8 13 21 34.",
    },
  },
  {
    id: "quiz-app",
    index: "02",
    title: "Interactive Quiz Application",
    label: "WEB APPLICATION",
    description:
      "“Code With AI Quiz” — a responsive multiple-choice quiz on AI, Git commit messages, unit testing, CSS organisation and time complexity.",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["Web Development", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/interactive-quiz-app",
    live: "https://interactive-quiz-3d4dbdl4p-tusharmitt6-5149.vercel.app/",
    caseStudy: {
      objective: "Build a small, complete web app during Prompt Engineering coursework.",
      implementation:
        "Vanilla JavaScript with no build step: one question at a time, score and progress tracking, answer feedback, a lock against re-answering, light/dark themes and restart.",
      outcome: "Responsive across desktop and mobile, deployed on Vercel.",
    },
  },
  {
    id: "debugging",
    index: "03",
    title: "Python Debugging & Testing",
    label: "DEBUGGING · UNITTEST",
    description:
      "Lecture 8: fixing a buggy student-marks script with unittest and the RED → FIX → GREEN cycle.",
    tech: ["Python", "unittest"],
    categories: ["Python", "Debugging", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/lecture-8-python-debugging",
    caseStudy: {
      objective: "Understand why tests fail before changing any code.",
      implementation:
        "Investigated three bugs in student_utils.py: an average dividing by len(marks) − 1, a pass mark of exactly 40 failing the boundary check, and grade conditions ordered so 95 became “First” instead of “Distinction”.",
      outcome: "Each bug was reproduced by a failing test, corrected, then verified by the test suite passing.",
    },
  },
  {
    id: "reading-list",
    index: "04",
    title: "Book Reading List",
    label: "WEB APPLICATION",
    description:
      "A responsive reading-list app for students to add books, set a status (Want to Read, Reading, Finished) and filter the list.",
    tech: ["Web", "CSS", "Local storage"],
    categories: ["Web Development", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/reading-list-app",
    live: "https://reading-list-i3nddlzh1-tusharmitt6-5149.vercel.app/",
    caseStudy: {
      objective: "Help students organise books and track progress without an account.",
      implementation:
        "Card-based list with three reading statuses, status filtering and browser-based storage; built with Bolt AI.",
      outcome:
        "Includes an empty state — “Your reading list is empty. Add your first book.” — and a layout for desktop and mobile.",
    },
  },
];

export const PROCESS = [
  { k: "Understand", d: "Define the problem, requirements and expected behaviour." },
  { k: "Prompt", d: "Communicate constraints and goals clearly to an AI coding tool." },
  { k: "Inspect", d: "Examine generated code, assumptions and implementation details." },
  { k: "Test", d: "Run examples and tests to identify incorrect behaviour." },
  { k: "Refine", d: "Correct problems and improve the implementation iteratively." },
  { k: "Document & Deploy", d: "Maintain READMEs, version control and deployment links." },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["C", "C++", "Python", "Data Structures & Algorithms"] },
  { group: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
  {
    group: "Systems & CS",
    items: ["Operating Systems", "Computer Architecture", "Linux / Ubuntu on WSL2", "Computer Networking"],
  },
  {
    group: "Dev & AI Tools",
    items: ["Git", "GitHub", "Cursor AI", "Lovable AI", "Vercel", "Prompt Engineering", "Python unittest"],
  },
];

export const MILESTONES = [
  {
    t: "DSA Practice",
    d: "Practising algorithms and problem-solving using Striver’s A2Z DSA sheet, LeetCode and Codeforces.",
  },
  {
    t: "Operating Systems & Architecture",
    d: "Studying concurrency, memory management and CPU scheduling, alongside computer architecture and Linux environments.",
  },
  {
    t: "Networking",
    d: "Learning network architecture and protocols through Kurose & Ross and Stanford CS144 materials, with interest in C++ socket programming.",
  },
  {
    t: "Quantum Computing",
    d: "Completed the 40-hour MeitY-funded programme “QT-00 & 01 Foundations of Quantum Computing & Applications”, hosted by the Consortium of EICT Academy, MNIT Jaipur — rated “Excellent”.",
  },
  {
    t: "Future Goal",
    d: "Preparing toward the IIIT Hyderabad Lateral Entry Entrance Examination (LEEE) in 2027.",
    future: true,
  },
];

/** Knowledge given to the AI assistant. Only verified facts. */
export function buildAssistantKnowledge() {
  const projects = PROJECTS.map(
    (p) =>
      `- ${p.title} (${p.categories.join(", ")}; tech: ${p.tech.join(", ")}). ${p.description} Objective: ${p.caseStudy.objective} Implementation: ${p.caseStudy.implementation} Outcome: ${p.caseStudy.outcome} Repo: ${p.repo}${p.live ? ` Live demo: ${p.live}` : " No live demo."}`,
  ).join("\n");
  return `You are "Ask Tushar's Portfolio", a concise assistant on Tushar Mittal's portfolio website. Answer in 1-4 short paragraphs or a short list, in plain text (no markdown headings). Include full URLs when pointing to projects. Use ONLY the facts below. If something is not covered, say honestly that you don't have that information and suggest contacting Tushar at ${LINKS.email}. Never invent employment, grades, dates, metrics or features.

ABOUT: Tushar Mittal is a second-year Computer Science undergraduate at JECRC University. Interests: C and C++, data structures and algorithms, operating systems, computer architecture, Linux environments, computer networking, quantum computing. He is completing Prompt Engineering coursework, using AI tools to write programs, investigate errors, improve code, build web apps, test, document and deploy. He treats AI as a development aid, not a substitute for understanding: he evaluates suggestions, inspects results, tests changes and iterates.

PROCESS (coursework workflow): ${PROCESS.map((s) => `${s.k}: ${s.d}`).join(" ")}

DEBUGGING APPROACH: understand why a failure occurs before applying a fix; reproduce with a failing test (RED), fix, confirm passing (GREEN).

PROJECTS:
${projects}

SKILLS: ${SKILLS.map((g) => `${g.group}: ${g.items.join(", ")}`).join(". ")}. No proficiency levels are claimed.

ACADEMIC MILESTONES: ${MILESTONES.map((m) => `${m.t}: ${m.d}`).join(" ")}

CONTACT: GitHub ${LINKS.github} · LinkedIn ${LINKS.linkedin} · Email ${LINKS.email}`;
}
