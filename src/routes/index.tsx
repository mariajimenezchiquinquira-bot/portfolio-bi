import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import {
  CardBlock,
  DocsLink,
  GithubLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import weworkDashboardOverview from "@/assets/projects/wework-dashboard-overview.png";
import budlightRanking from "@/assets/projects/budlight-ranking.png";
import budlightMarketShare from "@/assets/projects/budlight-market-share.png";
import budlightSalesVolume from "@/assets/projects/budlight-sales-volume.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";
import payraSplitJiraBoard from "@/assets/projects/payrasplit-jira-board.png";
import payraSplitNotionCover from "@/assets/projects/payrasplit-notion-cover.png";
import payraSplitNotionTimelineBacklog from "@/assets/projects/payrasplit-notion-timeline-backlog.png";
import payraSplitTableau from "@/assets/projects/payrasplit-tableau-dashboard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Business Intelligence Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of María José Jiménez, Industrial Engineering student specialized in Business Intelligence, data visualization and analytics for fintech and digital products.",
      },
      { property: "og:title", content: "María José Jiménez — Business Intelligence Portfolio" },
      {
        property: "og:description",
        content:
          "Data-driven and AI-powered projects in analytics, automation and product, with a focus on fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// NO ELIMINAR: proyecto "Bud Light / AB InBev" guardado en reserva
// (retirado del portafolio en sept 2026, pendiente de volver a mostrarse).
// Esta referencia existe solo para que herramientas de limpieza de archivos
// no usados no borren estas imágenes ni sus imports.
const RESERVED_BUDLIGHT_ASSETS = [
  budlightRanking,
  budlightMarketShare,
  budlightSalesVolume,
];
void RESERVED_BUDLIGHT_ASSETS;

const SKILLS = [
  "Business Intelligence",
  "Data Visualization",
  "Business Analysis",
  "Data Analysis",
  "Financial Analysis",
  "Automation",
  "Generative AI",
  "Process Improvement",
  "Agile Methodologies (Scrum, Kanban)",
  "Tableau",
  "Power BI",
  "Python",
  "SQL",
  "Excel",
  "Power Automate",
  "R",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Industrial Engineering Student
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Projects
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="WeWork — Business Case"
              tech={["Business Intelligence", "Business Strategy", "Financial Analysis"]}
              actions={
                <DocsLink href="/docs/WeWork_Case_Study_Analysis.html" label="View Full Analysis" />
              }
            >
              <CardBlock label="Problem">
                WeWork reached a USD 47 billion valuation in 2019, but ultimately filed for
                bankruptcy in 2023. The challenge was to use financial and operational data to
                understand what was behind this growth and identify signals of risks to the
                business's sustainability.
              </CardBlock>
              <CardBlock label="Analysis">
                I analyzed the evolution of revenue, losses, costs, liabilities, equity, and
                financial commitments, connecting these indicators to the company's business
                model and expansion strategy. The goal was not only to understand what was
                happening, but also which characteristics of the business model and which
                decisions were driving these results.
              </CardBlock>
              <CardBlock label="Insight">
                WeWork's growth was accompanied by significant losses, increasing financial
                obligations, and long-term commitments, revealing a gap between the company's
                growth and its ability to sustain that growth financially. The analysis showed
                how financial data can reveal strategic and business sustainability risks.
              </CardBlock>
              <a
                href={weworkDashboardOverview}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center overflow-hidden rounded-md"
              >
                <img
                  src={weworkDashboardOverview}
                  alt="WeWork key metrics dashboard: valuation, liabilities vs. equity, revenue vs. net loss, and operating growth"
                  loading="lazy"
                  className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            </ProjectCard>

            <ProjectCard
              title="Payra Split — Shared Payments Feature"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/SplitlySplit-DashboardBI/Dashboard1?publish=yes" />
              }
            >
              <CardBlock label="Problem">
                Splitting shared expenses can be a hassle. When one person pays for everyone, they
                have to calculate how much each person owes and then tell each friend how much to
                send, often using a calculator, WhatsApp, or another app.
              </CardBlock>
              <CardBlock label="Solution">
                I developed a simulated BI/product case study for "Payra Split," a concept feature that
                lets Payra users split expenses, request payments, and see who has paid. I planned
                the product lifecycle in Notion, managed sprints in Jira, and built a Tableau
                dashboard using simulated data to analyze adoption and completion rates.
              </CardBlock>
              <CardBlock label="Result">
                An end-to-end case connecting product planning, agile execution, and BI to measure a
                feature from concept to post-launch analysis.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Product Planning
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitNotionCover, alt: "Payra Split Notion roadmap overview" },
                      { src: payraSplitNotionTimelineBacklog, alt: "Payra Split Notion timeline and backlog board" },
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Jira — Sprint Execution
                  </p>
                  <div className="mx-auto w-full max-w-2xl">
                    <ProjectImageGrid
                      images={[
                        { src: payraSplitJiraBoard, alt: "Payra Split Jira Scrum board" },
                      ]}
                      columns={1}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Tableau — Adoption Dashboard
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitTableau, alt: "Payra Split Tableau usage and adoption dashboard" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Customer Churn & Capital Loss Analysis"
              tech={["Power BI", "DAX", "Data Visualization"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problem">
                A bank was experiencing customer attrition without understanding its main drivers
                or impact on capital.
              </CardBlock>
              <CardBlock label="Approach">
                I conducted an exploratory analysis in Power BI and, through visualizations and
                comparisons, identified the patterns that best explained attrition and the
                highest-risk segments.
              </CardBlock>
              <CardBlock label="Results">
                The bank faces capital leakage concentrated in high-balance customers, generating a
                significant financial impact. The primary warning signal is inactivity,
                particularly in Germany, which registers the highest churn rate.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Power BI dashboard: Customer Churn and Capital Loss Analysis"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>

          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
