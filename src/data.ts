// All copy for the Relay landing page. Every word is original placeholder
// text written for this template — swap the strings to rebrand it.

export const product = {
  name: "Relay",
  tagline: "The feedback-to-roadmap workspace",
  heroTitle: "Every customer conversation, turned into your next release.",
  heroSub:
    "Relay collects feedback from email, chat, calls and social, triages it with AI, and turns the loudest signals into a roadmap your whole team can rally behind.",
  ctaPrimary: "Start free trial",
  ctaSecondary: "Watch the demo",
  trialNote: "Free 14-day trial  ·  No credit card required  ·  Cancel anytime",
};

export const logos = ["Northwind", "HELIOS", "Vantage", "Copperleaf", "Fieldstone", "Brightline"];

export type Feature = { icon: "spark" | "check" | "lines" | "circles" | "smile" | "bell"; title: string; text: string };

export const features: Feature[] = [
  {
    icon: "spark",
    title: "AI triage, in seconds",
    text: "Relay reads every new message, tags the topic, scores the sentiment and groups duplicates — so a thousand voices become ten clear themes.",
  },
  {
    icon: "check",
    title: "Roadmap voting that counts",
    text: "Customers vote on what matters to them, and every vote is weighted by plan, usage and churn risk — not just whoever shouts loudest.",
  },
  {
    icon: "lines",
    title: "A changelog that writes itself",
    text: "Ship a feature and Relay drafts the announcement from the closed feedback, ready to send to everyone who asked for it.",
  },
  {
    icon: "circles",
    title: "Plugs into your stack",
    text: "Native two-way sync with Slack, Intercom, Zendesk, HubSpot, Jira and Linear. Feedback flows in; status flows back out.",
  },
  {
    icon: "smile",
    title: "Sentiment you can track",
    text: "Watch satisfaction drift by segment, plan or feature area, and get alerted the moment a key account turns unhappy.",
  },
  {
    icon: "bell",
    title: "Alerts before churn",
    text: "When a high-value account files three complaints in a week, Relay pings the owner in Slack — before the renewal call, not after it.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Connect your channels",
    text: "Plug in email, chat, your help desk and social inboxes. Relay starts importing history immediately — no migration project.",
  },
  {
    n: "02",
    title: "Let AI sort the noise",
    text: "Duplicates merge, topics cluster and sentiment scores land automatically. You review themes, not a thousand tickets.",
  },
  {
    n: "03",
    title: "Ship, then close the loop",
    text: "Promote a theme to the roadmap, ship it, and Relay tells every customer who asked — with the announcement already drafted.",
  },
];

export const testimonial = {
  quote:
    "We stopped guessing what to build. Relay showed us that 40% of support tickets were one missing export button — we shipped it in a week, and churn in that segment fell by a third.",
  name: "Maya Chen",
  role: "Head of Product, Northwind",
  initials: "MC",
};

export type Tier = { name: string; price: string; per: string; blurb: string; cta: string; featured?: boolean; points: string[] };

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$0",
    per: "forever",
    blurb: "For side projects finding their first users.",
    cta: "Start for free",
    points: ["Up to 200 feedback items / mo", "1 inbox connection", "Public roadmap board", "Community support"],
  },
  {
    name: "Growth",
    price: "$29",
    per: "per seat / mo",
    blurb: "For teams turning feedback into a roadmap.",
    cta: "Start 14-day trial",
    featured: true,
    points: [
      "Unlimited feedback items",
      "AI triage + sentiment tracking",
      "Voting, changelog & announcements",
      "Slack, Intercom, Jira & Linear sync",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "$79",
    per: "per seat / mo",
    blurb: "For companies where feedback is a system.",
    cta: "Talk to sales",
    points: ["Everything in Growth", "SSO / SAML & audit log", "Custom data retention", "Dedicated success manager", "99.9% uptime SLA"],
  },
];

// Mock product data shown inside the dashboard mockup in the hero.
export const mockStats = [
  { label: "Open themes", value: "128" },
  { label: "Votes this week", value: "1,842" },
  { label: "Shipped", value: "96%" },
];

export const mockBars = [
  { label: "Export", value: 86 },
  { label: "SSO", value: 64 },
  { label: "Mobile", value: 52 },
  { label: "API", value: 44 },
  { label: "Dark mode", value: 31 },
];

export const mockItems = [
  { tag: "Export", text: "“One-click CSV export for reports”", votes: "214 votes" },
  { tag: "SSO", text: "“SAML login for our enterprise plan”", votes: "186 votes" },
  { tag: "Mobile", text: "“Offline mode for the iOS app”", votes: "149 votes" },
];
