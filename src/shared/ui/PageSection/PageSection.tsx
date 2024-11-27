import { PageSectionProps } from '../../model/types'

function PageSection({ children, classname, id }: PageSectionProps) {
  return (
    <section id={id ?? ''} className={`page-section relative text-white ${classname ?? ''}`}>
      {children}
    </section>
  )
}

export default PageSection
