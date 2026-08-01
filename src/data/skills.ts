export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['JavaScript (ES6+)', 'Python', 'C++'] },
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'Bootstrap', 'React', 'Figma'] },
  { category: 'Backend & Data', skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Firebase'] },
  {
    category: 'ML / AI',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'OpenCV',
      'SciPy',
      'Pillow',
      'Jupyter',
    ],
  },
  { category: 'Tools & Platforms', skills: ['Git', 'Linux'] },
];
