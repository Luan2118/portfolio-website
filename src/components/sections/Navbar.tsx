import Container from "../layout/Container";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 border-b border-neutral-200 bg-neutral-100 py-4">
      <Container>
        <div className="flex flex-row justify-between items-center text-sm px-6">
          <p className=" text-base font-bold text-neutral-950">LL</p>

          <div className="flex text-neutral-600 gap-3">
            <a href="#projects" className="transition hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 focus-visible:rounded-md">Projects</a>
            <a href="#skills" className="transition hover:text-neutral-950 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 focus-visible:rounded-md">Skills</a>
            <a href="#contact" className="transition hover:text-neutral-950 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 focus-visible:rounded-md" >Contact</a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;