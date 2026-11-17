import { Circle, Line, Path, Polygon, Svg } from "@hyper-elements/react";
import type { Feature } from "./data";

// Every icon is drawn with Hyper Elements Svg shapes — no image files,
// no emoji, no icon font. Accent violet on a soft violet tile.

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" title="Relay logo">
      <Path d="M16 3 L7 14 h5 L10 21 L19 10 h-5 Z" style={{ fill: "#5A4FE3" }} />
    </Svg>
  );
}

export function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  const tile = { backgroundColor: "#EEECFE", padding: 8, borderRadius: 10 };
  if (icon === "spark") {
    return (
      <Svg width={40} height={40} viewBox="0 0 24 24" title="AI triage" style={tile}>
        <Path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" style={{ fill: "#5A4FE3" }} />
      </Svg>
    );
  }
  if (icon === "check") {
    return (
      <Svg width={40} height={40} viewBox="0 0 24 24" title="Voting" style={tile}>
        <Path d="M4 12.5 L9.5 18 L20 6.5" style={{ fill: "transparent", stroke: "#5A4FE3", strokeWidth: 2.5 }} />
      </Svg>
    );
  }
  if (icon === "lines") {
    return (
      <Svg width={40} height={40} viewBox="0 0 24 24" title="Changelog" style={tile}>
        <Line x1={4} y1={6} x2={20} y2={6} style={{ stroke: "#5A4FE3", strokeWidth: 2.5 }} />
        <Line x1={4} y1={12} x2={16} y2={12} style={{ stroke: "#5A4FE3", strokeWidth: 2.5 }} />
        <Line x1={4} y1={18} x2={18} y2={18} style={{ stroke: "#5A4FE3", strokeWidth: 2.5 }} />
      </Svg>
    );
  }
  if (icon === "circles") {
    return (
      <Svg width={40} height={40} viewBox="0 0 24 24" title="Integrations" style={tile}>
        <Circle cx={9} cy={12} r={6} style={{ fill: "#5A4FE3", opacity: 0.9 }} />
        <Circle cx={16} cy={12} r={6} style={{ fill: "#8B84F0", opacity: 0.65 }} />
      </Svg>
    );
  }
  if (icon === "smile") {
    return (
      <Svg width={40} height={40} viewBox="0 0 24 24" title="Sentiment" style={tile}>
        <Circle cx={12} cy={12} r={9} style={{ fill: "transparent", stroke: "#5A4FE3", strokeWidth: 2 }} />
        <Circle cx={9} cy={10} r={1.4} style={{ fill: "#5A4FE3" }} />
        <Circle cx={15} cy={10} r={1.4} style={{ fill: "#5A4FE3" }} />
        <Path d="M7.5 14.5 Q12 18 16.5 14.5" style={{ fill: "transparent", stroke: "#5A4FE3", strokeWidth: 2 }} />
      </Svg>
    );
  }
  return (
    <Svg width={40} height={40} viewBox="0 0 24 24" title="Alerts" style={tile}>
      <Path
        d="M12 3 C8.5 3 6.5 5.5 6.5 8.5 V12 L4.5 15.5 H19.5 L17.5 12 V8.5 C17.5 5.5 15.5 3 12 3 Z"
        style={{ fill: "#5A4FE3" }}
      />
      <Circle cx={12} cy={18.5} r={1.8} style={{ fill: "#5A4FE3" }} />
    </Svg>
  );
}

export function WindowDots() {
  return (
    <Svg width={52} height={12} viewBox="0 0 52 12" title="Window controls">
      <Circle cx={6} cy={6} r={5} style={{ fill: "#FCA5A5" }} />
      <Circle cx={26} cy={6} r={5} style={{ fill: "#FCD34D" }} />
      <Circle cx={46} cy={6} r={5} style={{ fill: "#86EFAC" }} />
    </Svg>
  );
}

export function CheckBullet() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" title="Included">
      <Circle cx={12} cy={12} r={10} style={{ fill: "#EEECFE" }} />
      <Path d="M7.5 12.5 L10.8 15.8 L16.5 9" style={{ fill: "transparent", stroke: "#5A4FE3", strokeWidth: 2.2 }} />
    </Svg>
  );
}

export function QuoteMark() {
  return (
    <Svg width={40} height={32} viewBox="0 0 40 32" title="Quote">
      <Polygon points="0,32 0,12 12,0 12,10 5,14 5,32" style={{ fill: "#5A4FE3", opacity: 0.25 }} />
      <Polygon points="22,32 22,12 34,0 34,10 27,14 27,32" style={{ fill: "#5A4FE3", opacity: 0.25 }} />
    </Svg>
  );
}
