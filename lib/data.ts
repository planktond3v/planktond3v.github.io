// ─────────────────────────────────────────────────────────────────────────────
//  lib/data.ts  —  Single source of truth for all portfolio content
//
//  ✏️  HOW TO CUSTOMISE:
//  1. Replace every placeholder value with your real data.
//  2. The rest of the site updates automatically — no need to touch components.
// ─────────────────────────────────────────────────────────────────────────────

// ── Personal Info ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name:       'PlanktonDev',
  fullName:   'Plankton Developer',
  tagline:    'Building the Future, One Deployment at a Time',
  email:      'contact@planktondev.com',
  location:   'Remote · Indonesia',
  github:     'https://github.com/planktondev',
  linkedin:   'https://linkedin.com/in/planktondev',
  discord:    'planktondev#0000',
  telegram:   'https://t.me/planktondev',
  twitter:    'https://twitter.com/planktondev',
  cvUrl:      '/cv.pdf', // Place your CV in the public/ folder
  bio: `Passionate DevSecOps & Cloud Engineer with hands-on experience designing
highly available, secure, and automated infrastructure across multi-cloud
environments. Deeply interested in Kubernetes orchestration, infrastructure-as-code,
blockchain node operations, and AI workload deployment. I turn complexity into clean,
observable, scalable systems.`,
};

// ── Typing Roles (shown in Hero section) ──────────────────────────────────────
export const typingRoles = [
  'DevSecOps Engineer',
  'Cloud Engineer',
  'Blockchain Enthusiast',
  'AI Infrastructure Engineer',
  'Kubernetes Architect',
  'GitOps Practitioner',
];

// ── Stats (shown in About section) ───────────────────────────────────────────
export const stats = [
  { value: '6+',  label: 'Years in Linux & DevOps'       },
  { value: '50+', label: 'Production Deployments'         },
  { value: '15+', label: 'Cloud Services Mastered'        },
  { value: '3+',  label: 'Blockchain Networks Operated'   },
];

// ── Skills ────────────────────────────────────────────────────────────────────
export type SkillCategory = {
  category: string;
  color:    string;           // Tailwind gradient class fragment
  skills:   { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Operating Systems',
    color:    'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Linux (RHEL/Ubuntu)',   level: 95 },
      { name: 'Container OS',          level: 85 },
      { name: 'Networking',            level: 80 },
    ],
  },
  {
    category: 'Containers & Orchestration',
    color:    'from-blue-500 to-purple-500',
    skills: [
      { name: 'Docker',      level: 95 },
      { name: 'Kubernetes',  level: 90 },
      { name: 'Helm',        level: 85 },
      { name: 'ArgoCD',      level: 80 },
    ],
  },
  {
    category: 'Infrastructure as Code',
    color:    'from-purple-500 to-pink-500',
    skills: [
      { name: 'Terraform',   level: 90 },
      { name: 'Ansible',     level: 85 },
      { name: 'Packer',      level: 70 },
    ],
  },
  {
    category: 'Cloud Platforms',
    color:    'from-pink-500 to-orange-400',
    skills: [
      { name: 'AWS',    level: 85 },
      { name: 'GCP',    level: 75 },
      { name: 'Azure',  level: 70 },
    ],
  },
  {
    category: 'CI/CD & GitOps',
    color:    'from-orange-400 to-yellow-400',
    skills: [
      { name: 'GitHub Actions', level: 92 },
      { name: 'GitLab CI',      level: 80 },
      { name: 'ArgoCD',         level: 85 },
      { name: 'FluxCD',         level: 75 },
    ],
  },
  {
    category: 'Observability',
    color:    'from-green-400 to-cyan-500',
    skills: [
      { name: 'Prometheus',  level: 88 },
      { name: 'Grafana',     level: 90 },
      { name: 'Loki',        level: 82 },
      { name: 'Jaeger',      level: 70 },
    ],
  },
  {
    category: 'Blockchain & Web3',
    color:    'from-cyan-400 to-purple-500',
    skills: [
      { name: 'Ethereum Nodes',    level: 80 },
      { name: 'Solidity',          level: 65 },
      { name: 'Smart Contracts',   level: 68 },
      { name: 'Web3 Infrastructure', level: 78 },
    ],
  },
  {
    category: 'Languages',
    color:    'from-purple-400 to-pink-400',
    skills: [
      { name: 'Python',    level: 82 },
      { name: 'Golang',    level: 68 },
      { name: 'Bash',      level: 90 },
      { name: 'YAML/HCL',  level: 95 },
    ],
  },
];

