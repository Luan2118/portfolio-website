import Section from "../layout/Section";
import Container from "../layout/Container";
import cssIcon from '../../assets/icons/css.svg'
import expressIcon from '../../assets/icons/express.svg'
import htmlIcon from '../../assets/icons/html.svg'
import mongodbIcon from '../../assets/icons/mongodb.svg'
import nodeIcon from '../../assets/icons/node.svg'
import reactIcon from '../../assets/icons/react.svg'
import supabaseIcon from '../../assets/icons/supabase.svg'
import tailwindcssIcon from '../../assets/icons/tailwindcss.svg'
import typescriptIcon from '../../assets/icons/typescript.svg'

const skills = [
  { icon: reactIcon, label: "React" },
  { icon: typescriptIcon, label: "TypeScript" },
  { icon: tailwindcssIcon, label: "Tailwind CSS" },
  { icon: htmlIcon, label: "HTML" },
  { icon: cssIcon, label: "CSS" },
  { icon: nodeIcon, label: "Node.js" },
  { icon: expressIcon, label: "Express" },
  { icon: mongodbIcon, label: "MongoDB" },
  { icon: supabaseIcon, label: "Supabase" },
];


function Skills() {
  return (
    <Section id="skills">
      <Container>
        <div>
          <h2 className="text-2xl font-semibold text-neutral-950 md:text-3xl">Tech Stack</h2>

          <div className="grid grid-cols-2 gap-3 mt-5 xs:flex xs:flex-wrap">

            {skills.map((skill) => {
              return (
                <div key={skill.label} className="flex justify-start items-center bg-neutral-50 gap-4 border border-neutral-300 py-2 px-4 rounded-2xl shadow-sm transition hover:shadow-md hover:border-neutral-400 hover:-translate-y-0.5">
                  <img src={skill.icon}  alt="" aria-hidden="true" className="size-7 sm:size-8"/>
                  <div className="font-semibold text-sm ">
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