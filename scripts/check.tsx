import { formatDiagnostics, outline, validate } from "@hyper-elements/react";
import { LandingPage } from "../src/LandingPage";

const { valid, diagnostics } = validate(<LandingPage />);
console.log("valid:", valid);
console.log(formatDiagnostics(diagnostics));
console.log(outline(<LandingPage />));
if (!valid) process.exitCode = 1;
