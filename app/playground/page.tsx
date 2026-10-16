"use client";

import { useState } from "react";
import { Code2, Lightbulb, ShieldCheck } from "lucide-react";
import { PageFrame, PageHeading } from "../components/platform-shell";
import Playground from "../components/playground";

export default function PlaygroundPage() {
  const [showTips, setShowTips] = useState(false);
  return <PageFrame><main className="platform-page"><div className="platform-container">
    <PageHeading eyebrow="INTERACTIVE PRACTICE · BROWSER DEMO" title="Try JavaScript, right here." description="Code लिहा, Run दाबा आणि output पाहा. तयार snippets पासून सुरुवात करा किंवा values बदलून experiments करा."/>
    <section className="platform-section" style={{paddingTop:0}}>
      <div className="platform-section-head"><div><span className="platform-eyebrow"><Code2 size={13}/> JAVASCRIPT PLAYGROUND</span><h2>A small place to experiment.</h2><p>This demonstration runs learner code inside a sandboxed browser iframe, not on the server.</p></div><button className="platform-btn platform-btn-secondary" onClick={()=>setShowTips(!showTips)}><Lightbulb size={15}/>{showTips?"Hide tips":"Show tips"}</button></div>
      {showTips&&<div className="featured-course-panel" style={{marginBottom:20,gridTemplateColumns:"1fr"}}><div><h2 style={{fontSize:20}}>A few useful tips</h2><p>Use console.log() to inspect values. Start with one small change at a time. If an example produces an error, read the message and check spelling, brackets, and quotation marks. Browser APIs such as document are intentionally not part of this simple console sandbox.</p></div></div>}
      <Playground/>
      <div className="platform-grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",marginTop:22}}><article className="platform-card"><div className="platform-course-body"><span className="platform-eyebrow"><ShieldCheck size={13}/> ISOLATED ENVIRONMENT</span><h3>Browser-only execution</h3><p>Code runs in an opaque-origin iframe with scripts enabled but without same-origin or top-navigation privileges.</p></div></article><article className="platform-card"><div className="platform-course-body"><span className="platform-eyebrow">GOOD HABIT</span><h3>Change one thing</h3><p>Modify a variable or loop limit, run again, and compare the result.</p></div></article><article className="platform-card"><div className="platform-course-body"><span className="platform-eyebrow">LEARNING IDEA</span><h3>Keep practising</h3><p>Try the sample lessons alongside the code playground to connect the explanation with output.</p></div></article></div>
      <p className="demo-disclaimer">This is an educational demo, not a hardened online judge. Browser-side isolation reduces access to the parent page, but should not be treated as a complete hostile-code security boundary.</p>
    </section></div></main></PageFrame>;
}