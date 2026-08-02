export interface TimelineEntry {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

// Newest first — reverse-chronological, matching resume convention.
export const workExperience: TimelineEntry[] = [
  {
    role: 'Software Development Engineer',
    organization: 'Sych Inc',
    location: 'Karachi, Pakistan',
    period: 'February 2026 – Present',
    description:
      'Building Wrift AI, a platform for running, managing, and scaling AI models. Developing infrastructure for efficient model serving, optimizing GPU-based inference, resource allocation, and production performance for scalable AI deployments.',
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
    role: 'Junior Software Engineer & UI/UX Designer',
    organization: 'EZ MD Solutions',
    location: 'Islamabad, Pakistan',
    period: 'July 2024 – June 2025',
    description:
      'Designed and developed a web platform for a patient food delivery service, collaborating with the design team to build reusable components and intuitive interfaces — leading design research and coordinating with developers to deliver an enhanced experience for patients, vendors, and delivery teams.',
  },
  {
    role: 'Student Research Assistant',
    organization: 'Center for AI and Big Data (CAID), Namal University',
    location: 'Mianwali, Pakistan',
    period: 'January 2024 – February 2025',
    description:
      'Set up and maintained HPC lab infrastructure and supported day-to-day cluster operations, while helping organize spring schools on supercomputing and parallel programming for the wider research community.',
  },
];
