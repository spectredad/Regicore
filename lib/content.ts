// lib/content.ts — single source of truth for all Regicore copy

export const nav = [
  { label: "Agents", href: "/#agents" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/company" },
];

export const services = [
  { icon: "01", title: "Custom AI Systems & Agents", desc: "Autonomous workflows that run tasks end-to-end." },
  { icon: "02", title: "AI Email Outreach", desc: "Cold and warm campaigns, personalised at scale." },
  { icon: "03", title: "AI Voice Callers", desc: "Inbound and outbound voice agents, on call 24/7." },
  { icon: "04", title: "Conversion Websites", desc: "Pages engineered to attract and convert." },
  { icon: "05", title: "Custom Software & Apps", desc: "Full-stack products built around your workflow." },
  { icon: "06", title: "Custom CRM", desc: "A CRM shaped to how you actually sell." },
  { icon: "07", title: "Marketing Automation", desc: "Lifecycle flows that nurture on autopilot." },
  { icon: "08", title: "Lead-Gen Systems", desc: "Pipelines that fill your calendar." },
];

export const agents = [
  {
    name: "Collections Agent",
    cardTitle: "Promise to pay",
    tag: "Collection",
    big: "$1,250",
    rowKey: "Due date",
    rowVal: "Sept 5, 2026",
    desc: "Recover more with proactive omnichannel outreach from an AI agent that follows your playbook, without extra headcount.",
  },
  {
    name: "Outreach Agent",
    cardTitle: "Sequence sent",
    tag: "Email",
    big: "842 sends",
    rowKey: "Reply rate",
    rowVal: "+62%",
    desc: "Personalised cold and warm campaigns at scale that book qualified meetings while you sleep.",
  },
  {
    name: "Voice Caller",
    cardTitle: "Call completed",
    tag: "Voice",
    big: "3m 12s",
    rowKey: "Outcome",
    rowVal: "Booked",
    desc: "Inbound and outbound voice agents that qualify, schedule and follow up 24/7 in natural conversation.",
  },
  {
    name: "Lead-Gen Agent",
    cardTitle: "Lead enriched",
    tag: "Pipeline",
    big: "3.1x",
    rowKey: "Stage",
    rowVal: "Qualified",
    desc: "Autonomous pipelines that source, enrich and route leads straight into your calendar.",
  },
  {
    name: "Ops Agent",
    cardTitle: "Task automated",
    tag: "Ops",
    big: "1,400 hrs",
    rowKey: "Saved",
    rowVal: "/quarter",
    desc: "End-to-end agentic workflows that erase manual busywork across your tools.",
  },
];

export const steps = [
  {
    step: "STEP 01",
    title: "Maps your workflows",
    desc: "Builds a graph of your tools, data and processes to find the highest-ROI automation.",
  },
  {
    step: "STEP 02",
    title: "Swarm of agents build",
    desc: "Senior engineers and parallel agents design, test and ship a custom system fast.",
  },
  {
    step: "STEP 03",
    title: "Learns & optimises over time",
    desc: "Agents read outcomes and feedback to sharpen accuracy and ROI continuously.",
  },
];

export const metrics = [
  { value: "3-6", suffix: " wks", label: "to first deployment" },
  { value: "10k", suffix: "+ hrs", label: "of manual work automated" },
  { value: "+62", suffix: "%", label: "reply rate lift for clients" },
  { value: "3.1", suffix: "x", label: "pipeline growth in 90 days" },
];

export const plans = [
  {
    name: "Starter",
    price: "From $2.5k",
    period: "/month · 90-day minimum",
    featured: false,
    badge: null,
    desc: "One focused AI workflow for teams that want to launch fast and prove ROI on a single use case.",
    features: [
      "First deployment live in week 2",
      "Measurable results within 30 days",
      "One AI workflow or agent",
      "One core integration with your existing stack",
      "Ongoing tuning and iteration",
      "Monthly performance review",
      "Your data stays yours; our proprietary systems and frameworks remain ours"
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "From $5.5k",
    period: "/month · 90-day minimum",
    featured: true,
    badge: "Most Popular",
    desc: "A multi-workflow system for companies that want AI driving revenue, support, or operations across one core department.",
    features: [
      "First deployment live in week 2",
      "Measurable results within 30 days",
      "Up to 3 connected workflows or agents",
      "Voice, email, and ops layers as needed",
      "Up to 2 core integrations",
      "Continuous optimisation and experiments",
      "Monthly strategy call + async updates",
      "Your data stays yours; our proprietary systems and frameworks remain ours"
    ],
    cta: "Book a Call",
  },
  {
    name: "Enterprise Partner",
    price: "Custom",
    period: "/from $12k per month",
    featured: false,
    badge: null,
    desc: "An embedded AI systems partner for firms that want multiple workflows deployed, improved, and expanded every month.",
    features: [
      "First deployment live in week 2",
      "Measurable results within 30 days",
      "Multi-team or multi-workflow rollout",
      "Priority support and faster delivery cadence",
      "Shared Slack and planning rhythm",
      "Custom integrations and system design",
      "Quarterly roadmap reviews",
      "Your data stays yours; our proprietary systems and frameworks remain ours"
    ],
    cta: "Talk to Us",
  },
];

export const testimonials = [
  {
    quote:
      "Regicore delivered our collections agent in 5 weeks. Recovery rates climbed 34% in the first month. We wish we'd done this two years ago.",
    name: "Sarah K.",
    role: "COO, FinTech Lender",
    initials: "SK",
    color: "bg-rust/10",
  },
  {
    quote:
      "They took a vague brief, 'we need better outreach', and shipped a system that tripled our pipeline. Senior thinking, startup speed.",
    name: "Marcus T.",
    role: "Head of Growth, B2B SaaS",
    initials: "MT",
    color: "bg-rust/10",
  },
  {
    quote:
      "The ops automation they built gave my team back 1,400 hours a quarter. That's not productivity, that's a whole new headcount without the hire.",
    name: "Priya R.",
    role: "VP Ops, PropTech Scale-up",
    initials: "PR",
    color: "bg-rust/10",
  },
];

export const team = [
  {
    name: "Varun",
    role: "Founder & Lead AI Engineer",
    bio: "",
    initials: "V",
    color: "bg-rust/10",
    credentials: ["ex-Google Brain", "8+ yrs AI/ML", "50+ agents shipped"],
  },
  {
    name: "Alex M.",
    role: "Senior Full-Stack Engineer",
    initials: "AM",
    color: "bg-rust/10",
    bio: "Full-stack specialist focused on clean integrations and production reliability.",
    credentials: [],
  },
  {
    name: "Neha S.",
    role: "AI Systems Architect",
    initials: "NS",
    color: "bg-rust/10",
    bio: "Designs multi-agent orchestration layers and builds the scaffolding that makes autonomous workflows safe.",
    credentials: [],
  },
];

export const whyPoints = [
  { title: "Custom, never off-the-shelf", desc: "Engineered around your data, tools and goals." },
  { title: "Speed of an AAA studio", desc: "First deployments in weeks, not quarters." },
  { title: "Transparent ROI", desc: "Success metrics agreed up front, reported throughout." },
  { title: "We own outcomes", desc: "Accountable to results, not just deliverables." },
];

export const faqs = [
  {
    q: "How fast can you ship a working agent?",
    a: "Most first deployments land in 3 to 6 weeks. We start with a short discovery, agree on success metrics, then build in focused sprints so you see a working system early, not a slide deck.",
  },
  {
    q: "Do we own the code and IP?",
    a: "Yes, fully. Every engagement ends with you owning the codebase, prompts, infrastructure and documentation. There is no vendor lock-in and no licensing tail.",
  },
  {
    q: "How do you measure ROI?",
    a: "Before we build anything, we agree on the numbers that matter: hours reclaimed, reply rates, recovery rates, pipeline value. We report against them throughout the engagement.",
  },
  {
    q: "Will this work with our existing tools?",
    a: "That's the point. We build around your current stack, whether that's a CRM, help desk, spreadsheets or internal tools, rather than asking your team to adopt something new.",
  },
  {
    q: "What if the agent makes mistakes?",
    a: "Every system ships with guardrails: approval steps for sensitive actions, audit logs, confidence thresholds and human handoff. You decide how much autonomy each agent gets.",
  },
  {
    q: "What does an engagement cost?",
    a: "Focused sprints start from $8k, full multi-agent builds from $20k, and ongoing partnerships are scoped case by case. Pricing is fixed and agreed before work begins.",
  },
];
