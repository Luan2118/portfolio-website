import Container from "../layout/Container";
import Section from "../layout/Section";

function About() {
  return (
    <Section>
      <Container>
        <div className="grid  gap-8 text-neutral-600 lg:grid-cols-[0.8fr_1fr]">

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 md:text-3xl ">About</h2>

            <p className="max-w-md  mt-5 mb-5">How I learned, what I focus on, and how I approach frontend development.</p>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-6 rounded-2xl shadow-sm max-w-3xl ">
            <p className="leading-8">
              I’m a self-taught frontend developer with a project-based learning path. I learned by building longer-term application projects, improving features over time, and working through the practical problems that appear when an application grows beyond simple examples.
            </p>

            <p className="leading-8 mt-5">
              My focus is on clear user flows, React and TypeScript, data-driven interfaces, and turning unclear problems into working frontend features. I’m comfortable learning independently, debugging issues, and improving solutions through iteration.
            </p>
          </div>
        </div>

      </Container>
    </Section>

  )
}


export default About;