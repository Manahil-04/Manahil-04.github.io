export interface TimelineEntry {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

export const workExperience: TimelineEntry[] = [
  {
    role: 'Junior Software Engineer & UI/UX Designer',
    organization: 'EZ MD Solutions',
    location: 'Islamabad, Pakistan',
    period: 'July 2024 – June 2025',
    description:
      'Designed and developed a web platform for a patient food delivery service, collaborating with the design team to build reusable components and intuitive interfaces — leading design research and coordinating with developers to deliver an enhanced experience for patients, vendors, and delivery teams.',
  },
  {
    role: 'AI Engineer',
    organization: 'Phunware',
    location: 'California, USA',
    period: 'June 2025 – December 2025',
    description:
      'Developed an AI-powered healthcare assistant system by building real-time voice agents, agentic AI workflows for patient triage and scheduling, and scalable LiveKit-based communication, reducing manual staff workload by 70%.',
  },
  {
    role: 'Software Development Engineer',
    organization: 'Sych Inc',
    location: 'Karachi, Pakistan',
    period: 'February 2026 – Present',
    description:
      'Building Wrift AI, a platform for running, managing, and scaling AI models. Developing infrastructure for efficient model serving, optimizing GPU-based inference, resource allocation, and production performance for scalable AI deployments.',
  },
];

export const researchAndLeadership: TimelineEntry[] = [
  {
    role: 'Student Research Assistant',
    organization: 'Center for AI and Big Data, Namal University',
    location: 'Mianwali, Pakistan',
    period: 'January 2024 – February 2025',
    description:
      'Worked on configuring an HPC cluster, devising a RISC-V heterogeneous cluster architecture, and providing assistance in organizing spring schools for supercomputing and parallel programming.',
  },
  {
    role: 'Campus Ambassador',
    organization: 'Arbisoft',
    location: 'Remote',
    period: 'November 2023 – July 2024',
    description:
      "Led campus initiatives, organized events and workshops, connecting students with Arbisoft's tech solutions.",
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor's of Computer Science",
    institution: 'Namal University',
    period: 'November 2021 – July 2025',
    description:
      'Pursued a BSCS degree, delving into software engineering, machine learning, and cybersecurity, with research work focused on supervised learning and High-Performance Computing (HPC).',
  },
  {
    degree: 'Machine Learning Specialization',
    institution: 'DeepLearning.AI (Coursera)',
    period: 'November 2023',
    description:
      'Completed a rigorous ML specialization covering advanced neural networks, CNNs, and sequence models; demonstrated proficiency in implementation and project structuring.',
  },
];
