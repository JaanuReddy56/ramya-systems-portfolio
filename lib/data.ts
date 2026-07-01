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
  role: "Senior Java Software Engineer · Service Integration & Automation",
  headline:
    "I build reliable Java services and automation that make complex enterprise integrations easier to test, operate, and scale.",
  summary:
    "Senior Software Engineer with 12+ years of experience building Java and Spring Boot services, JavaScript automation, and secure enterprise integrations across banking and financial services. In recent programs, I have also used Broadcom DevTest v10.9.x to virtualize REST, SOAP, MQ, and database dependencies, while supporting Jenkins and OpenShift delivery and Snowflake data pipelines for governed analytics and reporting.",
  email: "ramyareddykoppula66@gmail.com",
  phone: "+1 972 699 5929",
  linkedIn: "https://www.linkedin.com/in/ramyaareddyk",
  location: "United States",
};

export const metrics = [
  { value: "12+", label: "years in enterprise software engineering" },
  { value: "Java + JS", label: "core languages for services and automation" },
  { value: "4", label: "integration patterns: REST, SOAP, MQ, database" },
  { value: "3", label: "recent banking, mortgage, and federal programs" },
];

export const projects: Project[] = [
  {
    title: "Banking Integration & Test Enablement Platform",
    context: "Capital One · Java services, virtual dependencies, and reporting",
    summary:
      "Built Java and Spring Boot integrations, service-virtualization capabilities, and governed data workflows that helped banking teams test earlier, reduce downstream dependency risk, and deliver changes more predictably.",
    impact: [
      "Designed secure Spring Boot REST services and Java-based integration components for banking, payment, compliance, and reporting workflows.",
      "Created and maintained Broadcom DevTest v10.9 virtual services for REST, SOAP, MQ, and database dependencies, including dynamic matching, parameterized responses, and failure simulation.",
      "Integrated JavaScript automation with Jenkins, Maven, and OpenShift delivery while supporting Snowflake reporting pipelines with staged loading, SQL validation, balancing controls, and exception handling.",
    ],
    stack: ["Java 17", "Spring Boot", "JavaScript", "Broadcom DevTest", "Snowflake", "Jenkins", "OpenShift"],
    signal: "Current banking platform work",
  },
  {
    title: "Mortgage Service & Data Integration Platform",
    context: "Freddie Mac · APIs, test enablement, and financial data",
    summary:
      "Delivered Java services, reusable integration automation, and virtual-service architectures for mortgage workflows while improving data quality and repeatability across enterprise test environments.",
    impact: [
      "Developed Java and Spring Boot services plus REST and SOAP integration adapters for mortgage, HR, payroll, banking, and partner-system workflows.",
      "Implemented Broadcom DevTest virtual services and Java/JavaScript extensions for dynamic request correlation, payload transformation, data-driven responses, and environment-aware configuration.",
      "Automated delivery through Jenkins and reusable pipeline patterns, and supported Snowflake/Python workflows for ingestion, sanitization, reconciliation, secure views, and analytics-ready reporting.",
    ],
    stack: ["Java 17", "Spring Boot", "Broadcom DevTest", "JavaScript", "Snowflake", "Python", "Jenkins"],
    signal: "Integration + data reliability",
  },
  {
    title: "Federal Financial Integration Reliability",
    context: "Veterans Affairs · Payments and external financial systems",
    summary:
      "Engineered reliable Java integration services and stable test environments for financial records, payment gateways, partner APIs, and downstream systems across development, QA, and UAT.",
    impact: [
      "Built Spring Boot services and REST/SOAP integrations for financial records, payments, analytics, and downstream reporting with strong validation and traceability.",
      "Designed Broadcom DevTest virtual services for REST, SOAP, MQ, and database dependencies, using reusable models, dynamic matching, and Java/JavaScript automation.",
      "Administered VSEs and Windows Server environments, resolved SSL and connectivity issues, integrated Jenkins workflows, and established runbooks and implementation standards.",
    ],
    stack: ["Java 17", "Spring Boot", "CA DevTest", "JavaScript", "Windows Server", "Jenkins", "REST/SOAP/MQ"],
    signal: "Reliability + operational ownership",
  },
];

