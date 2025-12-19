// Site configuration
export const SITE_CONFIG = {
  name: 'Juan Patricio Marroquin',
  shortName: 'Patricio Marroquin',
  title: 'Patricio Marroquin | Senior Software Developer & AI Engineer',
  description:
    '22 years old. Bachelor in Software Engineering with over 7 years of experience. Based in Lima, Peru 🇵🇪. Senior Software Developer at Turn Technologies.',
  author: 'Juan Patricio Marroquin',
  email: 'juan@patriciomarroquin.dev',
  location: 'Lima, Peru',
  role: 'Senior Software Developer & AI Engineer',
  siteUrl: 'https://patriciomarroquin.dev',
  image: '/assets/images/slider/patricio.jpg',
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

// Project links
export const PROJECT_LINKS = {
  toonTools: 'https://open-vsx.org/extension/patricio0312rev/vscode-toon-tools-patricio0312rev',
  developerBlog: 'https://blog.patriciomarroquin.dev',
  amap: 'https://amap-landing-eta.vercel.app/',
  formation: 'https://www.venturekit.ai/formation',
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
  html: { name: "HTML", category: "Frontend", icon: "html5" },
  css: { name: "CSS", category: "Frontend", icon: "css3" },
  javascript: { name: "JavaScript", category: "Frontend", icon: "javascript" },
  typescript: { name: "TypeScript", category: "Frontend", icon: "typescript" },
  react: { name: "React", category: "Frontend", icon: "react" },
  nextjs: { name: "Next.js", category: "Frontend", icon: "nextdotjs" },
  vue: { name: "Vue", category: "Frontend", icon: "vuedotjs" },
  tailwindcss: { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss" },
  bootstrap: { name: "Bootstrap", category: "Frontend", icon: "bootstrap" },
  sass: { name: "Sass", category: "Frontend", icon: "sass" },

  // Backend
  nodejs: { name: "Node.js", category: "Backend", icon: "nodedotjs" },
  php: { name: "PHP", category: "Backend", icon: "php" },
  laravel: { name: "Laravel", category: "Backend", icon: "laravel" },
  python: { name: "Python", category: "Backend", icon: "python" },
  java: { name: "Java", category: "Backend", icon: "openjdk" },
  cpp: { name: "C++", category: "Backend", icon: "cplusplus" },
  graphql: { name: "GraphQL", category: "Backend", icon: "graphql" },

  // Backend frameworks
  nestjs: { name: "NestJS", category: "Backend", icon: "nestjs" },
  fastapi: { name: "FastAPI", category: "Backend", icon: "fastapi" },

  // Database
  mysql: { name: "MySQL", category: "Database", icon: "mysql" },
  postgresql: { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  mongodb: { name: "MongoDB", category: "Database", icon: "mongodb" },
  redis: { name: "Redis", category: "Database", icon: "redis" },

  // Database add-ons
  postgis: { name: "PostGIS", category: "Database", icon: "postgresql" },

  // Cloud & DevOps
  aws: { name: "AWS", category: "Cloud", icon: "icloud" },
  gcp: { name: "Google Cloud", category: "Cloud", icon: "googlecloud" },
  azure: { name: "Azure", category: "Cloud", icon: "icloud" },
  docker: { name: "Docker", category: "Cloud", icon: "docker" },
  vercel: { name: "Vercel", category: "Cloud", icon: "vercel" },

  // Cloud services
  lambda: { name: "AWS Lambda", category: "Cloud", icon: "awslambda" },

  // Mobile
  reactnative: { name: "React Native", category: "Mobile", icon: "react" },

  // Data Science
  tensorflow: { name: "TensorFlow", category: "Data Science", icon: "tensorflow" },
  pandas: { name: "Pandas", category: "Data Science", icon: "pandas" },

  // Tools
  git: { name: "Git", category: "Tools", icon: "git" },
  github: { name: "GitHub", category: "Tools", icon: "github" },
  figma: { name: "Figma", category: "Tools", icon: "figma" },
  photoshop: { name: "Photoshop", category: "Tools", icon: "adobephotoshop" },
  xd: { name: "Adobe XD", category: "Tools", icon: "adobexd" },

  // Platforms
  twilio: { name: "Twilio", category: "Tools", icon: "twilio" },
  supabase: { name: "Supabase", category: "Tools", icon: "supabase" },
  stripe: { name: "Stripe", category: "Tools", icon: "stripe" },
  prisma: { name: "Prisma", category: "Tools", icon: "prisma" },
  jest: { name: "Jest", category: "Tools", icon: "jest" },
  rtl: { name: "React Testing Library", category: "Tools", icon: "testinglibrary" },
  apollo: { name: "Apollo", category: "Tools", icon: "apollographql" },
  "react-query": { name: "TanStack Query", category: "Tools", icon: "reactquery" },

  // Frontend frameworks/libraries
  astro: { name: "Astro", category: "Frontend", icon: "astro" },
  livewire: { name: "Livewire", category: "Frontend", icon: "livewire" },
  alpinejs: { name: "Alpine.js", category: "Frontend", icon: "alpinedotjs" },
  redux: { name: "Redux", category: "Frontend", icon: "redux" },

  // Web3
  web3js: { name: "Web3.js", category: "Web3", icon: "web3dotjs" },
  solana: { name: "Solana", category: "Web3", icon: "solana" },
  "chrome-extension": { name: "Browser Extension", category: "Web3", icon: "googlechrome" },

  // Marketing / CMS
  seo: { name: "SEO", category: "Marketing", icon: "googlesearchconsole" },
  wordpress: { name: "WordPress", category: "Marketing", icon: "wordpress" },
  jquery: { name: "jQuery", category: "Frontend", icon: "jquery" },

  // AI
  openai: { name: "OpenAI", category: "AI", icon: "openai" },
  anthropic: { name: "Anthropic", category: "AI", icon: "anthropic" },
  googlegemini: { name: "Gemini", category: "AI", icon: "googlegemini" },
  claude: { name: "Claude", category: "AI", icon: "anthropic" },
  deepseek: { name: "DeepSeek", category: "AI", icon: "openai" },
  llama: { name: "Llama", category: "AI", icon: "meta" },
  llama3: { name: "Llama 3", category: "AI", icon: "meta" },
} as const;

export const MAX_VISIBLE_TECH = 4;
