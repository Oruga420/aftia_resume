import Head from 'next/head';
import { useCallback } from 'react';

const contact = {
  name: 'Alejandro De La Mora',
  email: 'alex@seshwithfriends.org',
  phone: '+1 437 243 3693',
  linkedin: 'https://www.linkedin.com/in/amorac/',
  website: 'http://www.eloruga.com',
  github: 'https://github.com/Oruga420',
  role: 'AI Solutions Architect',
};

const summaryText =
  'AI Solutions Architect with a "Forward Deployed" mindset, specializing in architecting LLM workflows that reach production rather than staying in demo purgatory. Expert in bridging the gap between technical complexity and business outcomes, with over 120 GenAI applications shipped for 30+ clients. Proven track record of driving AI adoption from 47% to 97% and delivering over $1M in operational savings through agentic workflows and automation. Proficient in Full Stack dev (Next.js, Node), Cloud (GCP, AWS, Vercel), and Enterprise integrations (Salesforce, Adobe Experience Manager history).';

const expertise = [
  'OpenAI',
  'Anthropic',
  'Gemini',
  'RAG Pipelines',
  'Agentic Workflows',
  'Next.js',
  'React',
  'Node.js',
  'GraphQL',
  'REST APIs',
  'GCP',
  'AWS',
  'Vercel',
  'Salesforce',
  'Adobe Experience Manager',
  'Zapier',
  'English (Native/Bilingual)',
  'Spanish (Full Professional)',
];

const experience = [
  {
    title: 'AI Solutions Architect',
    company: 'Assent',
    location: 'Remote',
    dates: 'February 2025 - Present',
    bullets: [
      'Driving the mission to bring GenAI into a regulated compliance platform, ensuring safety, auditability, and utility.',
      'Architected internal tools and agentic workflows that have collectively saved the company over 20,000 hours and more than $1 Million USD in operational costs.',
      'Successfully drove internal AI adoption metrics from 47% to 97% through tooling utility and education.',
      'Developed custom MCP servers and live RAG connections to expose compliance data safely to LLMs.',
      'Managed the full lifecycle from prototyping to production governance across Salesforce, internal apps, and Cloud infrastructure.',
    ],
  },
  {
    title: 'AI Solutions Architect',
    company: 'Sesh | Ai Solutions',
    location: 'Toronto, Ontario',
    dates: 'November 2021 - Present',
    bullets: [
      'Designed the architecture for over 120 GenAI applications across 30+ different clients, including 90+ chatbots solving real-world problems.',
      'Utilizes GCP, AWS, and Vercel to deploy scalable AI-ready websites and marketing engines.',
      'Leads a 100+ person community, teaching practical AI implementation, conducting free classes, and holding open office hours to demystify AI tools.',
      'Delivers GenAI training and workflows for communities like Latinas in Tech and Somos Latinos in Tech Ottawa.',
    ],
  },
  {
    title: 'Salesforce Consultant',
    company: 'Online Business Systems',
    location: 'Toronto, Ontario',
    dates: 'June 2024 - November 2024',
    bullets: [
      'Focused on Agentforce (AI Agents) and Marketing Cloud Account Engagement implementation.',
      'Configured AI assistants and copilot-style experiences, defining use cases and wiring data access safely for enterprise clients.',
      'Developed reusable patterns to accelerate client onboarding and reduce technical debt.',
    ],
  },
  {
    title: 'Salesforce Manager',
    company: 'Globalization Partners',
    location: 'Ontario, Canada',
    dates: 'November 2018 - November 2023',
    bullets: [
      "Transitioned from Admin to AI/Dev lead, building 'GIA', an internal GenAI chatbot for company-wide support.",
      'Implemented GenAI-powered workflows for Jira ticket handling and AI-assisted development (Vibe coding).',
      'Managed a Salesforce org with 1,000+ licenses, ensuring scalability and integration across sales and operations.',
    ],
  },
  {
    title: 'Project Manager',
    company: 'Amstar DMC',
    location: 'Guadalajara, Mexico',
    dates: 'May 2016 - November 2018',
    bullets: [
      'Managed complex web and integration projects involving Adobe Experience Manager (AEM), directly relevant to content workflow automation.',
      'Oversaw budgets up to $700,000 USD and led cross-functional teams of up to 18 people.',
    ],
  },
];

const education = [
  {
    degree: 'Ingenieria en Sistemas (Systems Engineering)',
    school: 'Universidad Marista de MAcrida',
    dates: '2004 - 2007',
  },
];

export default function Home() {
  const handlePrint = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{contact.name} | {contact.role}</title>
        <meta
          name="description"
          content="Resume-style website for Alejandro De La Mora built in Next.js with playful blue visuals."
        />
      </Head>
      <div className="page">
        <div className="bg-bubbles">
          <span className="bubble bubble-one" aria-hidden="true" />
          <span className="bubble bubble-two" aria-hidden="true" />
          <span className="bubble bubble-three" aria-hidden="true" />
        </div>
        <header className="header">
          <div>
            <p className="role-tag">Role</p>
            <h1 className="name">{contact.name}</h1>
            <p className="role">{contact.role}</p>
          </div>
          <div className="contact-card">
            <h2 className="contact-title">Reach Me</h2>
            <a href={`tel:${contact.phone}`} className="contact-link">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="contact-link">{contact.email}</a>
            <a href={contact.linkedin} className="contact-link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contact.website} className="contact-link" target="_blank" rel="noreferrer">
              Website
            </a>
            <a href={contact.github} className="contact-link" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <main>
          <section className="panel">
            <div className="panel-heading">
              <h2>Professional Summary</h2>
              <div className="print-button">
                <button onClick={handlePrint}>Download PDF</button>
              </div>
            </div>
            <p className="summary">{summaryText}</p>
          </section>

          <section className="panel">
            <h2>Areas of Expertise</h2>
            <div className="chips">
              {expertise.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </section>

          <section className="panel">
            <h2>Work Experience</h2>
            <div className="timeline">
              {experience.map((job) => (
                <article key={`${job.company}-${job.title}`} className="card">
                  <div className="card-header">
                    <div>
                      <p className="card-title">{job.title}</p>
                      <p className="card-subtitle">{job.company} | {job.location}</p>
                    </div>
                    <p className="card-dates">{job.dates}</p>
                  </div>
                  <ul className="card-list">
                    {job.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="panel">
            <h2>Education</h2>
            <div className="card">
              {education.map((edu) => (
                <div key={edu.degree} className="card-row">
                  <p className="card-title">{edu.degree}</p>
                  <p className="card-subtitle">{edu.school}</p>
                  <p className="card-dates">{edu.dates}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