export const experiences: Experience[] = [
  {
    company: "Capital One",
    role: "Senior Software Engineer",
    period: "Feb 2026 — Present",
    location: "Richmond, VA",
    highlights: [
      "Design and enhance Java 17 and Spring Boot services for banking, payment, compliance, and reporting workflows across internal and downstream systems.",
      "Build and maintain Broadcom DevTest v10.9 virtual services for REST, SOAP, MQ, and database integrations, reducing dependency constraints during development and testing.",
      "Develop Java and JavaScript automation for dynamic request matching, response parameterization, data transformation, validation, and dependency-failure simulation.",
      "Integrate automated testing and virtual services with Jenkins, Maven, GitHub Actions, and OpenShift delivery pipelines to improve repeatability and release confidence.",
      "Troubleshoot SSL, connectivity, service-image, environment, and performance issues; partner with Broadcom support; and publish standards, runbooks, and onboarding guidance.",
      "Build and optimize Snowflake reporting pipelines using staged loading, SQL transformations, validation rules, balancing controls, and governed access to financial data.",
    ],
    technologies: ["Java 17", "Spring Boot", "JavaScript", "Broadcom DevTest 10.9", "Snowflake", "Jenkins", "OpenShift"],
  },
  {
    company: "Freddie Mac",
    role: "Senior Software Engineer",
    period: "Jan 2024 — Jan 2026",
    location: "McLean, VA",
    highlights: [
      "Designed Java 17 and Spring Boot services and reusable integration adapters for mortgage, HR, payroll, banking, expense, and partner-system workflows.",
      "Implemented Broadcom DevTest virtual services for REST APIs, SOAP/WSDL interfaces, MQ messaging, and database dependencies across enterprise applications.",
      "Built Java and JavaScript extensions for request correlation, payload manipulation, response validation, test-data parameterization, and environment-specific configuration.",
      "Automated service deployment and regression execution through Jenkins pipelines, performed root-cause analysis, and mentored teams on service design and maintainability.",
      "Supported Snowflake and Python data workflows for ingestion, sanitization, reconciliation, secure reporting, and audit-ready datasets alongside Kafka, AWS, and OpenShift platforms.",
    ],
    technologies: ["Java 17", "Spring Boot", "JavaScript", "Broadcom DevTest", "Snowflake", "Python", "Jenkins", "OpenShift"],
  },
  {
    company: "Veterans Affairs Financial Services Center",
    role: "Senior Software Engineer",
    period: "Sep 2021 — Dec 2023",
    location: "Austin, TX",
    highlights: [
      "Developed Java 17 and Spring Boot backend services for financial records, payments, analytics, reporting, and secure downstream integrations.",
      "Designed Broadcom DevTest virtual services for external financial systems, payment gateways, partner APIs, MQ integrations, and database-dependent applications.",
      "Developed Java and JavaScript automation for dynamic request matching, response parameterization, JSON/XML processing, validation, and dependency simulation.",
      "Configured VSEs and Windows Server 2019 environments and resolved certificate, endpoint, network, service-image, and platform-performance issues.",
      "Integrated virtual services with Jenkins pipelines, created reusable templates and operational standards, and delivered knowledge transfer to development and QA teams.",
    ],
    technologies: ["Java 17", "Spring Boot", "JavaScript", "Broadcom DevTest", "Windows Server 2019", "Jenkins", "Snowflake"],
  },
  {
    company: "Bank of America",
    role: "Senior Software Engineer",
    period: "Sep 2019 — Aug 2021",
    location: "Plano, TX",
    highlights: [
      "Built banking integrations for corporate-card, payment, expense, and financial-posting workflows using Java, Spring Boot, REST APIs, messaging, and secure file transfer.",
      "Developed JavaScript utilities for test-data generation, mocked responses, payload validation, and repeatable integration-test scenarios.",
      "Operated containerized workloads and delivery pipelines across OpenShift and AKS, including health probes, resource controls, deployment automation, and production troubleshooting.",
      "Partnered with treasury, finance, compliance, security, and application teams to define mappings, test coverage, operational controls, and release readiness.",
    ],
    technologies: ["Java 11", "Spring Boot", "JavaScript", "OpenShift/AKS", "RabbitMQ", "Azure DevOps"],
  },
  {
    company: "Liberty Mutual Insurance",
    role: "Senior Software Engineer",
    period: "Apr 2018 — Aug 2019",
    location: "Boston, MA",
    highlights: [
      "Developed Spring Boot services for policy, renewal, and claims workflows with versioned APIs, resilient integration patterns, and predictable production behavior.",
      "Created scripting frameworks for log aggregation, exception tracking, artifact checks, configuration validation, and deployment-readiness automation.",
      "Implemented OpenShift rolling, blue-green, and canary release strategies with Docker, Terraform, observability, and secure cloud infrastructure.",
    ],
    technologies: ["Java 8/11", "Spring Boot", "OpenShift", "Docker", "AWS", "Jenkins"],
  },
  {
    company: "Best Buy",
    role: "Senior Software Engineer",
    period: "Dec 2016 — Mar 2018",
    location: "Richfield, MN",
    highlights: [
      "Engineered loyalty and rewards services using Spring Boot, React, RabbitMQ, Oracle, and MongoDB for high-volume retail journeys.",
      "Built custom scripts for batch processing, file transformations, scheduled jobs, test support, and repeatable environment automation.",
      "Standardized container deployments with OpenShift templates, Helm charts, Azure DevOps pipelines, observability, and progressive release controls.",
    ],
    technologies: ["Java 8", "Spring Boot", "JavaScript", "OpenShift", "React", "Azure DevOps"],
  },
  {
    company: "Aspire Systems",
    role: "Software Engineer",
    period: "Aug 2013 — Oct 2015",
    location: "Chennai, India",
    highlights: [
      "Built Java and Spring services, AngularJS interfaces, and RabbitMQ integrations for enterprise customer-data synchronization.",
      "Automated configuration updates, certificate validation, startup verification, testing, packaging, and deployment through custom scripts and Jenkins pipelines.",
      "Containerized services with Docker and OpenShift and established monitoring, health checks, and support runbooks across environments.",
    ],
    technologies: ["Java 8", "Spring MVC", "JavaScript", "Jenkins", "Docker", "OpenShift"],
  },
];

