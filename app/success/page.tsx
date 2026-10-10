import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, BookOpen, CheckCircle2, Code2, Sparkles } from "lucide-react";

export const metadata = {
  title: "धन्यवाद! | JavaScript सोप्या मराठीत",
  description: "JavaScript सोप्या मराठीत digital textbook डाउनलोड करा.",
};

export default function SuccessPage() {
  return (
    <main className="success-page">
      <div className="success-card">
        <div className="success-icon"><CheckCircle2 size={38} /></div>
        <div className="section-kicker">THANK YOU FOR YOUR PURCHASE</div>
        <h1>धन्यवाद! 🎉</h1>
        <p className="success-lead">JavaScript शिकण्याच्या तुमच्या प्रवासाची सुरुवात इथून होते.</p>
        <div className="success-book">
          <div className="success-book-icon"><Code2 size={32} /></div>
          <div>
            <strong>JavaScript — सोप्या मराठीत</strong>
            <span>Digital PDF textbook · 39 Chapters</span>
          </div>
          <BookOpen className="success-book-mark" size={24} />
        </div>
        <a className="button button-primary success-download" href="/JavaScript_for_Beginners_Marathi.pdf" download="JavaScript_Sopya_Marathit.pdf">
          <ArrowDownToLine size={20} /> PDF एका क्लिकमध्ये डाउनलोड करा
        </a>
        <p className="success-note"><Sparkles size={15} /> PDF डाउनलोड झाल्यावर ती तुमच्या Downloads folder मध्ये मिळेल.</p>
        <div className="success-divider" />
        <p className="success-help">Download सुरू होत नसेल, तर कृपया पुन्हा बटण दाबा किंवा दुसऱ्या browser मध्ये प्रयत्न करा.</p>
        <Link className="button button-ghost success-home" href="/"><ArrowLeft size={17} /> मुख्य पानावर परत जा</Link>
      </div>
      <p className="success-footer">शुभेच्छा! शिकत राहा, प्रयोग करत राहा. 💛</p>
    </main>
  );
}
