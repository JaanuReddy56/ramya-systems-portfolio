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
  role: "Senior Software Engineer · Broadcom DevTest & Java",
  headline:
    "I virtualize complex service dependencies so teams can test earlier and ship banking software with confidence.",
  summary:
    "Senior Software Engineer with 12+ years of experience across banking and financial services, specializing in Broadcom DevTest v10.9.x, enterprise service virtualization, Java and JavaScript automation, and integration testing. Experienced in designing REST, SOAP, MQ, and database virtual services; operating VSE environments; troubleshooting platform issues; and integrating virtual services with Jenkins, Maven, OpenShift, and governed delivery pipelines.",
  email: "ramyareddykoppula66@gmail.com",
  phone: "+1 972 699 5929",
  linkedIn: "https://www.linkedin.com/in/ramyaareddyk",
  location: "United States",
};

export const metrics = [
  { value: "12+", label: "years in enterprise software engineering" },
  { value: "3", label: "recent DevTest engagements" },
  { value: "4", label: "virtualized interface patterns: REST, SOAP, MQ, database" },
  { value: "10.9.x", label: "Broadcom DevTest platform experience" },
];

export const projects: Project[] = [
  {
    title: "Enterprise Banking Service Virtualization Platform",
    context: "Capital One · Payments and banking integrations",
    summary:
      "Built and operated a Broadcom DevTest service-virtualization capability that removed unavailable downstream systems from the critical path of development, integration testing, and release validation.",
    impact: [
      "Designed and maintained REST, SOAP, MQ, and database virtual services in Broadcom DevTest v10.9, including dynamic request matching, response parameterization, and complex business simulations.",
      "Configured VSE deployments, registries, service images, repositories, and environment properties while resolving SSL, endpoint, connectivity, and platform-performance issues with Broadcom support.",
      "Integrated Java and JavaScript automation, reusable service templates, and Jenkins/Maven pipelines to enable repeatable regression testing, parallel delivery, and consistent enterprise onboarding.",
    ],
    stack: ["Broadcom DevTest 10.9", "Java", "JavaScript", "REST/SOAP", "Jenkins", "OpenShift"],
    signal: "Current specialization",
  },
  {
    title: "Mortgage Integration Test Acceleration",
    context: "Freddie Mac · Internal and third-party dependencies",
    summary:
      "Implemented reusable virtual-service architectures for mortgage and banking applications so teams could validate integrations before dependent services and test data were available.",
    impact: [
      "Created and maintained DevTest virtual services for REST APIs, SOAP/WSDL interfaces, MQ messaging, and database-dependent workflows across enterprise applications.",
      "Developed Java and JavaScript extensions for request correlation, payload transformation, dynamic responses, data-driven scenarios, and environment-specific configuration.",
      "Automated virtual-service deployment through Jenkins pipelines, standardized implementation patterns, performed root-cause analysis, and mentored teams on service-virtualization adoption.",
    ],
    stack: ["Broadcom DevTest", "Java", "JavaScript", "Jenkins", "OpenShift", "SOAP/WSDL"],
    signal: "Enterprise test enablement",
  },
  {
    title: "Federal Financial Service Simulation",
    context: "Veterans Affairs · Payments and external financial systems",
    summary:
      "Delivered virtual services for external financial systems, payment gateways, and partner APIs, creating stable integration-test environments across development, QA, and UAT.",
    impact: [
      "Designed REST, SOAP, MQ, and database service simulations with reusable models, dynamic matching, response parameterization, and data-driven behavior.",
      "Administered DevTest VSEs, registries, service images, and Windows Server 2019 environments while diagnosing certificate, network, endpoint, and service-image failures.",
      "Connected virtual services to Jenkins delivery workflows, created operational standards and runbooks, and coached development and QA teams on effective dependency virtualization.",
    ],
    stack: ["CA DevTest", "Windows Server", "Java", "JavaScript", "Jenkins", "REST/SOAP/MQ"],
    signal: "Reliability + adoption",
  },
];

