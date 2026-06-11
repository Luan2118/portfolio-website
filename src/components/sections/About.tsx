import Container from "../layout/Container";
import Section from "../layout/Section";

function About() {
  return (
    <Section>
      <Container>
        <div className="grid text-neutral-600 lg:grid-cols-[0.8fr_1fr]">

          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 md:text-3xl ">About</h2>

            <p className="max-w-md  mt-5 mb-5">A short overview of my current focus and development experience.</p>
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-6 rounded-2xl shadow-sm max-w-3xl ">
            <p className="leading-8">
              I am focused on becoming a junior frontend developer through
              practical project work. My current experience is project-based: I
              build applications with React, TypeScript, APIs, authentication,
              CRUD flows, reusable components, and real user workflows.
            </p>

            <p className="leading-8 mt-5">
              I care about writing understandable code, structuring components
              clearly, and building features that are useful for real users.
            </p>
          </div>
        </div>

      </Container>
    </Section>

  )
}


export default About;