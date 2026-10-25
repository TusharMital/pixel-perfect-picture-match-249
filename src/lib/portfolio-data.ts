export const LINKS = {
  github: "https://github.com/TusharMital",
  linkedin: "https://www.linkedin.com/in/tushar-mittal-179761364/",
  email: "tushar.mitt6@gmail.com",
};

export const PROFILE = {
  intro: "I’m a Computer Science undergraduate exploring programming, systems, networking, AI-assisted development and emerging technologies — learning how software works beneath the surface.",
  study: "I study C, C++, Python, data structures and algorithms, operating systems, computer architecture, Linux and Ubuntu through WSL2, networking and quantum computing.",
  coursework: "My Prompt Engineering coursework explores how AI tools can help write programs, investigate errors, test behaviour, document and deploy software.",
  approach: "I treat AI as a development aid — not a substitute for understanding. Evaluate, inspect, test, iterate.",
};
export const INTERESTS = ["Programming fundamentals & debugging", "Operating systems & computer architecture", "Linux, networking & protocols", "Data structures & algorithms", "Quantum computing"];
export const COURSEWORK = ["Prompt design & refinement", "AI-assisted coding", "Debugging & testing", "Code review & documentation", "Building & deploying web apps"];
export const COURSE = { title: "QT-00 & 01 Foundations of Quantum Computing & Applications", hours: 40, funding: "MeitY-funded", host: "Consortium of EICT Academy, MNIT Jaipur", rating: "Excellent" };
export const DEBUGGING_EXAMPLE = { values: [10, 20, 30, 40, 50], total: 150 };

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
  repo?: string;
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
      "A collection of Python exercises: factorial calculation, Fibonacci sequence generation and structure-to-dictionary conversion, with a documented Fibonacci example.",
    tech: ["Python", "Jupyter Notebook"],
    categories: ["Python", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/python-programs-collection",
    caseStudy: {
      objective: "Practise foundational programming and present each exercise clearly.",
      implementation:
        "Notebook-based programs using variables, loops and arithmetic, e.g. a for-loop that updates two variables to produce the Fibonacci series.",
      outcome:
        "The README explains iterative variable updates and gives the Fibonacci output: 0 1 1 2 3 5 8 13 21 34.",
    },
  },
  {
    id: "quiz-app",
    index: "04",
    title: "Interactive Quiz Application",
    label: "WEB APPLICATION",
    description:
      "“Code With AI Quiz” — a responsive multiple-choice quiz on AI, Git commit messages, unit testing, CSS organisation and time complexity.",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["Web Development", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/interactive-quiz-app",
    live: "https://interactive-quiz-app-rosy.vercel.app/",
    caseStudy: {
      objective: "Build a small, complete browser quiz and practise interaction state.",
      implementation:
        "Vanilla JavaScript with no build step: one question at a time, score and progress tracking, answer feedback, a lock against re-answering, light/dark themes and restart.",
      outcome: "Five questions, answer feedback, a completion score and restart demonstrate a complete quiz flow. Learning focus: tracking state and preventing repeat answers.",
    },
  },
  {
    id: "debugging",
    index: "02",
    title: "Messy Python Code Improvement",
    label: "DEBUGGING · UNITTEST",
    description:
      "Lecture 8: fixing a buggy student-marks script with unittest and the RED → FIX → GREEN cycle.",
    tech: ["Python", "unittest"],
    categories: ["Python", "Debugging", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/lecture-8-python-debugging",
    caseStudy: {
      objective: "Understand why tests fail before changing any code.",
      implementation:
        "The assignment README describes three issues: an average dividing by len(marks) − 1, a pass mark of exactly 40 failing the boundary check, and grade conditions ordered so 95 became “First” instead of “Distinction”.",
      outcome: "The current source contains corrected average, passing-mark and grade-order logic, alongside unittest tests and recorded RED/GREEN outputs. Learning focus: reproduce a failure, inspect the cause and rerun the same tests.",
    },
  },
  {
    id: "reading-list",
    index: "05",
    title: "Book Reading List Application",
    label: "WEB APPLICATION",
    description:
      "A responsive reading-list app for students to add books, set a status (Want to Read, Reading, Finished) and filter the list.",
    tech: ["React", "TypeScript", "Vite", "CSS", "Local storage"],
    categories: ["Web Development", "Prompt Engineering"],
    repo: "https://github.com/TusharMital/reading-list-app",
    live: "https://reading-list-app-one.vercel.app/",
    caseStudy: {
      objective: "Help students organise books and track progress without an account.",
      implementation:
        "React and TypeScript with Vite: title and author entry, three reading statuses, filtering, browser storage, changing status and deleting books.",
      outcome:
        "The source rejects blank or duplicate titles and limits titles to 60 characters. Learning focus: managing persistent application state and validating input.",
    },
  },
  {
    id: "cursor-debugging", index: "03", title: "Bug Fixing Using Cursor AI", label: "AI-ASSISTED DEBUGGING",
    description: "A learning example exploring AI-assisted code correction: replacing an assignment that overwrites a running total with addition. Values 10, 20, 30, 40, 50 should total 150.",
    tech: ["Cursor AI"], categories: ["Debugging", "Prompt Engineering"],
    caseStudy: {
      objective: "Understand why an accumulator loses earlier values, and evaluate an AI-assisted correction.",
      implementation: "Assigning each array element to the running total overwrites the accumulated sum. Add each value to the total instead, then check the input 10, 20, 30, 40, 50.",
      outcome: "The expected total is 150. The lesson is to check an AI suggestion against a concrete example; no repository, demo, programming language or development history is claimed for this example.",
    },
  },
];

PROJECTS.sort((a, b) => a.index.localeCompare(b.index));

export const PROCESS = [
  { k: "Understand", d: "Clarify the problem, user intent and expected outcome.", example: "Example: a running total loses previously added values." },
  { k: "Define", d: "Specify requirements, constraints, context and success criteria.", example: "Require 10, 20, 30, 40, 50 to produce 150 without discarding earlier values." },
  { k: "Prompt", d: "Write clear instructions and provide relevant examples.", example: "Ask the AI to explain assignment versus accumulation and propose a minimal correction." },
  { k: "Inspect and Test", d: "Evaluate the output against the requirements.", example: "Read the change, run the five-value example, and check an empty input and a single value." },
  { k: "Refine and Document", d: "Correct shortcomings and record the final result.", example: "Revise any failed case and document why addition preserves the running total. AI output is not guaranteed correct." },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["C", "C++", "Python"] },
  {
    group: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "Operating Systems", "Computer Architecture", "Computer Networking"],
  },
  {
    group: "Tools & Development",
    items: ["Git & GitHub", "VS Code", "Linux / Ubuntu on WSL2", "React", "TypeScript", "Vite", "AI-assisted development tools"],
  },
  { group: "Exploration", items: ["Prompt Engineering", "Quantum Computing"] },
];

