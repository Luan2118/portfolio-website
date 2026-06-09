type SectionProps = {
  children: React.ReactNode
  id?: string
}

function Section({children, id}:SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 px-6">
      {children}
    </section>
  )
}
export default Section;