import {
  Button,
  Column,
  Divider,
  Grid,
  Heading,
  List,
  ListItem,
  Menu,
  Row,
  Section,
  Social,
  Text,
} from "@hyper-elements/react";
import { CheckBullet, FeatureIcon, LogoMark, QuoteMark, WindowDots } from "./icons";
import { features, logos, mockBars, mockItems, mockStats, product, steps, testimonial, tiers } from "./data";

// ---------------------------------------------------------------- Nav
export function Nav() {
  return (
    <Section style={{ backgroundColor: "#FFFFFF", padding: [16, 24], border: { bottom: "1px solid #E5E7EB" } }}>
      <Row style={{ gap: 24, alignItems: "center" }}>
        <Row style={{ gap: 10, alignItems: "center", flex: "none", width: 120 }}>
          <LogoMark size={28} />
          <Text style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>Relay</Text>
        </Row>
        <Menu
          items={[
            { text: "Product", href: "#features" },
            { text: "How it works", href: "#how-it-works" },
            { text: "Pricing", href: "#pricing" },
            { text: "Customers", href: "#customers" },
          ]}
          style={{ color: "#334155", fontSize: 15, fontWeight: 600, justifyContent: "center" }}
        />
        <Row style={{ gap: 12, alignItems: "center", flex: "none", width: 300 }}>
          <Button href="#pricing" variant="secondary" style={{ padding: [10, 16], width: 124 }}>
            Sign in
          </Button>
          <Button href="#trial" style={{ padding: [10, 16], width: 150 }}>
            Start free
          </Button>
        </Row>
      </Row>
    </Section>
  );
}

// ------------------------------------------------------- Hero + mockup
function ProductMockup() {
  return (
    <Column
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        padding: 0,
        gap: 0,
        overflow: "hidden",
      }}
    >
      <Row
        style={{
          gap: 12,
          alignItems: "center",
          padding: [14, 20],
          border: { bottom: "1px solid #E5E7EB" },
          backgroundColor: "#F8FAFC",
        }}
      >
        <WindowDots />
        <Text style={{ fontSize: 13, color: "#64748B" }}>app.relay.io/themes</Text>
      </Row>
      <Row style={{ gap: 0, alignItems: "stretch" }}>
        <Column
          hidden={{ mobile: true }}
          style={{ width: 180, gap: 4, padding: 20, border: { right: "1px solid #E5E7EB" }, backgroundColor: "#F8FAFC" }}
        >
          <Text style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", padding: [8, 10], backgroundColor: "#EEECFE", borderRadius: 8 }}>
            Themes
          </Text>
          <Text style={{ fontSize: 13, color: "#64748B", padding: [8, 10] }}>Inbox</Text>
          <Text style={{ fontSize: 13, color: "#64748B", padding: [8, 10] }}>Roadmap</Text>
          <Text style={{ fontSize: 13, color: "#64748B", padding: [8, 10] }}>Changelog</Text>
          <Text style={{ fontSize: 13, color: "#64748B", padding: [8, 10] }}>Insights</Text>
        </Column>
        <Column style={{ gap: 20, padding: 24 }}>
          <Row style={{ gap: 16 }}>
            {mockStats.map((s) => (
              <Column key={s.label} style={{ backgroundColor: "#F8FAFC", borderRadius: 12, padding: [16, 18], gap: 2 }}>
                <Text style={{ fontSize: 26, fontWeight: 800, color: "#0F172A" }}>{s.value}</Text>
                <Text style={{ fontSize: 13, color: "#64748B" }}>{s.label}</Text>
              </Column>
            ))}
          </Row>
          <Column style={{ gap: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>Top requested themes this month</Text>
            <Row style={{ gap: 14, alignItems: "end", height: 120 }}>
              {mockBars.map((b) => (
                <Column
                  key={b.label}
                  style={{ width: 44, height: b.value, backgroundColor: "#5A4FE3", borderRadius: 6, flex: "none" }}
                />
              ))}
            </Row>
            <Row style={{ gap: 14 }}>
              {mockBars.map((b) => (
                <Text key={b.label} style={{ fontSize: 12, color: "#64748B", width: 44, textAlign: "center", flex: "none" }}>
                  {b.label}
                </Text>
              ))}
            </Row>
          </Column>
          <Column style={{ gap: 0 }}>
            {mockItems.map((item) => (
              <Row
                key={item.tag}
                stackOnMobile={false}
                style={{
                  gap: 12,
                  alignItems: "center",
                  padding: [12, 0],
                  border: { bottom: "1px solid #F1F5F9" },
                }}
              >
                <Column style={{ backgroundColor: "#EEECFE", padding: [4, 10], borderRadius: 999, flex: "none" }}>
                  <Text style={{ fontSize: 12, fontWeight: 700, color: "#5A4FE3" }}>{item.tag}</Text>
                </Column>
                <Text style={{ fontSize: 14, color: "#0F172A" }}>{item.text}</Text>
                <Text style={{ fontSize: 13, color: "#64748B", flex: "none" }}>{item.votes}</Text>
              </Row>
            ))}
          </Column>
        </Column>
      </Row>
    </Column>
  );
}

