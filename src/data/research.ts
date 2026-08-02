export interface ResearchEntry {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  paperLink?: string; // TODO: replace with the real paper URL
}

export const research: ResearchEntry[] = [
  {
    role: 'Student Research Assistant',
    organization: 'Center for AI and Big Data (CAID), Namal University',
    location: 'Mianwali, Pakistan',
    period: 'January 2024 – February 2025',
    description:
      'Devised a RISC-V heterogeneous cluster architecture for supercomputing workloads, contributing systems design and benchmarking work toward an ongoing research paper on the platform.',
    paperLink: '#',
  },
];
