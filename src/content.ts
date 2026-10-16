// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Steven Famy',
  role: 'IT Operations, Infrastructure & Backend Engineer',
  location: 'Batam, Indonesia',
  tagline:
    '14+ years keeping businesses running, from network cables and servers to backend code and CI/CD pipelines. I take ownership of whole systems end to end, and I build just enough process to stop firefighting.',
  careerStart: '2011-11-01',
  email: 'stevenfamy@proton.me',
  linkedin: 'https://www.linkedin.com/in/steven-famy',
  languages: 'Indonesian (native) · English (professional)',
}

export const about = {
  intro:
    "I started in hands-on IT support in 2011 and grew into backend development, team leadership, and IT management. Today I work across the full stack of a business's technology: networks, servers, cloud, internal software, IoT devices, and the people who use them.",
  principles: [
    {
      title: 'End-to-end ownership',
      body: 'Hardware, network, backend, and end-user support, with few handoffs.',
    },
    {
      title: 'Structured pragmatism',
      body: 'SOPs, code review, and deployment approvals that reduce firefighting, not paperwork.',
    },
    {
      title: 'Calm triage',
      body: 'Restore service fast when it is reversible, diagnose first when production is at risk.',
    },
  ],
  growing: ['Kubernetes', 'Infrastructure as Code', 'Observability', 'Security'],
}

export type Job = {
  period: string
  role: string
  company: string
  place: string
  note?: string
  points: string[]
}

export const experience: Job[] = [
  {
    period: 'Sep 2025 – now',
    role: 'IT Programmer',
    company: 'Citra Buana Prakarsa',
    place: 'Batam',
    points: [
      'Build IoT systems on Arduino and ESP32 using MQTT and WebSockets, backed by Node.js and Golang services for real-time device orchestration',
      "Develop web applications with ReactJS, PHP, and Laravel for the company's holdings",
      'Commissioned a Guest Room Management System for a 5-star hotel pre-opening, coordinating vendors through go-live',
      'Designed professional audio paging systems combining live operators with automated multilingual TTS',
      'Set up staging and production Linux servers; handle network and IP CCTV diagnostics',
    ],
  },
  {
    period: 'Jul 2025',
    role: 'IT Manager',
    company: 'The Mesa Bali',
    place: 'Bali',
    note: 'Short-term engagement',
    points: [
      'Managed network infrastructure (routers, switches, firewalls) and on-prem plus cloud servers',
      'Ran backups and disaster recovery, cross-department IT support, and vendor procurement',
    ],
  },
  {
    period: 'Dec 2019 – May 2025',
    role: 'IT Manager · Team Leader · Back End Developer · Web Developer',
    company: 'GRIP Principle Pte. Ltd.',
    place: 'Batam',
    note: 'Overlapping roles: kept shipping backend code while taking on leadership and full IT management',
    points: [
      'IT Manager (2022–2025): company-wide IT for 40+ staff — servers, cloud, endpoint security, firewalls, backups, SOPs; DevOps on Jenkins, Docker, staging',
      'Back End Developer (2021–2024): RESTful APIs in Node.js on MySQL, Redis, and MongoDB, deployed with Docker',
      "Team Leader (2021–2022): led a cross-functional Scrum team; built the company's first CI/CD pipeline; owned code review, releases, onboarding",
      'Web Developer (2019–2021): full-stack PHP, JavaScript, and MySQL applications',
    ],
  },
  {
    period: 'Jul 2013 – Dec 2019',
    role: 'IT Staff & Web Developer',
    company: 'PT. BPR Dana Nagoya',
    place: 'Banking',
    points: [
      'Maintained all internal IT: networking, Windows Server, Microsoft SQL, CCTV, PABX, door access',
      'Built internal web applications in PHP and MySQL',
    ],
  },
  {
    period: 'Nov 2011 – Sep 2012',
    role: 'IT Support Technician',
    company: 'PT. SCS',
    place: 'Batam',
    points: ['On-site support, system setup, OS installation, and network cabling for client offices'],
  },
]

export type Project = { name: string; where: string; body: string; tags: string[] }

export const projects: Project[] = [
  {
    name: 'Jenkins CI/CD Pipeline',
    where: 'GRIP Principle',
    body: "The organisation's first CI/CD pipeline, built from scratch. PR-triggered builds, automated tests, and deploys to dev, staging, and production, with QA able to cherry-pick branches.",
    tags: ['Jenkins', 'Git', 'Docker', 'Linux'],
  },
  {
    name: 'Real-time IoT Orchestration',
    where: 'Citra Buana Prakarsa',
    body: 'Microcontroller devices talking to backend services in real time, from firmware to server.',
    tags: ['ESP32', 'Arduino', 'MQTT', 'WebSockets', 'Node.js', 'Go'],
  },
  {
    name: '5-Star Hotel GRMS',
    where: 'Hospitality',
    body: 'Installation and commissioning of a Guest Room Management System during pre-opening, coordinating vendors on integration accuracy and go-live readiness.',
    tags: ['GRMS', 'Vendor coordination'],
  },
  {
    name: 'Multilingual Audio Paging',
    where: 'Citra Buana Prakarsa',
    body: 'Paging across distributed audio networks, combining human-operated announcements with automated multilingual text-to-speech.',
    tags: ['Audio systems', 'TTS'],
  },
  {
    name: 'Backend API Services',
    where: 'GRIP Principle',
    body: 'RESTful services powering web and mobile apps, with caching and mixed SQL/NoSQL storage, containerised for deployment and testing.',
    tags: ['Node.js', 'MySQL', 'Redis', 'MongoDB', 'Docker'],
  },
  {
    name: 'Banking Internal Apps',
    where: 'BPR Dana Nagoya',
    body: "Internal business tools for a rural bank, built and maintained alongside the bank's full IT infrastructure.",
    tags: ['PHP', 'MySQL', 'Windows Server', 'MS SQL'],
  },
]

export const skills: Record<string, string[]> = {
  'Backend & Web': ['Node.js', 'JavaScript', 'PHP', 'Laravel', 'Golang', 'ReactJS', 'REST APIs', 'Payment gateways'],
  'Databases & Storage': ['MySQL', 'MS SQL Server', 'MongoDB', 'Redis', 'S3 / R2 / Spaces'],
  'DevOps & Infra': ['Docker', 'Jenkins', 'Git', 'Linux', 'Windows Server', 'AWS', 'DigitalOcean', 'Bash', 'PowerShell', 'Backup & DR'],
  'Network & Security': ['Routers', 'Switches', 'Firewalls', 'VPN', 'DNS', 'Load balancers', 'Endpoint security', 'Access control'],
  'IoT & Embedded': ['Arduino', 'ESP32', 'Raspberry Pi', 'MQTT', 'WebSockets'],
  'IT Operations': ['IP CCTV', 'PABX', 'Door access', 'POS', 'GRMS', 'Vendor mgmt', 'SOPs', 'User training'],
}

export const education = [
  { title: "Bachelor's, Information Systems", where: 'Universitas Putera Batam', period: '2018 – 2022' },
  { title: 'Computer and Network Engineering', where: 'SMK Batam Business School', period: '2009 – 2011' },
]

export const certifications = [
  'LFC108: Cybersecurity Essentials (Linux Foundation)',
  'Cloud Practitioner Essentials',
  'Level 1: Application Design and Delivery',
  'Back-End Fundamentals with JavaScript',
]
