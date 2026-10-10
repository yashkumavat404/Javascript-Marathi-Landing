"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronDown, Code2, Eye, FileText, GraduationCap, Menu, X, Sparkles } from "lucide-react";

const chapters: [string, string][] = [
["प्रोग्रामिंग भाषा म्हणजे काय?","What is a Programming Language?"],
["सर्व्हर-साइड आणि क्लायंट-साइड","Server-side vs. Client-side"],
["JavaScript बद्दल थोडेसे","A Little About JavaScript"],
["JavaScript ची सफर","A Tour of JavaScript"],
["ऑब्जेक्ट्स, प्रॉपर्टीज आणि मेथड्स","Objects, Properties & Methods"],
["प्रॉपर्टीला किंमत देणे","Assigning Values to Properties"],
["कमेंट्स — कोडमधल्या चिठ्ठ्या","Comments"],
["जुन्या ब्राउझरपासून स्क्रिप्ट लपवणे","Hiding Scripts from Older Browsers"],
["वापरणाऱ्याला आपोआप दुसऱ्या पानावर नेणे","Automatic Page Redirection"],
["Alert, Prompt आणि Confirm","Alert, Prompt & Confirm"],
["व्हेरिअबल्स आणि ऑपरेटर्स","Variables & Operators"],
["तुलना","Comparison"],
["कंडिशनल्स — निर्णय घेणारा कोड","Conditionals"],
["लूप्स — पुन्हा पुन्हा करा","Loops"],
["अ‍ॅरे — डब्यांची रांग","Arrays"],
["नावाचे डबे — Associative Array","Associative Arrays"],
["दोन मिती असलेले अ‍ॅरे","Two-dimensional Arrays"],
["मजकुराशी खेळ — स्ट्रिंग्स","Strings"],
["फंक्शन्स वापरूया","Using Functions"],
["लॉजिकल ऑपरेटर्स — आणि / किंवा","Logical Operators"],
["इव्हेंट हँडलर्स — घटनेला उत्तर","Event Handlers"],
["चित्रांशी खेळ","Working with Images"],
["साधे इमेज रोलओव्हर","Simple Image Rollovers"],
["ऑब्जेक्ट तयार करा आणि चांगले रोलओव्हर","Creating Objects & Better Rollovers"],
["ब्राउझर विंडोज उघडणे","Opening Browser Windows"],
["विंडो हव्या त्या जागी उघडणे","Positioning Windows"],
["फोकस आणि ब्लर","Focus & Blur"],
["वेळेवर बनणारे पान — Dynamic Content","Dynamic Content"],
["अनेक विंडोज सांभाळणे","Managing Multiple Windows"],
["बाहेरची स्क्रिप्ट फाइल","External Script Files"],
["JavaScript आणि फॉर्म्स","JavaScript & Forms"],
["फॉर्म मेथड्स आणि इव्हेंट हँडलर्स","Form Methods & Event Handlers"],
["JavaScript आणि गणित","JavaScript & Math"],
["ऑब्जेक्ट व्हेरिअबल्स — उजळणी","Object Variables Review"],
["मेनूमधून कृती","Actions from Menus"],
["फॉर्ममध्ये उत्तर आवश्यक करणे","Making Form Answers Required"],
["तारखांशी काम","Working with Dates"],
["Date मधून माहिती काढणे","Extracting Date Information"],
["JavaScript चे घड्याळ बनवूया","Building a JavaScript Clock"]
];