// ── Individual skill pills (shown in Skills section grid) ─────────────────────
export const skillPills = [
  // Infra & Platform
  'Linux', 'Docker', 'Kubernetes', 'Terraform', 'Ansible',
  // Cloud
  'AWS', 'GCP', 'Azure',
  // CI/CD
  'CI/CD', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'FluxCD',
  // Observability
  'Prometheus', 'Grafana', 'Loki', 'Jaeger',
  // Kubernetes Ecosystem
  'Helm', 'Kustomize', 'Istio',
  // Languages
  'Python', 'Golang', 'Bash', 'Solidity',
  // Blockchain
  'Smart Contracts', 'Web3 Infrastructure', 'Ethereum',
  // AI Infra
  'AI Infrastructure', 'LLM Deployment', 'GPU Clusters',
  // Security
  'Security Tools', 'Trivy', 'Falco', 'SonarQube',
  // Networking
  'Nginx', 'HAProxy', 'Cilium',
];

// ── Projects ──────────────────────────────────────────────────────────────────
export type Project = {
  id:          number;
  title:       string;
  description: string;
  longDesc:    string;
  tags:        string[];
  github:      string;
  demo:        string;
  color:       string;   // gradient for card accent
  icon:        string;   // emoji icon
  featured:    boolean;
};

export const projects: Project[] = [
  {
    id:          1,
    title:       'Kubernetes Monitoring Stack',
    description: 'Production-grade observability platform with Prometheus, Grafana, Loki, and AlertManager deployed via Helm on bare-metal k8s.',
    longDesc:    'Full-stack monitoring solution featuring custom dashboards, alert rules, SLO/SLA tracking, and log aggregation across 50+ microservices.',
    tags:        ['Kubernetes', 'Prometheus', 'Grafana', 'Loki', 'Helm', 'AlertManager'],
    github:      'https://github.com/planktondev/k8s-monitoring-stack',
    demo:        '#',
    color:       'from-cyan-500 to-blue-600',
    icon:        '📊',
    featured:    true,
  },
  {
    id:          2,
    title:       'DevSecOps CI/CD Pipeline',
    description: 'End-to-end secure pipeline with SAST, DAST, container scanning (Trivy), secret detection, and zero-downtime GitOps deployments.',
    longDesc:    'Integrates SonarQube, Trivy, OWASP ZAP, and GitHub Advanced Security into a single pipeline delivering secure artifacts to production.',
    tags:        ['GitHub Actions', 'Docker', 'SonarQube', 'Trivy', 'ArgoCD', 'Falco'],
    github:      'https://github.com/planktondev/devsecops-pipeline',
    demo:        '#',
    color:       'from-purple-500 to-pink-600',
    icon:        '🔐',
    featured:    true,
  },
  {
    id:          3,
    title:       'Blockchain Node Deployment',
    description: 'High-availability Ethereum & Polygon validator node infrastructure with Terraform, HA Proxy load balancing, and automated failover.',
    longDesc:    'Multi-region blockchain node cluster with MEV-boost integration, monitoring, and Kubernetes-based orchestration for maximum uptime.',
    tags:        ['Ethereum', 'Terraform', 'Docker', 'Nginx', 'Prometheus', 'Python'],
    github:      'https://github.com/planktondev/blockchain-nodes',
    demo:        '#',
    color:       'from-orange-400 to-red-500',
    icon:        '⛓️',
    featured:    true,
  },
  {
    id:          4,
    title:       'AI Agent Infrastructure',
    description: 'Scalable GPU-enabled Kubernetes infrastructure for deploying and serving large language models with auto-scaling and Ray Serve.',
    longDesc:    'Supports multi-GPU workloads, LLM inference serving, model versioning, A/B testing, and real-time metrics for AI production systems.',
    tags:        ['Kubernetes', 'Python', 'FastAPI', 'Ray', 'NVIDIA GPU', 'Redis'],
    github:      'https://github.com/planktondev/ai-infra',
    demo:        '#',
    color:       'from-green-400 to-cyan-500',
    icon:        '🤖',
    featured:    true,
  },
  {
    id:          5,
    title:       'Cloud Native Logging System',
    description: 'Centralised logging pipeline (PLG stack) ingesting 10M+ events/day with structured log parsing, alerting, and long-term storage.',
    longDesc:    'Promtail → Loki → Grafana pipeline with Fluentd side-cars, log-based alerting via AlertManager, and 90-day retention on S3.',
    tags:        ['Loki', 'Promtail', 'Grafana', 'Fluentd', 'Kubernetes', 'S3'],
    github:      'https://github.com/planktondev/cloud-logging',
    demo:        '#',
    color:       'from-blue-400 to-purple-500',
    icon:        '📋',
    featured:    false,
  },
  {
    id:          6,
    title:       'GitOps Kubernetes Platform',
    description: 'Complete internal developer platform (IDP) powered by ArgoCD App-of-Apps, Crossplane, and Backstage for self-service infra.',
    longDesc:    'Enables teams to provision cloud resources, deploy apps, and manage secrets via Git PRs — no kubectl required for developers.',
    tags:        ['ArgoCD', 'Crossplane', 'Helm', 'Kustomize', 'Backstage', 'Vault'],
    github:      'https://github.com/planktondev/gitops-platform',
    demo:        '#',
    color:       'from-pink-400 to-orange-400',
    icon:        '🚀',
    featured:    false,
  },
];

