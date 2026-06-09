import Container from "../layout/Container"
import Section from "../layout/Section"
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Gym Tracker",
    description:
      "A React and TypeScript gym tracking app for managing training splits, active workout sessions, workout history, progress charts, and body weight tracking.",
    stack: ["React", "TypeScript", "Supabase", "Chart.js"],
    githubUrl: "https://github.com/Luan2118/gym-tracker.git",
    liveUrl: "https://gym-tracker-azure-tau.vercel.app/",
  },
  {
    title: "Finance Tracker",
    description:
      "A full-stack finance tracking app for managing income and expenses, filtering transactions, viewing charts, currency conversion, and protected user data.",
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"],
    githubUrl: "https://github.com/Luan2118/finance-tracker.git",
    liveUrl: "https://finance-tracker-project-sigma.vercel.app/",
  },
];


function Projects() {
  return (
    <Section id="projects">
      <Container>
        <div >
          <h2 className="text-3xl font-semibold md:text-4xl text-neutral-950">Projects</h2>


          <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-6 bg-neutral-50">
            {projects.map((project) => {
              return (
                <ProjectCard key={project.title} project={project}/>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>

  )
}

export default Projects