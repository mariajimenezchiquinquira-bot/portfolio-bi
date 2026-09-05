import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  GithubLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import segElbowMethod from "@/assets/projects/segmentation-5-elbow-method.png";
import segDominantCategory from "@/assets/projects/segmentation-4-dominant-category.png";
import segAvgTransaction from "@/assets/projects/segmentation-6-avg-transaction-by-cluster.png";
import segCardFranchise from "@/assets/projects/segmentation-card-franchise.png";
import segDomesticIntl from "@/assets/projects/segmentation-2-domestic-vs-international.png";
import segWeekdayHeatmap from "@/assets/projects/segmentation-weekday-heatmap.png";
import nuSplitJiraBoard from "@/assets/projects/nusplit-jira-board.png";
import nuSplitNotionCover from "@/assets/projects/nusplit-notion-cover.png";
import nuSplitNotionTimelineBacklog from "@/assets/projects/nusplit-notion-timeline-backlog.png";
import nuSplitTableau from "@/assets/projects/nusplit-tableau-dashboard.png";
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

            <ProjectCard
              title="Customer Segmentation for Credit Card Clients"
              tech={["Python", "SQL"]}
              actions={
                <>
                  <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/segmentacion-clientes-tarjetas-credito" />
                  <ActionLink href="/notebook-segmentacion-clientes.html">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Notebook
                  </ActionLink>
                </>
              }
            >
              <CardBlock label="Problem">
                A bank needed to identify distinct consumption behaviors among 47,871 credit card
                holders to design targeted promotions, but no predefined customer groups existed.
              </CardBlock>
              <CardBlock label="Approach">
                I applied K-means clustering to segment clients based on spending patterns, using
                one-hot encoding, feature scaling, and the elbow method to determine the optimal
                number of clusters. I then used SQL to analyze each segment's dominant category,
                card brand, and spending behavior.
              </CardBlock>
              <CardBlock label="Result">
                Identified 4 distinct customer segments. The analysis revealed that 91% of clients
                share a common national, in-store spending pattern, while a smaller international,
                online-shopping segment emerged as a differentiated opportunity for targeted
                promotions.
              </CardBlock>
              <ProjectImageGrid
                columns={3}
                images={[
                  { src: segElbowMethod, alt: "Elbow method to select the number of clusters" },
                  { src: segDominantCategory, alt: "Dominant spending category by cluster" },
                  { src: segAvgTransaction, alt: "Average transaction amount by customer cluster" },
                  { src: segCardFranchise, alt: "Most used card franchise by cluster" },
                  { src: segDomesticIntl, alt: "Domestic vs. international spending by cluster" },
                  { src: segWeekdayHeatmap, alt: "Spending by day of week and cluster" },
                ]}
              />
            </ProjectCard>

            <ProjectCard
              title="Nu Split — Shared Payments Feature"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/NuSplit-DashboardBI/Dashboard1" />
              }
            >
              <CardBlock label="Problem">
                Splitting shared expenses can be a hassle. When one person pays for everyone, they
                have to calculate how much each person owes and then tell each friend how much to
                send, often using a calculator, WhatsApp, or another app.
              </CardBlock>
              <CardBlock label="Solution">
                I developed a simulated BI/product case study for "Nu Split," a concept feature that
                lets Nubank users split expenses, request payments, and see who has paid. I planned
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
                      { src: nuSplitNotionCover, alt: "Nu Split Notion roadmap overview" },
                      { src: nuSplitNotionTimelineBacklog, alt: "Nu Split Notion timeline and backlog board" },
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
                        { src: nuSplitJiraBoard, alt: "Nu Split Jira Scrum board" },
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
                      { src: nuSplitTableau, alt: "Nu Split Tableau usage and adoption dashboard" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
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
