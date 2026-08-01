export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'email' | 'behance';
}

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/manahilmushtaq/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/manahil-04', icon: 'github' },
  { label: 'Email', href: 'mailto:manahilmushtaq004@gmail.com', icon: 'email' },
  { label: 'Behance', href: 'https://behance.net/manahil04', icon: 'behance' },
];
