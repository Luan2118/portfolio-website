import Container from "../layout/Container";

function Navbar() {
  return (
    <footer className="fixed w-[100%] border-b border-neutral-200 bg-neutral-100 py-4">
      <Container>
        <div className="flex flex-col text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-bold text-neutral-950">LL</p>

          <div className="flex text-neutral-600 gap-3">
            <a href="#projects" className="transition hover:text-neutral-950">Projects</a>
            <a href="#skills" className="transition hover:text-neutral-950">Skills</a>
            <a href="#contact" className="transition hover:text-neutral-950" >Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Navbar;