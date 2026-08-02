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
];
