import heroConference from "../assets/images/hero-conference.jpg";
import heroGraduation from "../assets/images/hero-graduation.jpg";
import heroGraduationTwo from "../assets/images/hero-graduation-2.jpg";
import heroGraduationThree from "../assets/images/hero-graduation-3.jpg";
import heroGraduationFour from "../assets/images/hero-graduation-4.jpg";

export type NavItem = {
  title: string;
  href: string;
};

export type NavColumn = {
  heading?: string;
  items: NavItem[];
};

export type NavGroup = {
  label: string;
  columns: NavColumn[];
};

export const navGroups: NavGroup[] = [
  {
    label: "About",
    columns: [
      {
        items: [
          { title: "About EPU", href: "/about" },
          { title: "History of EPU", href: "/history" },
          { title: "University President Speech", href: "/about" },
          { title: "University Board", href: "/about" },
          { title: "Administration", href: "/about" },
          { title: "Vision Statement", href: "/about" },
          { title: "Mission Statement", href: "/about" },
          { title: "Facts and Figures", href: "/about" },
          { title: "Strategic Plan", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    columns: [
      {
        heading: "Colleges",
        items: [
          { title: "Erbil Technical Engineering College", href: "/about" },
          { title: "Erbil Technical Health and Medical College", href: "/about" },
          { title: "Erbil Technical Administrative College", href: "/about" },
          { title: "Erbil Technology College", href: "/about" },
          { title: "Shaqlawa Technical College", href: "/about" },
          { title: "Soran Technical College", href: "/about" },
        ],
      },
      {
        heading: "Institutes",
        items: [
          { title: "Erbil Technical Administrative Institute", href: "/about" },
          { title: "Erbil Technical Medical institute", href: "/about" },
          { title: "Koya Technical Institute", href: "/about" },
          { title: "Mergasor Technical Institute", href: "/about" },
          { title: "Khabat Technical Institute", href: "/about" },
          { title: "Choman Technical Institute", href: "/about" },
        ],
      },
      {
        heading: "Scientific Research Center",
        items: [
          { title: "Pedagogy Center", href: "/about" },
          { title: "English Language Center", href: "/about" },
        ],
      },
      {
        heading: "Study Program",
        items: [
          { title: "Postgraduate Study", href: "/about" },
          { title: "Academic Calendar (2025 - 2026)", href: "/about" },
          { title: "Diploma", href: "/about" },
          { title: "Bachelor Degree", href: "/about" },
          { title: "High Diploma", href: "/about" },
          { title: "Master of Science", href: "/about" },
          { title: "Master of Arts", href: "/about" },
          { title: "PHD", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "Int.Relations",
    columns: [
      {
        items: [
          { title: "About", href: "/about" },
          { title: "Internationalisation Strategy", href: "/about" },
          { title: "Memorandums of Understanding (MOUs)", href: "/about" },
          { title: "Grant and Fundraising", href: "/about" },
          { title: "RISE Project", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "Students",
    columns: [
      {
        items: [
          { title: "Development Center (CDC) Career", href: "/about" },
          { title: "Student Center", href: "/about" },
          { title: "Accommodation", href: "/about" },
          { title: "Life on Campus", href: "/about" },
          { title: "Alumni Network", href: "/about" },
          { title: "Internship", href: "/about" },
          { title: "Student Union", href: "/about" },
          { title: "Student Feedback", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "Portals",
    columns: [
      {
        items: [
          { title: "ECTS Bologna Process", href: "/about" },
          { title: "Moodle", href: "/about" },
          { title: "Student Feedback", href: "/about" },
          { title: "Alumni", href: "/about" },
          { title: "Academic Staff", href: "/about" },
          { title: "RSR", href: "/about" },
        ],
      },
      {
        items: [
          { title: "International Office", href: "/about" },
          { title: "Google Scholar", href: "https://scholar.google.com" },
          { title: "Web Mail", href: "/about" },
          { title: "E-System", href: "/about" },
          { title: "Statistics", href: "/about" },
          { title: "Library", href: "/about" },
          { title: "Tutorials", href: "/about" },
        ],
      },
      {
        items: [
          { title: "Conferences", href: "/about" },
          { title: "ICSSD-2024", href: "/about" },
        ],
      },
    ],
  },
  {
    label: "Journals",
    columns: [
      {
        items: [
          { title: "Polytechnic Journal", href: "/about" },
          { title: "Mitanni Journal", href: "/about" },
        ],
      },
    ],
  },
];

export const heroSlides = [
  {
    title: "Graduation moments that feel connected to the university itself.",
    subtitle: "A public homepage should look like EPU, not a generic template. This hero now uses real event imagery tied to the university.",
    image: heroGraduation,
  },
  {
    title: "Conference, research, and public visibility can start from one front page.",
    subtitle: "Use the homepage to surface academic events, engineering conferences, and university activity without flattening everything into simple links.",
    image: heroConference,
  },
  {
    title: "Three or more slides can rotate here automatically without changing the hero layout.",
    subtitle: "This third example slide is included to show the homepage working as a real rotating image hero instead of a single static banner.",
    image: heroGraduationTwo,
  },
  {
    title: "Additional event slides can be added without redesigning the hero.",
    subtitle: "This fourth example confirms the hero keeps rotating across a larger image set.",
    image: heroGraduationThree,
  },
  {
    title: "The homepage hero can keep cycling through university imagery over time.",
    subtitle: "This fifth example shows the slider ready for more photos whenever you add them.",
    image: heroGraduationFour,
  },
];

export const featureCards = [
  {
    title: "Admission",
    description:
      "The University of EPU offers full-time undergraduate & postgraduate departments with excellent facilities to complete the learning experience",
    href: "/about",
  },
  {
    title: "Research Centre",
    description:
      "The Facility for Advanced Research Study in the Versatile Sciences is where brilliant minds tackle today's most pressing concerns.",
    href: "/about",
  },
  {
    title: "International Relations Office",
    description:
      "EPU offers a plethora of dynamic and engaging academic linkages with various international Universities across the globe.",
    href: "/about",
  },
];

export const directoryItems = [
  { title: "Erbil Technical Engineering College", href: "/about" },
  { title: "Erbil Technical Health and Medical College", href: "/about" },
  { title: "Erbil Technical Administrative College", href: "/about" },
  { title: "Erbil Technology College", href: "/about" },
  { title: "Shaqlawa Technical College", href: "/about" },
  { title: "Soran Technical College", href: "/about" },
  { title: "Erbil Technical Administrative Institute", href: "/about" },
  { title: "Erbil Technical Medical Institute", href: "/about" },
  { title: "Koya Technical Institute", href: "/about" },
  { title: "Mergasor Technical Institute", href: "/about" },
  { title: "Khabat Technical Institute", href: "/about" },
  { title: "Choman Technical Institute", href: "/about" },
];

export const newsItems = [
  {
    date: "31 March 2026",
    author: "Pawan mohamed",
    category: "presidency",
    title: "The manager of our university's Career Development Center participated in a training course at the Job Search Club",
    excerpt:
      "Within the continuous efforts to develop the abilities of youth and graduates, the city of Erbil hosted a training course for trainers and facilitators.",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "10 March 2026",
    author: "Pawan mohamed",
    category: "presidency",
    title: "The director of our university's Career Development Center participated in a workshop on establishing the Sector Councils",
    excerpt:
      "On February 25 and 26, 2026, at Ankawa Royal Hotel in Erbil, the university joined a workshop focused on the green and digital economy.",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "2 March 2026",
    author: "Pawan mohamed",
    category: "presidency",
    title: "An international workshop connected the research culture in cooperation between two British universities",
    excerpt:
      "Within the framework of the internationalization of our university, the workshop focused on cross-border research collaboration.",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

export const stats = [
  { value: "37+", label: "Different Specialists" },
  { value: "629+", label: "Qualified Teachers" },
  { value: "15000+", label: "graduate students annually" },
  { value: "2329+", label: "Staff Members" },
];

export const partners = [
  { name: "EPU", href: "https://epu.edu.iq", domain: "epu.edu.iq" },
  { name: "Erasmus+", href: "https://erasmus-plus.ec.europa.eu", domain: "ec.europa.eu" },
  { name: "TU Freiberg", href: "https://tu-freiberg.de", domain: "tu-freiberg.de" },
  { name: "AARU", href: "https://www.aaru.edu.jo", domain: "aaru.edu.jo" },
  { name: "TIU", href: "https://tiu.edu.iq", domain: "tiu.edu.iq" },
  { name: "HAMK", href: "https://www.hamk.fi", domain: "hamk.fi" },
];
