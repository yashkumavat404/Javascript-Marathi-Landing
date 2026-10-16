"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, Code2, Menu, X, ChevronDown, Search, ArrowUpRight } from "lucide-react";

const courseLinks = [
  { href: "/courses", title: "सर्व courses", detail: "Explore learning paths" },
  { href: "/courses/javascript-marathi", title: "JavaScript मराठीत", detail: "Beginner · Marathi" },
  { href: "/playground", title: "Code Playground", detail: "Write and run JavaScript" },
];

export function PlatformNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  return (
    <>
      <div className="platform-announcement"><span className="announcement-dot" /> मराठीत programming शिका — छोट्या पावलांनी, practical examples सोबत <Link href="/courses/javascript-marathi">Course पाहा <ArrowUpRight size={13} /></Link></div>
      <header className="platform-nav">
        <Link href="/" className="platform-brand" aria-label="CodeShiksha home">
          <span className="platform-brand-icon"><Code2 size={24} /></span>
          <span><strong>CodeShiksha</strong><small>कोडिंग, सोप्या मराठीत</small></span>
        </Link>
        <button className="platform-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "platform-links is-open" : "platform-links"} aria-label="Main navigation">
          <div className="platform-dropdown">
            <button className="platform-nav-dropdown" aria-expanded={coursesOpen} onClick={() => setCoursesOpen(!coursesOpen)}>Explore <ChevronDown size={15} /></button>
            {coursesOpen && <div className="platform-dropdown-panel">{courseLinks.map(item => <Link href={item.href} key={item.href} onClick={() => {setCoursesOpen(false);setMenuOpen(false);}}><strong>{item.title}</strong><span>{item.detail}</span></Link>)}</div>}
          </div>
          <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/book/javascript-marathi" onClick={() => setMenuOpen(false)}>Marathi Book</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <div className="platform-nav-actions"><Link className="platform-login" href="/login">Log in</Link><Link className="platform-start" href="/courses/javascript-marathi">Start learning <ArrowUpRight size={15}/></Link></div>
        </nav>
      </header>
    </>
  );
}

export function PlatformFooter() {
  return <footer className="platform-footer">
    <div className="platform-footer-main">
      <div className="footer-brand-block"><Link href="/" className="platform-brand"><span className="platform-brand-icon"><Code2 size={23}/></span><span><strong>CodeShiksha</strong><small>कोडिंग, सोप्या मराठीत</small></span></Link><p>Programming समजून घेण्यासाठी तुमची मातृभाषा हा एक उत्तम starting point असू शकतो.</p></div>
      <div><h3>Learn</h3><Link href="/courses">सर्व courses</Link><Link href="/courses/javascript-marathi">JavaScript course</Link><Link href="/playground">Playground</Link><Link href="/resources">Resources</Link></div>
      <div><h3>Platform</h3><Link href="/dashboard">Dashboard demo</Link><Link href="/book/javascript-marathi">Marathi textbook</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Policies</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Refund policy</Link></div>
    </div>
    <div className="platform-footer-bottom"><span>© {new Date().getFullYear()} CodeShiksha · Demonstration learning platform</span><span>Original educational demo · Not affiliated with other learning platforms</span></div>
  </footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><PlatformNav />{children}<PlatformFooter /></>;
}

export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="platform-page-heading"><span className="platform-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>;
}