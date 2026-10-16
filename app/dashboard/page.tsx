"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, PlayCircle, Sparkles } from "lucide-react";
import { PageFrame, PageHeading } from "../components/platform-shell";
import { courses } from "../components/course-data";

type ProgressState = { completed: string[]; name: string; saved: string[] };
const lessonTitles = [
 ["programming-chi-olakh","Programming ची ओळख"],
 ["variables-data-types","Variables आणि data types"],
 ["conditions","Operators आणि conditions"],
 ["loops","Loops"],
 ["functions","Functions"],
 ["arrays-objects","Arrays आणि objects"],
 ["dom-events","DOM आणि events"],
 ["digital-clock","Mini project: Digital clock"],
];
export default function DashboardPage(){
 const [state,setState]=useState<ProgressState>({completed:[],name:"Learner",saved:["JavaScript learning roadmap"]});
 const [loaded,setLoaded]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem("codeshiksha-dashboard-demo");if(saved)setState(JSON.parse(saved));const progress=JSON.parse(localStorage.getItem("codeshiksha-completed-lessons")||"[]");setState(prev=>({...prev,completed:Array.isArray(progress)?progress:[]}));}catch{}setLoaded(true);},[]);
 useEffect(()=>{if(loaded)try{localStorage.setItem("codeshiksha-dashboard-demo",JSON.stringify(state));}catch{}},[state,loaded]);
 const progress=Math.round(state.completed.length/lessonTitles.length*100);
 const current=lessonTitles.find(([slug])=>!state.completed.includes(slug))||lessonTitles[lessonTitles.length-1];
 return <PageFrame><main className="platform-page"><div className="platform-container">
  <PageHeading eyebrow="STUDENT DASHBOARD · LOCAL DEMO" title={"Welcome back, "+(state.name||"Learner")+"."} description="This dashboard uses browser-local demo progress. It is not connected to a real account, backend, or cross-device sync."/>
  <section className="platform-section" style={{paddingTop:0}}>
   <div className="platform-card" style={{padding:23,marginBottom:20}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap"}}><div><label className="platform-eyebrow" htmlFor="learner-name">DEMO DISPLAY NAME</label><input id="learner-name" className="platform-search" style={{marginTop:9,maxWidth:320}} value={state.name} onChange={e=>setState(prev=>({...prev,name:e.target.value}))} maxLength={50}/></div><span className="platform-badge green">Local demo profile</span></div></div>
   <div className="dashboard-stats"><div className="dashboard-stat"><span>Lessons completed</span><strong>{state.completed.length}<span style={{fontSize:13,fontWeight:500,color:"#76839a"}}> / {lessonTitles.length}</span></strong><small>Saved in this browser</small></div><div className="dashboard-stat"><span>Course progress</span><strong>{progress}%</strong><small>Based on sample lessons</small></div><div className="dashboard-stat"><span>Saved resources</span><strong>{state.saved.length}</strong><small>Sample dashboard state</small></div></div>
   <div className="featured-course-panel"><div><span className="platform-eyebrow">CONTINUE LEARNING</span><h2>{current[1]}</h2><p>Continue with the next suggested concept in the JavaScript Marathi demonstration path.</p><div className="lesson-progress"><span style={{width:progress+"%"}}/></div><p style={{fontSize:11}}>{progress}% of sample lessons completed</p><Link className="platform-btn" href={"/learn/javascript-marathi/"+current[0]}>Continue lesson <ArrowRight size={15}/></Link></div><div className="featured-curriculum"><h3>Recent lessons</h3>{lessonTitles.slice(0,5).map(([slug,title],i)=><div className="curriculum-row" key={slug}><span>{title}</span><span>{state.completed.includes(slug)?"Completed":"Suggested"}</span></div>)}</div></div>
   <section className="platform-section" style={{padding:"33px 0 0"}}><div className="platform-section-head"><div><span className="platform-eyebrow">YOUR COURSES</span><h2>Learning paths</h2><p>Sample enrolment tiles for the platform demonstration.</p></div></div><div className="platform-grid">{courses.slice(0,3).map((course,i)=><article className="platform-card" key={course.slug}><div className={"platform-course-art "+course.color}><span className="platform-course-art-label">{course.demoOnly?"Demo course":"Featured"}</span><span className="platform-course-symbol">{i===0?"JS":i===1?"{ }":"UI"}</span></div><div className="platform-course-body"><h3>{course.title}</h3><p>{course.description}</p><div className="platform-card-bottom"><span>{course.level}</span><Link href={"/courses/"+course.slug}>View path <ArrowRight size={14}/></Link></div></div></article>)}</div></section>
   <section className="platform-section" style={{padding:"33px 0 0"}}><div className="platform-section-head"><div><span className="platform-eyebrow">SAVED RESOURCES</span><h2>Useful for later</h2></div></div><div className="resource-grid">{[{name:"JavaScript learning roadmap",desc:"A path from fundamentals to mini-projects.",href:"/courses/javascript-marathi",icon:Sparkles},{name:"Marathi textbook",desc:"Existing PDF book details and page previews.",href:"/book/javascript-marathi",icon:BookOpen},{name:"JavaScript Playground",desc:"Try code in an isolated browser frame.",href:"/playground",icon:PlayCircle}].map(item=><article className="resource-card" key={item.name}><item.icon size={21} color="#3156c6"/><h3>{item.name}</h3><p>{item.desc}</p><Link href={item.href}>Open resource <ArrowRight size={13}/></Link><button className="play-reset" style={{marginTop:12}} onClick={()=>setState(prev=>({...prev,saved:prev.saved.includes(item.name)?prev.saved.filter(n=>n!==item.name):[...prev.saved,item.name]}))}>{state.saved.includes(item.name)?"Remove saved":"Save resource"}</button></article>)}</div></section>
   <div className="demo-disclaimer"><CheckCircle2 size={14} style={{verticalAlign:"middle",marginRight:6}}/> Progress and saved resources are demonstration state saved in localStorage. They are not securely stored server data and won't synchronize across devices.</div>
  </section></div></main></PageFrame>;
}