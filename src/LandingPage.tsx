import { Page } from "@hyper-elements/react";
import { relayTheme } from "./theme";
import { Nav, Hero, LogosStrip, Features, HowItWorks, Testimonial, Pricing, FinalCta, Footer } from "./sections";

// Relay — product launch landing page.
// A complete launch page written once in Hyper Elements: one <Page> root,
// a defineTheme brand, and the library's layout + block elements throughout.
// No raw HTML, no client-side JavaScript in the output.
export function LandingPage() {
  return (
    <Page
      theme={relayTheme}
      title="Relay — Turn customer feedback into your roadmap"
      description="Relay collects customer feedback from every channel, triages it with AI, and turns the loudest signals into a roadmap your team can ship."
      width={1120}
      lang="en"
      style={{ backgroundColor: "#FAFAF8", gap: 0 }}
    >
      <Nav />
      <Hero />
      <LogosStrip />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <FinalCta />
      <Footer />
    </Page>
  );
}

LandingPage.PreviewProps = {};
export default LandingPage;
