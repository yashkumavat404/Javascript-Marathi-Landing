"use client";

import { useState } from "react";
import { PageFrame, PageHeading } from "../components/platform-shell";
import { BookOpen, Code2, Compass, ExternalLink, FileText, Lightbulb } from "lucide-react";
import Link from "next/link";

const resources = [
  {type:"GUIDE",title:"JavaScript learning roadmap",description:"A beginner sequence from programming concepts to small browser-based projects.",href:"/courses/javascript-marathi",action:"Open learning roadmap",icon:Compass},
  {type:"PRACTICE",title:"Try JavaScript in your browser",description:"Start from a working snippet, modify values and compare console output.",href:"/playground",action:"Open playground",icon:Code2},
  {type:"TEXTBOOK",title:"JavaScript — सोप्या मराठीत",description:"Read about the current PDF textbook and inspect actual page previews.",href:"/book/javascript-marathi",action:"View book details",icon:BookOpen},
  {type:"LESSON",title:"Variables and data types",description:"A short Marathi introduction to const, let, strings and numbers.",href:"/learn/javascript-marathi/variables-data-types",action:"Read demo lesson",icon:FileText},
  {type:"PRACTICE IDEA",title:"Mini-project planning checklist",description:"Break a calculator, to-do list or clock into events, state and display logic.",href:"/courses/javascript-marathi",action:"Explore course",icon:Lightbulb},
  {type:"REFERENCE",title:"MDN JavaScript Guide",description:"An external reference for accurate language syntax and browser APIs.",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",action:"Open MDN",icon:ExternalLink,external:true},
];
export default function ResourcesPage(){
 const [term,setTerm]=useState("");
 const filtered=resources.filter(r=>(r.title+" "+r.description+" "+r.type).toLowerCase().includes(term.toLowerCase()));
 return <PageFrame><main className="platform-page"><div className="platform-container"><PageHeading eyebrow="LEARNING RESOURCES" title="Helpful resources for your next step." description="Guides, short lessons, practice ideas and reference material organized for beginner JavaScript learners."/>
 <section className="platform-section" style={{paddingTop:0}}><div className="platform-filter-bar"><div className="platform-search-wrap"><FileText size={16}/><label className="visually-hidden" htmlFor="resource-search">Search resources</label><input id="resource-search" className="platform-search" value={term} onChange={e=>setTerm(e.target.value)} placeholder="Search guides, lessons, practice..."/></div></div>
 <div className="resource-grid">{filtered.map(({type,title,description,href,action,icon:Icon,external})=><article className="resource-card" key={title}><span>{type}</span><h3>{title}</h3><p>{description}</p>{external?<a href={href} target="_blank" rel="noreferrer">{action} <ExternalLink size={13}/></a>:<Link href={href}>{action} <ExternalLink size={13}/></Link>}</article>)}</div>{filtered.length===0&&<div className="platform-empty">No resources match that search.</div>}
 <div className="demo-disclaimer">Resource availability note: additional topic pages are sample educational content. External links may open third-party websites that have their own terms and privacy practices.</div></section></div></main></PageFrame>;
}