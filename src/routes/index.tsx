import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import {
  CardBlock,
  DocsLink,
  GithubLink,
  ProjectCard,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import weworkValuation from "@/assets/projects/wework-valuation.png";
import weworkTimeline from "@/assets/projects/wework-timeline.png";
import weworkLossesDonut from "@/assets/projects/wework-losses-donut.png";
import budlightRanking from "@/assets/projects/budlight-ranking.png";
import budlightMarketShare from "@/assets/projects/budlight-market-share.png";
import budlightSalesVolume from "@/assets/projects/budlight-sales-volume.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";

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
  "Claude Code",
  "Notion",
  "Jira",
  "MCP",
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
            Industrial Engineering Student —{" "}
            <span className="text-primary">Business Intelligence Emphasis</span>
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
              title="WeWork: Strategic Collapse of a $47B Business Model"
              tech={["Business Case", "Strategy Analysis", "Business Understanding"]}
              actions={
                <DocsLink href="/docs/WeWork_Case_Study_Analysis.pdf" label="View Full Analysis" />
              }
            >
              <CardBlock label="Problem">
                WeWork reached a $47 billion valuation in January 2019, but filed for bankruptcy
                in November 2023. What strategic decisions drove this collapse?
              </CardBlock>
              <CardBlock label="Approach">
                I analyzed its long-term lease and flexible sublease model, the spending culture
                under Adam Neumann, and the governance failures that preceded the 2019 IPO.
              </CardBlock>
              <CardBlock label="Result">
                WeWork went from $47 billion to bankruptcy, accumulating $11.4 billion in net
                losses between 2020 and mid-2023. The collapse was driven by a structural risk
                mismatch, expansion without proven profitability, and weak governance.
              </CardBlock>
              <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr_1fr]">
                <a
                  href={weworkTimeline}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkTimeline}
                    alt="Timeline of WeWork's key strategic decisions"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <a
                  href={weworkValuation}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkValuation}
                    alt="WeWork valuation from 2019 peak to 2023 bankruptcy"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                <a
                  href={weworkLossesDonut}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center overflow-hidden rounded-md"
                >
                  <img
                    src={weworkLossesDonut}
                    alt="WeWork accumulated net losses 2020-2023"
                    loading="lazy"
                    className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Bud Light / AB InBev: The Cost of a Marketing Decision"
              tech={["Business Case", "Strategy Analysis", "Business Understanding"]}
              actions={
                <DocsLink href="/docs/BudLight_Case_Study_Analysis.pdf" label="View Full Analysis" />
              }
            >
              <CardBlock label="Problem">
                In early 2023, Bud Light was the best-selling beer in the U.S. A marketing
                campaign sparked significant public backlash that affected sales and the brand's
                position, costing AB InBev over $1 billion in losses.
              </CardBlock>
              <CardBlock label="Approach">
                I analyzed the marketing decision, the crisis management response, and its
                impact on sales, market share, and brand value.
              </CardBlock>
              <CardBlock label="Result">
                Bud Light fell from #1 to #3, while sales volume dropped nearly 30% year over
                year. The case showed that unclear communication and an inconsistent crisis
                response can amplify the impact of a controversy and erode a brand's competitive
                position.
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: budlightRanking, alt: "US beer brand ranking before and after the 2023 boycott" },
                  { src: budlightMarketShare, alt: "US beer market share by brand in 2024" },
                  { src: budlightSalesVolume, alt: "Bud Light sales volume before and after the boycott" },
                ]}
              />
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