export const MILESTONES = [
  { t: "Programming fundamentals", d: "Practising C, C++ and Python, with attention to loops, data structures and how programs execute." },
  { t: "Python debugging & code quality", d: "Inspecting errors, checking boundary cases and using tests to evaluate corrections." },
  {
    t: "DSA Practice",
    d: "Studying data structures and algorithms and practising problem-solving.",
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
    t: "Linux & WSL2",
    d: "Exploring Linux and Ubuntu through WSL2 alongside operating systems concepts.",
  },
  { t: "Prompt Engineering & AI-assisted development", d: "Clarifying requirements, inspecting generated code, testing behaviour and documenting corrections." },
];

/** Knowledge given to the AI assistant. Only verified facts. */
export function buildAssistantKnowledge() {
  const projects = PROJECTS.map(
    (p) =>
      `- ${p.title} (${p.categories.join(", ")}; tech: ${p.tech.join(", ")}). ${p.description} Objective: ${p.caseStudy.objective} Implementation: ${p.caseStudy.implementation} Lessons and documented result: ${p.caseStudy.outcome} ${p.repo ? `Repo: ${p.repo}` : "No repository supplied."}${p.live ? ` Live demo: ${p.live}` : " No live demo."}`,
  ).join("\n");
  return `You are "Ask Tushar's Portfolio", a concise assistant on Tushar Mittal's portfolio website. Answer in 1-4 short paragraphs or a short list, in plain text (no markdown headings). Include full URLs when pointing to projects. Use ONLY the facts below. If something is not covered, say honestly that you don't have that information and suggest contacting Tushar at ${LINKS.email}. Never invent employment, grades, dates, metrics or features.

ABOUT: Tushar Mittal is a second-year Computer Science undergraduate at JECRC University. ${PROFILE.study} ${PROFILE.coursework} ${PROFILE.approach}

EDUCATION: Completed ${COURSE.title}; ${COURSE.hours} hours; ${COURSE.funding}; host ${COURSE.host}; reported rating ${COURSE.rating}. No certificate ID, date or verification link supplied.

PROCESS (coursework workflow): ${PROCESS.map((s) => `${s.k}: ${s.d}`).join(" ")}

DEBUGGING APPROACH: understand why a failure occurs before applying a fix; reproduce with a failing test (RED), fix, confirm passing (GREEN).

PROJECTS:
${projects}

SKILLS: ${SKILLS.map((g) => `${g.group}: ${g.items.join(", ")}`).join(". ")}. No proficiency levels are claimed.

ACADEMIC MILESTONES: ${MILESTONES.map((m) => `${m.t}: ${m.d}`).join(" ")}

CONTACT: GitHub ${LINKS.github} · LinkedIn ${LINKS.linkedin} · Email ${LINKS.email}`;
}
