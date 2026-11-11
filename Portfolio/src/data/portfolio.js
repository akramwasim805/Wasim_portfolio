// Content reflects the latest user-supplied portfolio brief, which updates the original PDF.
// Before external publication, reconcile the downloadable PDF with these updated dates/metrics.
// Add real, approved assets and URLs below. Empty values are not rendered.
export const profile = {
  name: 'Wasim Akram',
  role: 'Technical Lead | Backend Engineering & Distributed Systems',
  email: 'akramwasim805@gmail.com',
  whatsapp: '+91 9673236394',
  location: 'Mahidpur, India',
  linkedin: 'https://www.linkedin.com/in/wasim-akram-6097a743/',
  resume: `${import.meta.env.BASE_URL}Wasim_Akram_Resume.pdf`,
  headshot: `${import.meta.env.BASE_URL}images/wasim-akram-portrait.jpeg`,
  teamPhoto: '', // Public asset URL for an approved team photo.
  introduction: 'I’m a hands-on engineering lead with 13+ years of experience building and improving software across travel, healthcare, SaaS, mobility and agricultural trading. I help teams design reliable systems, improve performance and deliver complex products from architecture through deployment.',
}

export const proofPoints = [
  { value: '13+ years', caption: 'Software engineering and technical leadership' },
  { value: '25% lower API latency', caption: 'Backend performance improvements at Flyhomes' },
  { value: '100 → 10,000 users', caption: 'HealthPlix Patient Service, within one month' },
]

