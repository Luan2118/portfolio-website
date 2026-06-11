import Section from "../layout/Section";
import Container from "../layout/Container";

function Hero() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mt-5 md:text-4xl">Hi, I’m Luan Le.</h1>

          <p className="mt-4 text-neutral-600 max-w-2xl text-md leading-8">
            I build React and TypeScript applications focused on clean UI, reusable components, API integration, and real user workflows.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row mt-6">
            <a href="#projects" className="inline-flex justify-center items-center bg-neutral-950 text-white text-sm rounded-lg py-2 px-4 font-semibold transition hover:bg-neutral-800">View Projects</a>
            <a href="#contact" className="inline-flex justify-center items-center border border-neutral-300 bg-neutral-50 text-sm rounded-lg py-2 px-4 font-semibold transition hover:border-neutral-700">Contact me</a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero;