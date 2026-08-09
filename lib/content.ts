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
    price: "From $1.5k",
    period: "/month · 90-day minimum",
    featured: false,
    badge: null,
    desc: "One system, done right. Built for firms who want to prove it works on a single bottleneck before going further.",
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
    price: "From $3.3k",
    period: "/month · 90-day minimum",
    featured: true,
    badge: "Most Popular",
    desc: "For firms ready to put AI to work across more than one part of the business, not just one workflow, but how leads, intake, and follow up connect.",
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
    desc: "For firms that want us embedded as an ongoing systems partner, deploying, improving, and expanding automation across the whole practice, every month.",
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
    q: "How fast do we actually see something working?",
    a: "First system live in week 2. Not a demo, not a mockup, an actual agent running on your real workflow. We don't believe in 3-month discovery phases before you see anything.",
  },
  {
    q: "Who owns the code and the data?",
    a: "Your client data stays yours, full stop, it never leaves your environment. The underlying systems and frameworks we build with stay ours, the same way a law firm doesn't hand over its internal templates and processes to every client. Full terms are spelled out in the service agreement before anyone signs anything.",
  },
  {
    q: "What happens if the agent gets something wrong?",
    a: "Every system we build has a human checkpoint before anything client-facing goes out, the agent drafts, extracts, or flags, it doesn't have final say on anything that touches your clients' estate or trust matters without your team reviewing it first. This isn't a black box making decisions your firm didn't sign off on.",
  },
  {
    q: "Will this actually work with what we already use?",
    a: "We build around your existing case management and practice tools, not instead of them. If you're on Clio, PracticePanther, or something else, tell us during the audit and we'll tell you exactly what connects and what doesn't, before you commit to anything.",
  },
  {
    q: "How do you measure whether it's working?",
    a: "We agree on what success looks like before we start, hours saved, response time, whatever the actual bottleneck is you're trying to fix, and report against it the whole way through. You're not left guessing whether it's doing anything.",
  },
  {
    q: "What does an engagement actually cost?",
    a: "Starter begins at $1.5k/month, Growth at $3.3k/month, both on a 90-day minimum so there's enough runway to actually see results, not judge it after two weeks. Enterprise is custom based on scope. Exact pricing depends on what we find in the audit, which is free.",
  },
];
