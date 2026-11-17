import { mkdir, writeFile } from "node:fs/promises";
import { ElementsError, formatDiagnostics, render } from "@hyper-elements/react";
import { LandingPage } from "../src/LandingPage";

try {
  const { html, text, diagnostics } = await render(<LandingPage />, { pretty: true });
  await mkdir("output", { recursive: true });
  await writeFile("output/landing.html", html);
  await writeFile("output/landing.txt", text);
  console.log("Rendered output/landing.html (" + html.length + " bytes)");
  console.log("Plain-text version: output/landing.txt (" + text.length + " bytes)");
  console.log(formatDiagnostics(diagnostics));
} catch (e) {
  if (e instanceof ElementsError) {
    console.error(formatDiagnostics(e.diagnostics));
    process.exitCode = 1;
  } else {
    throw e;
  }
}
