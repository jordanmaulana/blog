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
  location: "Malang, East Java, Indonesia",
  summary:
    "Eight years of building software, mostly mobile. Flutter is home, but I've done plenty of full-stack work with Django, React, and other tools along the way. I've led mobile teams, shipped 20+ production apps, and helped junior developers grow into confident engineers. \"Creator\" in my title? Not only about content creation. I share the journey, and build things that I use myself.",
} as const;

export const portfolioUrl = "https://drive.google.com/file/d/1vTXu9jBJf_9Q6rUq1loilNIl-VDc6EDO/view?usp=sharing";

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "AlphaX Inc.",
    type: "Full-time",
    start: "Dec 2025",
    end: "Present",
    location: "Japan · Remote",
    bullets: [
      "Building a deep investment analysis platform for evaluating potential startups.",
      "Modernizing a legacy codebase for a major global financial institution, collaborating with engineers across multiple countries.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Elite Digital",
    type: "Full-time",
    start: "Aug 2025",
    end: "Feb 2026",
    location: "Czechia · Remote",
    bullets: [
      "Untangled and optimized an ultra-complex n8n automation workflow. Cut failure points and sped up execution.",
      "Built Cursor-powered Laravel apps, some leveraging GitHub Spec Kit for rapid prototyping.",
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
      "Built and maintained apps with Django and React. Kept systems stable while shipping new features.",
      "Became the team's go-to person for business logic context. If nobody else remembered why something worked that way, I did.",
      "Translated technical trade-offs into plain language so product decisions moved faster.",
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
      "Led a mobile team through planning, priorities, and delivery.",
      "Mentored junior developers until they were confidently shipping features with fewer bugs.",
      "Set clear priorities so the team focused on what mattered most.",
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
      "Helped TwisCode become East Indonesia's leading mobile dev agency. Led teams that shipped 20+ apps.",
      "Guided mobile developers through debugging sessions, feature delivery, and sprint planning.",
      "Worked with PMs to balance resources, deadlines, and client expectations.",
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
      "Built and maintained POS applications for small and medium businesses.",
      "Worked directly with stakeholders to design features around real user workflows.",
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
    items: ["Dart", "TypeScript", "Python", "Kotlin", "Java"],
  },
  {
    label: "Frameworks",
    items: ["Flutter", "React.js", "Next.js", "Astro", "Django", "Django REST Framework", "Laravel", "Tailwind CSS"],
  },
  {
    label: "Platforms & Tools",
    items: ["Firebase", "Cloud Firestore", "REST APIs", "n8n", "Android Studio", "Git", "GitHub", "PostgreSQL", "Claude Code"],
  },
  {
    label: "Leadership",
    items: [
      "Team Mentoring",
      "Team Management",
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
    ],
  },
];
