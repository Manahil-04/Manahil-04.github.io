export interface ImpactStat {
  value: string;
  label: string;
  context: string;
}

export const impactStats: ImpactStat[] = [
  {
    value: '70%',
    label: 'Reduction in manual workload',
    context: 'AI-powered healthcare assistant, Phunware',
  },
  {
    value: '55%',
    label: 'Faster large matrix computation',
    context: 'RISC-V heterogeneous HPC cluster, Namal University',
  },
];

export interface Achievement {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Machine Learning Specialization',
    organization: 'DeepLearning.AI (Coursera)',
    period: 'November 2023',
    description:
      'Completed a rigorous ML specialization covering advanced neural networks, CNNs, and sequence models; demonstrated proficiency in implementation and project structuring.',
  },
  {
    title: 'Campus Ambassador',
    organization: 'Arbisoft',
    period: 'November 2023 – July 2024',
    description:
      "Led campus initiatives, organized events and workshops, connecting students with Arbisoft's tech solutions.",
  },
];
