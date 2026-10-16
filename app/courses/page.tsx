"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { PageFrame, PageHeading } from "../components/platform-shell";
import { allCategories, courses } from "../components/course-data";

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [level, setLevel] = useState("All levels");
  const [language, setLanguage] = useState("All languages");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    const result = courses.filter(course => {
      const matchesQuery = !term || [course.title, course.subtitle, course.description, course.category].join(" ").toLocaleLowerCase().includes(term);
      return matchesQuery &&
        (category === "All categories" || course.category === category) &&
        (level === "All levels" || course.level === level) &&
        (language === "All languages" || course.language === language);
    });
    if (sort === "title") result.sort((a,b) => a.title.localeCompare(b.title));
    if (sort === "beginner") result.sort((a,b) => a.level === b.level ? 0 : a.level === "Beginner" ? -1 : 1);
    return result;
  }, [query, category, level, language, sort]);

  return <PageFrame><main className="platform-page">
    <div className="platform-container">
      <PageHeading eyebrow="COURSE CATALOG · DEMONSTRATION" title="तुमचा learning path शोधा." description="JavaScript मराठीतून शिकायला सुरुवात करा. Search, filters आणि course details वास्तविक sample dataset वर चालतात. काही अतिरिक्त courses हे स्पष्टपणे demo-only आहेत." />
      <section className="platform-section" style={{paddingTop:0}}>
        <div className="platform-filter-bar">
          <div className="platform-search-wrap"><Search size={16}/><label className="visually-hidden" htmlFor="course-search">Search courses</label><input id="course-search" className="platform-search" placeholder="Course किंवा topic शोधा..." value={query} onChange={e => setQuery(e.target.value)} /></div>
          <label className="visually-hidden" htmlFor="course-category">Category</label><select id="course-category" className="platform-select" value={category} onChange={e => setCategory(e.target.value)}>{allCategories.map(item => <option key={item}>{item}</option>)}</select>
          <label className="visually-hidden" htmlFor="course-level">Course level</label><select id="course-level" className="platform-select" value={level} onChange={e => setLevel(e.target.value)}><option>All levels</option><option>Beginner</option><option>Intermediate</option></select>
          <label className="visually-hidden" htmlFor="course-language">Course language</label><select id="course-language" className="platform-select" value={language} onChange={e => setLanguage(e.target.value)}><option>All languages</option><option>Marathi</option><option>English</option></select>
          <label className="visually-hidden" htmlFor="course-sort">Sort courses</label><select id="course-sort" className="platform-select" value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Sort: Featured</option><option value="title">Title A–Z</option><option value="beginner">Level: Beginner first</option></select>
        </div>
        <div className="platform-section-head"><div><div className="platform-eyebrow"><SlidersHorizontal size={13}/> FIND YOUR NEXT STEP</div><h2>Explore courses</h2><p>एक course निवडा आणि त्याचा syllabus पाहा.</p></div><span className="platform-results-note">{filtered.length} courses</span></div>
        {filtered.length ? <div className="platform-grid">{filtered.map(course => <article className="platform-card" key={course.slug}>
          <div className={`platform-course-art ${course.color}`}><span className="platform-course-art-label">{course.demoOnly ? "Demo path" : "Featured course"}</span><span className="platform-course-symbol">{course.category === "JavaScript" ? "JS" : course.category === "Web Development" ? "{ }" : course.category === "Frontend Development" ? "UI" : course.category === "Programming Fundamentals" ? "01" : "⚡"}</span></div>
          <div className="platform-course-body"><div className="platform-card-meta"><span className="platform-badge blue">{course.level}</span><span className="platform-badge">{course.language}</span>{course.demoOnly && <span className="platform-badge">Illustrative</span>}</div><h3>{course.title}</h3><p>{course.description}</p><div className="platform-card-bottom"><span>{course.duration}</span><Link href={`/courses/${course.slug}`}>View course <ArrowRight size={14}/></Link></div></div>
        </article>)}</div> : <div className="platform-empty"><h3>या filters साठी course सापडला नाही.</h3><p>Search किंवा category filters बदलून पुन्हा पाहा.</p><button className="platform-btn platform-btn-secondary" onClick={() => {setQuery("");setCategory("All categories");setLevel("All levels");setLanguage("All languages");setSort("featured");}}>Reset filters</button></div>}
        <p className="platform-results-note">Demo notice: JavaScript Marathi textbook हा existing product आहे. इतर sample paths हे illustrative interfaces आहेत; त्यांना live instructor-led services समजू नका.</p>
      </section>
    </div>
  </main></PageFrame>;
}