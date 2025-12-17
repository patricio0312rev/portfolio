// Site configuration
export const SITE_CONFIG = {
  name: 'Juan Patricio Marroquin',
  shortName: 'Patricio Marroquin',
  title: 'Patricio Marroquin | Senior Software Developer & Data Scientist',
  description:
    '22 years old. Bachelor in Software Engineering with over 7 years of experience. Based in Lima, Peru 🇵🇪. Senior Software Developer at Turn Technologies.',
  author: 'Juan Patricio Marroquin',
  email: 'juan@patriciomarroquin.dev',
  location: 'Lima, Peru',
  role: 'Senior Software Developer & Data Scientist',
  siteUrl: 'https://patriciomarroquin.dev',
  image: '/og-image.jpg',
  twitterHandle: '@patricio0312rev',
  profileImage: '/assets/images/slider/patricio.jpg',
} as const;

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/patricio0312rev',
  linkedin: 'https://www.linkedin.com/in/patricio0312rev/',
  twitter: 'https://twitter.com/patricio0312rev',
  instagram: 'https://www.instagram.com/patricio0312rev/',
  facebook: 'https://www.facebook.com/JuanPatricio0312/',
  devto: 'https://blog.patriciomarroquin.dev',
  email: `mailto:${SITE_CONFIG.email}`,
  calendly: 'https://calendly.com/patricio-marroquin03/30min',
  resume: '/assets/pdf/cv.pdf',
} as const;

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
] as const;

// Skills with icons from simple-icons
export const SKILLS = {
  // Frontend
  html: { name: 'HTML', category: 'Frontend', icon: 'html5' },
  css: { name: 'CSS', category: 'Frontend', icon: 'css3' },
  javascript: { name: 'JavaScript', category: 'Frontend', icon: 'javascript' },
  typescript: { name: 'TypeScript', category: 'Frontend', icon: 'typescript' },
  react: { name: 'React', category: 'Frontend', icon: 'react' },
  nextjs: { name: 'Next.js', category: 'Frontend', icon: 'nextdotjs' },
  vue: { name: 'Vue', category: 'Frontend', icon: 'vuedotjs' },
  tailwindcss: { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwindcss' },
  bootstrap: { name: 'Bootstrap', category: 'Frontend', icon: 'bootstrap' },
  sass: { name: 'Sass', category: 'Frontend', icon: 'sass' },

  // Backend
  nodejs: { name: 'Node.js', category: 'Backend', icon: 'nodedotjs' },
  php: { name: 'PHP', category: 'Backend', icon: 'php' },
  laravel: { name: 'Laravel', category: 'Backend', icon: 'laravel' },
  python: { name: 'Python', category: 'Backend', icon: 'python' },
  java: { name: 'Java', category: 'Backend', icon: 'openjdk' },
  cpp: { name: 'C++', category: 'Backend', icon: 'cplusplus' },
  graphql: { name: 'GraphQL', category: 'Backend', icon: 'graphql' },

  // Database
  mysql: { name: 'MySQL', category: 'Database', icon: 'mysql' },
  postgresql: { name: 'PostgreSQL', category: 'Database', icon: 'postgresql' },
  mongodb: { name: 'MongoDB', category: 'Database', icon: 'mongodb' },
  redis: { name: 'Redis', category: 'Database', icon: 'redis' },

  // Cloud & DevOps
  aws: { name: 'AWS', category: 'Cloud', icon: 'amazonaws' },
  gcp: { name: 'Google Cloud', category: 'Cloud', icon: 'googlecloud' },
  azure: { name: 'Azure', category: 'Cloud', icon: 'microsoftazure' },
  docker: { name: 'Docker', category: 'Cloud', icon: 'docker' },
  vercel: { name: 'Vercel', category: 'Cloud', icon: 'vercel' },

  // Mobile
  reactnative: { name: 'React Native', category: 'Mobile', icon: 'react' },

  // Data Science
  tensorflow: { name: 'TensorFlow', category: 'Data Science', icon: 'tensorflow' },
  pandas: { name: 'Pandas', category: 'Data Science', icon: 'pandas' },

  // Tools
  git: { name: 'Git', category: 'Tools', icon: 'git' },
  github: { name: 'GitHub', category: 'Tools', icon: 'github' },
  figma: { name: 'Figma', category: 'Tools', icon: 'figma' },
  photoshop: { name: 'Photoshop', category: 'Tools', icon: 'adobephotoshop' },
  xd: { name: 'Adobe XD', category: 'Tools', icon: 'adobexd' },
} as const;

export const MAX_VISIBLE_TECH = 4;
