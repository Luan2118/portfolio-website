import Section from "../layout/Section";
import Container from "../layout/Container";

function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mt-5 md:text-6xl">Hi, I’m Luan Le.</h1>

          <p className="mt-4 text-neutral-600 max-w-2xl text-base leading-8">
            I’m a junior frontend developer from Pilsen focused on React, TypeScript, and application-style frontend work.
          </p>

          <p className="mt-4 text-neutral-600 max-w-2xl text-base leading-8">
            My portfolio is built around two longer-term projects: a full-stack finance tracker and a React/TypeScript gym tracker. They show what I focus on: building application features around real use cases.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row mt-6">

            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Luan2118" className="inline-flex justify-center items-center border border-neutral-400 text-sm rounded-lg py-2 px-4 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 focus-visible:rounded-lg  hover:border-neutral-700 hover:shadow-sm">
              GitHub
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luan-le-7671b9342/" className="inline-flex justify-center items-center border border-neutral-400 text-sm rounded-lg py-2 px-4 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 focus-visible:rounded-lg  hover:border-neutral-700 hover:shadow-sm">
              LinkedIn
            </a>


            <a href="/Luan-Le-CV.pdf" download className="inline-flex justify-center items-center border border-neutral-400 bg-neutral-50 text-sm rounded-lg py-2 px-4 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 focus-visible:rounded-lg hover:border-neutral-700 hover:shadow-sm">CV</a>

          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero;