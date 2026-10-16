"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock3, Code2, PlayCircle } from "lucide-react";
import { PageFrame, PageHeading } from "../../components/platform-shell";
import { courses, lessonContent } from "../../components/course-data";

const course = courses[0];
const lessonSlugs = [
  ["programming-chi-olakh","Programming ची ओळख"],
  ["variables-data-types","Variables आणि data types"],
  ["conditions","Operators आणि conditions"],
  ["loops","Loops"],
  ["functions","Functions"],
  ["arrays-objects","Arrays आणि objects"],
  ["dom-events","DOM आणि events"],
  ["digital-clock","Mini project: Digital clock"],
];

export default function JavaScriptCoursePage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  useEffect(() => {
    try { setCompleted(JSON.parse(localStorage.getItem("codeshiksha-completed-lessons") || "[]")); } catch { setCompleted([]); }
  }, []);
  const progress = Math.round(completed.length / lessonSlugs.length * 100);
  const sections = useMemo(() => course.outcomes, []);
  return <PageFrame><main className="platform-page"><div className="platform-container">
    <PageHeading eyebrow="FEATURED COURSE · DEMONSTRATION" title="JavaScript for Beginners — Marathi" description="JavaScript ची सुरुवात concept-by-concept करा. खालील course detail आणि lessons हे learning experience दाखवणारे demo आहेत; verified hosted video course किंवा instructor service नाही."/>
    <section className="platform-section" style={{paddingTop:0}}>
      <div className="featured-course-panel"><div><div className="platform-card-meta"><span className="platform-badge blue">Beginner</span><span className="platform-badge">मराठी</span><span className="platform-badge green">Self-paced learning idea</span></div><h2>JavaScript, तुमच्या भाषेत.</h2><p>{course.description}</p><div className="platform-section-head" style={{marginTop:24,marginBottom:12}}><div><h2 style={{fontSize:19,margin:0}}>Learning outcomes</h2></div></div><ul className="outcome-list">{sections.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><p style={{fontSize:11}}>Prerequisites: no prior JavaScript experience required for the beginner path. A browser and text editor are useful for practice.</p><div className="platform-hero-actions"><Link href="/book/javascript-marathi" className="platform-btn">Get the Marathi textbook <ArrowRight size={15}/></Link><Link href="/playground" className="platform-btn platform-btn-secondary">Try code <Code2 size={15}/></Link></div></div><div className="featured-curriculum"><h3>Your demo learning progress</h3><div className="lesson-progress"><span style={{width:progress+"%"}}/></div><div style={{fontSize:12,color:"#52617a",marginBottom:17}}>{completed.length} of {lessonSlugs.length} lessons marked complete · {progress}%</div>{lessonSlugs.map(([slug,title],i)=><div className="curriculum-row" key={slug}><span>{String(i+1).padStart(2,"0")} &nbsp; {title}</span>{completed.includes(slug)?<CheckCircle2 size={16} color="#147d64"/>:<Circle size={15} color="#91a0b4"/>}</div>)}</div></div>
    </section>
    <section className="platform-section" style={{paddingTop:15}}><div className="platform-section-head"><div><span className="platform-eyebrow">SAMPLE CURRICULUM</span><h2>Choose a lesson to explore.</h2><p>Progress is stored only in this browser as demo data.</p></div><span className="platform-badge">{progress}% complete</span></div>
      <div className="platform-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))"}}>{lessonSlugs.map(([slug,title],i)=><article className="platform-card" key={slug}><div className={`platform-course-art ${i%2?"purple":"blue"}`}><span className="platform-course-art-label">Lesson {String(i+1).padStart(2,"0")}</span><span className="platform-course-symbol">{completed.includes(slug)?"✓":"JS"}</span></div><div className="platform-course-body"><div className="platform-card-meta"><span className="platform-badge">{i===7?"Mini project":"Core concept"}</span>{completed.includes(slug)&&<span className="platform-badge green">Completed</span>}</div><h3>{title}</h3><p>{lessonContent[slug].intro}</p><div className="platform-card-bottom"><span><Clock3 size={13} style={{verticalAlign:"middle"}}/> 5–10 min demo</span><Link href={`/learn/javascript-marathi/${slug}`}>Open lesson <ArrowRight size={14}/></Link></div></div></article>)}</div>
      <div className="demo-disclaimer">Course access note: the existing PDF textbook remains the current product. These interactive lessons are included as sample educational interfaces; no paid video library, instructor support, or completion certificate is being claimed.</div>
    </section>
  </div></main></PageFrame>;
}
