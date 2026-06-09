type SectionProps = {
  children: React.ReactNode
  id?: string
}

function Section({children, id}:SectionProps) {
  return (
    <section id={id} className="py-16 px-6 md:py-18">
      {children}
    </section>
  )
}
export default Section;