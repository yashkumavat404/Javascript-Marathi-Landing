import Link from "next/link";
import { ArrowLeft, CircleHelp } from "lucide-react";

export default function SuccessPage() {
  return <main className="success-page">
    <div className="success-card">
      <div className="success-icon"><CircleHelp size={30}/></div>
      <div className="section-kicker">PAYMENT STATUS</div>
      <h1>तुमची खरेदी verify करायची आहे.</h1>
      <p>ही placeholder page आहे. या template मध्ये payment verification किंवा PDF delivery जोडलेली नाही. Payment provider कडून server-side confirmation मिळाल्यानंतरच download access द्या.</p>
      <Link className="button button-primary" href="/"><ArrowLeft size={17}/> मुख्य पानावर परत जा</Link>
    </div>
  </main>;
}