const buy = () => {
  window.location.href = "/buy";
};
const faqs: [string, string][] = [
["हा course कोणासाठी आहे?","JavaScript ची सुरुवात करू इच्छिणारे विद्यार्थी, नवशिके आणि मराठीतून शिकायला आवडणारे वाचक यांच्यासाठी हा digital textbook तयार केला आहे."],
["मला JavaScript अजिबात येत नसेल तरी चालेल का?","हो. पुस्तकाची सुरुवात programming म्हणजे काय आणि JavaScript ची ओळख यांसारख्या मूलभूत संकल्पनांपासून होते."],
["PDF मध्ये किती chapters आहेत?","या पुस्तकात ३९ धडे आहेत. यात basics, variables, loops, arrays, functions, events, forms आणि dates यांचा समावेश आहे."],
["Code मराठीत translate केला आहे का?","नाही. Programming code English मध्येच ठेवला आहे आणि त्याची explanation सोप्या मराठीत दिली आहे."],
["हा physical book आहे का?","नाही, हा digital PDF textbook आहे."],
["Payment केल्यानंतर काय मिळेल?","Payment gateway आणि PDF delivery जोडल्यावर येथे त्यानुसार माहिती दिली जाईल. सध्या payment verification किंवा secure PDF delivery implement केलेली नाही."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pages = [
    {src:"/previews/page-4.jpg",title:"सोप्या भाषेत संकल्पना",note:"Beginner-friendly explanation"},
    {src:"/previews/page-11.jpg",title:"पहिला JavaScript code",note:"Code example"},
    {src:"/previews/page-15.jpg",title:"Objects आणि methods",note:"Diagram + code"},
    {src:"/previews/page-20.jpg",title:"Comments समजून घ्या",note:"Visual learning"},
    {src:"/previews/page-39.jpg",title:"पुस्तकातील आणखी एक पान",note:"Actual PDF page"}
  ];
  const groups = [
    {name:"FOUNDATIONS",range:"01—10",start:0,end:10},
    {name:"CORE JAVASCRIPT",range:"11—20",start:10,end:20},
    {name:"INTERACTION & EVENTS",range:"21—30",start:20,end:30},
    {name:"FORMS, MATH & DATES",range:"31—39",start:30,end:39}
  ];
  return <main>
    <div className="announcement"><span className="announce-dot"/> JavaScript आता मराठीत <span>·</span> फक्त <strong>₹99</strong> <Sparkles size={14}/></div>
    <header className="navbar">
      <a href="#home" className="brand"><span className="brand-mark"><Code2 size={22}/></span><span><strong>JavaScript</strong><small>सोप्या मराठीत</small></span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{[["Features","#features"],["Chapters","#chapters"],["Preview","#preview"],["FAQ","#faq"]].map(([t,h])=><a key={h} href={h} onClick={()=>setMenuOpen(false)}>{t}</a>)}<button className="button button-small mobile-nav-buy" onClick={buy}>₹99 मध्ये Buy Now <ArrowRight size={16}/></button></nav>
      <button className="button button-small nav-buy" onClick={buy}>₹99 मध्ये Buy Now <ArrowRight size={16}/></button>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">🇮🇳 MARATHI PROGRAMMING BOOK</div>
        <h1>JavaScript<br/><span>शिकायचं आहे?</span></h1>
        <h2>आता तेही <em>सोप्या मराठीत.</em> <span className="rocket">↗</span></h2>
        <p className="hero-description">Programming चा अनुभव नसला तरी काळजी करू नका. JavaScript अगदी सुरुवातीपासून सोप्या explanations आणि code examples सोबत समजून घ्या.</p>
        <div className="hero-price-row"><strong className="price">₹99</strong><div className="price-meta"><strong>One-time payment</strong><span>Digital PDF <b>·</b> 39 Chapters</span></div></div>
        <div className="hero-actions"><button className="button button-primary" onClick={buy}>🚀 आत्ताच खरेदी करा — ₹99 <ArrowRight size={18}/></button><a href="#preview" className="button button-ghost">📖 Preview पाहा</a></div>
        <div className="hero-reassurance"><span><Check size={14}/> सोपी मराठी</span><span><Check size={14}/> Original code examples</span><span><Check size={14}/> Digital textbook</span></div>
      </div>
      <div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
        <div className="book-3d book-3d-image"><img src="/book-cover-cutout.webp" alt="JavaScript सोप्या मराठीत — 3D textbook cover" /></div>
        <div className="float-chip chip-code">&lt;/&gt; <span>LEARN BY EXAMPLES</span></div><div className="float-chip chip-js"><span className="js-mini">JS</span><span>Code + <small>Marathi</small></span></div>
        <div className="float-card card-syntax"><span className="syntax-label">YOUR FIRST LINE OF JAVASCRIPT</span><code>window.<b>alert</b>("Hello world!");</code><div className="syntax-status"><span/> Ready to learn</div></div>
        <div className="float-card card-chapters"><span className="chapter-icon"><BookOpen size={20}/></span><span><strong>39 Chapters</strong><small>Basics to JavaScript clock</small></span></div><div className="art-caption"><span className="caption-line"/> YOUR FIRST STEP INTO CODE</div>
      </div>
    </section>
    <section className="section-wrap stats-strip"><div className="stat"><strong>39</strong><span>Chapters</span></div><div className="stat"><strong>105</strong><span>PDF pages</span></div><div className="stat"><strong><Code2 size={25}/></strong><span>Code examples</span></div><div className="stat"><strong><GraduationCap size={27}/></strong><span>Practical learning</span></div></section>
    <section className="problem-section section-wrap"><div className="section-kicker">A FAMILIAR PROBLEM?</div><h2 className="section-title">JavaScript शिकताना हे problems<br/><span>येतात का?</span></h2><div className="problem-grid">{["English technical language समजायला कठीण जाते","Tutorials मध्ये खूप technical शब्द असतात","Code पाहून सुरुवात कुठून करायची हे कळत नाही","Theory आणि practical यांचा connection समजत नाही"].map((t,i)=><article className="problem-card" key={t}><span className="problem-icon">{["✳","⌘","</>","↗"][i]}</span><p>{t}</p></article>)}</div><div className="transition-line"><span/> म्हणूनच हा course तयार केला आहे. <span/></div></section>
    <section className="solution-section"><div className="section-wrap solution-layout"><div><div className="section-kicker">LEARN IN YOUR LANGUAGE</div><h2 className="section-title">Programming आता<br/><span>तुमच्या भाषेत शिका.</span></h2><p className="section-description">प्रत्येक concept आधी सोप्या भाषेत समजावला जातो आणि त्यानंतर code example दिला जातो.</p></div><div className="learning-flow">{[["01","English concept"],["02","सोपे Marathi explanation"],["03","Original code"],["04","Practical example"],["05","Browser मध्ये result"]].map(([n,t],i)=><div className="flow-step" key={n}><span className="flow-number">{n}</span><strong>{t}</strong>{i<4&&<span className="flow-arrow">↓</span>}</div>)}</div></div></section>
    <section className="section section-wrap" id="features"><div className="section-heading"><div><div className="section-kicker">WHAT'S INSIDE</div><h2 className="section-title">शिकण्यासाठी लागणाऱ्या<br/><span>सगळ्या basics एका ठिकाणी.</span></h2></div><p>एक digital textbook, ३९ धडे आणि visuals सोबत शिकण्याची सुरुवात.</p></div><div className="feature-grid">{[[BookOpen,"39 Chapters","Programming basics पासून Dates आणि JavaScript clock पर्यंत."],[Code2,"JavaScript Code","मूळ programming code English मध्येच ठेवलेला आहे."],[FileText,"HTML + JavaScript","वेबपानात JavaScript कसे वापरतात ते समजून घ्या."],[GraduationCap,"सोप्या मराठीत","Beginner-friendly explanations आणि उदाहरणे."],[Check,"Key Points","धड्याच्या शेवटी महत्त्वाच्या मुद्द्यांची उजळणी."],[Sparkles,"Visual Learning","Diagrams, tables आणि practical exercises."]].map(([Icon,title,desc]:any)=><article className="feature-card" key={title}><div className="feature-icon"><Icon size={22}/></div><h3>{title}</h3><p>{desc}</p><span className="feature-arrow">↗</span></article>)}</div></section>
    <section className="chapter-section" id="chapters"><div className="section-wrap"><div className="section-heading"><div><div className="section-kicker">THE CURRICULUM</div><h2 className="section-title">३९ धड्यांचा <span>learning path.</span></h2></div><p>मूलभूत कल्पनांपासून forms, dates आणि JavaScript clock पर्यंत.</p></div><div className="chapter-groups">{groups.map(g=><div className="chapter-group" key={g.name}><div className="group-heading"><span>{g.name}</span><small>{g.range}</small></div><div className="chapter-list">{chapters.slice(g.start,showAll?g.end:Math.min(g.end,g.start+3)).map(([mr,en],i)=><div className="chapter-row" key={mr}><span className="chapter-number">{String(g.start+i+1).padStart(2,"0")}</span><div className="chapter-names"><strong>{mr}</strong><small>{en}</small></div><ArrowRight size={16} className="chapter-row-arrow"/></div>)}</div></div>)}</div><button className="button button-outline show-chapters" onClick={()=>setShowAll(!showAll)}>{showAll?"कमी chapters दाखवा":"सर्व ३९ chapters पाहा"} <ChevronDown size={17} className={showAll?"rotate":""}/></button></div></section>
    <section className="section section-wrap preview-section" id="preview"><div className="section-heading"><div><div className="section-kicker">TAKE A LOOK INSIDE</div><h2 className="section-title">खरे पुस्तक. <span>खरी पाने.</span></h2></div><p>PDF मधील प्रत्यक्ष पाने पाहा. मोठे करून वाचण्यासाठी कोणत्याही पानावर क्लिक करा.</p></div><div className="preview-grid">{pages.map(p=><button className="preview-item" key={p.src} onClick={()=>setPreview(p.src)}><div className="preview-paper"><img src={p.src} alt={p.title}/><span className="zoom-badge"><Eye size={15}/> Zoom</span></div><strong>{p.title}</strong><small>{p.note}</small></button>)}</div></section>
    <section className="code-section"><div className="section-wrap code-layout"><div><div className="section-kicker light-kicker">CODE IN CONTEXT</div><h2 className="section-title light-title">Code English मध्येच.<br/><span>Explanation सोप्या मराठीत.</span></h2><p className="section-description light-description">Programming code जसाच्या तसा ठेवला आहे. त्याच्या बाजूला सोप्या मराठीत तो काय करतो हे समजावले आहे.</p><div className="code-explainer"><span className="explain-check"><Check size={16}/></span><p>खालील code browser मध्ये message box दाखवतो.</p></div></div><div className="editor"><div className="editor-top"><div className="window-dots"><i/><i/><i/></div><span>hello-world.js</span><span className="editor-js">JS</span></div><div className="editor-body"><div className="line-no">1</div><pre><span className="code-purple">window</span>.<span className="code-blue">alert</span>(<span className="code-yellow">"Hello world!"</span>);</pre></div><div className="editor-footer"><span className="editor-status"><i/> JavaScript</span><span>UTF-8</span></div></div></div></section>
    <section className="section section-wrap audience-section"><div className="section-kicker">MADE FOR YOUR FIRST STEP</div><h2 className="section-title">हा Course <span>कोणासाठी आहे?</span></h2><div className="audience-grid">{[["01","Beginners","Programming ची सुरुवात करणाऱ्यांसाठी."],["02","Students","JavaScript basics समजून घेऊ इच्छिणाऱ्या विद्यार्थ्यांसाठी."],["03","Marathi Learners","Technical concepts मराठीत समजून घेण्यासाठी."],["04","Future Developers","Web development ची मजबूत सुरुवात करण्यासाठी."]].map(([n,t,d])=><article className="audience-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="journey-section"><div className="section-wrap"><div className="section-kicker light-kicker">YOUR LEARNING JOURNEY</div><h2 className="section-title light-title">पहिल्या concept पासून<br/><span>स्वतःच्या छोट्या experiments पर्यंत.</span></h2><div className="journey-grid">{["Programming basics","JavaScript introduction","Variables & Operators","Conditions & Loops","Arrays & Functions","Events & Images","Forms","Dates & JavaScript Clock"].map((step,i)=><div className="journey-step" key={step}><span>STEP {String(i+1).padStart(2,"0")}</span><strong>{step}</strong><div className="journey-track"><i style={{width:`${(i+1)*12.5}%`}}/></div></div>)}</div></div></section>
    <section className="pricing-section section-wrap" id="pricing"><div className="pricing-card"><div className="pricing-copy"><div className="section-kicker light-kicker">START LEARNING TODAY</div><h2 className="section-title light-title">JavaScript शिकण्याची<br/>सुरुवात <span>आजच करा.</span></h2><p>₹99 मध्ये JavaScript ची beginner-friendly learning journey.</p><div className="pricing-checks">{["39 Chapters","मराठी explanations","Code examples","Visual learning","Practical exercises","Digital PDF"].map(t=><span key={t}><Check/> {t}</span>)}</div></div><div className="pricing-box"><span className="pricing-label">DIGITAL TEXTBOOK</span><div className="big-price">₹99</div><span className="one-time">फक्त एकदाच</span><button className="button button-primary pricing-button" onClick={buy}>🚀 Buy Now — ₹99 <ArrowRight size={18}/></button><small>Payment link configure केल्यानंतर खरेदी सुरू होईल.</small></div></div></section>
    <section className="section-wrap value-section"><div className="value-copy"><div className="section-kicker">A SIMPLE START</div><h2 className="section-title">तुमच्या learning ची<br/><span>सोप्या पायरीने सुरुवात.</span></h2></div><div className="value-note"><div className="value-line"><span>तुमच्या गतीने वाचता येणारे digital textbook</span><strong>✓</strong></div><div className="value-line"><span>39 धडे आणि visual explanations</span><strong>✓</strong></div><div className="value-price"><span>एकदाच</span><strong>₹99</strong></div></div></section>
    <section className="faq-section" id="faq"><div className="section-wrap faq-layout"><div><div className="section-kicker">GOOD QUESTIONS</div><h2 className="section-title">खरेदीपूर्वीचे<br/><span>काही प्रश्न.</span></h2><p className="section-description">खालील माहिती पुस्तकाबद्दल स्पष्ट कल्पना देईल.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?"faq-open":""}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={19}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>
    <section className="final-cta section-wrap"><div className="final-spark spark-a">✳</div><div className="final-spark spark-b">✦</div><div className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</div><h2>आजपासून JavaScript<br/><span>तुमच्या भाषेत शिका.</span> 🚀</h2><p>39 धडे. सोपी मराठी. तुमची पहिली पायरी.</p><div className="final-price">फक्त <strong>₹99</strong></div><button className="button button-primary" onClick={buy}><BookOpen size={18}/> माझे JavaScript Book मिळवा — ₹99 <ArrowRight size={18}/></button></section>
    <footer className="footer"><div className="footer-main"><a href="#home" className="brand"><span className="brand-mark"><Code2 size={22}/></span><span><strong>JavaScript</strong><small>सोप्या मराठीत</small></span></a><p>शून्यापासून JavaScript शिकूया!</p><nav>{[["Home","#home"],["Features","#features"],["Chapters","#chapters"],["Preview","#preview"],["FAQ","#faq"]].map(([t,h])=><a key={h} href={h}>{t}</a>)}</nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JavaScript सोप्या मराठीत</span><span>Made for curious beginners <span className="footer-heart">✳</span></span></div></footer>
    <div className="mobile-buy-bar"><div><strong>₹99</strong><small>Digital PDF · 39 Chapters</small></div><button className="button button-primary" onClick={buy}>Buy Now <ArrowRight size={17}/></button></div>
    {preview&&<div className="preview-modal" role="dialog" aria-modal="true" onClick={()=>setPreview(null)}><button aria-label="Close preview" className="modal-close" onClick={()=>setPreview(null)}><X/></button><img src={preview} alt="Actual page preview from the Marathi JavaScript PDF" onClick={e=>e.stopPropagation()}/><p>Actual page from the supplied PDF · बाहेर क्लिक करून बंद करा</p></div>}
  </main>;
}
