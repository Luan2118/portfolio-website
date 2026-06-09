import Container from "../layout/Container";
import Section from "../layout/Section";

function About() {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold md:text-3xl text-neutral-950">About</h2>

        <div className="border border-neutral-200 p-6 rounded-2xl shadow-sm mt-5 max-w-3xl text-neutral-600 text-lg">
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
      </Container>
    </Section>

  )
}


export default About;