// lib/content.ts — single source of truth for all Regicore copy

export const nav = [
  { label: "Agents", href: "/#agents" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/company" },
];

export const services = [
  { icon: "01", title: "Custom AI Systems & Agents", desc: "Trust documents and probate filings get processed automatically. Extracted, reviewed, routed to the right person, without an associate touching them first." },
  { icon: "02", title: "AI Email Outreach", desc: "Every inquiry gets a personalized reply within minutes, not three days later when the prospect's already called someone else." },
  { icon: "03", title: "AI Voice Callers", desc: "Every call gets answered, qualified, and booked, 24/7, including the 9pm call from a family that just lost someone." },
  { icon: "04", title: "Booking & Conversion Systems", desc: "Website visitors turn into booked consults instead of quiet exits, with pages built around how people actually decide to hire a trust attorney." },
  { icon: "05", title: "Custom Software & Apps", desc: "Software that fits how your firm already works, instead of a team adapting itself to fit the software." },
  { icon: "06", title: "Custom CRM", desc: "Every case tracked from intake through administration through closing, so nothing gets lost between paralegal and partner." },
  { icon: "07", title: "Marketing Automation", desc: "Prospects who aren't ready yet stay warm automatically, so your firm's still top of mind whenever they are." },
  { icon: "08", title: "Lead-Gen Systems", desc: "A calendar full of the exact client profile your firm wants, not just anyone who clicked an ad." },
];

export const agents = [
  {
    name: "Intake Agent",
    cardTitle: "Promise to pay",
    tag: "Collection",
    big: "$1,250",
    rowKey: "Due date",
    rowVal: "Sept 5, 2026",
    desc: "Qualifies new matters. Collects documents. Sends only the strong files to partners. Stops your team from wasting time on bad leads.",
  },
  {
    name: "Document Review Agent",
    cardTitle: "Sequence sent",
    tag: "Email",
    big: "842 sends",
    rowKey: "Reply rate",
    rowVal: "+62%",
    desc: "Reviews contracts and discovery at scale. Flags risk. Pulls key terms. Gives your lawyers clean summaries they can trust.",
  },
  {
    name: "Research Agent",
    cardTitle: "Call completed",
    tag: "Voice",
    big: "3m 12s",
    rowKey: "Outcome",
    rowVal: "Booked",
    desc: "Runs first pass research and memo drafts. Uses the authorities your firm already trusts. Gives associates their time back.",
  },
  {
    name: "Collections Agent",
    cardTitle: "Lead enriched",
    tag: "Pipeline",
    big: "3.1x",
    rowKey: "Stage",
    rowVal: "Qualified",
    desc: "Follows up on unpaid invoices and payment plans. Improves recovery without adding headcount.",
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
  { value: "2", suffix: " wks", label: "to first deployment" },
  { value: "100", suffix: "%", label: "private, your environment" },
  { value: "0", suffix: "", label: "long-term contracts required" },
  { value: "Fixed", suffix: "", label: "scope agreed before we start" },
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
