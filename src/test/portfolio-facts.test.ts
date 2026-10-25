import { describe, expect, it } from "vitest";
import { COURSE, DEBUGGING_EXAMPLE, PROJECTS } from "@/lib/portfolio-data";
describe("verified portfolio constraints", () => {
  it("keeps the running total example at 150", () => {
    expect(DEBUGGING_EXAMPLE.values).toEqual([10, 20, 30, 40, 50]);
    expect(DEBUGGING_EXAMPLE.values.reduce((total, value) => total + value, 0)).toBe(150);
    expect(DEBUGGING_EXAMPLE.total).toBe(150);
  });
  it("does not invent Cursor project links", () => {
    const project = PROJECTS.find(p => p.id === "cursor-debugging");
    expect(project).toBeDefined();
    expect(project?.repo).toBeUndefined();
    expect(project?.live).toBeUndefined();
  });
  it("preserves the forty-hour course details", () => {
    expect(COURSE).toEqual({ title: "QT-00 & 01 Foundations of Quantum Computing & Applications", hours: 40, funding: "MeitY-funded", host: "Consortium of EICT Academy, MNIT Jaipur", rating: "Excellent" });
  });
  it("keeps both supplied demo destinations", () => {
    expect(PROJECTS.find(p => p.id === "quiz-app")?.live).toBe("https://interactive-quiz-app-rosy.vercel.app/");
    expect(PROJECTS.find(p => p.id === "reading-list")?.live).toBe("https://reading-list-app-one.vercel.app/");
  });
});
