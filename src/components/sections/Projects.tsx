import Container from "../layout/Container"
import Section from "../layout/Section"
import ProjectCard from "../ui/ProjectCard";
import exercisesPageImg from '../../assets/images/exercises-page.png'
import dashboardPageImg from '../../assets/images/dashboard-page.png'

const projects = [
  {
    title: "Gym Tracker",
    description:
      "A React and TypeScript workout tracker for training splits, active workout logging, body weight tracking, and progress review.",
    highlights: [
      "Supabase persistence for training splits, workout history, and body weight logs.",
      "Active workout flow with exercises, sets, reps, weights, and a workout timer.",
      "Dashboard, history, exercise filtering, body weight tracking, and progress charts.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Chart.js"],
    githubUrl: "https://github.com/Luan2118/gym-tracker-project",
    liveUrl: "https://gym-tracker-azure-tau.vercel.app/",
    img: exercisesPageImg,
  },
  {
    title: "Finance Tracker",
    description:
      "A full-stack finance tracker for income, expenses, protected user data, transaction filtering, charts, and currency conversion.",
    highlights: [
      "JWT authentication with access tokens, refresh cookies, and protected user data.",
      "Income and expense CRUD flows with MongoDB, validation, and user-specific access.",
      "Dashboard summaries, transaction filters, Chart.js visualizations, and multi-currency support.",
    ],
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/Luan2118/finance-tracker-project",
    liveUrl: "https://finance-tracker-project-sigma.vercel.app/",
    img: dashboardPageImg,
  },
];

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <div >
          <h2 className="text-2xl font-semibold text-neutral-950 md:text-3xl">Projects</h2>


          <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-6 bg-neutral-50">
            {projects.map((project) => {
              return (
                <ProjectCard key={project.title} project={project} />
              )
            })}
          </div>
        </div>
      </Container>
    </Section>

  )
}

export default Projects