export const skillGroups = [
  {
    title: "Java & service engineering",
    items: ["Java 8/11/17", "Spring Boot", "JavaScript", "Microservices", "REST APIs", "SOAP/WSDL", "API Integration"],
  },
  {
    title: "Service virtualization",
    items: ["Broadcom DevTest 10.9.x", "CA DevTest", "Virtual Service Design", "Dependency Virtualization", "Service Simulation", "Service Modeling"],
  },
  {
    title: "DevTest platform operations",
    items: ["VSE Administration", "Registry Management", "Service Images", "Environment Properties", "SSL/Endpoint Troubleshooting", "Broadcom Support"],
  },
  {
    title: "Data & event platforms",
    items: ["Snowflake", "Snowflake SQL", "Python ETL", "Kafka", "RabbitMQ", "PostgreSQL", "DynamoDB", "Data Validation"],
  },
  {
    title: "Automation & testing",
    items: ["JavaScript Automation", "DevTest Automation", "Integration Testing", "Regression Testing", "JUnit", "Testcontainers", "Selenium", "SOAP UI"],
  },
  {
    title: "Infrastructure & containers",
    items: ["Windows Server 2019/2022", "OpenShift", "Docker", "Kubernetes", "AKS", "AWS", "Azure"],
  },
  {
    title: "CI/CD & delivery",
    items: ["Jenkins Pipelines", "Maven", "GitHub Actions", "Azure DevOps", "Git", "Deployment Pipelines", "Release Automation"],
  },
  {
    title: "Security & observability",
    items: ["OAuth2/JWT", "IAM/RBAC", "Secrets Management", "TLS/SSL", "Splunk", "CloudWatch", "OpenTelemetry"],
  },
  {
    title: "Leadership & operations",
    items: ["Agile Scrum", "Stakeholder Management", "Root Cause Analysis", "Runbooks", "Implementation Standards", "Knowledge Transfer"],
  },
];

export const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
  "Secure Application Architecture & IAM",
  "API Security",
  "Automated Software Testing",
];