export const experiences: Experience[] = [
  {
    company: "Capital One",
    role: "Senior Software Engineer",
    period: "Feb 2026 — Present",
    location: "Richmond, VA",
    highlights: [
      "Design and maintain enterprise virtual services in Broadcom DevTest v10.9 for REST, SOAP, MQ, and database integrations supporting banking and payment applications.",
      "Configure VSE deployments, registries, service-image repositories, environment properties, and reusable onboarding templates across multiple testing environments.",
      "Develop custom Java and JavaScript extensions for dynamic request matching, parameterized responses, data transformation, validation, and dependency-failure simulation.",
      "Integrate DevTest services with Jenkins and Maven pipelines to automate regression execution, reduce downstream dependencies, and enable parallel development and testing.",
      "Troubleshoot SSL, connectivity, service-image, and performance issues; partner with Broadcom support; and publish architecture standards, runbooks, and implementation guidance.",
      "Complement service virtualization with OpenShift delivery, Spring Boot services, Kafka integrations, and Snowflake reporting pipelines in a governed banking environment.",
    ],
    technologies: ["Broadcom DevTest 10.9", "Java", "JavaScript", "Jenkins", "Maven", "OpenShift", "REST/SOAP/MQ"],
  },
  {
    company: "Freddie Mac",
    role: "Senior Software Engineer",
    period: "Jan 2024 — Jan 2026",
    location: "McLean, VA",
    highlights: [
      "Implemented Broadcom DevTest virtual services for mortgage and banking applications, simulating internal platforms, third-party APIs, messaging systems, and database dependencies.",
      "Built Java and JavaScript extensions for dynamic request correlation, payload manipulation, response validation, test-data parameterization, and environment-aware configuration.",
      "Automated virtual-service deployment and execution through Jenkins pipelines and reusable DevTest automation frameworks, improving repeatability across integration and regression testing.",
      "Performed root-cause analysis for environment and platform issues, standardized service-virtualization patterns, and mentored application teams on virtual-service design and maintenance.",
      "Supported OpenShift-based application lifecycle management along with Java, Python, Kafka, AWS, Snowflake, and automated end-to-end testing workflows.",
    ],
    technologies: ["Broadcom DevTest", "Java", "JavaScript", "Jenkins", "OpenShift", "REST/SOAP", "MQ"],
  },
  {
    company: "Veterans Affairs Financial Services Center",
    role: "Senior Software Engineer",
    period: "Sep 2021 — Dec 2023",
    location: "Austin, TX",
    highlights: [
      "Designed Broadcom DevTest virtual services for external financial systems, payment gateways, partner APIs, MQ integrations, and database-dependent applications.",
      "Configured and administered VSEs, registries, service images, and environment properties across development, QA, and UAT environments hosted on Windows Server 2019.",
      "Developed Java and JavaScript automation for dynamic request matching, response parameterization, JSON/XML parsing, validation, and dependency simulation.",
      "Diagnosed SSL certificate, endpoint, network, service-image, and platform-performance issues, coordinating with Broadcom support to apply fixes and recommended practices.",
      "Integrated virtual services with Jenkins pipelines, established reusable templates and operational standards, and delivered knowledge transfer to development and QA teams.",
    ],
    technologies: ["Broadcom DevTest", "Windows Server 2019", "Java", "JavaScript", "Jenkins", "REST/SOAP/MQ"],
  },
  {
    company: "Bank of America",
    role: "Senior Software Engineer",
    period: "Sep 2019 — Aug 2021",
    location: "Plano, TX",
    highlights: [
      "Built banking integrations for corporate-card, payment, expense, and financial-posting workflows using Java, Spring Boot, REST APIs, messaging, and secure file transfer.",
      "Developed JavaScript utilities for test-data generation, mocked responses, payload validation, and repeatable integration-test scenarios.",
      "Operated containerized workloads and delivery pipelines across OpenShift/AKS, including health probes, resource controls, deployment automation, and production troubleshooting.",
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
    title: "Service virtualization",
    items: ["Broadcom DevTest 10.9.x", "CA DevTest", "Virtual Service Design", "Dependency Virtualization", "Service Simulation", "Service Modeling"],
  },
  {
    title: "DevTest platform",
    items: ["VSE Administration", "Registry Management", "Service Images", "Environment Properties", "SSL/Endpoint Troubleshooting", "Broadcom Support"],
  },
  {
    title: "Virtualized protocols",
    items: ["REST APIs", "SOAP/WSDL", "MQ Messaging", "Database Dependencies", "JSON/XML", "Dynamic Request Matching"],
  },
  {
    title: "Programming & scripting",
    items: ["Java 8/11/17", "JavaScript", "Python", "TypeScript", "SQL", "Shell Scripting"],
  },
  {
    title: "Automation & testing",
    items: ["DevTest Automation", "Integration Testing", "Regression Testing", "JUnit", "Testcontainers", "Selenium", "SOAP UI"],
  },
  {
    title: "Infrastructure & containers",
    items: ["Windows Server 2019/2022", "OpenShift", "Docker", "Kubernetes", "AKS", "Environment Configuration"],
  },
  {
    title: "CI/CD & delivery",
    items: ["Jenkins Pipelines", "Maven", "GitHub Actions", "Azure DevOps", "Git", "Deployment Pipelines", "Release Automation"],
  },
  {
    title: "Enterprise engineering",
    items: ["Spring Boot", "Microservices", "Kafka", "RabbitMQ", "AWS", "Azure", "Snowflake", "Secure Integrations"],
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
