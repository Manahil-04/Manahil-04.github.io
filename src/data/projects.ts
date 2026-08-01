export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  /** TODO: replace with the real repo/live-demo URL when available. */
  link: string;
}

export const projects: Project[] = [
  {
    slug: 'yana-meals',
    title: 'Medical Food Delivery Service App (YANA Meals)',
    description:
      'Developed a full-fledged web app for medical food delivery, including vendor and delivery-personnel interfaces, with real-time tracking and order management features.',
    category: 'Web App Development',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Google Maps API', 'Push Notifications'],
    image: '/images/projects/yana-analytics.png',
    link: '#',
  },
  {
    slug: 'multimodal-anomaly-detection',
    title: 'Multimodal Network Anomaly Detection',
    description:
      'Developed a robust network anomaly detection system leveraging multiple data modalities for enhanced accuracy and reliability.',
    category: 'Machine Learning',
    tech: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    image: '/images/projects/anomaly-evaluation.png',
    link: '#',
  },
  {
    slug: 'jpeg-image-compression',
    title: 'JPEG: Image Compression',
    description:
      'Implemented a highly efficient JPEG compression algorithm, reducing image file sizes while preserving visual quality through DCT and Huffman coding techniques.',
    category: 'Python-based',
    tech: ['NumPy', 'Pandas', 'Pillow', 'OpenCV', 'Matplotlib', 'Tkinter'],
    image: '/images/projects/jpeg-aoa.png',
    link: '#',
  },
  {
    slug: 'risc-v-hpc-cluster',
    title: 'RISC-V Heterogeneous HPC Cluster Development',
    description:
      'Developed a fully operational, low-power HPC cluster using the RISC-V StarFive VisionFive2 platform with an Intel NUC edge device as head node, achieving a 55% improvement in processing speed for large matrix computations, integrating Wazuh-based SIEM for real-time security monitoring, and implementing federated learning for decentralized AI model training on medical data.',
    category: 'RISC-V Cluster',
    tech: ['RISC-V VisionFive2', 'Intel NUC', 'Wazuh', 'Federated Learning'],
    image: '/images/projects/riscv-cluster.png',
    link: '#',
  },
];
