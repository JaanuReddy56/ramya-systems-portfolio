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
    "I build secure Java services and cloud data platforms that turn complex enterprise data into trusted outcomes.",
  summary:
    "Senior software engineer with 11+ years of experience delivering Spring Boot APIs, Snowflake data pipelines, Python ETL, event-driven integrations, and modern web applications across regulated financial and federal environments. Strongest at connecting backend architecture, secure data engineering, cloud automation, and production reliability.",
  email: "ramyareddykoppula66@gmail.com",
  phone: "+1 972 699 5929",
  linkedIn: "https://www.linkedin.com/in/ramyaareddyk",
  location: "United States",
};

export const metrics = [
  { value: "11+", label: "years delivering enterprise software" },
  { value: "3", label: "recent engagements using Snowflake" },
  { value: "Java 17", label: "modern backend engineering" },
  { value: "AWS + Azure", label: "multi-cloud delivery experience" },
];

export const projects: Project[] = [
  {
    title: "Financial Analytics & Reporting Integration Platform",
    context: "Capital One · Banking analytics and reporting",
    summary:
      "Developed and supported a secure Java and Snowflake integration platform for transaction, compliance, and reporting data flows across internal banking systems.",
    impact: [
      "Designed Spring Boot REST services with versioned contracts, validation, structured error handling, and reliable downstream integration patterns.",
      "Built Snowflake ingestion and transformation pipelines using S3 stages, COPY INTO, Snowpipe, SQL validation, balancing controls, and exception handling.",
      "Connected Python ETL, AWS Lambda, secure SFTP/PGP transfers, Jenkins pipelines, and production monitoring into an auditable delivery workflow.",
    ],
    stack: ["Java 17", "Spring Boot", "Snowflake", "Python ETL", "AWS", "Jenkins"],
    signal: "Current focus",
  },
  {
    title: "Enterprise Workforce & Financial Data Hub",
    context: "Freddie Mac · HR, payroll, banking, and reporting",
    summary:
      "Designed reusable backend and data-integration services for ingesting, sanitizing, reconciling, warehousing, and reporting employee and financial data across enterprise and partner systems.",
    impact: [
      "Built Snowflake pipelines and curated reporting structures for HR, payroll, expense, card, and ERP datasets using stages, COPY INTO, Snowpipe, streams, and tasks.",
      "Developed Python ETL and data-sanitization modules for schema checks, control totals, reconciliation, sensitive-field handling, and operational audit outputs.",
      "Delivered secure REST/SOAP, Kafka, SFTP, and PGP integrations with automated testing, GitHub Actions, Maven, Terraform, and production runbooks.",
    ],
    stack: ["Java 17", "Spring Boot 3", "Snowflake", "Python", "AWS MSK", "Terraform"],
    signal: "Data platform leadership",
  },
  {
    title: "Federal Financial Data & Compliance Platform",
    context: "Veterans Affairs · Financial records and reporting",
    summary:
      "Delivered secure backend data-integration workflows for financial records, payment processing, analytics, compliance reporting, and controlled downstream distribution.",
    impact: [
      "Designed Snowflake ingestion, mapping, transformation, sanitization, and reconciliation flows for file, API, and database data sources.",
      "Built Spring Boot REST/SOAP services, Kafka event streams, and AWS batch workflows with idempotency, restartability, and end-to-end traceability.",
      "Validated reliability through unit, integration, regression, performance, load, and recovery testing while tuning Snowflake SQL and virtual warehouses.",
    ],
    stack: ["Java 17", "Spring Boot", "Snowflake", "Python", "Kafka", "AWS"],
    signal: "Security + governance",
  },
];

