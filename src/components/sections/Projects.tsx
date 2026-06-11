import Container from "../layout/Container"
import Section from "../layout/Section"
import ProjectCard from "../ui/ProjectCard";
import exercisesPageImg from '../../assets/images/exercises-page.png'
import dashboardPageImg from '../../assets/images/dashboard-page.png'

const projects = [
  {
    title: "Gym Tracker",
    description:
      "A React and TypeScript workout tracking app with Supabase persistence. Users can create training splits, run active workout sessions, save workouts, track body weight, and view progress charts.",
    stack: ["React", "TypeScript", "Supabase", "Chart.js"],
    githubUrl: "https://github.com/Luan2118/gym-tracker.git",
    liveUrl: "https://gym-tracker-azure-tau.vercel.app/",
    img: exercisesPageImg
  },
  {
    title: "Finance Tracker",
    description:
      "A full-stack finance tracker with Express, MongoDB, JWT authentication, protected user data, income and expense management, transaction filtering, charts, and currency conversion.",
    stack: ["JavaScript", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/Luan2118/finance-tracker.git",
    liveUrl: "https://finance-tracker-project-sigma.vercel.app/",
    img: dashboardPageImg
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