export const skills = [
  { name: 'Frontend', items: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite'] },
  { name: 'Backend', items: ['Java', 'Spring Boot', 'Go', 'Python', 'FastAPI', 'Node.js'] },
  { name: 'Data & messaging', items: ['PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'Amazon SQS', 'MongoDB'] },
  { name: 'Cloud, security & delivery', items: ['AWS', 'Google Cloud (GCP)', 'Cloud security', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'] },
  { name: 'AI, ML & automation', items: ['Artificial intelligence (AI)', 'Machine learning (ML)', 'Large language models (LLMs)', 'Retrieval-augmented generation (RAG)', 'AI automation', 'n8n'] },
  { name: 'Data analysis & annotation', items: ['Data analysis', 'Data annotation'] },
  { name: 'QA & testing', items: ['QA engineering', 'Software testing'] },
  { name: 'Engineering leadership', items: ['System design', 'Technical planning', 'Code reviews', 'Mentoring', 'Observability', 'Production troubleshooting'] },
]

export const projects = [
  {
    id: 'flyhomes', number: '01', company: 'Flyhomes', category: 'Modernization', featured: true,
    title: 'Faster APIs. Shorter deployments.',
    summary: 'Helped modernize the backend, reducing API latency by 25% and deployment time by 40%.',
    impact: '25% lower API latency · 40% shorter deployment time',
    technologies: ['Python', 'FastAPI', 'Microservices', 'CI/CD'],
    diagram: ['Monolith', 'Separate services', 'Delivery'],
    challenge: 'The application needed to scale, and the team needed a faster way to deploy changes. Slow API paths also required attention.',
    role: 'As a Senior Software Engineer, I contributed to the migration from a monolith to microservices and worked directly on backend performance improvements.',
    actions: ['Refactored backend code and contributed to the move from a monolith to Python microservices.', 'Optimized database schemas and indexes, and used caching to improve response times.', 'Contributed to CI/CD improvements and supported backend delivery across teams.'],
    result: 'API latency decreased by 25%, and deployment time decreased by 40%. These are separate measures of backend responsiveness and release efficiency.',
    metrics: [{ value: '25%', label: 'Lower API latency' }, { value: '40%', label: 'Shorter deployment time' }],
    caption: 'Illustrative modernization diagram with the two reported improvements shown separately.',
    demo: '',
  },
  {
    id: 'enam', number: '02', company: 'Akalinfo / eNAM', category: 'Business workflows', featured: true,
    title: 'Connecting the agricultural trade.',
    summary: 'Led technical delivery across trading and post-trade workflows, from produce lots and weighment to billing, payment status and transit permits.',
    impact: 'Technical ownership across core trading and post-trade modules.',
    technologies: ['Java', 'Business workflows', 'Production troubleshooting'],
    diagram: ['Lot', 'Weighment', 'Agreement', 'Sale Bill', 'Payment status / e-Permit'],
    challenge: 'A trade moves through several connected stages. Information captured early in the process must remain consistent as downstream teams generate agreements, bills and permits.',
    role: 'As Technical Lead, I own delivery across several core modules while remaining hands-on with Java development and production issue resolution.',
    actions: ['Built the initial Master Data Management and Lot modules.', 'Guided implementation across Weighment, Agreement, Sale Bill, Payment and e-Permit.', 'Investigated issues spanning multiple services and fixed problems that interrupted transaction progression.'],
    result: 'The work supported a connected flow across core trading and post-trade modules. This case study demonstrates complex workflow delivery and technical ownership; no measured performance outcome is reported.',
    metrics: [],
    caption: 'Illustrative workflow using generic module names. This is a conceptual overview, not proprietary architecture or a complete dependency map.',
    demo: '',
  },
  {
    id: 'patient-platform', number: '03', company: 'HealthPlix', category: 'Scale & reliability', featured: true,
    title: 'A Patient Service, built to grow.',
    summary: 'Built a Patient Service that scaled from 100 to 10,000 users within one month.',
    impact: '100 to 10,000 users supported within one month.',
    technologies: ['Go', 'CI/CD', 'Distributed tracing'],
    diagram: ['Patient app', 'Patient Service', 'Notifications'],
    challenge: 'The Patient Service needed to support rapid user growth while keeping deployments manageable and production issues easier to diagnose.',
    role: 'As Principal Software Engineer, I built the service and contributed to engineering practices across teams.',
    actions: ['Built the Patient Service and improved its architecture.', 'Automated deployments and established CI/CD quality checks.', 'Built a centralized notification service and introduced monitoring and distributed tracing.'],
    result: 'The Patient Service scaled from 100 to 10,000 users within one month.',
    metrics: [{ value: '100', label: 'Starting user count' }, { value: '10,000', label: 'Within one month' }],
    caption: 'Illustrative service diagram and reported starting and ending user counts. No daily growth trajectory is implied.',
    demo: '',
  },
  {
    id: 'flows', number: '04', company: 'MoEngage', category: 'Real-time systems', featured: false,
    title: 'Campaigns, closer to real time.',
    summary: 'Built a campaign notification system that reduced delivery time from two minutes to near real time.',
    impact: 'Two minutes → near real time for campaign notification delivery.',
    technologies: ['Java', 'Apache Samza', 'Event processing'],
    diagram: ['Customer event', 'Campaign rules', 'Notification'],
    challenge: 'Campaign notifications took about two minutes to arrive, and the automation product needed to support more campaign types as it moved from beta toward production.',
    role: 'As Lead Software Engineer, I led a team of five to six engineers and contributed directly to event processing and notification delivery.',
    actions: ['Built the campaign notification system.', 'Redesigned Apache Samza event-processing jobs.', 'Added support for in-app and time-based campaigns while leading engineering delivery.'],
    result: 'Campaign notification delivery went from two minutes to near real time.',
    metrics: [{ value: '2 minutes', label: 'Before' }, { value: 'Near real time', label: 'After' }],
    caption: 'Illustrative event flow. Before and after labels describe delivery time without implying a verified result in seconds.',
    demo: '',
  },
  {
    id: 'ola', number: '05', company: 'Ola', category: 'APIs & services', featured: false,
    title: 'The services behind the ride.',
    summary: 'Developed driver APIs, built number masking, and contributed to migrating the driver backend from PHP to Node.js.',
    impact: 'Number masking protected contact details between drivers and customers.',
    technologies: ['Node.js', 'PHP', 'REST APIs'],
    diagram: ['Driver app', 'Driver APIs', 'Rider privacy'],
    challenge: 'Driver-facing services needed to support everyday ride operations while protecting customer and driver contact details.',
    role: 'As Software Development Engineer II, I contributed across requirements, design, implementation, reviews and deployment.',
    actions: ['Developed GoHome, status and position update, login/logout, and duty change APIs.', 'Implemented an end-to-end number masking service.', 'Contributed to the PHP-to-Node.js migration of the driver backend.'],
    result: 'Delivered driver APIs and a number masking service while contributing to backend modernization.',
    metrics: [], caption: 'Illustrative overview of driver services and number masking, based on the supplied resume.',
    demo: '',
  },
]

export const services = [
  { title: 'Web development', description: 'Customer portals, dashboards, admin panels and business web applications.', type: 'build-product' },
  { title: 'Mobile app development', description: 'iOS and Android apps, API integration and release support, depending on project scope.', type: 'build-product' },
  { title: 'Backend & integrations', description: 'APIs, databases, event processing, business workflows and third-party integrations.', type: 'improve-system' },
  { title: 'SaaS product development', description: 'MVPs and SaaS applications with accounts, permissions, billing and reporting.', type: 'build-product' },
  { title: 'Cloud & DevOps', description: 'Deployment pipelines, cloud infrastructure, monitoring and operational support.', type: 'improve-system' },
  { title: 'AI integration & automation', description: 'Document assistants, information extraction, AI search and workflows with human review.', type: 'automate-workflow' },
]
export const inquiryTypes = [
  { value: 'build-product', label: 'Build a Product', description: 'Take an idea from development through launch.' },
  { value: 'improve-system', label: 'Improve an Existing System', description: 'Modernize, scale or strengthen what you already have.' },
  { value: 'automate-workflow', label: 'Automate a Workflow', description: 'Connect the steps that slow your team down.' },
]
export const experience = [
  { company: 'Akalinfo', role: 'Technical Lead', date: 'Apr 2025 — Present', detail: 'Leads technical delivery across eNAM trading workflows, including weighment, agreements, sale bills, payment status and transit permits.' },
  { company: 'Agoda', role: 'Lead Software Engineer', date: 'Nov 2024 — Apr 2025', detail: 'Built supplier notification automation and led an airport rerouting rule engine.' },
  { company: 'HealthPlix', role: 'Principal Software Engineer', date: 'Jul 2023 — Apr 2024', location: 'Bangalore', detail: 'Built and scaled the Patient Service from 100 to 10,000 users within one month.' },
  { company: 'Flyhomes', role: 'Senior Software Engineer', date: 'Oct 2021 — Jun 2023', location: 'New Delhi', detail: 'Helped reduce API latency by 25% and deployment time by 40% through backend modernization.' },
  { company: 'MoEngage', role: 'Lead Software Engineer', date: 'Nov 2018 — Aug 2021', location: 'Bangalore', detail: 'Led engineering delivery for campaign automation and reduced notification delivery from two minutes to near real time.' },
  { company: 'Ola', role: 'Software Development Engineer II', date: 'Jul 2015 — Nov 2018', location: 'Bangalore', detail: 'Built driver APIs and an end-to-end phone number masking service.' },
  { company: 'Veritas / Symantec', role: 'Software Engineer', date: 'Jun 2012 — Jun 2015', location: 'Pune', detail: 'Developed storage and Linux file system features for NAS appliances and Symantec FileStore.' },
]
export const education = [
  { school: 'Indian Institute of Technology, Roorkee', degree: 'Master of Computer Applications', year: '2012' },
  { school: 'Vikram University, Ujjain', degree: 'B.Sc. in Computer Science', year: '2008' },
]
