import StackIcon from "tech-stack-icons";
import Section from "../layout/Section";
import Container from "../layout/Container";

const skills = [
  { icon: "react", label: "React" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "tailwindcss", label: "Tailwind CSS" },
  { icon: "html5", label: "HTML" },
  { icon: "css3", label: "CSS" },
  { icon: "nodejs", label: "Node.js" },
  { icon: "expressjs", label: "Express" },
  { icon: "mongodb", label: "MongoDB" },
  { icon: "supabase", label: "Supabase" },
];


function Skills() {
  return (
    <Section>
      <Container>
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl text-neutral-950">Tech Stack</h2>

          <div className="grid grid-cols-2 gap-3 mt-5 xs:flex xs:flex-wrap">

            {skills.map((skill) => {
              return (
                <div key={skill.label} className="flex justify-start items-center gap-4 border border-neutral-300 py-2 px-4 rounded-2xl shadow-sm transition hover:shadow-md hover:border-neutral-400 hover:-translate-y-0.5 cursor-pointer">
                  <StackIcon name={skill.icon} className="size-8 sm:size-10"/>
                  <div className="font-semibold text-sm">
                    {skill.label}
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </Container>
    </Section>

  )
}

export default Skills;