import Container from "../layout/Container";
import Section from "../layout/Section";

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 md:text-3xl ">
              Contact
            </h2>

            <p className="mt-5 leading-8 text-neutral-600 max-w-2xl">
              I am open to junior frontend developer opportunities. You can
              contact me through email, GitHub, or LinkedIn.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a target="_blank" href="mailto:leluanvn21@seznam.cz"  className="inline-flex justify-center items-center bg-neutral-950 text-white text-sm rounded-lg py-2 px-4 font-semibold transition hover:bg-neutral-800">Email me</a>

            <a target="_blank" href="https://github.com/Luan2118" className="inline-flex justify-center items-center border border-neutral-300 text-sm rounded-lg py-2 px-4 font-semibold transition hover:border-neutral-700">
              GitHub
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/luan-le-7671b9342/" className="inline-flex justify-center items-center border border-neutral-300 text-sm rounded-lg py-2 px-4 font-semibold transition hover:border-neutral-700">
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;