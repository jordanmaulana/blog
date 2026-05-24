export type Job = {
  role: string;
  company: string;
  type: string;
  start: string;
  end: string;
  location: string;
  bullets?: string[];
};

export type Cert = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  note?: string;
};

export const profile = {
  name: "Jordan Maulana",
  role: "Software Engineer | Creator",
  location: "Gresik, East Java, Indonesia",
  summary:
    "Seasoned Software Engineer with 8+ years of experience in Flutter and full-stack development. Proven expertise in leading mobile teams, delivering scalable apps, and mentoring developers. Strong track record of enhancing development efficiency and launching dozens of successful applications. Adept at bridging technical and business needs, ensuring alignment between features and organizational goals. Passionate about knowledge sharing and building learning cultures in tech communities.",
} as const;

export const portfolioUrl = "https://drive.google.com/file/d/1vTXu9jBJf_9Q6rUq1loilNIl-VDc6EDO/view?usp=sharing";

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "AlphaX Inc.",
    type: "Full-time",
    start: "Dec 2025",
    end: "Present",
    location: "Remote",
  },
  {
    role: "Software Engineer",
    company: "Elite Digital",
    type: "Part-time",
    start: "Dec 2025",
    end: "Feb 2026",
    location: "Czechia · Remote",
  },
  {
    role: "Software Engineer",
    company: "Elite Digital",
    type: "Full-time",
    start: "Aug 2025",
    end: "Dec 2025",
    location: "Czechia · Remote",
    bullets: [
      "Refactored and optimized ultra-complex n8n workflow.",
      "Researched and developed Cursor-powered Laravel apps; some leveraging GitHub Spec Kit.",
    ],
  },
  {
    role: "Career break — professional development",
    company: "Self",
    type: "Break",
    start: "Jul 2025",
    end: "Aug 2025",
    location: "Indonesia",
    bullets: ["Deep dive into AI, Django, and n8n."],
  },
  {
    role: "Software Engineer",
    company: "Adgo",
    type: "Full-time",
    start: "Jul 2024",
    end: "Jun 2025",
    location: "Singapore · Remote",
    bullets: [
      "Built and maintained apps with Django (Python) and ReactJS — kept systems stable while shipping new features.",
      "Became the team's unofficial historian of business logic.",
      "Bridged technical trade-offs and product decisions in plain language.",
    ],
  },
  {
    role: "Lead Flutter Developer",
    company: "Adgo",
    type: "Full-time",
    start: "May 2021",
    end: "Jul 2024",
    location: "Singapore",
    bullets: [
      "Orchestrated mobile projects to meet deadlines.",
      "Mentored junior developers until they were confidently shipping features with fewer bugs.",
      "Set clear priorities so the team focused on the highest-impact work.",
      "Shipped 5+ production Flutter apps.",
    ],
  },
  {
    role: "Lead Flutter Developer",
    company: "TwisCode Pte. Ltd.",
    type: "Contract",
    start: "Jul 2019",
    end: "May 2021",
    location: "Surabaya, East Java, Indonesia",
    bullets: [
      "Helped TwisCode build a reputation as East Indonesia's leading mobile dev agency — led teams to ship 20+ apps.",
      "Guided a squad of mobile developers through debugging, feature delivery, and scheduling.",
      "Partnered with PMs to balance resources, deadlines, and client expectations.",
    ],
  },
  {
    role: "Mobile Application Developer",
    company: "PT. Sinergi Informatika Semen Indonesia (SISI)",
    type: "Freelance",
    start: "Oct 2017",
    end: "Jul 2019",
    location: "Gresik, East Java, Indonesia",
    bullets: [
      "Designed and maintained POS applications for SMEs.",
      "Collaborated with stakeholders on user-focused features.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Politeknik Elektronika Negeri Surabaya",
    degree: "Bachelor of Applied Science (BASc) — Computer Engineering",
    period: "2013 – 2017",
  },
  {
    school: "Institut Teknologi Sepuluh Nopember Surabaya",
    degree: "Artificial Intelligence",
    period: "2018",
    note: "2 months scholarship — Kementrian Komunikasi dan Informatika.",
  },
];

export const certifications: Cert[] = [
  { name: "8 Weeks Fullstack JavaScript Immersive", issuer: "Devscale Indonesia", issued: "Jan 2024" },
  {
    name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    issued: "Dec 2021",
    expires: "Dec 2024",
    credentialId: "N9ZOEL33YXG5",
  },
  { name: "Menjadi Azure Cloud Developer", issuer: "Dicoding Academy", issued: "Mar 2019", expires: "Mar 2022" },
  { name: "Kotlin Android Developer Expert", issuer: "Dicoding Academy", issued: "Mar 2019", expires: "Mar 2022" },
  { name: "Android Developer Expert", issuer: "Dicoding Academy", issued: "Jan 2019", expires: "Feb 2022" },
  { name: "Android Kejar Beginner", issuer: "Indonesia Android Kejar", issued: "Jun 2017" },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Dart", "TypeScript", "Python", "Kotlin", "Java", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Flutter", "React.js", "Next.js", "Django", "Django REST Framework", "Laravel", "Tailwind CSS"],
  },
  {
    label: "Platforms & Tools",
    items: ["Firebase", "Cloud Firestore", "REST APIs", "n8n", "Android Studio", "Git", "GitHub", "MySQL"],
  },
  {
    label: "Leadership",
    items: [
      "Team Mentoring",
      "Team Management",
      "Leadership",
      "Collaborative Problem Solving",
      "Client Communication",
      "Project Management",
    ],
  },
  {
    label: "Other",
    items: [
      "Generative AI Tools",
      "Workflow Analysis",
      "Workflow Management",
      "Machine Learning",
      "Web3",
      "Raspberry Pi",
      "Arduino",
    ],
  },
];
