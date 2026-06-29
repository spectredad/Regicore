// lib/content.ts — single source of truth for all Regicore copy

export const nav = [
  { label: "Platform", href: "/#platform" },
  { label: "Company", href: "/company" },
  { label: "Newsroom", href: "/#newsroom" },
];

export const services = [
  { icon: "01", title: "Custom AI Systems & Agents", desc: "Autonomous workflows that run tasks end-to-end.", bg: "bg-pink" },
  { icon: "02", title: "AI Email Outreach", desc: "Cold & warm campaigns personalised at scale.", bg: "bg-mint" },
  { icon: "03", title: "AI Voice Callers", desc: "Inbound & outbound voice agents, 24/7.", bg: "bg-sky" },
  { icon: "04", title: "Conversion Websites", desc: "Pages engineered to attract and convert.", bg: "bg-peach" },
  { icon: "05", title: "Custom Software & Apps", desc: "Full-stack products around your workflow.", bg: "bg-lav" },
  { icon: "06", title: "Custom CRM", desc: "A CRM shaped to how you actually sell.", bg: "bg-pink" },
  { icon: "07", title: "Marketing Automation", desc: "Lifecycle flows that nurture on autopilot.", bg: "bg-mint" },
  { icon: "08", title: "Lead-Gen Systems", desc: "Pipelines that fill your calendar.", bg: "bg-sky" },
];

