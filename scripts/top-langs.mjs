// Gera assets/top-langs.svg com as linguagens mais usadas nos repositórios públicos.
// Roda localmente (`node scripts/top-langs.mjs`) ou pelo workflow diário.
import { mkdir, writeFile } from "node:fs/promises";

const USER = "Nilt-miranda";
const OUTPUT = "assets/top-langs.svg";
const MAX_LANGS = 6;
const EXCLUDE_REPOS = new Set([
  "Nilt-miranda",
  "aula-java",
  "api-rest-java-eca",
  "marcacaoDeConsultasMedicas-ECA3-backend",
  "Nilt-miranda-api_marcacao_consultas",
]);
const HIDE_LANGS = new Set(["Java", "PLpgSQL"]);

const COLORS = {
  TypeScript: "#3178c6", JavaScript: "#f1e05a", HTML: "#e34c26", CSS: "#663399",
  Python: "#3572A5", "C++": "#f34b7d", C: "#555555", Dockerfile: "#384d54",
  Shell: "#89e051", HCL: "#844FBA", SCSS: "#c6538c", Prisma: "#0c344b",
  PowerShell: "#012456", Go: "#00ADD8", Rust: "#dea584",
};

const headers = { Accept: "application/vnd.github+json", "User-Agent": USER };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} em ${url}`);
  return res.json();
}

const repos = await getJson(`https://api.github.com/users/${USER}/repos?per_page=100&type=owner`);
const totals = {};
for (const repo of repos) {
  if (repo.fork || repo.archived || EXCLUDE_REPOS.has(repo.name)) continue;
  const langs = await getJson(repo.languages_url);
  for (const [lang, bytes] of Object.entries(langs)) {
    if (!HIDE_LANGS.has(lang)) totals[lang] = (totals[lang] || 0) + bytes;
  }
}

const sum = Object.values(totals).reduce((a, b) => a + b, 0);
if (sum === 0) throw new Error("Nenhuma linguagem encontrada; mantendo o SVG anterior.");
const top = Object.entries(totals)
  .sort((a, b) => b[1] - a[1])
  .slice(0, MAX_LANGS)
  .map(([name, bytes]) => ({ name, pct: (bytes / sum) * 100, color: COLORS[name] || "#8E9091" }));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const width = 340;
const barX = 25, barY = 55, barW = width - 50;
const topSum = top.reduce((a, l) => a + l.pct, 0);

let x = barX;
const segments = top.map((l) => {
  const w = (l.pct / topSum) * barW;
  const rect = `<rect x="${x.toFixed(2)}" y="${barY}" width="${w.toFixed(2)}" height="8" fill="${l.color}"/>`;
  x += w;
  return rect;
}).join("");

const legend = top.map((l, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const lx = barX + col * 150, ly = 90 + row * 25;
  return `<g transform="translate(${lx},${ly})"><circle cx="5" cy="-4" r="5" fill="${l.color}"/>` +
    `<text x="15" y="0" class="lang">${esc(l.name)} ${l.pct.toFixed(2)}%</text></g>`;
}).join("");

const height = 90 + Math.ceil(top.length / 2) * 25;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="t">
<title id="t">Linguagens mais usadas</title>
<style>
.title{font:600 18px 'Segoe UI',Ubuntu,Sans-Serif;fill:#A64DFF}
.lang{font:400 12px 'Segoe UI',Ubuntu,Sans-Serif;fill:#EAEAEA}
</style>
<rect x="0.5" y="0.5" rx="6" width="${width - 1}" height="${height - 1}" fill="#0D0D0D"/>
<text x="25" y="35" class="title">Linguagens mais usadas</text>
<clipPath id="bar"><rect x="${barX}" y="${barY}" width="${barW}" height="8" rx="4"/></clipPath>
<g clip-path="url(#bar)">${segments}</g>
${legend}
</svg>
`;

await mkdir("assets", { recursive: true });
await writeFile(OUTPUT, svg);
console.log(top.map((l) => `${l.name} ${l.pct.toFixed(2)}%`).join(" | "));
