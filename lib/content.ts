// lib/content.ts — single source of truth for all Regicore copy

export const nav = [
  { label: "Agents", href: "/#agents" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/company" },
];

export const services = [
  { icon: "01", title: "Custom AI Systems and Agents", desc: "Trust documents and probate filings move through extraction, review, and routing without an associate touching them first." },
  { icon: "02", title: "AI Email Outreach", desc: "Every inquiry gets a personalized reply in minutes instead of days later when the prospect has already moved on." },
  { icon: "03", title: "AI Voice Callers", desc: "Every call is answered, qualified, and booked around the clock, including the late call from a family that just lost someone." },
  { icon: "04", title: "Booking and Conversion Systems", desc: "Website visitors become booked consults. Pages are built around how people actually decide to hire a trust attorney." },
  { icon: "05", title: "Custom CRM", desc: "Every case is tracked from intake through administration to closing so nothing falls between paralegal and partner." },
  { icon: "06", title: "SEO ranking", desc: "Get listed in top 3 in Google Maps within 90 days guaranteed. All AI chatbots list you when people ask about law firms in your area." },
];

export const agents = [
  {
    name: "Intake Agent",
    cardTitle: "Lead qualified",
    tag: "Intake",
    big: "98% clean",
    rowKey: "Quality score",
    rowVal: "High",
    desc: "Opens more matters cleanly and faster so fewer leads die in the queue.",
  },
  {
    name: "Document Review Agent",
    cardTitle: "Document processed",
    tag: "Review",
    big: "450 pgs/hr",
    rowKey: "Risk flag",
    rowVal: "Low",
    desc: "Processes high volume documents so associates stop burning hours on first pass review.",
  },
  {
    name: "Research Agent",
    cardTitle: "Memo generated",
    tag: "Research",
    big: "15 mins",
    rowKey: "Authority count",
    rowVal: "14 cited",
    desc: "Delivers the research your team needs without the billable time drain.",
  },
  {
    name: "Collections Agent",
    cardTitle: "Invoice recovered",
    tag: "Collections",
    big: "$3,400",
    rowKey: "Status",
    rowVal: "Paid",
    desc: "Keeps receivables moving so cash does not sit uncollected.",
  },
  {
    name: "Operations Agent",
    cardTitle: "Task automated",
    tag: "Ops",
    big: "1,400 hrs",
    rowKey: "Saved",
    rowVal: "/quarter",
    desc: "Handles time entry support, deadline tracking, and status updates. Removes the quiet work that raises overhead and burns capacity.",
  },
];

export const steps = [
  {
    step: "STEP 01",
    title: "Maps your workflows",
    desc: "Builds a graph of your tools, data and processes to find the highest ROI automation.",
  },
  {
    step: "STEP 02",
    title: "Swarm of agents build",
    desc: "Senior engineers and parallel agents design, test and ship a custom system fast.",
  },
  {
    step: "STEP 03",
    title: "Learns and optimises over time",
    desc: "Agents read outcomes and feedback to sharpen accuracy and ROI continuously.",
  },
];

export const metrics = [
  { value: "2", suffix: " weeks", label: "to first deployment" },
  { value: "100", suffix: " percent", label: "private, running in your environment" },
  { value: "0", suffix: "", label: "long term contracts required" },
  { value: "Fixed", suffix: "", label: "scope agreed before we start" },
];

export const plans = [
  {
    name: "Starter",
    price: "From $2.4k",
    period: "/month  90-day minimum",
    featured: false,
    badge: null,
    desc: "One system built correctly. For firms that want to prove results on a single bottleneck first.",
    features: [
      "First system live in week 2",
      "Measurable results inside 30 days",
      "One AI workflow or agent",
      "One core integration",
      "SEO ranking guaranteed in top 3 Google Maps in 90 days",
      "Ongoing tuning and monthly performance review",
      "Your data stays yours"
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "From $3.3k",
    period: "/month  90-day minimum",
    featured: true,
    badge: "Most Popular",
    desc: "For firms ready to connect leads, intake, and follow up so the whole front end of the practice runs cleaner.",
    features: [
      "First system live in week 2",
      "Measurable results inside 30 days",
      "Up to three connected workflows or agents",
      "Voice, email, and operations layers as needed",
      "Up to two core integrations",
      "SEO ranking guaranteed in top 3 Google Maps in 90 days",
      "Continuous optimization plus monthly strategy call",
      "Your data stays yours"
    ],
    cta: "Book a call",
  },
  {
    name: "Enterprise Partner",
    price: "Custom",
    period: "from $12k / month",
    featured: false,
    badge: null,
    desc: "For firms that want Regicore embedded as the ongoing systems partner across the full practice.",
    features: [
      "First system live in week 2",
      "Measurable results inside 30 days",
      "Multi team or multi workflow rollout",
      "Priority support and faster delivery",
      "SEO ranking guaranteed in top 3 Google Maps in 90 days",
      "Shared planning rhythm",
      "Custom integrations and quarterly roadmap reviews",
      "Your data stays yours"
    ],
    cta: "Talk to us",
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
  { title: "Custom, never off the shelf", desc: "Engineered around your data, tools and goals." },
  { title: "Speed of an AAA studio", desc: "First deployments in weeks, not quarters." },
  { title: "Transparent ROI", desc: "Success metrics agreed up front, reported throughout." },
  { title: "We own outcomes", desc: "Accountable to results, not just deliverables." },
];

export const faqs = [
  {
    q: "How fast do we actually see something working?",
    a: "First system is live in week 2. Measurable results are expected inside 30 days.",
  },
  {
    q: "Who owns the code and the data?",
    a: "Your data stays in your environment. You own your data. Our systems and frameworks stay ours.",
  },
  {
    q: "What happens if the agent gets something wrong?",
    a: "Every system is built with human review points on high risk steps. Errors are caught and corrected inside the workflow, not after the fact.",
  },
  {
    q: "Will this actually work with what we already use?",
    a: "Yes. We integrate with the tools you already run. We do not force a new stack.",
  },
  {
    q: "How do you measure whether it is working?",
    a: "We set clear hour and throughput targets before we start. Monthly reviews track the actual numbers against those targets.",
  },
  {
    q: "What does an engagement actually cost?",
    a: "Starter begins at 2,400 dollars per month. Growth begins at 3,300 dollars per month. Both have a 90 day minimum so both sides can measure real results. Enterprise is scoped after the audit.",
  },
];