// ── Experience Timeline ───────────────────────────────────────────────────────
export type Experience = {
  year:        string;
  title:       string;
  company:     string;
  description: string;
  tags:        string[];
  color:       string;
};

export const experiences: Experience[] = [
  {
    year:        '2018',
    title:       'Linux & Open Source Journey',
    company:     'Self-taught',
    description: 'Began deep-diving into Linux internals, shell scripting, networking, and open-source tooling. Built home lab for hands-on learning.',
    tags:        ['Linux', 'Bash', 'Networking', 'RHEL'],
    color:       'from-cyan-500 to-blue-500',
  },
  {
    year:        '2019',
    title:       'Container & Orchestration Engineer',
    company:     'Early-Stage Startup',
    description: 'Containerised monolithic apps with Docker, migrated to Kubernetes, introduced CI/CD, and established container security practices.',
    tags:        ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
    color:       'from-blue-500 to-purple-500',
  },
  {
    year:        '2020',
    title:       'Cloud Infrastructure Engineer',
    company:     'SaaS Company',
    description: 'Designed and implemented multi-cloud architectures on AWS and GCP using Terraform. Led cloud migration of legacy on-prem workloads.',
    tags:        ['AWS', 'GCP', 'Terraform', 'Ansible'],
    color:       'from-purple-500 to-pink-500',
  },
  {
    year:        '2021',
    title:       'DevSecOps Lead',
    company:     'FinTech Firm',
    description: 'Built security-first CI/CD pipelines. Implemented SAST/DAST, runtime security (Falco), policy-as-code (OPA), and secret management (Vault).',
    tags:        ['DevSecOps', 'Vault', 'Falco', 'OPA', 'GitHub Actions'],
    color:       'from-pink-500 to-orange-400',
  },
  {
    year:        '2022',
    title:       'Blockchain Infrastructure Engineer',
    company:     'Web3 Protocol',
    description: 'Operated Ethereum and Polygon validator nodes at scale. Built automated node provisioning, monitoring, and failover systems.',
    tags:        ['Ethereum', 'Solidity', 'Web3', 'Node Ops'],
    color:       'from-orange-400 to-yellow-400',
  },
  {
    year:        '2023 – Present',
    title:       'AI + Cloud Native Architect',
    company:     'AI Infrastructure',
    description: 'Designing GPU-enabled Kubernetes clusters for LLM workloads. Building internal developer platforms and contributing to open-source cloud-native projects.',
    tags:        ['AI Infra', 'LLM', 'Kubernetes', 'Platform Engineering'],
    color:       'from-green-400 to-cyan-500',
  },
];

