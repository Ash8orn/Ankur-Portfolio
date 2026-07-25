// ============================================================================
// SINGLE SOURCE OF TRUTH
// Edit this file to update the whole site. Fill in the links marked "TODO".
// ============================================================================

export type Social = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
};

export type Stat = { value: string; label: string };
export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};
export type Project = {
  name: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
};
export type Cve = { id: string; title: string; product?: string; link?: string };
export type HallOfFame = { org: string; link?: string };
export type Certification = { name: string; issuer: string; link?: string; image?: string };
export type Award = {
  title: string;
  org?: string;
  date?: string;
  note?: string;
  link?: string;
  highlight?: boolean;
};
export type Recognition = { title: string; org: string; note?: string; link?: string };
export type Education = {
  degree: string;
  school: string;
  university?: string;
  period?: string;
  note?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  resumeFile: string;
  available: boolean;
  socials: Social;
  languages: string[];
  about: string;
  stats: Stat[];
  experience: Experience[];
  skills: Record<string, string[]>;
  projects: Project[];
  cves: Cve[];
  hallOfFame: HallOfFame[];
  recognitions: Recognition[];
  certifications: Certification[];
  awards: Award[];
  education: Education[];
};

export const resume: ResumeData = {
  name: "Ankur Bakre",
  title: "Penetration Tester & Security Researcher",
  tagline:
    "Penetration tester with 4.5+ years across application security, red teaming, and internal security assessments — hands-on with web apps, APIs, and thick clients.",
  location: "Pune, Maharashtra, India",
  email: "bakreankur@gmail.com",
  phone: "+91 90759 13655",
  resumeFile: "/Ankur_Bakre_Resume.pdf",
  available: true,

  socials: {
    linkedin: "https://www.linkedin.com/in/ankur-bakre-99320316b",
    github: "", // TODO: add your GitHub URL
    twitter: "", // TODO: optional
    website: "", // TODO: optional
  } satisfies Social,

  languages: ["English — Professional", "Hindi — Professional", "Marathi — Native"],

  about:
    "Penetration tester with 4.5 years of experience across web applications, APIs, and thick clients. I focus on identifying and exploiting real vulnerabilities, delivering clear and actionable reports, and working closely with development teams to drive remediation. Hands-on experience with enterprise security assessments and responsible vulnerability disclosure.",

  stats: [
    { value: "4.5+", label: "Years in offensive security" },
    { value: "50+", label: "Apps & APIs assessed" },
    { value: "30+", label: "Critical / High vulns found" },
    { value: "6", label: "CVEs discovered" },
    { value: "2x", label: "MSRC Blue Hat CTF winner" },
    { value: "10+", label: "Hall of Fame credits" },
  ] satisfies Stat[],

  experience: [
    {
      role: "Security Test Engineer",
      company: "Amdocs Limited",
      period: "Oct 2023 - Present",
      bullets: [
        "Lead end-to-end penetration testing across 40+ applications and APIs for enterprise telecom clients, uncovering 20+ critical and high-severity vulnerabilities ahead of production release.",
        "Identified a critical AWS IMDS credential exposure vulnerability (over-privileged EC2 instance role) on a client-managed cloud instance, preventing potential lateral movement and account compromise.",
        "Blend automated DAST scanning with manual exploitation to catch business-logic flaws that scanners alone miss.",
        "Cover web, API, thick client, and network attack surfaces with Burp Suite, Nessus, and manual techniques tailored to each engagement.",
        "Embed security checks into CI/CD pipelines, shifting vulnerability detection earlier into the development lifecycle.",
        "Translate findings into risk-prioritized reports, working directly with engineering and client stakeholders through remediation closure.",
      ],
    },
    {
      role: "Engineer, Pentest Analyst",
      company: "Vertiv",
      period: "Jul 2023 - Oct 2023",
      bullets: [
        "Conducted penetration testing across web applications, APIs, and network environments.",
        "Performed thick client testing and basic firmware analysis to identify security gaps.",
        "Validated vulnerabilities and supported prioritization and remediation efforts in a fast-paced engineering environment.",
      ],
    },
    {
      role: "Information Security Analyst (SOC)",
      company: "Persistent Systems Limited",
      period: "Aug 2021 - Jun 2023",
      bullets: [
        "Delivered 20+ VAPT engagements across web, mobile, API, and network environments, uncovering 20+ critical and high-severity vulnerabilities mapped to OWASP Top 10 with clear remediation guidance for development teams.",
        "Ran mobile application security assessments using Drozer, ADB, Jadx, APKTool, MobSF, Frida, and Objection.",
        "Simulated real-world attack scenarios using Cymulate (Breach & Attack Simulation) across endpoints, email gateway, and web security controls.",
        "Monitored security and threat events using SIEM platforms including IBM QRadar, Recorded Future, and Trend Micro XDR.",
      ],
    },
  ] satisfies Experience[],

  skills: {
    "Penetration Testing": [
      "Web Applications",
      "APIs",
      "Thick Client",
      "Active Directory",
      "Mobile Applications",
    ],
    "Offensive & Red Team": [
      "Red Teaming",
      "Vulnerability Assessment & Exploitation",
      "DAST",
      "AI-assisted Security Analysis",
    ],
    Methodologies: ["OWASP Web Top 10", "OWASP API Top 10", "OWASP LLM Top 10"],
    "Core Tools": [
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Netcat",
      "Wireshark",
      "Nessus",
      "Sysinternals Suite",
      "promptfoo",
      "Garak",
    ],
    "Active Directory": [
      "BloodHound",
      "Impacket",
      "Mimikatz",
      "Responder",
      "CrackMapExec",
      "Kerbrute",
      "LDAPSearch",
    ],
    "Mobile & BAS (Breach & Attack Simulation)": [
      "Drozer",
      "ADB",
      "Jadx",
      "APKTool",
      "MobSF",
      "Frida",
      "Objection",
      "Cymulate (BAS)",
    ],
    "SIEM / Monitoring": ["QRadar", "Recorded Future", "Trend Micro XDR"],
  } as Record<string, string[]>,

  projects: [
    {
      name: "ELISA",
      period: "Jan 2026 - Feb 2026",
      description:
        "Performed penetration testing on mainframe applications; managed the full vulnerability lifecycle including tracking, retesting, and closure reporting.",
      tags: ["Mainframe", "VAPT", "Vuln Lifecycle", "Reporting"],
    },
    {
      name: "PLDT AIA EngageOne - One Cloud",
      period: "May 2025 - Nov 2025",
      description:
        "Conducted web application and API penetration testing; managed the defect lifecycle including retesting and closure verification.",
      tags: ["Web", "API", "Cloud", "Defect Lifecycle"],
    },
    {
      name: "PLDT SMART - One Cloud",
      period: "Oct 2023 - 2025",
      description:
        "Performed web application penetration testing for applications migrating to cloud environments; defined the testing approach and reporting standards with the client.",
      tags: ["Web", "Cloud Migration", "Reporting"],
    },
  ] satisfies Project[],

  cves: [
    {
      id: "CVE-2022-1062",
      title: "Stored XSS",
      product: "th23 Social",
      link: "https://wpscan.com/vulnerability/e770ba87-95d2-40c9-89cc-5d7390e9cbb0",
    },
    {
      id: "CVE-2022-1063",
      title: "Stored XSS",
      product: "Thank Me Later",
      link: "https://wpscan.com/vulnerability/f90c528b-8c3a-4f9a-aa36-099c24abe082",
    },
    {
      id: "CVE-2022-1088",
      title: "Stored XSS",
      product: "Page Security and Membership",
      link: "https://wpscan.com/vulnerability/e86d456d-7a54-43e8-acf1-0b6a0a8bb41b",
    },
    {
      id: "CVE-2022-1089",
      title: "Stored XSS",
      product: "Bulk Edit and Create User Profiles",
      link: "https://wpscan.com/vulnerability/75a9fd23-7fa9-4cb1-a55b-ec5deae5d6fa",
    },
    {
      id: "CVE-2022-1094",
      title: "Stored XSS",
      product: "Amr Users",
      link: "https://wpscan.com/vulnerability/3c03816b-e381-481c-b9f5-63d0c24ff329",
    },
    {
      id: "CVE-2022-1202",
      title: "CSV Injection",
      product: "WP-CRM",
      link: "https://wpscan.com/vulnerability/53c8190c-baef-4807-970b-f01ab440576a/",
    },
  ] satisfies Cve[],

  hallOfFame: [
    { org: "Apple" },
    { org: "Dell" },
    { org: "CrowdStrike" },
    { org: "Airmeet" },
    { org: "YouNoodle" },
    { org: "Courier Manager" },
    { org: "Remote" },
    { org: "Telekom" },
    { org: "Inflectra" },
    { org: "Canva" },
    { org: "Mailgun" },
    { org: "Redox" },
    { org: "Square" },
    { org: "TripAdvisor" },
    { org: "Cybrary" },
    { org: "SoundCloud" },
    { org: "Atlassian" },
    { org: "BlueJeans" },
    { org: "InVision" },
    { org: "Indeed" },
    { org: "Pantheon" },
    { org: "Socrata" },
    { org: "SEEK" },
    { org: "Western Union Kudos" },
    { org: "Empire Flippers" },
    // Add proof links as `{ org: "Name", link: "https://..." }`
  ] satisfies HallOfFame[],

  recognitions: [
    {
      title: "MSRC Researcher — Special Mentions",
      org: "Microsoft Security Response Center",
      note: "Recognized in the special mentions of the Microsoft Security Response Center (MSRC) researcher program.",
      link: "https://msrc.microsoft.com/special-mention",
    },
    {
      title: "NCIIPC Acknowledgement",
      org: "Government of India",
      note: "Acknowledged by the Govt. of India for reporting vulnerabilities in Indian Govt. websites through NCIIPC.",
      // link: "TODO",
    },
  ] satisfies Recognition[],

  certifications: [
    {
      name: "Practical Network Penetration Tester (PNPT)",
      issuer: "TCM Security",
      image: "/certs/pnpt.png",
      link: "https://certified.tcm-sec.com/863187b1-8de8-412b-8055-4dd0e365a3b2#acc.i3PhEKlp",
    },
    {
      name: "Practical Junior Penetration Tester (PJPT)",
      issuer: "TCM Security",
      image: "/certs/pjpt.png",
      link: "https://certified.tcm-sec.com/a601ffcf-11ea-4afc-8a54-fdbcb1e38688#acc.gA0CPnxj",
    },
    {
      name: "Certified Ethical Hacker (CEH Master)",
      issuer: "EC-Council",
      image: "/certs/ceh-master.png",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=PtYa9FnQ7X3e8eUfIB39thb1KDaddnhHe+8Vnutt+vY=",
    },
  ] satisfies Certification[],

  awards: [
    {
      title: "Winner — MSRC Phishing CTF",
      org: "Microsoft BlueHat ASIA",
      date: "Nov 2025 · Bengaluru",
      highlight: true,
    },
    {
      title: "Winner — MSRC Phishing CTF",
      org: "Microsoft BlueHat",
      date: "May 2025 · Hyderabad",
      highlight: true,
    },
    {
      title: "High Five Award (x2)",
      org: "Persistent Systems — from CISO",
      note: "For CERT-In assessment (Stage 3) and VAPT contributions.",
    },
    {
      title: "Certificate of Recognition",
      org: "Amdocs",
      note: "For delivering a critical security project.",
    },
    {
      title: "Professionalism & Excellence Award",
      org: "One Cloud Program",
      note: "Recognized as Performance Testing Orchestrator.",
    },
  ] satisfies Award[],

  education: [
    {
      degree: "Bachelor of Engineering — Information Technology",
      school: "International Institute of Information Technology (I2IT), Pune",
      university: "Savitribai Phule Pune University",
    },
  ] satisfies Education[],
};

export type Resume = typeof resume;
