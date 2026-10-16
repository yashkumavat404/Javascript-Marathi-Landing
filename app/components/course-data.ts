export type DemoCourse = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  level: "Beginner" | "Intermediate";
  language: "Marathi" | "English";
  duration: string;
  format: string;
  description: string;
  color: string;
  lessons: string[];
  outcomes: string[];
  demoOnly?: boolean;
};

export const courses: DemoCourse[] = [
  {
    slug: "javascript-marathi",
    title: "JavaScript for Beginners — Marathi",
    subtitle: "JavaScript, सोप्या मराठीत",
    category: "JavaScript",
    level: "Beginner",
    language: "Marathi",
    duration: "Self-paced",
    format: "Textbook + demo lessons",
    description: "Variables, conditions, loops, functions आणि browser interaction यांसारख्या मूलभूत संकल्पना मराठीत समजून घ्या.",
    color: "blue",
    lessons: [
      "Programming ची ओळख",
      "JavaScript कुठे चालते?",
      "Variables आणि data types",
      "Operators आणि conditions",
      "Loops",
      "Arrays आणि objects",
      "Functions",
      "DOM आणि events",
      "Forms आणि validation",
      "Mini project: Digital clock",
    ],
    outcomes: ["JavaScript syntax वाचता येईल", "Variables, conditions आणि loops वापरता येतील", "Simple browser interaction समजेल", "लहान practice projects सुरू करता येतील"],
  },
  {
    slug: "html-css-foundations",
    title: "HTML & CSS Foundations",
    subtitle: "वेबपेजची रचना आणि styling",
    category: "Web Development",
    level: "Beginner",
    language: "English",
    duration: "Demo path · 3 modules",
    format: "Illustrative course",
    description: "HTML structure, semantic elements, layouts आणि responsive styling साठी दाखवलेला sample learning path.",
    color: "orange",
    lessons: ["HTML structure", "Semantic elements", "CSS selectors", "Flexbox basics", "Responsive layouts"],
    outcomes: ["Page structure समजणे", "Basic styles तयार करणे", "Responsive layout concepts शिकणे"],
    demoOnly: true,
  },
  {
    slug: "frontend-fundamentals",
    title: "Frontend Development Basics",
    subtitle: "From page to interaction",
    category: "Frontend Development",
    level: "Intermediate",
    language: "English",
    duration: "Demo path · 4 modules",
    format: "Illustrative course",
    description: "Browser rendering, components, forms आणि UI state या विषयांसाठी sample course path.",
    color: "purple",
    lessons: ["How browsers render pages", "Reusable UI components", "Forms and validation", "State and interactions"],
    outcomes: ["Frontend flow समजणे", "Reusable UI ची कल्पना", "Accessible form basics शिकणे"],
    demoOnly: true,
  },
  {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals",
    subtitle: "Logic, data आणि problem solving",
    category: "Programming Fundamentals",
    level: "Beginner",
    language: "Marathi",
    duration: "Demo path · 3 modules",
    format: "Illustrative course",
    description: "Algorithmic thinking, variables, decisions आणि repetition या संकल्पनांसाठी starter path.",
    color: "green",
    lessons: ["Algorithm म्हणजे काय?", "Variables and values", "Conditions and loops"],
    outcomes: ["Problem लहान भागात विभागणे", "Basic logical flow समजणे", "Code examples वाचणे"],
    demoOnly: true,
  },
  {
    slug: "project-based-learning",
    title: "Project-Based JavaScript",
    subtitle: "छोट्या projects मधून सराव",
    category: "Project-Based Learning",
    level: "Intermediate",
    language: "Marathi",
    duration: "Demo path · 4 projects",
    format: "Illustrative project cards",
    description: "To-do list, quiz आणि digital clock सारखे छोटे projects plan करण्यासाठी प्रस्तावित learning path.",
    color: "pink",
    lessons: ["Calculator", "To-do list", "Quiz app", "Digital clock"],
    outcomes: ["Features मध्ये project विभागणे", "Events वापरणे", "Basic UI logic जोडणे"],
    demoOnly: true,
  },
];

