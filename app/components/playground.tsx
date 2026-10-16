"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Copy, Check, Code2, Terminal, AlertTriangle } from "lucide-react";

const examples = [
  { title: "Hello JavaScript", code: 'const greeting = "नमस्कार!";\nconsole.log(greeting);' },
  { title: "Variables", code: 'const learner = "CodeShiksha";\nlet completed = 2;\ncompleted += 1;\nconsole.log(learner);\nconsole.log("Completed:", completed);' },
  { title: "Loop", code: 'for (let i = 1; i <= 5; i++) {\n  console.log("Lesson", i);\n}' },
  { title: "Function", code: 'const add = (a, b) => a + b;\nconsole.log("2 + 3 =", add(2, 3));' },
];

export default function Playground() {
  const [code, setCode] = useState(examples[0].code);
  const [output, setOutput] = useState("Run your code to see output here.");
  const [error, setError] = useState("");
  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  const runCode = () => {
    setError("");
    setOutput("");
    const frame = frameRef.current;
    if (!frame?.contentWindow) {
      setError("Playground तयार होत आहे. पुन्हा प्रयत्न करा.");
      return;
    }
    const payload = { type: "codeshiksha-run", code };
    frame.contentWindow.postMessage(payload, "*");
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== frameRef.current?.contentWindow) return;
      if (!event.data || event.data.type !== "codeshiksha-result") return;
      setOutput((event.data.logs as string[]).join("\n") || "(No output)");
      setError((event.data.error as string) || "");
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setError("Clipboard access उपलब्ध नाही. Code manually select करून copy करा.");
    }
  };

  return <div className="playground-shell">
    <div className="playground-toolbar">
      <div className="playground-tabs">{examples.map((example, index) => <button key={example.title} onClick={() => {setActiveExample(index);setCode(example.code);setError("");}} className={activeExample === index ? "playground-tab active" : "playground-tab"}>{example.title}</button>)}</div>
      <span className="playground-demo-badge"><span/> Browser sandbox · Demo</span>
    </div>
    <div className="playground-grid">
      <section className="playground-editor">
        <div className="playground-panel-head"><span><Code2 size={15}/> script.js</span><button onClick={copyCode} aria-label="Copy code">{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? "Copied" : "Copy"}</button></div>
        <label className="visually-hidden" htmlFor="playground-code">JavaScript code editor</label>
        <textarea id="playground-code" spellCheck={false} value={code} onChange={event => {setCode(event.target.value);setActiveExample(-1);}} aria-describedby="playground-safety" />
        <div className="playground-controls"><button className="play-run" onClick={runCode}><Play size={15} fill="currentColor"/> Run code</button><button className="play-reset" onClick={() => {setCode(examples[0].code);setOutput("Run your code to see output here.");setError("");setActiveExample(0);}}><RotateCcw size={14}/> Reset</button><span>JavaScript · ES2020</span></div>
      </section>
      <section className="playground-output">
        <div className="playground-panel-head"><span><Terminal size={15}/> Console output</span><button onClick={() => {setOutput("");setError("");}}>Clear</button></div>
        <div className="playground-console" aria-live="polite">{error && <div className="playground-error"><AlertTriangle size={15}/><pre>{error}</pre></div>}<pre>{output}</pre></div>
        <div className="playground-hint">Tip: console.log() वापरून values तपासा.</div>
      </section>
    </div>
    <p id="playground-safety" className="playground-safety"><strong>Safety note:</strong> Code executes inside an opaque-origin sandboxed iframe without same-origin access. Treat this as a learning toy, not a secure production code execution service.</p>
    <iframe ref={frameRef} title="Isolated JavaScript execution sandbox" className="playground-frame" sandbox="allow-scripts" srcDoc={`<!doctype html><html><body><script>
      const safeString = (value) => {
        try { return typeof value === "string" ? value : JSON.stringify(value); }
        catch { return String(value); }
      };
      window.addEventListener("message", (event) => {
        if (!event.data || event.data.type !== "codeshiksha-run") return;
        const logs = [];
        const fakeConsole = {
          log: (...args) => logs.push(args.map(safeString).join(" ")),
          info: (...args) => logs.push(args.map(safeString).join(" ")),
          warn: (...args) => logs.push("Warning: " + args.map(safeString).join(" ")),
          error: (...args) => logs.push("Error: " + args.map(safeString).join(" "))
        };
        let error = "";
        try {
          const fn = new Function("console", '"use strict";\n' + event.data.code);
          fn(fakeConsole);
        } catch (e) { error = e && e.message ? e.message : "Code could not run."; }
        parent.postMessage({type:"codeshiksha-result", logs, error}, "*");
      });
    </script></body></html>`} />
  </div>;
}