// ── Certifications ────────────────────────────────────────────────────────────
export type Certification = {
  name:       string;
  issuer:     string;
  year:       string;
  credId:     string;
  color:      string;
  icon:       string;
  verified:   boolean;
};

export const certifications: Certification[] = [
  {
    name:     'RHCSA',
    issuer:   'Red Hat',
    year:     '2019',
    credId:   'RHCSA-XXXXX',
    color:    'from-red-500 to-orange-500',
    icon:     '🎓',
    verified: true,
  },
  {
    name:     'RHCE',
    issuer:   'Red Hat',
    year:     '2020',
    credId:   'RHCE-XXXXX',
    color:    'from-red-600 to-red-400',
    icon:     '🏅',
    verified: true,
  },
  {
    name:     'CKA',
    issuer:   'CNCF / Linux Foundation',
    year:     '2021',
    credId:   'CKA-XXXXX',
    color:    'from-blue-500 to-cyan-400',
    icon:     '⚙️',
    verified: true,
  },
  {
    name:     'CKAD',
    issuer:   'CNCF / Linux Foundation',
    year:     '2021',
    credId:   'CKAD-XXXXX',
    color:    'from-cyan-500 to-teal-400',
    icon:     '🛠️',
    verified: true,
  },
  {
    name:     'Terraform Associate',
    issuer:   'HashiCorp',
    year:     '2022',
    credId:   'TF-XXXXX',
    color:    'from-purple-600 to-purple-400',
    icon:     '🏗️',
    verified: true,
  },
  {
    name:     'AWS Solutions Architect',
    issuer:   'Amazon Web Services',
    year:     '2022',
    credId:   'AWS-SAA-XXXXX',
    color:    'from-orange-500 to-yellow-400',
    icon:     '☁️',
    verified: true,
  },
];

// ── Tech Stack (for orbital visualisation) ────────────────────────────────────
export type TechItem = {
  name:  string;
  emoji: string;
  color: string;
};

export const innerOrbit: TechItem[] = [
  { name: 'Docker',      emoji: '🐳', color: '#2496ed' },
  { name: 'Kubernetes',  emoji: '☸️', color: '#326ce5' },
  { name: 'Terraform',   emoji: '🏗️', color: '#7b42bc' },
  { name: 'ArgoCD',      emoji: '🔄', color: '#ef7b4d' },
];

export const middleOrbit: TechItem[] = [
  { name: 'AWS',        emoji: '☁️', color: '#ff9900' },
  { name: 'Prometheus', emoji: '📊', color: '#e6522c' },
  { name: 'Grafana',    emoji: '📈', color: '#f46800' },
  { name: 'GitHub',     emoji: '🐙', color: '#ffffff' },
  { name: 'Python',     emoji: '🐍', color: '#3776ab' },
  { name: 'Golang',     emoji: '🔵', color: '#00acd7' },
];

export const outerOrbit: TechItem[] = [
  { name: 'Ethereum', emoji: '⟠', color: '#627eea' },
  { name: 'Solidity', emoji: '📜', color: '#363636' },
  { name: 'Loki',     emoji: '🪵', color: '#f5a800' },
  { name: 'Helm',     emoji: '⛵', color: '#0f1689' },
  { name: 'Ansible',  emoji: '⚡', color: '#ee0000' },
  { name: 'GCP',      emoji: '🌐', color: '#4285f4' },
  { name: 'Azure',    emoji: '🔷', color: '#0078d4' },
  { name: 'Falco',    emoji: '🦅', color: '#00aec7' },
];