export const experiences: Experience[] = [
  {
    company: "Capital One",
    role: "Senior Java Backend Developer",
    period: "Feb 2026 — Present",
    location: "Richmond, VA",
    highlights: [
      "Develop secure Java 17 and Spring Boot services for transaction, compliance, analytics, and reporting workflows across internal banking systems.",
      "Build and optimize Snowflake pipelines using S3 stages, COPY INTO, Snowpipe, SQL transformations, validation rules, reconciliation controls, and exception processing.",
      "Integrate Python ETL, AWS Lambda, API Gateway, S3, secure SFTP/PGP transfers, Kafka, and role-based security into governed data-delivery workflows.",
      "Automate builds, tests, security checks, and releases with Maven, Jenkins, GitHub Actions, JUnit, Mockito, Splunk, and CloudWatch.",
    ],
    technologies: ["Java 17", "Spring Boot", "Snowflake", "Python ETL", "AWS", "Kafka", "Jenkins"],
  },
  {
    company: "Freddie Mac",
    role: "Senior Java Full-Stack Developer",
    period: "Jan 2024 — Jan 2026",
    location: "McLean, VA",
    highlights: [
      "Designed reusable Spring Boot services and integration adapters for REST, SOAP/WSDL, batch, file-based, internal-system, and partner interfaces.",
      "Built Snowflake pipelines and secure reporting structures for employee, payroll, expense, banking, card, and ERP data using stages, Snowpipe, streams, tasks, and secure views.",
      "Developed Python ETL and sanitization utilities for parsing, schema validation, sensitive-field controls, control totals, reconciliation, and audit manifests.",
      "Led automated testing, CI/CD, security, observability, production support, documentation, and mentoring across Java, Python, AWS, Kafka, and Snowflake workflows.",
    ],
    technologies: ["Java 17", "Spring Boot 3", "Snowflake", "Python", "AWS", "Kafka", "GitHub Actions"],
  },
  {
    company: "Veterans Affairs Financial Services Center",
    role: "Java Backend Developer",
    period: "Sep 2021 — Dec 2023",
    location: "Austin, TX",
    highlights: [
      "Developed Spring Boot services for financial records, payments, profile data, analytics, and downstream reporting through REST, SOAP, Kafka, and scheduled batch interfaces.",
      "Designed Snowflake ingestion, transformation, sanitization, source-to-target mapping, reconciliation, rejected-record handling, and compliance-reporting datasets.",
      "Implemented secure SFTP, S3, encryption, Snowflake RBAC, secure views, OAuth2/JWT, KMS, Secrets Manager, and controlled access to sensitive financial data.",
      "Performed unit, integration, contract, regression, performance, load, and recovery testing while tuning Snowflake SQL, warehouse sizing, batch processing, and service performance.",
    ],
    technologies: ["Java 17", "Spring Boot", "Snowflake", "Python", "AWS", "Kafka", "Testcontainers"],
  },
  {
    company: "Bank of America",
    role: "Java Backend Developer",
    period: "Sep 2019 — Aug 2021",
    location: "Plano, TX",
    highlights: [
      "Built Azure-hosted corporate-card, payment, expense, and financial-posting integrations with end-to-end traceability.",
      "Delivered Spring Boot services, RabbitMQ messaging, secure SFTP/PGP transfers, ERP extracts, and Oracle/MongoDB persistence.",
      "Strengthened delivery through Python/SQL reconciliation utilities, Azure AD, Key Vault, Terraform, observability, and governed CI/CD.",
    ],
    technologies: ["Java 11", "Spring Boot", "Azure AKS", "RabbitMQ", "Oracle", "MongoDB", "Python"],
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
    title: "Backend & APIs",
    items: ["Java 8/11/17", "Spring Boot", "Spring MVC", "Microservices", "REST/OpenAPI", "SOAP/WSDL"],
  },
  {
    title: "Data engineering",
    items: ["Snowflake", "Snowflake SQL", "Snowpipe", "Stages/COPY INTO", "Python ETL", "Data Sanitization"],
  },
  {
    title: "Integration & messaging",
    items: ["Kafka/MSK", "RabbitMQ", "SFTP/PGP", "Batch Processing", "Reconciliation", "Control Totals"],
  },
  {
    title: "Cloud & platform",
    items: ["AWS", "Azure", "Lambda", "S3", "Docker", "Kubernetes/AKS", "Terraform"],
  },
  {
    title: "Security & reliability",
    items: ["Snowflake RBAC", "OAuth2/OIDC", "JWT/SAML", "KMS/Key Vault", "Splunk", "OpenTelemetry"],
  },
  {
    title: "Delivery & testing",
    items: ["Jenkins", "GitHub Actions", "Maven/Gradle", "JUnit", "Testcontainers", "Selenium", "Performance Testing"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "RxJS"],
  },
  {
    title: "Datastores",
    items: ["PostgreSQL", "Oracle", "MongoDB", "DynamoDB", "MySQL", "Secure Views"],
  },
  {
    title: "Data quality & governance",
    items: ["Schema Validation", "Source-to-Target Mapping", "Audit Reporting", "Data Masking", "Encryption", "Controlled Reprocessing"],
  },
];

export const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
  "Secure Application Architecture & IAM",
  "API Security",
  "Automated Software Testing",
];
