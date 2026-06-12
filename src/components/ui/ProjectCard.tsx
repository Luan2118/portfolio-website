

type Project = {
  title: string
  description: string
  highlights: string[]
  stack: string[]
  githubUrl: string
  liveUrl: string
  img: string
}

type ProjectCardProp = {
  project: Project
}


function ProjectCard({ project }: ProjectCardProp) {
  return (
    <article className="flex flex-col border gap-2 border-neutral-200 rounded-2xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-xl font-semibold text-neutral-950">{project.title}</h3>
      <img src={project.img} alt={`${project.title} screenshot`} className="aspect-video mt-2 rounded-xl w-full object-cover object-top" />
      <p className="mt-4 text-base text-neutral-600 leading-7">{project.description}</p>

      <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-600">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-4 flex-wrap">
        {project.stack.map((stack) => {
          return (
            <span key={stack} className="border border-neutral-200 rounded-full py-1 px-3 text-xs text-neutral-700 font-medium">
              {stack}
            </span>
          )
        })}
      </div>

      <div className="flex flex-col gap-3 mt-4 sm:flex-row">
        <a target="_blank" rel="noopener noreferrer" href={project.liveUrl} className="inline-flex justify-center items-center bg-neutral-950 text-white text-sm rounded-lg py-1 px-3 font-semibold transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 focus-visible:rounded-lg sm:py-2 sm:px-4">Live Demo</a>
        <a target="_blank" rel="noopener noreferrer" href={project.githubUrl} className="inline-flex justify-center items-center bg-neutral-950 text-white text-sm rounded-lg py-1 px-3 font-semibold transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 focus-visible:rounded-lg sm:py-2 sm:px-4">GitHub</a>
      </div>
    </article>
  )
}


export default ProjectCard;