export function Hero() {
  return (
    <Section style={{ padding: [72, 24, 80, 24], gap: 40 }}>
      <Column style={{ gap: 24, alignItems: "center" }}>
        <Column style={{ backgroundColor: "#EEECFE", padding: [8, 16], borderRadius: 999, maxWidth: 380 }}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: "#5A4FE3", textAlign: "center" }}>
            New · AI triage is live for every workspace
          </Text>
        </Column>
        <Heading level={1} style={{ textAlign: "center", maxWidth: 820 }}>
          Every customer conversation, turned into your next release.
        </Heading>
        <Text style={{ fontSize: 19, lineHeight: 1.6, color: "#475467", textAlign: "center", maxWidth: 680 }}>
          {product.heroSub}
        </Text>
        <Row style={{ gap: 14, justifyContent: "center", maxWidth: 460 }}>
          <Button href="#trial" style={{ width: 220 }}>{product.ctaPrimary}</Button>
          <Button href="#how-it-works" variant="secondary" style={{ width: 210 }}>
            {product.ctaSecondary}
          </Button>
        </Row>
        <Text style={{ fontSize: 14, color: "#64748B", textAlign: "center" }}>{product.trialNote}</Text>
      </Column>
      <ProductMockup />
    </Section>
  );
}

// ------------------------------------------------------------ Logos
export function LogosStrip() {
  return (
    <Section style={{ backgroundColor: "#FFFFFF", padding: [40, 24], gap: 28, border: { top: "1px solid #E5E7EB", bottom: "1px solid #E5E7EB" } }}>
      <Text style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#94A3B8", textAlign: "center" }}>
        Trusted by product teams at
      </Text>
      <Row style={{ gap: 48, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
        {logos.map((name, i) => (
          <Text key={name} style={{ fontSize: 20, fontWeight: i % 2 === 0 ? 800 : 600, color: "#94A3B8", flex: "none" }}>
            {name}
          </Text>
        ))}
      </Row>
    </Section>
  );
}

// ------------------------------------------------------------ Features
export function Features() {
  return (
    <Section style={{ padding: [80, 24], gap: 48 }}>
      <Column style={{ gap: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: "#5A4FE3", textAlign: "center" }}>WHY RELAY</Text>
        <Heading level={2} style={{ textAlign: "center", maxWidth: 640 }}>
          Everything feedback needs, nothing it doesn’t
        </Heading>
        <Text style={{ fontSize: 18, color: "#475467", textAlign: "center", maxWidth: 600 }}>
          Six tools that replace the spreadsheet, the shared inbox and the quarterly guessing game.
        </Text>
      </Column>
      <Grid columns={3} style={{ gap: 24 }}>
        {features.map((f) => (
          <Column key={f.title} style={{ apply: ["card"] }}>
            <FeatureIcon icon={f.icon} />
            <Heading level={3}>{f.title}</Heading>
            <Text style={{ color: "#475467" }}>{f.text}</Text>
          </Column>
        ))}
      </Grid>
    </Section>
  );
}

// ------------------------------------------------------------ How it works
export function HowItWorks() {
  return (
    <Section style={{ backgroundColor: "#F1F0FE", padding: [80, 24], gap: 48 }}>
      <Column style={{ gap: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: "#5A4FE3", textAlign: "center" }}>HOW IT WORKS</Text>
        <Heading level={2} style={{ textAlign: "center" }}>
          From inbox chaos to roadmap in three steps
        </Heading>
      </Column>
      <Row style={{ gap: 24 }}>
        {steps.map((s) => (
          <Column key={s.n} style={{ apply: ["card"], gap: 14 }}>
            <Text style={{ fontSize: 40, fontWeight: 800, color: "#5A4FE3" }}>{s.n}</Text>
            <Heading level={3}>{s.title}</Heading>
            <Text style={{ color: "#475467" }}>{s.text}</Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
}

// ------------------------------------------------------------ Testimonial
export function Testimonial() {
  return (
    <Section style={{ backgroundColor: "#FFFFFF", padding: [80, 24] }}>
      <Column style={{ gap: 28, alignItems: "center", maxWidth: 760 }}>
        <QuoteMark />
        <Text style={{ fontSize: 24, lineHeight: 1.5, fontStyle: "italic", color: "#0F172A", textAlign: "center" }}>
          “{testimonial.quote}”
        </Text>
        <Row style={{ gap: 16, alignItems: "center", justifyContent: "center" }}>
          <Column
            style={{
              width: 48,
              height: 48,
              backgroundColor: "#5A4FE3",
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF", textAlign: "center" }}>{testimonial.initials}</Text>
          </Column>
          <Column style={{ gap: 2 }}>
            <Text style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>{testimonial.name}</Text>
            <Text style={{ fontSize: 14, color: "#64748B" }}>{testimonial.role}</Text>
          </Column>
        </Row>
      </Column>
    </Section>
  );
}

// ------------------------------------------------------------ Pricing
function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  const featured = tier.featured;
  return (
    <Column
      style={
        featured
          ? {
              backgroundColor: "#5A4FE3",
              color: "#FFFFFF",
              padding: 28,
              gap: 20,
              borderRadius: 16,
              border: "1px solid #5A4FE3",
            }
          : { apply: ["card"], gap: 20 }
      }
    >
      <Row style={{ gap: 12, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: 800, color: featured ? "#FFFFFF" : "#0F172A" }}>{tier.name}</Text>
        {featured ? (
          <Column style={{ backgroundColor: "#FFFFFF", padding: [4, 10], borderRadius: 999, flex: "none" }}>
            <Text style={{ fontSize: 12, fontWeight: 800, color: "#5A4FE3" }}>Most popular</Text>
          </Column>
        ) : null}
      </Row>
      <Row style={{ gap: 8, alignItems: "end" }}>
        <Text style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, color: featured ? "#FFFFFF" : "#0F172A" }}>{tier.price}</Text>
        <Text style={{ fontSize: 14, color: featured ? "#C7C3FA" : "#64748B" }}>{tier.per}</Text>
      </Row>
      <Text style={{ color: featured ? "#E4E2FF" : "#475467" }}>{tier.blurb}</Text>
      <Column style={{ gap: 12 }}>
        {tier.points.map((p) => (
          <Row key={p} stackOnMobile={false} style={{ gap: 10, alignItems: "center" }}>
            <CheckBullet />
            <Text style={{ fontSize: 15, color: featured ? "#FFFFFF" : "#334155" }}>{p}</Text>
          </Row>
        ))}
      </Column>
      <Button href="#trial" variant={featured ? "light" : "secondary"} style={{ width: "100%" }}>
        {tier.cta}
      </Button>
    </Column>
  );
}

export function Pricing() {
  return (
    <Section style={{ padding: [80, 24], gap: 48 }}>
      <Column style={{ gap: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 14, fontWeight: 700, color: "#5A4FE3", textAlign: "center" }}>PRICING</Text>
        <Heading level={2} style={{ textAlign: "center" }}>
          Simple pricing that scales with your team
        </Heading>
        <Text style={{ fontSize: 18, color: "#475467", textAlign: "center" }}>
          Start free. Upgrade when feedback becomes your roadmap.
        </Text>
      </Column>
      <Row style={{ gap: 24, alignItems: "stretch" }}>
        {tiers.map((t) => (
          <PricingCard key={t.name} tier={t} />
        ))}
      </Row>
      <Text style={{ fontSize: 14, color: "#64748B", textAlign: "center" }}>
        All paid plans include a 14-day free trial. Prices in USD, taxes may apply.
      </Text>
    </Section>
  );
}

// ------------------------------------------------------------ Final CTA
export function FinalCta() {
  return (
    <Section style={{ backgroundColor: "#0F172A", padding: [80, 24], gap: 28 }}>
      <Column style={{ gap: 20, alignItems: "center" }}>
        <Heading level={2} style={{ color: "#FFFFFF", textAlign: "center", maxWidth: 640 }}>
          Start hearing your customers today
        </Heading>
        <Text style={{ fontSize: 18, color: "#94A3B8", textAlign: "center", maxWidth: 560 }}>
          Connect your first inbox in five minutes. Your roadmap will never be a guess again.
        </Text>
        <Button href="#trial">Start free trial</Button>
        <Text style={{ fontSize: 14, color: "#64748B", textAlign: "center" }}>Free 14-day trial · No credit card required</Text>
      </Column>
    </Section>
  );
}

// ------------------------------------------------------------ Footer
export function Footer() {
  return (
    <Section style={{ backgroundColor: "#0B1220", padding: [56, 24, 32, 24], gap: 40 }}>
      <Row style={{ gap: 48 }}>
        <Column style={{ gap: 16 }}>
          <Row style={{ gap: 10, alignItems: "center" }}>
            <LogoMark size={24} />
            <Text style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>Relay</Text>
          </Row>
          <Text style={{ fontSize: 14, color: "#94A3B8", maxWidth: 280 }}>{product.tagline}. Built for teams that ship what customers actually ask for.</Text>
          <Social
            icons={[
              { name: "X", href: "https://x.com" },
              { name: "LinkedIn", href: "https://linkedin.com" },
              { name: "GitHub", href: "https://github.com" },
              { name: "YouTube", href: "https://youtube.com" },
            ]}
            iconType="circle"
            size={32}
            style={{ justifyContent: "start" }}
          />
        </Column>
        <Column style={{ gap: 12 }}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>Product</Text>
          <Menu
            layout="vertical"
            items={[
              { text: "Features", href: "#features" },
              { text: "Pricing", href: "#pricing" },
              { text: "Changelog", href: "#changelog" },
              { text: "Roadmap", href: "#roadmap" },
            ]}
            style={{ color: "#94A3B8", fontSize: 14, justifyContent: "start" }}
          />
        </Column>
        <Column style={{ gap: 12 }}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>Company</Text>
          <Menu
            layout="vertical"
            items={[
              { text: "About", href: "#about" },
              { text: "Careers", href: "#careers" },
              { text: "Blog", href: "#blog" },
              { text: "Contact", href: "#contact" },
            ]}
            style={{ color: "#94A3B8", fontSize: 14, justifyContent: "start" }}
          />
        </Column>
        <Column style={{ gap: 12 }}>
          <Text style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF" }}>Resources</Text>
          <Menu
            layout="vertical"
            items={[
              { text: "Documentation", href: "#docs" },
              { text: "Help center", href: "#help" },
              { text: "API reference", href: "#api" },
              { text: "Status", href: "#status" },
            ]}
            style={{ color: "#94A3B8", fontSize: 14, justifyContent: "start" }}
          />
        </Column>
      </Row>
      <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1E293B" } }} />
      <Row style={{ gap: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 13, color: "#64748B" }}>© 2026 Relay Labs, Inc. All rights reserved.</Text>
        <Menu
          items={[
            { text: "Privacy", href: "#privacy" },
            { text: "Terms", href: "#terms" },
          ]}
          style={{ color: "#64748B", fontSize: 13, justifyContent: "end" }}
        />
      </Row>
    </Section>
  );
}