export const allCategories = ["All categories", "JavaScript", "Web Development", "Frontend Development", "Programming Fundamentals", "Project-Based Learning"];
export const lessonContent: Record<string, { title: string; intro: string; code: string; explanation: string; exercise: string }> = {
  "programming-chi-olakh": {
    title: "Programming ची ओळख",
    intro: "Programming म्हणजे संगणकाला एखादे काम कसे करायचे हे स्पष्ट सूचना देणे. या demo lesson मध्ये आपण JavaScript च्या साध्या output पासून सुरुवात करू.",
    code: 'const message = "नमस्कार, JavaScript!";\nconsole.log(message);',
    explanation: "const नवीन binding तयार करते. message मध्ये text value ठेवली आहे. console.log() ती value developer console मध्ये दाखवते.",
    exercise: "message मधील text बदलून तुमचे नाव किंवा आवडता संदेश दाखवा.",
  },
  "variables-data-types": {
    title: "Variables आणि data types",
    intro: "Variable म्हणजे value ला नाव देण्याची पद्धत. JavaScript मध्ये const आणि let ने variables तयार करता येतात.",
    code: 'const learner = "विद्यार्थी";\nlet lessonsCompleted = 0;\nlessonsCompleted = lessonsCompleted + 1;\nconsole.log(learner, lessonsCompleted);',
    explanation: "const binding पुन्हा assign करता येत नाही; let binding update करता येते. Strings text साठी आणि numbers संख्यांसाठी वापरले जातात.",
    exercise: "तुमच्या आवडत्या programming language साठी string variable आणि शिकलेल्या धड्यांसाठी number variable तयार करा.",
  },
  "conditions": {
    title: "Operators आणि conditions",
    intro: "Conditions वापरून code एखाद्या अटीप्रमाणे वेगवेगळी कृती करू शकतो.",
    code: 'const score = 72;\nif (score >= 60) {\n  console.log("छान! पुढच्या टप्प्यावर जा.");\n} else {\n  console.log("आणखी सराव करूया.");\n}',
    explanation: ">= हा comparison operator आहे. if block अट true असल्यास चालतो; अन्यथा else block चालतो.",
    exercise: "score बदलून 60 च्या खाली आणि वरचे values तपासा.",
  },
  "loops": {
    title: "Loops — पुन्हा पुन्हा करा",
    intro: "एखादी कृती अनेक वेळा करायची असेल तर loop लिहून repeated code कमी करता येतो.",
    code: 'for (let step = 1; step <= 5; step += 1) {\n  console.log("सराव क्रमांक:", step);\n}',
    explanation: "for loop मध्ये initialization, condition आणि update हे तीन भाग असतात. step <= 5 असेपर्यंत loop चालतो.",
    exercise: "loop ला 10 पर्यंत चालवा आणि प्रत्येक वेळी संख्या print करा.",
  },
  "functions": {
    title: "Functions",
    intro: "Function म्हणजे पुन्हा वापरता येणारा code block. तो input घेऊ शकतो आणि result परत देऊ शकतो.",
    code: 'function greet(name) {\n  return `नमस्कार, ${name}!`;\n}\nconsole.log(greet("मित्रा"));',
    explanation: "name हा parameter आहे. return function मधील result परत देतो. greet वेगवेगळ्या नावांसोबत पुन्हा वापरता येतो.",
    exercise: "दोन numbers घेऊन त्यांची बेरीज परत करणारे function तयार करा.",
  },
  "arrays-objects": {
    title: "Arrays आणि objects",
    intro: "Array मध्ये values चा क्रमबद्ध समूह ठेवता येतो. Object मध्ये values ला property names दिली जातात.",
    code: 'const topics = ["variables", "loops", "functions"];\nconst learner = { name: "Mira", level: "beginner" };\nconsole.log(topics[0]);\nconsole.log(learner.name);',
    explanation: "Array indexing शून्यापासून सुरू होते. Object मधील property dot notation वापरून वाचू शकतो.",
    exercise: "तीन आवडते topics ठेवणारा array आणि learner object तयार करा.",
  },
  "dom-events": {
    title: "DOM आणि events",
    intro: "DOM browser मधील HTML elements शी JavaScript द्वारे संवाद साधण्याची सुविधा देते. Events user action झाल्यावर code चालवतात.",
    code: 'const button = document.querySelector("button");\nbutton?.addEventListener("click", () => {\n  console.log("Button click झाला!");\n});',
    explanation: "querySelector पहिला matching element शोधतो. addEventListener click झाल्यावर callback function चालवतो. हा code HTML button असलेल्या page मध्ये वापरा.",
    exercise: "एका button click वर page मधील message बदलणारी कल्पना लिहा.",
  },
  "digital-clock": {
    title: "Mini project: Digital clock",
    intro: "या project outline मध्ये दर सेकंदाला current time update करण्याची कल्पना पाहू. खालील snippet browser console मध्ये current time दाखवतो.",
    code: 'const showTime = () => {\n  console.log(new Date().toLocaleTimeString());\n};\nshowTime();',
    explanation: "new Date() current date-time object तयार करते. toLocaleTimeString() स्थानिक स्वरूपात वेळ दाखवते. पूर्ण UI project या demo मध्ये प्रस्तावित सराव आहे.",
    exercise: "setInterval वापरून दर सेकंदाला वेळ update करण्यासाठी कोणता बदल कराल ते ठरवा.",
  },
};