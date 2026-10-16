"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Code2, Play, RefreshCw } from "lucide-react";
import { PageFrame } from "../../../components/platform-shell";
import { lessonContent } from "../../../components/course-data";

const lessonSlugs: [string, string][] = [
  ["programming-chi-olakh", "Programming ची ओळख"],
  ["variables-data-types", "Variables आणि data types"],
  ["conditions", "Operators आणि conditions"],
  ["loops", "Loops"],
  ["functions", "Functions"],
  ["arrays-objects", "Arrays आणि objects"],
  ["dom-events", "DOM आणि events"],
  ["digital-clock", "Mini project: Digital clock"],
];

export default function LessonPage({ params }: { params: { lessonSlug: string } }) {
  const lesson = lessonContent[params.lessonSlug];
  const [completed, setCompleted] = useState<string[]>([]);
  const [practiceCode, setPracticeCode] = useState("");
  const [practiceOutput, setPracticeOutput] = useState("");
  const [ran, setRan] = useState(false);
  const index = lessonSlugs.findIndex(([slug]) => slug === params.lessonSlug);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("codeshiksha-completed-lessons") || "[]");
      setCompleted(Array.isArray(stored) ? stored.filter((item): item is string => typeof item === "string") : []);
    } catch {
      setCompleted([]);
    }
    if (lesson) setPracticeCode(lesson.code);
  }, [params.lessonSlug]);

  const isCompleted = completed.includes(params.lessonSlug);
  const markCompleted = () => {
    const next = isCompleted ? completed.filter(x => x !== params.lessonSlug) : [...completed, params.lessonSlug];
    setCompleted(next);
    try { localStorage.setItem("codeshiksha-completed-lessons", JSON.stringify(next)); } catch {}
  };

  if (!lesson) {
    return <PageFrame><main className="platform-page"><div className="platform-container"><div className="platform-page-heading">
      <span className="platform-eyebrow">LESSON NOT FOUND</span><h1>हा lesson सापडला नाही.</h1>
      <p>कृपया course overview मधून उपलब्ध demo lessons निवडा.</p>
      <Link className="platform-btn" href="/courses/javascript-marathi">Course overview <ArrowRight size={15}/></Link>
    </div></div></main></PageFrame>;
  }

  const runPractice = () => {
    setRan(true);
    try {
      const logs: string[] = [];
      const fakeConsole = {
        log: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
        info: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
        warn: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
        error: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
      };
      // This page is intended for the bundled sample snippets. Use the playground for experimentation.
      const fn = new Function("console", '"use strict";\n' + practiceCode);
      fn(fakeConsole);
      setPracticeOutput(logs.join("\n") || "(No console output)");
    } catch (error) {
      setPracticeOutput(error instanceof Error ? "Error: " + error.message : "Unable to run code.");
    }
  };

  return <PageFrame><main className="platform-page"><div className="platform-container">
    <div className="platform-page-heading" style={{ paddingBottom: 22 }}>
      <span className="platform-eyebrow">JAVASCRIPT MARATHI · DEMO LESSON {String(index + 1).padStart(2, "0")}</span>
      <h1>{lesson.title}</h1>
      <p>Step-by-step Marathi explanation with a short code example and practice prompt. हा interface demo learning content आहे.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 17 }}>
        <Link href="/courses/javascript-marathi" className="platform-link"><ArrowLeft size={14}/> Course overview</Link>
        <span style={{ fontSize: 11, color: "#728098" }}>{Math.max(index + 1, 1)} / {lessonSlugs.length} sample lessons</span>
      </div>
    </div>
    <div className="lesson-layout">
      <aside className="lesson-sidebar">
        <h3>Course curriculum</h3>
        <div className="lesson-progress"><span style={{ width: (completed.length / lessonSlugs.length * 100) + "%" }}/></div>
        <small style={{ fontSize: 10, color: "#748199" }}>{completed.length} lessons completed in this browser</small>
        <nav style={{ marginTop: 12 }}>{lessonSlugs.map(([slug, title], i) => <Link className={slug === params.lessonSlug ? "active" : ""} href={"/learn/javascript-marathi/" + slug} key={slug}>
          <span>{completed.includes(slug) ? <CheckCircle2 size={15}/> : <Circle size={15}/>}</span><span>{title}<small>Lesson {String(i + 1).padStart(2, "0")}</small></span>
        </Link>)}</nav>
        <p style={{ fontSize: 9, color: "#8a95a7", lineHeight: 1.7, marginTop: 13 }}>Local demo progress only. It is not synced to an account or server.</p>
      </aside>
      <article className="lesson-content">
        <span className="platform-eyebrow"><Code2 size={13}/> LESSON NOTES</span>
        <h1>{lesson.title}</h1><p>{lesson.intro}</p>
        <h2 style={{ fontSize: 17, marginTop: 27 }}>Code example</h2>
        <p>हा code वाचा. Playground मध्ये बदल करून output पाहता येतो.</p>
        <pre className="lesson-code">{lesson.code}</pre>
        <h2 style={{ fontSize: 17, marginTop: 27 }}>हे कसे काम करते?</h2>
        <div className="lesson-explanation">{lesson.explanation}</div>
        <h2 style={{ fontSize: 17, marginTop: 27 }}>Try it yourself</h2>
        <div className="platform-field"><label htmlFor="lesson-practice">JavaScript code</label><textarea id="lesson-practice" value={practiceCode} onChange={event => { setPracticeCode(event.target.value); setRan(false); }} spellCheck={false} style={{ fontFamily: "ui-monospace, Consolas, monospace", minHeight: 170 }}/></div>
        <p style={{ fontSize: 10, color: "#7a879b" }}>For arbitrary examples, use the isolated browser iframe on the Playground page. This inline runner is intended for sample lesson snippets.</p>
        <div className="lesson-actions">
          <label className="lesson-complete"><input type="checkbox" checked={isCompleted} onChange={markCompleted}/> Mark lesson as completed</label>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="platform-btn platform-btn-secondary" onClick={() => { setPracticeCode(lesson.code); setPracticeOutput(""); setRan(false); }}><RefreshCw size={14}/> Reset</button>
            <button className="platform-btn" onClick={runPractice}><Play size={14}/> Run snippet</button>
          </div>
        </div>
        {ran && <div className="lesson-exercise" style={{ marginTop: 18 }}><h3>Output</h3><pre style={{ whiteSpace: "pre-wrap", fontSize: 12, color: "#365748" }}>{practiceOutput}</pre></div>}
        <div className="lesson-exercise"><h3>Practice exercise</h3><p>{lesson.exercise}</p></div>
        <div className="lesson-actions">
          <Link className="platform-link" href={index > 0 ? "/learn/javascript-marathi/" + lessonSlugs[index - 1][0] : "/courses/javascript-marathi"}><ArrowLeft size={15}/> Previous</Link>
          <Link className="platform-btn" href={index < lessonSlugs.length - 1 ? "/learn/javascript-marathi/" + lessonSlugs[index + 1][0] : "/courses/javascript-marathi"}>{index < lessonSlugs.length - 1 ? "Next lesson" : "Course overview"} <ArrowRight size={15}/></Link>
        </div>
      </article>
    </div>
  </div></main></PageFrame>;
}
