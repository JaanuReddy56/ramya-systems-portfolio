export type Project = {
  title: string;
  context: string;
  summary: string;
  impact: string[];
  stack: string[];
  signal: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
};

export const profile = {
  name: "Ramya Reddy Koppula",
  role: "Senior Java Full-Stack Engineer",
  headline:
    "I build secure, observable cloud systems that stay reliable under real enterprise load.",
  summary:
    "Senior software engineer with 11+ years of experience translating complex financial, federal, insurance, and retail workflows into scalable Spring Boot services and responsive web applications. Strongest at the intersection of distributed systems, cloud architecture, application security, and production reliability.",
  email: "ramyareddykoppula66@gmail.com",
  phone: "+1 972 699 5929",
  linkedIn: "https://www.linkedin.com/in/ramyaareddyk",
  location: "United States",
};

export const metrics = [
  { value: "11+", label: "years building enterprise software" },
  { value: "40%", label: "reliability improvement delivered" },
  { value: "60%", label: "faster deployment cycles" },
  { value: "99.99%", label: "production uptime supported" },
];

export const projects: Project[] = [
  {
    title: "Financial Surveillance & Serverless Platform Modernization",
    context: "Capital One · Financial technology",
    summary:
      "Modernized cloud-backed application workflows for a regulated financial environment, connecting Angular experiences with Java services and AWS serverless components while strengthening production support and release quality.",
    impact: [
      "Integrated Lambda, S3, DynamoDB, IAM, Secrets Manager, and CloudWatch into secure application workflows.",
      "Improved incident diagnosis through structured log analysis, root-cause investigation, and targeted remediation.",
      "Raised delivery confidence with automated builds, tests, security scans, dependency checks, and code reviews.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "AWS Lambda", "DynamoDB", "CloudWatch"],
    signal: "Current focus",
  },
  {
    title: "Automated Ex-Employee Data Management System",
    context: "Freddie Mac · HR and access reconciliation",
    summary:
      "Designed a secure platform that reconciled former-employee records across HR, payroll, and access systems, giving business teams a dependable view of status, ownership, and exceptions.",
    impact: [
      "Built domain-aligned Spring Boot services with versioned APIs, idempotency, circuit breaking, and audit-ready data flows.",
      "Implemented event-driven processing on AWS MSK with governed schemas, replay procedures, and dead-letter handling.",
      "Enabled low-risk releases through Terraform, immutable containers, blue-green deployment, and automated rollback checks.",
    ],
    stack: ["Java 17", "Spring Boot 3", "Angular 17", "Next.js", "AWS MSK", "PostgreSQL"],
    signal: "Architecture leadership",
  },
  {
    title: "Veteran Records & Document Management Portal",
    context: "Veterans Affairs · Federal services",
    summary:
      "Delivered a role-aware portal for records, claims, and eligibility workflows with strong auditability, secure document access, and resilient service-to-service integration.",
    impact: [
      "Reduced information retrieval from hours to seconds through optimized PostgreSQL and DynamoDB access patterns.",
      "Protected sensitive workflows with OAuth2, JWT, SAML SSO, KMS encryption, Secrets Manager, and least-privilege IAM.",
      "Improved release predictability using automated regression coverage, observability, SLO-based alerts, and zero-downtime deployment patterns.",
    ],
    stack: ["Java 17", "Spring Boot", "Angular", "Kafka", "AWS", "OpenTelemetry"],
    signal: "Security + scale",
  },
];

export const experiences: Experience[] = [
  {
    company: "Capital One",
    role: "Senior Java Full-Stack Developer / Software Engineer",
    period: "Feb 2026 — Present",
    location: "Richmond, VA",
    highlights: [
      "Develop and support Angular front ends, Java/Spring services, REST integrations, and AWS serverless components for enterprise financial workflows.",
      "Own production troubleshooting across logs, incidents, defects, security findings, and performance bottlenecks.",
      "Contribute to build and release automation with Maven, Git-based pipelines, quality gates, security scans, and peer review.",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "AWS", "DynamoDB", "CI/CD"],
  },
  {
    company: "Freddie Mac",
    role: "Senior Java Full-Stack Developer",
    period: "Jan 2024 — Jan 2026",
    location: "McLean, VA",
    highlights: [
      "Led delivery of cloud-native services and modern web experiences for HR, financial, and access-management workflows.",
      "Designed resilient APIs, Kafka integrations, PostgreSQL and DynamoDB models, and observable deployment paths on AWS.",
      "Mentored engineers, guided architecture decisions, and improved operational safety with SLOs, runbooks, and automated releases.",
    ],
    technologies: ["Java 17", "Spring Boot 3", "Angular 17", "Next.js", "AWS", "Kafka"],
  },
  {
    company: "Veterans Affairs Financial Services Center",
    role: "Java Full-Stack Developer",
    period: "Aug 2021 — Dec 2023",
    location: "Austin, TX",
    highlights: [
      "Built secure records, claims, and eligibility services with strong audit trails and policy-driven authorization.",
      "Improved data access and system responsiveness through tuned PostgreSQL, DynamoDB, Kafka, and caching patterns.",
      "Automated testing and deployment while partnering with federal SMEs across multiple agile teams.",
    ],
    technologies: ["Java 17", "Spring Boot", "Angular", "AWS", "Kafka", "Selenium"],
  },
  {
    company: "Bank of America",
    role: "Java Full-Stack Developer",
    period: "Sep 2019 — Aug 2021",
    location: "Plano, TX",
    highlights: [
      "Built Azure-hosted payment exception and dispute workflows with end-to-end traceability.",
      "Delivered React interfaces, Spring Boot services, RabbitMQ messaging, and Oracle/MongoDB persistence.",
      "Strengthened security and deployment consistency through Azure AD, Key Vault, Terraform, and governed CI/CD.",
    ],
    technologies: ["Java 11", "React", "Azure AKS", "RabbitMQ", "Oracle", "MongoDB"],
  },
  {
    company: "Liberty Mutual Insurance",
    role: "Java Full-Stack Developer",
    period: "Apr 2018 — Aug 2019",
    location: "Boston, MA",
    highlights: [
      "Developed policy, renewal, and claims services designed for predictable latency and auditability.",
      "Implemented Angular user journeys, Kafka event processing, AWS data services, and infrastructure automation.",
      "Improved runtime support with structured telemetry, dashboards, and repeatable rollback procedures.",
    ],
    technologies: ["Java 8/11", "Spring Boot", "Angular", "AWS", "Kafka", "Terraform"],
  },
  {
    company: "Best Buy",
    role: "Java Developer",
    period: "Dec 2016 — Mar 2018",
    location: "Richfield, MN",
    highlights: [
      "Engineered loyalty and rewards capabilities for high-volume retail journeys.",
      "Connected React experiences with Spring Boot services, RabbitMQ events, Oracle transactions, and MongoDB features.",
      "Improved release resilience through Azure pipelines, observability, and progressive deployment strategies.",
    ],
    technologies: ["Java 8", "Spring Boot", "React", "Azure", "RabbitMQ", "MongoDB"],
  },
  {
    company: "Aspire Systems",
    role: "Java Developer",
    period: "Aug 2013 — Oct 2015",
    location: "Chennai, India",
    highlights: [
      "Built customer-data synchronization services and AngularJS dashboards for enterprise integrations.",
      "Designed REST APIs, RabbitMQ workflows, MySQL/DynamoDB models, and Jenkins-based delivery automation.",
      "Introduced correlation-driven monitoring and deployment runbooks that shortened troubleshooting cycles.",
    ],
    technologies: ["Java 8", "Spring MVC", "AngularJS", "RabbitMQ", "MySQL", "AWS"],
  },
];

export const skillGroups = [
  {
    title: "Core engineering",
    items: ["Java 8/11/17/21", "Spring Boot", "Spring MVC", "REST/OpenAPI", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "Accessible UI"],
  },
  {
    title: "Cloud & platform",
    items: ["AWS", "Azure", "Docker", "Kubernetes/AKS", "Terraform", "Serverless"],
  },
  {
    title: "Distributed data",
    items: ["Kafka/MSK", "RabbitMQ", "PostgreSQL", "Oracle", "MongoDB", "DynamoDB"],
  },
  {
    title: "Reliability & security",
    items: ["OpenTelemetry", "CloudWatch", "OAuth2/OIDC", "JWT/SAML", "KMS/Key Vault", "SLOs"],
  },
  {
    title: "Delivery quality",
    items: ["Maven/Gradle", "Jenkins", "GitHub Actions", "JUnit", "Testcontainers", "Selenium"],
  },
];

export const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
  "Secure Application Architecture & IAM",
  "API Security",
  "Automated Software Testing",
];
