type Project = {
  title: string
  description: string
  stack: string[]
  githubUrl: string
  liveUrl: string
}

type ProjectCardProp = {
  project: Project
}


function ProjectCard({ project }: ProjectCardProp) {
  return (
    <article className="flex flex-col justify-between border border-neutral-200 rounded-2xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-2xl font-semibold text-neutral-950">{project.title}</h3>
      <p className="mt-4 text-neutral-600 leading-7">{project.description}</p>

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
        <a target="_blank" href={project.liveUrl} className="inline-flex justify-center items-center bg-neutral-950 text-white text-sm rounded-lg py-1 px-3 font-semibold transition hover:bg-neutral-800 sm:py-2 sm:px-4">Live Demo</a>
        <a target="_blank" href={project.githubUrl} className="inline-flex justify-center items-center bg-neutral-950 text-white text-sm rounded-lg py-1 px-3 font-semibold transition hover:bg-neutral-800 sm:py-2 sm:px-4">Github</a>
      </div>
    </article>
  )
}


export default ProjectCard;