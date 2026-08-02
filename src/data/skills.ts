export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', skills: ['JavaScript (ES6+)', 'Python', 'C++'] },
  { category: 'Frontend', skills: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Figma'] },
  { category: 'Backend', skills: ['Node.js', 'Express'] },
  {
    category: 'AI / ML',
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
  { category: 'Databases', skills: ['MongoDB', 'MySQL', 'Firebase'] },
  { category: 'Tools & Platforms', skills: ['Git', 'Linux'] },
];
