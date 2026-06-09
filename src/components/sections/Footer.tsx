import Container from "../layout/Container";

function Footer() {
  return (
    <footer className="border-t border-neutral-200  py-8">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Luan Le. All rights reserved.</p>

          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;