export const agents = [
  {
    name: "Collections Agent",
    cardTitle: "◈ Promise to pay",
    tag: "Collection",
    big: "$1,250",
    rowKey: "Due date",
    rowVal: "Sept 5, 2026",
    desc: "Recover more with proactive omnichannel outreach from an AI agent that follows your playbook — no extra headcount.",
  },
  {
    name: "Outreach Agent",
    cardTitle: "✉ Sequence sent",
    tag: "Email",
    big: "842 sends",
    rowKey: "Reply rate",
    rowVal: "+62%",
    desc: "Personalised cold & warm campaigns at scale that book qualified meetings while you sleep.",
  },
  {
    name: "Voice Caller",
    cardTitle: "☎ Call completed",
    tag: "Voice",
    big: "3m 12s",
    rowKey: "Outcome",
    rowVal: "Booked",
    desc: "Inbound & outbound voice agents that qualify, schedule and follow up 24/7 in natural conversation.",
  },
  {
    name: "Lead-Gen Agent",
    cardTitle: "⚡ Lead enriched",
    tag: "Pipeline",
    big: "3.1x",
    rowKey: "Stage",
    rowVal: "Qualified",
    desc: "Autonomous pipelines that source, enrich and route leads straight into your calendar.",
  },
  {
    name: "Ops Agent",
    cardTitle: "⌘ Task automated",
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

export const cases = [
  {
    client: "FinTech Lender",
    tag: "Collections",
    problem: "Manual collectors spending 60 % of time on low-value follow-ups.",
    built: "AI Collections Agent with omnichannel outreach (SMS, email, voice) following their playbook.",
    result: "+34 % promise-to-pay rate. Collector headcount held flat through 3× volume growth.",
    bg: "bg-pink",
  },
  {
    client: "B2B SaaS",
    tag: "Outreach",
    problem: "SDR team sending generic sequences at low volume — 3 % reply rate.",
    built: "AI Outreach Agent personalising every email from prospect's LinkedIn + company signals.",
    result: "Reply rate climbed to +62 %. Pipeline grew 3.1× in 90 days.",
    bg: "bg-mint",
  },
  {
    client: "PropTech Scale-up",
    tag: "Ops Automation",
    problem: "Ops team burning 1,400 hrs/quarter on data entry and status reporting.",
    built: "Agentic workflow connecting CRM, Notion and Slack — auto-updating records and surfacing blockers.",
    result: "1,400 hrs reclaimed per quarter. Ops team redeployed to strategy.",
    bg: "bg-sky",
  },
];

export const metrics = [
  { value: "3–6", suffix: " wks", label: "to first deployment", bg: "bg-pink" },
  { value: "10k", suffix: "+ hrs", label: "automated", bg: "bg-mint" },
  { value: "+62", suffix: "%", label: "reply rate lift", bg: "bg-lav" },
  { value: "3.1", suffix: "x", label: "pipeline in 90 days", bg: "bg-sky" },
];

export const plans = [
  {
    name: "Starter Sprint",
    price: "From $8k",
    period: "one-time project",
    featured: false,
    badge: null,
    desc: "One focused agent or automation. Ideal for validating a single use case fast.",
    features: [
      "One custom AI agent or workflow",
      "2-week discovery + build",
      "Integration with your existing stack",
      "30-day post-launch support",
      "You own all code & IP",
    ],
    cta: "Start a Sprint",
  },
  {
    name: "Growth Build",
    price: "From $20k",
    period: "full project scope",
    featured: true,
    badge: "Most popular",
    desc: "Multi-agent system covering a full workflow — discovery, build, deploy, optimise.",
    features: [
      "Up to 4 interconnected agents",
      "Full-stack custom build",
      "Voice, email & ops layers",
      "90-day optimisation window",
      "Dedicated senior engineer",
      "You own all code & IP",
    ],
    cta: "Book a call",
  },
  {
    name: "Enterprise Partner",
    price: "Custom",
    period: "ongoing retainer",
    featured: false,
    badge: null,
    desc: "A dedicated AI engineering team embedded in your org. Continuous build & improvement.",
    features: [
      "Unlimited agents & workflows",
      "Monthly sprint delivery",
      "Priority support + SLA",
      "Quarterly strategy reviews",
      "Shared Slack + weekly stand-ups",
      "You own all code & IP",
    ],
    cta: "Talk to us",
  },
];

export const integrations = [
  { name: "Slack", icon: "💬" },
  { name: "HubSpot", icon: "🔶" },
  { name: "Salesforce", icon: "☁️" },
  { name: "Clay", icon: "🧱" },
  { name: "Notion", icon: "📄" },
  { name: "Zapier", icon: "⚡" },
  { name: "Make", icon: "⚙️" },
  { name: "Airtable", icon: "📊" },
  { name: "Gmail", icon: "✉️" },
  { name: "OpenAI", icon: "🤖" },
];

export const testimonials = [
  {
    quote: "Regicore delivered our collections agent in 5 weeks. Recovery rates climbed 34 % in the first month — we wish we'd done this two years ago.",
    name: "Sarah K.",
    role: "COO, FinTech Lender",
    initials: "SK",
    color: "bg-lav",
  },
  {
    quote: "They took a vague brief — 'we need better outreach' — and shipped a system that tripled our pipeline. Senior thinking, startup speed.",
    name: "Marcus T.",
    role: "Head of Growth, B2B SaaS",
    initials: "MT",
    color: "bg-mint",
  },
  {
    quote: "The ops automation they built gave my team back 1,400 hours a quarter. That's not productivity — that's a whole new headcount without the hire.",
    name: "Priya R.",
    role: "VP Ops, PropTech Scale-up",
    initials: "PR",
    color: "bg-pink",
  },
];

export const team = [
  {
    name: "Varun G.",
    role: "Founder & Lead AI Engineer",
    bio: "Former ML engineer with 8+ years building production AI systems. Obsessed with ROI-first automation and client outcomes.",
    initials: "VG",
    color: "bg-lav",
    credentials: ["ex-Google Brain", "8+ yrs AI/ML", "50+ agents shipped"],
  },
  {
    name: "Alex M.",
    role: "Senior Full-Stack Engineer",
    initials: "AM",
    color: "bg-mint",
    bio: "Full-stack specialist focused on clean integrations and production reliability.",
    credentials: [],
  },
  {
    name: "Neha S.",
    role: "AI Systems Architect",
    initials: "NS",
    color: "bg-pink",
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
  { q: "What legal services does Complex Law offer?", a: "We provide end-to-end legal support tailored to your case." },
  { q: "Can you assist with legal issues outside of your listed areas of practice?", a: "Yes — we evaluate each case individually and advise accordingly." },
  { q: "What experience do you have in legal practice?", a: "Our team combines senior legal expertise with modern systems." },
  { q: "How do you approach client cases?", a: "We map your situation first, then build a clear action plan." },
  { q: "What’s the first step?", a: "Book a consultation and we will assess your case." },
];
